// Author: Bhavdeep Singh Nijhawan

export { BinaryHeap };

class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value); // Add the new value to the end of the array
        this.bubbleUp(); // Re-heapify to maintain the heap property
    }

    // Return the size of the heap
    size() {
        return this.heap.length;
    }

    // Check if the heap is empty
    empty() {
        return (this.size() === 0);
    }

    // Restore the heap property by bubbling up the newly added element
    bubbleUp() {
        let index = this.size() - 1; // Get the index of the newly added element
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (parent[0] >= element[0]) break; // If the parent is greater than or equal to the element, stop
            // Swap the element with its parent
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex; // Update the index to the parent index for next iteration
        }
    }

    // Extract the maximum element from the heap (root)
    extractMax() {
        const max = this.heap[0]; // Get the maximum element (root)
        const tmp = this.heap.pop(); // Remove the last element from the heap
        if (!this.empty()) {
            this.heap[0] = tmp; // Replace the root with the last element
            this.sinkDown(0); // Re-heapify to maintain the heap property
        }
        return max; // Return the maximum element
    }

    // Restore the heap property by sinking down the root element
    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
        const length = this.size();
        
        if (left < length && this.heap[left][0] > this.heap[largest][0]) {
            largest = left; // Update the largest index if the left child is larger
        }
        if (right < length && this.heap[right][0] > this.heap[largest][0]) {
            largest = right; // Update the largest index if the right child is larger
        }
        // Swap the root with the largest child if needed and recursively sink down
        if (largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.sinkDown(largest);
        }
    }
}
