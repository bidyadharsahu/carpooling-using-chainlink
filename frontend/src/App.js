import React, { useState } from 'react';
import { ethers } from 'ethers';
import CarpoolingABI from './CarpoolingABI.json';  // Save your contract's ABI as JSON

function App() {
    const [contract, setContract] = useState(null);
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState(0);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const carpoolingContract = new ethers.Contract('YOUR_CONTRACT_ADDRESS', CarpoolingABI, signer);
            setContract(carpoolingContract);
        } else {
            alert("Please install MetaMask to interact with this DApp!");
        }
    };

    const bookRide = async () => {
        if (contract) {
            try {
                const tx = await contract.bookRide(destination, { value: ethers.utils.parseEther(price.toString()) });
                await tx.wait();
                alert("Ride booked successfully!");
            } catch (err) {
                alert("Failed to book ride");
            }
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <div>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (in ETH)" />
                <button onClick={bookRide}>Book Ride</button>
            </div>
        </div>
    );
}

export default App;
