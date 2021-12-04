let a = ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"];

var MyHashSet = function() {
    this.hash = {};
    
    this.add = function(key) {
        this.hash[key] = true;
    }
     
    this.contains = function(key) {
        return this.hash[key] === true;
    }

    this.remove = function(key) {
        delete this.hash[key];
    }

    this.clear = function() {
        this.hash = {};
    }

    this.size = function() {
        return Object.keys(this.hash).length;
    }

    this.isEmpty = function() {
        return this.size() === 0;
    }

    this.toString = function() {
        return Object.keys(this.hash).join(',');
    }

    this.union = function(otherSet) {

        let unionSet = new MyHashSet();

        for (let key in this.hash) {
            unionSet.add(key);
        }

        for (let key in otherSet.hash) {
            unionSet.add(key);
        }

        return unionSet;
    }

    this.intersection = function(otherSet) {
            
            let intersectionSet = new MyHashSet();
    
            for (let key in this.hash) {
                if (otherSet.contains(key)) {
                    intersectionSet.add(key);
                }
            }
    
            return intersectionSet;
        }

    this.difference = function(otherSet) {

        let differenceSet = new MyHashSet();

        for (let key in this.hash) {
            if (!otherSet.contains(key)) {
                differenceSet.add(key);
            }
        }

        return differenceSet;
    }

    this.subset = function(otherSet) {
            
            if (this.size() > otherSet.size()) {
                return false;
            }
    
            for (let key in this.hash) {
                if (!otherSet.contains(key)) {
                    return false;
                }
            }
    
            return true;
        }

    this.equals = function(otherSet) {
                
                if (this.size() !== otherSet.size()) {
                    return false;
                }
        
                for (let key in this.hash) {
                    if (!otherSet.contains(key)) {
                        return false;
                    }
                }
        
                return true;
            }

    this.clone = function() {
        let cloneSet = new MyHashSet();

        for (let key in this.hash) {
            cloneSet.add(key);
        }

        return cloneSet;
    }

    this.toArray = function() {
        let array = [];

        for (let key in this.hash) {
            array.push(key);
        }

        return array;
    }

    this.fromArray = function(array) {
        for (let key of array) {
            this.add(key);
        }
    }

    this.toSet = function() {
        return new Set(this.toArray());
    }

    this.fromSet = function(set) {

        for (let key of set) {
            this.add(key);
        }
    }

    this.toMap = function() {
        let map = new Map();

        for (let key in this.hash) {
            map.set(key, true);
        }

        return map;
    }

    this.fromMap = function(map) {
            
            for (let key of map.keys()) {
                this.add(key);
            }
        }

    this.toObject = function() {
        return this.hash;
    }

    this.fromObject = function(object) {
        this.hash = object;
    }

    this.toJSON = function() {
        return JSON.stringify(this.hash);
    }
};

console.log(MyHashSet(a));