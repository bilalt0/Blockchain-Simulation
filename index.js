import readline from 'readline';
import Blockchain from './blockchain.js';
import Block from './block.js';

const myChain = new Blockchain();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n--- Blockchain Menu ---');
    console.log('1. Create New Block');
    console.log('2. View All Blocks');
    console.log('3. Exit');
    rl.question('Select an option: ', handleOption);
}

function handleOption(option) {
    switch (option.trim()) {
        case '1':
            rl.question('Enter block data: ', (data) => {
                const nextIndex = myChain.chain.length;
                myChain.addBlock(new Block(nextIndex, data));
                console.log('Block added successfully!');
                showMenu();
            });
            break;
        case '2':
            myChain.viewChain();
            showMenu();
            break;
        case '3':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option, please try again.');
            showMenu();
            break;
    }
}

console.log('Blockchain initialized.');
showMenu();
