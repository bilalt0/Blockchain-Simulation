
const Blockchain = require('./blockchain');
const Block = require('./block');

const myChain = new Blockchain();

myChain.addBlock(new Block(1, { sender: "Ahmet", receiver: "Mehmet", amount: 5 }));
myChain.addBlock(new Block(2, { sender: "Mehmet", receiver: "Ayşe", amount: 10 }));

myChain.viewChain();
 