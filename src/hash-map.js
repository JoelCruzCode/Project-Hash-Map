function HashMap() {
  const buckets = new Array(16).fill(null);
  const loadThreshold = 0.75;

  function getLoadFactor(buckets) {
    buckets.reduce((filled, bucket) => {
      return bucket != null ? filled + 1 : filled;
    }, 0) / buckets.length;
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
    let loadFactor = getLoadFactor(buckets);
    if (loadFactor >= loadThreshold) {
      buckets = expandBuckets(buckets);
    }
    let bucketIndex = hash(key);

    if (buckets[bucketIndex] === null) {
      buckets[bucketIndex] = value;
    }
  }

  function getBuckets() {
    return buckets;
  }

  return { set, getBuckets };
}

export default HashMap;
