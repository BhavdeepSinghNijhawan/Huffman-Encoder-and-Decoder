// Author: Bhavdeep Singh Nijhawan

import { BinaryHeap } from './heap.js';

export { HuffmanCoder };

class HuffmanCoder {
    // Convert the Huffman tree into a string representation
    stringify(node) {
        if (typeof(node[1]) === "string") {
            return '\'' + node[1];
        }
        return '0' + this.stringify(node[1][0]) + '1' + this.stringify(node[1][1]);
    }

    // Display the Huffman tree structure
    display(node, modify, index = 1) {
        if (modify) {
            node = ['', node];
            if (node[1].length === 1)
                node[1] = node[1][0];
        }
        if (typeof(node[1]) === "string") {
            return String(index) + " = " + node[1];
        }
        let left = this.display(node[1][0], modify, index * 2);
        let right = this.display(node[1][1], modify, index * 2 + 1);
        let res = String(index * 2) + " <= " + index + " => " + String(index * 2 + 1);
        return res + '\n' + left + '\n' + right;
    }

    // Convert Huffman code back to Huffman tree
    destringify(data) {
        let node = [];
        if (data[this.ind] === '\'') {
            this.ind++;
            node.push(data[this.ind]);
            this.ind++;
            return node;
        }
        this.ind++;
        let left = this.destringify(data);
        node.push(left);
        this.ind++;
        let right = this.destringify(data);
        node.push(right);
        return node;
    }

    // Get the mappings of characters to their Huffman codes
    getMappings(node, path) {
        if (typeof(node[1]) === "string") {
            this.mappings[node[1]] = path;
            return;
        }
        this.getMappings(node[1][0], path + "0");
        this.getMappings(node[1][1], path + "1");
    }

    // Encode the data using Huffman coding
    encode(data) {
        this.heap = new BinaryHeap();
        // Store frequency count
        const mp = new Map();
        for (let i = 0; i < data.length; i++) {
            if (data[i] in mp) {
                mp[data[i]] = mp[data[i]] + 1;
            } else {
                mp[data[i]] = 1;
            }
        }
        for (const key in mp) {
            this.heap.insert([-mp[key], key]);
        }
        // Create Huffman tree
        while (this.heap.size() > 1) {
            const node1 = this.heap.extractMax();
            const node2 = this.heap.extractMax();
            const node = [node1[0] + node2[0], [node1, node2]];
            this.heap.insert(node);
        }
        const huffman_encoder = this.heap.extractMax();
        this.mappings = {};
        this.getMappings(huffman_encoder, "");
        let binary_string = "";
        for (let i = 0; i < data.length; i++) {
            binary_string = binary_string + this.mappings[data[i]];
        }
        // Add padding
        let rem = (8 - binary_string.length % 8) % 8;
        let padding = "";
        for (let i = 0; i < rem; i++)
            padding = padding + "0";
        binary_string = binary_string + padding;
        // Convert binary string to characters
        let result = "";
        for (let i = 0; i < binary_string.length; i += 8) {
            let num = 0;
            for (let j = 0; j < 8; j++) {
                num = num * 2 + (binary_string[i + j] - "0");
            }
            result = result + String.fromCharCode(num);
        }
        let final_res = this.stringify(huffman_encoder) + '\n' + rem + '\n' + result;
        let info = "Compression Ratio : " + data.length / final_res.length;
        info = "Compression complete and file sent for download" + '\n' + info;
        return [final_res, this.display(huffman_encoder, false), info];
    }

    // Decode the data using Huffman coding
    decode(data) {
        // Handle special case for newline characters
        data = data.split('\n');
        if (data.length === 4) {
            data[0] = data[0] + '\n' + data[1];
            data[1] = data[2];
            data[2] = data[3];
            data.pop();
        }
        this.ind = 0;
        const huffman_decoder = this.destringify(data[0]);
        const text = data[2];
        let binary_string = "";
        for (let i = 0; i < text.length; i++) {
            let num = text[i].charCodeAt(0);
            let bin = "";
            for (let j = 0; j < 8; j++) {
                bin = num % 2 + bin;
                num = Math.floor(num / 2);
            }
