# Computer Science Study
## Session 3
A simple tool for learning programming ([github](https://github.com/fly2abhishek/cs-study)).


# Data Structures



## Arrays

Quick reference

An array organizes items sequentially, one after another in memory.

Each position in the array has an index, starting at 0.

Arrays are the building blocks for lots of other, more complex data structures.


| Worst Case |     |
| -----------|-----|
| space	     | O(n)|
| lookup     | O(1)|
| append     | O(1)|
| insert     | O(n)|
| delete     | O(n)|


### Strengths
- **Fast lookups**. Retrieving the element at a given index takes O(1) time, regardless of the length of the array.
- **Fast appends**. Adding a new element at the end of the array takes O(1) time.

### Weaknesses
- **Fixed size**. You need to specify how many elements you're going to store in your array ahead of time. (Unless you're using a fancy dynamic array.)
- **Costly inserts and deletes**. You have to "scoot over" the other elements to fill in or close gaps, which takes worst-case O(n) time.


### Inserting
If we want to insert something into an array, first we have to make space by "scooting over" everything starting at the index we're inserting into:

![](/images/arrays__insert_value.svg)


An array of letters. From top to bottom, the values in the array are A, B, C, E, F, and G. The letter D is being inserted at the position of E, and the letters E, F, and G are each shown "scooting over" one index up to make room.
In the worst case we're inserting into the 0th index in the array (prepending), so we have to "scoot over" everything in the array. That's O(n) time.


### Deleting
Array elements are stored adjacent to each other. So when we remove an element, we have to fill in the gap—"scooting over" all the elements that were after it:

![](/images/arrays__delete_value.svg)


Another array of letters. From top to bottom, the values in the array are A, B, C, Z, D, E, and F. The letter Z is being deleted, and the letters D, E, and F are each shown "scooting over" one index down to fill the space created by the deletion.
In the worst case we're deleting the 0th item in the array, so we have to "scoot over" everything else in the array. That's $O(n)$ time.



## Dynamic Arrays

- A dynamic array is an array with a big improvement: automatic resizing.

- One limitation of arrays is that they're fixed size, meaning you need to specify the number of elements your array will hold ahead of time.

- A dynamic array expands as you add more elements. So you don't need to determine the size ahead of time.


|        | Average Case | Worst Case |
|--------|--------------|------------|
|space   | O(n)         | O(n)       |
|lookup  | O(1)         | O(1)       |
|append  | O(1)         | O(n)       |
|insert  | O(n)         | O(n)       |
|delete  | O(n)         | O(n)       |


### Strengths:
- **Fast lookups**. Just like arrays, retrieving the element at a given index takes O(1) time.
- **Variable size**. You can add as many items as you want, and the dynamic array will expand to hold them.
- **Cache-friendly**. Just like arrays, dynamic arrays place items right next to each other in memory, making efficient use of caches.


### Weaknesses:
- **Slow worst-case appends**. Usually, adding a new element at the end of the dynamic array takes O(1) time. But if the dynamic array doesn't have any room for the new item, it'll need to expand, which takes O(n) time.
- **Costly inserts and deletes**. Just like arrays, elements are stored adjacent to each other. So adding or removing an item in the middle of the array requires "scooting over" other elements, which takes O(n) time.


### Size vs. Capacity

When you allocate a dynamic array, your dynamic array implementation makes an underlying fixed-size array. The starting size depends on the implementation—let's say our implementation uses 10 indices. Now say we append 4 items to our dynamic array. At this point, our dynamic array has a length of 4. But the underlying array has a length of 10.

We'd say this dynamic array's size is 4 and its capacity is 10. The dynamic array stores an end_index to keep track of where the dynamic array ends and the extra capacity begins.


![](/images/dynamic_arrays__capacity_size_end_index.svg)


### Doubling Appends
What if we try to append an item but our array's capacity is already full?

To make room, dynamic arrays automatically make a new, bigger underlying array. Usually twice as big.

> Why not just extend the existing array? Because that memory might already be taken by another program.

Each item has to be individually copied into the new array.


### Amortized cost of appending

1. The time cost of each special O(n) "doubling append" doubles each time.
2. At the same time, the number of O(1) appends you get until the next doubling append also doubles.

These two things sort of "cancel out," and we can say each append has an average cost or **amortized cost** of O(1).

Given this, in industry we usually wave our hands and say dynamic arrays have a time cost of O(1) for appends, even though strictly speaking that's only true for the average case or the amortized cost.



## Hashing and hash tables


A hash function takes data (like a string, or a file’s contents) and outputs a hash, a fixed-size string or number.

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:
```DF7CE038E2FA96EDF39206F898DF134D```
  
And here’s the hash for the same file after it was edited to be “cakes”:
```0E9091167610558FDAE6F69BD6716771```

Notice the hash is completely different, even though the files were similar. 

Here's the hash for a long file:
```664f67364296d08f31aec6fea4e9b83f```

The hash is the same length as my other hashes, but this time it represents a much bigger file—461Mb.

We can think of a hash as a "fingerprint." We can trust that a given file will always have the same hash, but we can't go from the hash back to the original file. Sometimes we have to worry about multiple files having the same hash value, which is called a hash collision.


Some uses for hashing:

- Dictionaries. Suppose we want a list-like data structure with constant-time lookups, but we want to look up values based on arbitrary "keys," not just sequential "indices." We could allocate a list, and use a hash function to translate keys into list indices. That's the basic idea behind a dictionary!
- Preventing man-in-the-middle attacks. Ever notice those things that say "hash" or "md5" or "sha1" on download sites? The site is telling you, "We hashed this file on our end and got this result. When you finish the download, try hashing the file and confirming you get the same result. If not, your internet service provider or someone else might have injected malware or tracking software into your download!"


## Hash Table

A hash table organizes data so you can quickly look up values for a given key.

Other names: 
hash, hash map, map, unordered map, dictionary


|        | Average Case | Worst Case |
|--------|--------------|------------|
|space   | O(n)         | O(n)       |
|lookup  | O(1)         | O(n)       |
|insert  | O(1)         | O(n)       |
|delete  | O(1)         | O(n)       |


### Strengths
- **Fast lookups**. Lookups take $O(1)$ time on average.
- **Flexible keys**. Most data types can be used for keys, as long as they're hashable.


## Weaknesses
- **Slow worst-case lookups**. Lookups take $O(n)$ time in the worst case.

- **Unordered**. Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.

- **Single-directional lookups**. While you can look up the value for a given key in $O(1)$ time, looking up the keys for a given value requires looping through the whole dataset—$O(n)$ time.

- **Not cache-friendly**. Many hash table implementations use linked lists, which don't put data next to each other in memory.


### JavaScript
In JavaScript, hash tables are called objects.
```javascript
  const lightBulbToHoursOfLight = {
  'incandescent': 1200,
  'compact fluorescent': 10000,
  'LED': 50000,
};
```

#### Also, Map
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


```javascript
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}); // undefined, because keyFunc !== function () {}
```


## PHP
In PHP, hash tables are called arrays.
```php
  $lightBulbToHoursOfLight = [
    'incandescent' => 1200,
    'compact fluorescent' => 10000,
    'LED' => 50000
];
```


## Java
In Java, hash tables are called hash maps.
```java
HashMap<String, Integer> lightBulbToHoursOfLight = new HashMap<>();

lightBulbToHoursOfLight.put("incandescent", 1200);
lightBulbToHoursOfLight.put("compact fluorescent", 10000);
lightBulbToHoursOfLight.put("LED", 50000);

```


## C++
In C++, hash tables are called unordered maps.
```c++
unordered_map<string, int> lightBulbToHoursOfLight;

lightBulbToHoursOfLight.insert(make_pair("incandescent", 1200));
lightBulbToHoursOfLight.insert(make_pair("compact fluorescent", 10000));
lightBulbToHoursOfLight.insert(make_pair("LED", 50000));
```


# Hash maps are built on arrays

Arrays are pretty similar to hash maps already. Arrays let you quickly look up the value for a given "key" . . . except the keys are called "indices," and we don't get to pick them—they're always sequential integers (0, 1, 2, 3, etc).

Think of a hash map as a "hack" on top of an array to let us use flexible keys instead of being stuck with sequential integer "indices."

All we need is a function to convert a key into an array index (an integer). That function is called a hashing function.

![](/images/cs_for_hackers__hash_tables_lies_key_labeled.svg)


To look up the value for a given key, we just run the key through our hashing function to get the index to go to in our underlying array to grab the value.

How does that hashing function work? There are a few different approaches, and they can get pretty complicated. But here's a simple proof of concept:

Grab the number value for each character and add those up.

![](/images/cs_for_hackers__hash_tables_lies_chars.svg)


The result is 429. But what if we only have 30 slots in our array? We'll use a common trick for forcing a number into a specific range: the modulus operator (%). Modding our sum by 30 ensures we get a whole number that's less than 30 (and at least 0):

$$429 \: \% \: 30 = 9$$

>The hashing functions used in modern systems get pretty complicated—the one we used here is a simplified example.


### Hash collisions
What if two keys hash to the same index in our array? In our example above, look at "lies" and "foes":

![](/images/cs_for_hackers__hash_tables_lies_and_foes_addition.svg)

They both sum up to 429! So of course they'll have the same answer when we mod by 30:

```429 % 30 = 9```

This is called a hash collision. There are a few different strategies for dealing with them.


Here's a common one: instead of storing the actual values in our array, let's have each array slot hold a pointer to a linked list holding the values for all the keys that hash to that index:

![](/images/cs_for_hackers__hash_tables_hash_collision_key_val.svg)

Notice that we included the keys as well as the values in each linked list node. Otherwise we wouldn't know which key was for which value!

>There are other ways to deal with hash collisions. This is just one of them.


### When hash table operations cost $O(n)$ time

#### Hash collisions
If all our keys caused hash collisions, we'd be at risk of having to walk through all of our values for a single lookup (in the example above, we'd have one big linked list). This is unlikely, but it could happen. That's the worst case.

#### Dynamic array resizing
Suppose we keep adding more items to our hash map. As the number of keys and values in our hash map exceeds the number of indices in the underlying array, hash collisions become inevitable.

To mitigate this, we could expand our underlying array whenever things start to get crowded. That requires allocating a larger array and rehashing all of our existing keys to figure out their new position — $O(n)$ time.


## Sets
A set is like a hash map except it only stores keys, without values.

Sets often come up when we're tracking groups of items—nodes we've visited in a graph, characters we've seen in a string, or colors used by neighboring nodes. Usually, we're interested in whether something is in a set or not.

Sets are usually implemented very similarly to hash maps—using hashing to index into an array—but they don't have to worry about storing values alongside keys.


```javascript
lightBulbs = new Set(["incandescent", "compact fluorescent", "LED"]);

lightBulbs.has("LED");  // true 
lightBulbs.has("halogen");  // false
```

```php
$lightBulbs = [
    'incandescent' => true,
    'compact fluorescent' => true,
    'LED' => true
];

isset($lightBulbs['LED']);  // true
isset($lightBulbs['halogen']);  // false
```



# Thank YOU
# Questions?