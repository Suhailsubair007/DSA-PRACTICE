class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        this.table[index] = value; 
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        return this.table[index] = undefined
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

// Create a hash table of size 10
const hashTable = new HashTable(10);

// Test the set method
console.log("Adding key-value pairs...");
hashTable.set("name", "Suhail");
hashTable.set("age", 28);
hashTable.set("job", "Developer");
hashTable.set("country", "India");

// Display the hash table
console.log("\nDisplaying the hash table:");
hashTable.display();

// Test the get method
console.log("\nTesting the get method:");
console.log("name:", hashTable.get("name")); // Output: Suhail
console.log("age:", hashTable.get("age"));   // Output: 28
console.log("job:", hashTable.get("job"));   // Output: Developer
console.log("country:", hashTable.get("country")); // Output: India

// Test the remove method
console.log("\nTesting the remove method:");
hashTable.remove("age");
console.log("Removed 'age'. New table:");
hashTable.display(); // Should not display 'age'

// Test collision handling (if collisions occur in this simple hash function)
console.log("\nTesting collision handling:");
hashTable.set("act", "Collision 1");
hashTable.set("cat", "Collision 2");
console.log("Added 'act' and 'cat'. New table:");
hashTable.display();

// Test retrieving and removing keys involved in collisions
console.log("\nRetrieving and removing keys involved in collisions:");
console.log("act:", hashTable.get("act")); // Output: Collision 1
console.log("cat:", hashTable.get("cat")); // Output: Collision 2
hashTable.remove("act");
hashTable.remove("cat");
console.log("Removed 'act' and 'cat'. New table:");
hashTable.display();

// Test edge cases
console.log("\nTesting edge cases:");
console.log("Retrieving a non-existing key:", hashTable.get("nonexistent")); // Output: undefined
console.log("Removing a non-existing key...");
hashTable.remove("nonexistent");
hashTable.display(); // Should remain unchanged
