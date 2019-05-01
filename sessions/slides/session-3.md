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

![](https://www.interviewcake.com/images/svgs/arrays__insert_value.svg?bust=202)


An array of letters. From top to bottom, the values in the array are A, B, C, E, F, and G. The letter D is being inserted at the position of E, and the letters E, F, and G are each shown "scooting over" one index up to make room.
In the worst case we're inserting into the 0th index in the array (prepending), so we have to "scoot over" everything in the array. That's O(n) time.


### Deleting
Array elements are stored adjacent to each other. So when we remove an element, we have to fill in the gap—"scooting over" all the elements that were after it:

![](https://www.interviewcake.com/images/svgs/arrays__delete_value.svg?bust=202)


Another array of letters. From top to bottom, the values in the array are A, B, C, Z, D, E, and F. The letter Z is being deleted, and the letters D, E, and F are each shown "scooting over" one index down to fill the space created by the deletion.
In the worst case we're deleting the 0th item in the array, so we have to "scoot over" everything else in the array. That's O(n)O(n) time.


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


![](https://www.interviewcake.com/images/svgs/dynamic_arrays__capacity_size_end_index.svg?bust=202)


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


# Thank YOU
# Questions?