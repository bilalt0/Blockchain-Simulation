
import Blockchain from './blockchain.js';
import Block from './block.js';

const myChain = new Blockchain()

myChain.addBlock(new Block(1, { sender: "Ahmet", receiver: "Mehmet", amount: 5 }));
myChain.addBlock(new Block(2, { sender: "Mehmet", receiver: "Ayşe", amount: 10 }));

myChain.viewChain();
 
