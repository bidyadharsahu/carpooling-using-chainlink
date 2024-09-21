// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Carpooling {
    struct Ride {
        string destination;
        address rider;
        uint256 amount;
        bool isPaid;
    }

    mapping(uint256 => Ride) public rides;
    uint256 public rideCount;

    AggregatorV3Interface internal priceFeed;

    constructor() {
        // Replace with the correct Chainlink price feed address for Sepolia testnet
        priceFeed = AggregatorV3Interface("0x694AA1769357215DE4FAC081bf1f309aDC325306"); 
    }

    function bookRide(string memory _destination) public payable {
        rideCount++;
        rides[rideCount] = Ride(_destination, msg.sender, msg.value, false);
    }

    function confirmPayment(uint256 rideId) public {
        require(rides[rideId].rider == msg.sender, "Only rider can confirm");
        require(msg.value >= rides[rideId].amount, "Insufficient payment");
        rides[rideId].isPaid = true;
    }

    function getLatestPrice() public view returns (int) {
        (,int price,,,) = priceFeed.latestRoundData();
        return price;
    }
}
