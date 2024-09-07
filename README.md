<h1 align="center">HUFFMAN ENCODER AND DECODER</h1>

## INTRODUCTION

**Huffman Encoding** is a method used for **lossless data compression**, primarily in the field of information theory and data compression. It was developed by **David A. Huffman** while he was a student at **MIT** in **1952**. In **Huffman Encoding**, each character or symbol in the input data is assigned a **variable-length binary code**, with **shorter codes assigned to more frequently occurring characters** and **longer codes assigned to less frequently occurring characters**. This way, the **most common characters are represented by shorter bit sequences, leading to overall compression of the data**. The process of generating a Huffman Code involves constructing a **binary tree called a Huffman Tree**. This tree is built using a frequency-based algorithm, where characters with higher frequencies are placed closer to the root of the tree, and characters with lower frequencies are placed farther away. Traversing the tree from the root to each character generates the binary code for that character. Huffman Encoding is used in various applications where data compression is necessary, such as in **file compression algorithms like ZIP**, as well as in **network protocols**, **image compression**, and more. It is particularly effective when there are distinct differences in the frequencies of different symbols within the data, allowing for significant reduction in the size of the encoded data without loss of information. Huffman Encoding is a widely used method for **lossless data compression**. It is particularly effective for compressing text or data with a s**kewed frequency distribution of symbols**.

## LIVE URL

- https://bhavdeepsinghnijhawan.github.io/Huffman-Encoder-and-Decoder/

#### Huffman Encoder

- The Huffman Encoding Algorithm builds a variable-length prefix-free code tree based on the frequencies of symbols in the input data.
- It starts by creating a binary tree where each leaf node represents a symbol from the input data, and the frequency of each symbol determines the weight of the corresponding leaf node.
- Then, it repeatedly merges the two lowest frequency nodes into a new internal node until all nodes are merged into a single root node, forming a binary tree.
- The binary tree is traversed to assign binary codes to each symbol. Symbols that appear more frequently are assigned shorter codes, resulting in efficient compression.

#### Huffman Decoder

- The Huffman decoding algorithm takes the compressed binary data and the generated Huffman tree to decode it back into the original symbols.
- It starts at the root of the Huffman tree and traverses down the tree based on the bits in the compressed data.
- As it traverses the tree, it reads the bits and follows the corresponding path until it reaches a leaf node, which represents a decoded symbol.
- It then outputs the decoded symbol and restarts the process from the root of the tree for the next set of bits in the compressed data.

#### Use Cases

- **Data Compression:** Huffman encoding is commonly used in various compression algorithms like **ZIP**, **gzip**, and **DEFLATE** to reduce the size of files for storage or transmission. It is especially effective for compressing text files and other data with repeating patterns or skewed symbol frequencies.
- **Text and Image Compression:** Huffman Encoding can be used to compress text documents, images, and other types of data where there are frequent occurrences of certain symbols or pixel values.
- **Data Transmission:** It can be used to compress data before transmitting it over networks, reducing bandwidth usage and speeding up data transfer.
- **Embedded Systems:** Huffman Encoding is lightweight and efficient, making it suitable for use in embedded systems and devices with limited computational resources.

## TECHNICAL STACKS

### HTML
```
<!DOCTYPE html>
```
- Declares the **document type** and **version of HTML** being used.
```
<html lang="en">
```
- Specifies the **language of the document**, in this case, English.
```
<head>
```
- Contains **meta-information** about the HTML document, such as the **character set**, **viewport settings**, **title**, and links to external resources (stylesheets and scripts).
```
<meta charset="UTF-8">
```
- Specifies the **character encoding of the document** as UTF-8.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Sets the **viewport width to the width** of the device and **sets the initial zoom level** to 1.0.
```
<title>Huffman Encoder and Decoder</title>
```
- **Sets the title of the document** to "Huffman Encoder and Decoder".
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
- Links to the **Bootstrap CSS framework hosted on a CDN (Content Delivery Network)**, enabling the use of Bootstrap styles in the document.
```
<link rel="stylesheet" href="style.css">
```
- Links to an **external CSS file named "style.css"** for additional styling.
```
<script src="heap.js"></script>
```
- Includes a JavaScript file named "heap.js".
```
<script src="huffman.js" type="module"></script>
```
- Includes a JavaScript module file named "huffman.js". The **type="module" attribute indicates that the script is an ES6 module**.
```
<script src="script.js" type="module"></script>
```
- Includes another JavaScript module file named "script.js".
```
<body>
```
- Contains the content of the HTML document that will be displayed in the browser.
```
<nav>
```
- Defines a navigation bar with the class "**`navbar navbar-light`**" and styles it with custom CSS properties.
```
<div id="container">
```
- Contains two text boxes, one for displaying the tree structure and the other for displaying operation information.
- **Left part:** A text box with **scrollable content**, identified by the class "**`text_box`**". It contains a span element with the id "**`treearea`**" to display the tree structure.
- **Right part:** Similar to the left part, but it displays operation information and has the id "**`temptext`**".
```
<div>
```
- Contains a form for uploading files and two buttons for encoding and decoding.
```
<form method="post" enctype="multipart/form-data" style="display: inline-block;">
```
- Defines a form with the method "**`post`**" and enctype "**`multipart/form-data`**" to handle file uploads. It's styled to be displayed inline.
```
<input type="file" id="uploadedFile"/>
```
- Provides a file input field for the user to upload files.
```
<button type="button" class="btn btn-success center_buttons" id="encode">&nbsp;&nbsp;Encode&nbsp;&nbsp;</button>
```
- Defines a button with the class "**`btn btn-success center_buttons`**" and the id "encode" for encoding. It's styled using Bootstrap classes.
```
<button type= "button" class="btn btn-danger center_buttons" id="decode">&nbsp;&nbsp;Decode&nbsp;&nbsp;</button>
```
- Defines a button with the class "**`btn btn-danger center_buttons`**" and the id "**`decode`**" for decoding. It's also styled using Bootstrap classes.
```
</body>
```
- Marks the end of the document's body content.
```
</html>
```
- Marks the end of the HTML document.

### CSS

```
html,
body {
    height: 100%;
}
```
- **html, body:** Selects both the <html> and <body> elements.
- **height: 100%;:** Sets the height of the <html> and <body> elements to 100% of the viewport height. This ensures that the entire viewport height is covered by these elements, which is often used to ensure elements fill the entire height of the browser window.
```
.text_box {
    padding: 30px;
    width: 50%;
    height: 100%;
    border: 1px solid rgb(0, 0, 0);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```
- **.text_box:** Selects elements with the class text_box.
- **padding: 30px;:** Adds 30 pixels of padding to all sides of the .text_box elements.
- **width: 50%;:** Sets the width of the .text_box elements to 50% of their containing element's width.
- **height: 100%;:** Sets the height of the .text_box elements to 100% of their containing element's height.
- **border:** 1px solid rgb(0, 0, 0);: Sets a 1 pixel solid black border around the .text_box elements.
- **display: flex;:** Specifies that the layout of the .text_box elements should be a flexbox layout.
- **flex-wrap: wrap;:** Allows the .text_box elements to wrap to the next line if they exceed the width of their container.
- **align-content: center;:** Centers the content vertically within the flex container.
```
#container {
    width: 100%;
    height: 70%;
    background-color: rgb(255, 102, 0);
    display: flex;
    margin: 0 auto;
}
```
- **#container:** Selects an element with the ID container.
- **width: 100%;:** Sets the width of the #container element to 100% of its containing element's width.
- **height: 70%;:** Sets the height of the #container element to 70% of its containing element's height.
- **background-color:** rgb(255, 102, 0);: Sets the background color of the #container element to a shade of orange using RGB values.
- **display: flex;:** Specifies that the layout of the #container element should be a flexbox layout.
- **margin: 0 auto;:** Sets the top and bottom margins of the #container element to 0 and automatically centers it horizontally within its containing element.
```
.center_buttons {
    margin: auto;
    display: block;
}
```
- **.center_buttons:** Selects elements with the class center_buttons.
- **margin: auto;:** Centers the elements horizontally within their containing element.
- **display: block;:** Sets the elements to be displayed as block-level elements, causing them to start on a new line and take up the full width available to them.

### JAVASCRIPT

#### heap.js
```
export { BinaryHeap }

class BinaryHeap {
```
- **export { BinaryHeap }:** This line exports the BinaryHeap class to make it available for import in other JavaScript files.
- **class BinaryHeap {:** This line defines the BinaryHeap class.
```
    constructor() {
        this.heap = [];
    }
```
- **constructor():** This is a special method in JavaScript classes that is automatically called when an instance of the class is created. It initializes a new instance of the BinaryHeap class.
- **this.heap = [];:** This line initializes the heap property of the BinaryHeap instance as an empty array, which will be used to store the elements of the binary heap.
```
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(); // heapify
    }
```
- **insert(value):** This method adds a new value to the binary heap.
- **this.heap.push(value);:** It adds the new value to the end of the heap array.
- **this.bubbleUp();:** This line calls the bubbleUp() method to maintain the heap property by moving the newly inserted value up the tree as necessary.
```
    size() {
        return this.heap.length;
    }
```
- **size():** This method returns the number of elements currently stored in the binary heap.
```
    empty() {
        return (this.size() === 0);
    }
```
- **empty():** This method checks if the binary heap is empty and returns true if it is, otherwise false.
```
    bubbleUp() {
        let index = this.size() - 1;

        while (index > 0) {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex];

            if (parent[0] >= element[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
```
- **bubbleUp():** This method moves the last element of the binary heap (inserted at the end) up the tree until the heap property is satisfied.
- It compares the newly added element with its parent, and if the parent is smaller, it swaps them. This process continues until the element reaches its correct position in the heap.
```
    extractMax() {
        const max = this.heap[0];
        const tmp = this.heap.pop();
        if (!this.empty()) {
            this.heap[0] = tmp;
            this.sinkDown(0);
        }
        return max;
    }
```
- **extractMax():** This method removes and returns the maximum value (root) from the binary heap.
- It replaces the root with the last element of the heap, then calls sinkDown(0) to restore the heap property.
```
    sinkDown(index) {
        let left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index;
        const length = this.size();

        if (left < length && this.heap[left][0] > this.heap[largest][0]) {
            largest = left;
        }
        if (right < length && this.heap[right][0] > this.heap[largest][0]) {
            largest = right;
        }
        if (largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.sinkDown(largest);
        }
    }
```
- **sinkDown(index):** This method moves the element at the given index down the tree until the heap property is satisfied.
- It compares the element with its children and swaps it with the larger child if necessary. This process continues until the element is in its correct position in the heap.

This class implements a binary heap data structure, providing methods to insert elements, extract the maximum element, and maintain the heap property. It's commonly used in priority queue implementations and other algorithms requiring efficient access to the maximum (or minimum) element.

#### huffman.js

```
import { BinaryHeap } from './heap.js';
export { HuffmanCoder }
```
- The BinaryHeap class is imported from the heap.js file.
- The HuffmanCoder class is exported to be used in other files.
```
class HuffmanCoder {
```
- Defines a class named HuffmanCoder.
```
stringify(node) {
    if (typeof(node[1]) === "string") {
        return '\'' + node[1];
    }
    return '0' + this.stringify(node[1][0]) + '1' + this.stringify(node[1][1]);
}
```
- Converts a Huffman tree into a string format.
- If the node is a leaf node (contains a character), it returns 'character.
- If the node is an internal node, it recursively processes its left child with '0' and its right child with '1'.
```
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
```
- Displays the structure of the Huffman tree.
- If modify is true, adjusts the node structure for easier processing.
- Uses a recursive approach to build a string representation of the tree, showing parent-child relationships.
```
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
```
- Converts a string back into a Huffman tree.
- Processes leaf nodes and internal nodes differently.
- Uses an index this.ind to track the current position in the string.
```
getMappings(node, path) {
    if (typeof(node[1]) === "string") {
        this.mappings[node[1]] = path;
        return;
    }
    this.getMappings(node[1][0], path + "0");
    this.getMappings(node[1][1], path + "1");
}
```
- Generates the mapping of characters to their binary codes.
- Recursively traverses the tree to build the paths for each character.
```
encode(data) {
    this.heap = new BinaryHeap();
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
    let rem = (8 - binary_string.length % 8) % 8;
    let padding = "";
    for (let i = 0; i < rem; i++)
        padding = padding + "0";
    binary_string = binary_string + padding;
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
```
- Encodes the input data using Huffman coding.
- Creates a frequency map of characters in the data.
- Builds a Huffman tree using a binary heap.
- Generates binary strings for each character.
- Adds padding to make the binary string length a multiple of 8.
- Converts the binary string into characters for storage.
- Returns the encoded string, tree structure, and compression information.
```
decode(data) {
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
        binary_string = binary_string + bin;
    }
    binary_string = binary_string.substring(0, binary_string.length - data[1]);
    let res = "";
    let node = huffman_decoder;
    for (let i = 0; i < binary_string.length; i++) {
        if (binary_string[i] === '0') {
            node = node[0];
        } else {
            node = node[1];
        }
        if (typeof(node[0]) === "string") {
            res += node[0];
            node = huffman_decoder;
        }
    }
    let info = "Decompression complete and file sent for download";
    return [res, this.display(huffman_decoder, true), info];
}
```
- Decodes the encoded data using the Huffman tree.
- Handles special cases where the encoded data includes new lines.
- Converts the encoded text back to a binary string.
- Removes padding from the binary string.
- Traverses the Huffman tree to decode the binary string back into the original text.
- Returns the decoded text, tree structure, and additional information.

### PHP

```
<?php
```
- **<?php:** This is the opening PHP tag. It indicates the start of a PHP script.
```
include_once("index.html");
```
- **include_once("index.html");:** This line includes the content of the index.html file into the current PHP script.
- **include_once:** This is a PHP function used to include a file. It includes the specified file once, and if the same file has already been included, it will not be included again.
- **"index.html":** This is the path to the file that will be included. In this case, it's index.html.
```
?>
```
- **?>:** This is the closing PHP tag. It indicates the end of the PHP script.

## CONTRIBUTOR

- [Bhavdeep Singh Nijhawan](https://www.linkedin.com/in/bhavdeep-singh-nijhawan-739634280)
