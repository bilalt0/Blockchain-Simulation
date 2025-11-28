import { select, input } from '@inquirer/prompts';
import Blockchain from './blockchain.js';
import Block from './block.js';

const myChain = new Blockchain();

async function showMenu() {
    console.log('\n--- Blockchain Menu ---');
    const option = await select({
        message: 'Select an option:',
        choices: [
            {
                name: 'Create New Block',
                value: 'Create New Block'
            },
            {
                name: 'View All Blocks',
                value: 'View All Blocks'
            },
            {
                name: 'Exit',
                value: 'Exit'
            }
        ]
    });

    await handleOption(option);
}

async function handleOption(option) {
    switch (option) {
        case 'Create New Block':
            const data = await input({ message: 'Enter block data:' });
            const nextIndex = myChain.chain.length;
            myChain.addBlock(new Block(nextIndex, data));
            console.log('Block added successfully!');
            await showMenu();
            break;
        case 'View All Blocks':
            myChain.viewChain();
            await showMenu();
            break;
        case 'Exit':
            console.log('Exiting...');
            process.exit(0);
            break;
    }
}

console.log('Blockchain initialized.');
showMenu();
