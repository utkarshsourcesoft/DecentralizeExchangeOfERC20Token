pragma solidity >=0.5.0 <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/Creepybits/openzeppelin/blob/main/contracts/token/ERC20/ERC20Detailed.sol";
contract Zrx is ERC20 , ERC20Detailed{
    
   constructor() ERC20Detailed('ZRX', '0x token', 18) public {

    }

    function faucet(address to, uint amount) external {
    _mint(to, amount);
  }


}