class TrieNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.wordEnd = true;
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.wordEnd;
    }
    

    delete(word, node = this.root, depth = 0) {
        if (!node) {
            return false;
        }

        if (depth === word.length) {
            if (!node.wordEnd) {
                return false;
            }
            node.wordEnd = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[depth];
        if (!node.children[char]) {
            return false;
        }

        let shouldRemove = this.delete(word, node.children[char], depth + 1);

        if (shouldRemove) {
            delete node.children[char];
        }

        return Object.keys(node.children).length === 0 && !node.wordEnd;
    }
    autocomplete(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) {
                return [];
            }
            current = current.children[char];
        }

        const words = [];
        const dfs = (node, path) => {
            if (node.wordEnd) {
                words.push(path);
            }
            for (let char in node.children) {
                dfs(node.children[char], path + char);
            }
        };

        dfs(current, prefix);
        return words;
    }
    findLongestPrefix(prefix) {
        let current = this.root;
        let longestPrefix = '';
        let path = '';
    
        for (let char of prefix) {
            if (!current.children[char]) {
                break; // Stop if the prefix cannot be extended
            }
            path += char; // Extend the current path
            current = current.children[char];
    
            // Check if the current node marks the end of a word
            if (current.wordEnd) {
                longestPrefix = path; // Update the longest prefix
            }
        }
    
        return longestPrefix;
    }
    
}



let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");

console.log(trie.search("cat")); // true
console.log(trie.search("car")); // true
console.log(trie.search("cart")); // true
console.log(trie.search("cap")); // false
console.log("===================================================")
console.log(trie.search("car")); // false
console.log(trie.search("cat")); // true
console.log(trie.search("cart")); // true
console.log(trie.autocomplete('ca'))
console.log("Longet ===>",trie.findLongestPrefix('ca'))


console.log(trie)





/*
     1. insert(word)

            The insert method adds a word to the Trie by traversing or creating nodes for each character.

            Steps:
            Start at the root node.
            For each character in the word:
            Check if it exists in the current node's children.
            If not, create a new TrieNode for it.
            Mark the last character's node as a wordEnd.
            Example:
            Inserting the word "cat".

            Start at root: {} (empty children).
            Insert 'c': {'c': {}}.
            Insert 'a': {'c': {'a': {}}}.
            Insert 't': {'c': {'a': {'t': {}}}}.
            Mark 't' as wordEnd.
            Final Trie:
            less
            Copy code
            root
            └── c
                └── a
                    └── t (wordEnd: true)
      2. search(word)

            The search method checks if a word exists in the Trie by traversing its characters.

            Steps:
            Start at the root node.
            For each character in the word:
            Check if it exists in the current node's children.
            If not, return false.
            After traversing, check if the final node is marked as wordEnd.
            Example:
            Searching for "cat".

            Start at root: {}.
            Check 'c': Found.
            Check 'a': Found.
            Check 't': Found and marked as wordEnd.
            Result: true (word exists).

            Searching for "car":

            'c': Found.
            'a': Found.
            'r': Not found.
            Result: false.

     3. delete(word)

            The delete method removes a word from the Trie. It uses recursion to backtrack and remove unused nodes.

            Steps:
            Traverse to the last character of the word.
            If wordEnd is true, unset it.
            Recursively check if the node has no children and can be deleted.
            Example:
            Deleting "cat".

            Before deletion:

         

            root
            └── c
                └── a
                    └── t (wordEnd: true)
            Traverse to 't'.


            Unset wordEnd.
            Backtrack and delete 't', 'a', and 'c' (if they have no other children).
            After deletion:

            Copy code
            root
     4. autocomplete(prefix)

            The autocomplete method finds all words that start with a given prefix.

            Steps:
            Traverse to the last character of the prefix.
            Perform a depth-first search (DFS) from that node.
            Collect all words formed during DFS.
            Example:
            Autocomplete for "ca" in the Trie containing "cat", "car", "cap".

            Trie:



            root
            └── c
                └── a
                    ├── t (wordEnd: true)
                    ├── r (wordEnd: true)
                    └── p (wordEnd: true)


            Traverse to 'a'.
            Perform DFS:
            Visit 't': Add "cat".
            Visit 'r': Add "car".
            Visit 'p': Add "cap".
            Result: ["cat", "car", "cap"].

            Visual Walkthrough of Each Operation
            Insert "cat" → Build the Trie structure.
            Insert "car", "cap" → Expand the Trie.
            Search "car" → Traverse nodes.
            Delete "cat" → Backtrack and clean up.
            Autocomplete "ca" → DFS from "a".
            Let me know if you'd like me to create an illustrated diagram or assist with visual tools for these explanations!
*/
