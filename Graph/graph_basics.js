class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);

    }
    hasEdge(v1, v2) {
        return (
            this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1)
        );
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->", [...this.adjacencyList[vertex]])
        }
    }
    removeVertex(v) {
        if (!this.adjacencyList[v]) {
            return
        }
        for (let adjacent of this.adjacencyList[v]) {
            this.removeEdge(v, adjacent)
        }
        delete this.adjacencyList[v]
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)

    }
    bfs(start) {
        const queue = [start]; // Queue for nodes to visit
        const visited = new Set(); // Set to track visited nodes
        const result = []; // Array to store traversal order

        visited.add(start); // Mark the start node as visited

        while (queue.length) {
            const vertex = queue.shift(); // Dequeue the next vertex
            result.push(vertex); // Add it to the result

            // Add unvisited neighbors to the queue
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
    dfsItrative(start) {
        const result = []
        const visited = new Set();
        const stack = [start]

        while (stack.length) {
            const vertex = stack.pop()
            if (!visited.has(vertex)) {
                visited.add(vertex)
                result.push(vertex)

                this.adjacencyList[vertex].forEach(v => {
                    if (!visited.has(v)) {
                        stack.push(v)
                    }
                });
            }
        }
        return result
    }
    dfs(start) {
        const visited = new Set(); // Set to track visited nodes
        const result = []; // Array to store traversal order

        const dfsHelper = (vertex) => {
            if (!vertex || visited.has(vertex)) return; // Skip if visited
            visited.add(vertex); // Mark the vertex as visited
            result.push(vertex); // Add it to the result

            // Recursively visit neighbors
            for (const neighbor of this.adjacencyList[vertex]) {
                dfsHelper(neighbor);
            }
        };

        dfsHelper(start); // Start the recursion
        return result;
    }

}

const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("A"); // Duplicate vertex

// console.log(graph.adjacencyList);



// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");
// graph.addEdge("D", "E"); // Adds new vertices D and E

// console.log(graph.adjacencyList);


// console.log(graph.hasEdge("A", "B")); // Expected Output: true
// console.log(graph.hasEdge("A", "C")); // Expected Output: true
// console.log(graph.hasEdge("B", "C")); // Expected Output: true
// console.log(graph.hasEdge("A", "D")); // Expected Output: false

graph.display();
// Expected Output:
// A -> [ 'B', 'C' ]
// B -> [ 'A', 'C' ]
// C -> [ 'A', 'B' ]
// D -> [ 'E' ]
// E -> [ 'D' ]


// graph.removeEdge("A", "B");

// console.log(graph.adjacencyList);
// // Expected Output:
// // {
// //   A: Set { 'C' },
// //   B: Set { 'C' },
// //   C: Set { 'A', 'B' },
// //   D: Set { 'E' },
// //   E: Set { 'D' }
// // }

// console.log(graph.hasEdge("A", "B")); // Expected Output: false

// console.log('==========================')
// graph.removeVertex("C");

// console.log(graph.adjacencyList);
// // Expected Output:
// // {
// //   A: Set(),
// //   B: Set(),
// //   D: Set { 'E' },
// //   E: Set { 'D' }
// // }

// console.log(graph.hasEdge("B", "C")); // Expected Output: false

graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("D", "E");

console.log(graph.bfs("A")); 
// Expected Output: [ 'A', 'B', 'D', 'E' ]

console.log(graph.dfs("A")); 
// Expected Output: [ 'A', 'B', 'D', 'E' ]

