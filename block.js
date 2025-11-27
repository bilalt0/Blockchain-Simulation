
import crypto from 'crypto';

export default class Block {
    constructor(blockNumber, data, prevHash = '') {
        this.blockNumber = blockNumber;
        this.timestamp = new Date().toISOString();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash('sha256')
            .update(this.blockNumber + this.timestamp + this.prevHash + JSON.stringify(this.data))
            .digest('hex');
    }
}