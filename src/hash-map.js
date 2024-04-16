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

  // function getBuckets() {
  //   return buckets;
  // }

  return { set, get, getBuckets };
}

export default HashMap;

// create a new linked list if the index is null
// update the value of an existing key(node)
// if not add a new node to the linked list
// modiffied toString() to work with map
//
