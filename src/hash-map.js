import Linked_list from "./linked-list.js";

function HashMap() {
  let buckets = new Array(16).fill(null);

  function getLoadFactor(buckets) {
    return (
      buckets.reduce((filled, bucket) => {
        return bucket != null ? filled + 1 : filled;
      }, 0) / buckets.length
    );
  }

  function expandBuckets(buckets) {
    console.log("expanding");
    return buckets.concat(new Array(buckets.length).fill(null));
  }

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }
    console.log(`hash code: ${hashCode}`);

    return hashCode;
  }

  function set(key, value) {
    const loadThreshold = 0.75;
    let loadFactor = getLoadFactor(buckets);

    if (loadFactor >= loadThreshold) {
      buckets = expandBuckets(buckets);
    }
    let index = hash(key);

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (buckets[index] === null) {
      let list = new Linked_list();
      list.append({ key, value }, null);
      buckets[index] = list;
    } else {
      if (buckets[index].contains(key)) {
        console.log(
          "this key already exist, rewriting values data for this key"
        );

        let listIndex = buckets[index].find(key);

        buckets[index].removeAt(listIndex);

        buckets[index].insertAt({ key, value }, listIndex);

        console.log("string", buckets[index].toString());
        return;
      } else {
        buckets[index].prepend({ key, value });
        return;
      }
    }
  }

  function get(key) {
    let index = hash(key);
    let listIndex = buckets[index]?.find(key);
    // console.log("get");
    // console.log("listIndex ", listIndex);
    if (listIndex !== undefined && listIndex !== null) {
      let node = buckets[index].at(listIndex);

      return node.value.value;
    }
    return null;
  }

  function getBuckets() {
    return buckets.map((bucket) => {
      if (bucket === null) {
        return bucket;
      } else {
        return bucket.toString();
      }
    });
  }

  function has(key) {
    let index = hash(key);
    if (buckets[index] === null) return false;
    return buckets[index].contains(key);
  }

  function remove(key) {
    let index = hash(key);
    if (buckets[index] === null) return false;
    let listIndex = buckets[index].find(key);
    if (listIndex === null) return false;
    buckets[index].removeAt(listIndex);
    return true;
  }

  function clear() {
    buckets = new Array(16).fill(null);
  }

  function keysImperative() {
    let array = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        let counter = bucket.getSize();
        let head = bucket.getHead();

        for (let i = 0; i < counter; i++) {
          array.push(head.value.key);
          head = head.next;
        }
      }
    });
    return array;
  }

  function keys() {
    return buckets.reduce((array, bucket) => {
      if (bucket !== null) {
        const counter = bucket.getSize();
        let head = bucket.getHead();

        for (let i = 0; i < counter; i++) {
          array.push(head.value.key);
          head = head.next;
        }
      }
      return array;
    }, []);
  }

  function values() {
    return buckets.reduce((array, bucket) => {
      if (bucket !== null) {
        const counter = bucket.getSize();
        let head = bucket.getHead();

        for (let i = 0; i < counter; i++) {
          array.push(head.value.value);
          head = head.next;
        }
      }
      return array;
    }, []);
  }

  function entries() {
    return buckets.reduce((array, bucket) => {
      if (bucket !== null) {
        const counter = bucket.getSize();
        let head = bucket.getHead();

        for (let i = 0; i < counter; i++) {
          array.push([head.value.key, head.value.value]);
          head = head.next;
        }
      }
      return array;
    }, []);
  }

  function length() {
    return buckets.reduce((filled, bucket) => {
      return bucket !== null ? filled + bucket.getSize() : filled;
    }, 0);
  }
  return {
    set,
    get,
    has,
    remove,
    clear,
    keys,
    values,
    entries,
    length,
    getBuckets,
  };
}

export default HashMap;

// two ways I can think of  creating keys :
// 1.) use getBuckets and use strings to make keys
// 2.) for Each / map to create new array...

// 2) issues...
// How do i traverse my list since its technically all one item with pointers to the next
// I can use getsize to get a counter
// insert pointer as  long as counter is  <= to size

// bucket.map now a function: likely due being a reference to an object ?

// get head ? or  get size first if size > 0  gethead or use "at" to initiate traversal
