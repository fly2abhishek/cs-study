# Computer Science Study

A simple tool for learning programming ([github](https://github.com/fly2abhishek/cs-study)).



## Introduction
- Why?
- What?
- How?


# Why?


<table>
  <tr>
    <td> <img src="../img/abhi-cri.jpg" width="300" /> <!-- .element: class="fragment" data-fragment-index="1" --></td>
    <td style="vertical-align: middle;">  
    <ul>
    <li>Talent <!-- .element: class="fragment" data-fragment-index="3" --> </li>
    <li>Technique <!-- .element: class="fragment" data-fragment-index="4" --> </li>
    <li>Fitness<!-- .element: class="fragment" data-fragment-index="5" --> </li>
    </ul>
    </td>
    <td> <img src="../img/kohli.jpg" width="400" /><!-- .element: class="fragment" data-fragment-index="2" --></td>
  </tr>
</table>



# What?
- Data Structures & Algorithms
- Databases
- OOPs Concepts
- System Design
- Scripting


# How?
- Weekly Sessions
- Daily Practice 
- Test


# How
- You can clone the repo https://github.com/fly2abhishek/cs-study
- Each session will have a presentation & practices code + solutions
- A topic will be presented in a session every week
- You get a week to solve the practice the exercise
- I will be available 1 hr, doing the exercise myself and helping others with doubts 


## Prerequisites
- Should have the fundamental knowledge of any of the following languages:
  - PHP
  - JavaScript
  - C++
  - Java



# DataStructures and Algorithms 


## Analysis of Algorithms


### Why performance analysis?
- performance == scale

If a software feature can not cope with the scale of tasks users need to perform – it is as good as dead.


#### Given two algorithms for a task, how do we find out which one is better?
1. It might be possible that for some inputs, first algorithm performs better than the second. And for some inputs second performs better.

2. It might also be possible that for some inputs, first algorithm perform better on one machine and the second works better on other machine for some other inputs.


### Asymptotic Analysis 
- In Asymptotic Analysis, we evaluate the performance of an algorithm in terms of input size (we don’t measure the actual running time). 
- We calculate, how does the time (or space) taken by an algorithm increases with the input size.


```javascript
const linear = function (haystack, niddle) {
  for (let i = 0; i < haystack.length; i++) {
    if (niddle === a[i]) {
      return true;
    }
  }
  return false;
}

// Driver code 
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
linear(arr, x);

```


```javascript
const binarySearch = function (arr, x, start, end) { 
       
    // Base Condtion 
    if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return true; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  
        return binarySearch(arr, x, start, mid-1); 
    else
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return binarySearch(arr, x, mid+1, end); 
} 
// Driver code 
let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5; 
binarySearch(arr, x, 0, arr.length-1);
```


- We run the Linear Search on a fast computer and Binary Search on a slow computer
- For small values of input array size n, the fast computer may take less time
- But, after certain value of input array size, the Binary Search will definitely start taking less time compared to the Linear Search even though the Binary Search is being run on a slow machine. 
- The reason is the order of growth of Binary Search with respect to input size logarithmic while the order of growth of Linear Search is linear. 
- So the machine dependent constants can always be ignored after certain values of input size.


### Does Asymptotic Analysis always work?
- Say there are two sorting algorithms that take 1000nLogn and 2nLogn time respectively
- We can’t judge which one is better as we ignore constants in Asymptotic Analysis 
-  It might be possible that those large inputs are never given to your software and an algorithm which is asymptotically slower, always performs better for your particular situation


## Asymptotic Notations
- Θ Notation (big theta): The theta notation bounds a functions from above and below, so it defines exact asymptotic behavior
- Big O Notation (big 0): The Big O notation defines an upper bound of an algorithm, it bounds a function only from above
- Ω Notation  (big omega): Just as Big O notation provides an asymptotic upper bound on a function, Ω notation provides an asymptotic lower bound


### Θ Notation
![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-1.png)
 ```
Θ(g(n)) = {f(n): there exist positive constants c1, c2 and n0 such 
           that 0 <= c1*g(n) <= f(n) <= c2*g(n) for all n >= n0}
```  
If f(n) is theta of g(n), then the value f(n) is always between c1*g(n) and c2*g(n) for large values of n (n >= n0). The definition of theta also requires that f(n) must be non-negative for values of n greater than n0.


### Big O Notation
![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-2.png)
```
O(g(n)) = { f(n): there exist positive constants c and 
            n0 such that 0 <= f(n) <= c*g(n) for 
            all n >= n0}
```
The Big O notation is useful when we only have upper bound on time complexity of an algorithm. Many times we easily find an upper bound by simply looking at the algorithm.


### Ω Notation
![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-3.png)
``` 
Ω (g(n)) = {f(n): there exist positive constants c and
            n0 such that 0 <= c*g(n) <= f(n) for
            all n >= n0}.
```
 Ω notation provides an asymptotic lower bound.

Ω Notation can be useful when we have lower bound on time complexity of an algorithm. As discussed in the previous post, the best case performance of an algorithm is generally not useful, the Omega notation is the least used notation among all three.


#### Best Case, Worst Case, and Expected Case
- Best Case: If all elements are equal, then quick sort will, on average, just traverse through the array once. 
This is O(N).
- Worst Case: What if we get really unlucky and the pivot is repeatedly the biggest element in the array? 
In this case, our recursion doesn't divide the array in half and recurse on each half. It just shrinks the subarray by one element. 
This will degenerate to an O(N^2) runtime.


- Expected Case: Usually, though, these wonderful or terrible situations won't happen. 
Sure, sometimes the pivot will be very low or very high, but it won't happen over and over again. 
We can expect a runtime of O(N log N).


# Space Complexity

- Time is not the only thing that matters in an algorithm. We might also care about the amount of memory­ or space-required by an algorithm.
- Space complexity is a parallel concept to time complexity. 
- If we need to create an array of size n, this will require 0(n) space. 
- If we need a two-dimensional array of size nxn, this will requireO(n2) space.


Stack space in recursive calls counts, too. 
For example, code like this would takeO(n) time andO(n) space.
```c++
int sum(int n) {
  if (n <= 0) {
    return 0;
  }
    return n + sum(n-1);
}
```

Each call adds a level to the stack.
```javascript
  sum(4)
    -> sum(3)
      -> sum(2)
        -> sum(l)
            -> sum(0)
```
Each of these calls is added to the call stack and takes up actual memory.


However, just because you have n calls total doesn't mean it takes O(n) space. Consider the below function, which adds adjacent elements between O and n:
```c++
int pairSumSequence(int n) {
	int sum = 0;
	for (inti= 0; i < n; i++) {
		sum+= pairSum(i, i + 1);
	}
	return sum;
}
int pairSum(int a, int b) {
	return a + b;
}
```
There will be roughly O(n) calls to pairSum. However, those calls do not exist simultaneously on the call stack, so you only need O(1) space.


### How to calculate Big O?
How quickly the runtime grows relative to the input as the input gets arbitrarily large.

1. Drop the constants
2. Drop the less significant terms
3. We're usually talking about the "worst case"


### Examples

```
function printFirstItem(items) {
  console.log(items[0]);
}
```
This function runs in O(1) time (or "constant time") relative to its input. The input array could be 1 item or 1,000 items, but this function would still just require one "step."

```
  function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}
```
This function runs in O(n) time (or "linear time"), where nn is the number of items in the array. If the array has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.


```
  function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem);
    });
  });
}
```
Here we're nesting two loops. If our array has nn items, our outer loop runs nn times and our inner loop runs nn times for each iteration of the outer loop, giving us n^2 total prints. Thus this function runs in O(n^2) time (or "quadratic time"). If the array has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.


#### N could be the actual input, or the size of the input
Both of these functions have O(n) runtime, even though one takes an integer as its input and the other takes an array:

```
  function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}
```
So sometimes n is an actual number that's an input to our function, and other times nn is the number of items in an input array (or an input map, or an input object, etc.).


### Drop the constants
This is why big O notation rules. When you're calculating the big O complexity of something, you just throw out the constants. So like:
```
  function printAllItemsTwice(items) {
  items.forEach(item => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach(item => {
    console.log(item);
  });
}
```
This is O(2n), which we just call O(n).


```
  function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}
```
This is O(1 + n/2 + 100), which we just call O(n).

Why can we get away with this? Remember, for big O notation we're looking at what happens as nn gets arbitrarily large. As nn gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.


### Drop the less significant terms
```
  function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(number => {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log(firstNumber + secondNumber);
    });
  });
}
```
Here our runtime is `O(n + n^2)` which we just call O(n^2). Even if it was `O(n^2/2 + 100n)`, it would still be O(n^2).


Similarly:
```
O(n^3 + 50n^2 + 10000) is O(n^3)
O((n + 30) * (n + 5)) is O(n^2)
```
Again, we can get away with this because the less significant terms quickly become, well, less significant as nn gets big.


### We're usually talking about the "worst case"

Sometimes the worst case runtime is significantly worse than the best case runtime:
```
  function contains(haystack, needle) {

  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}
```
Here we might have 100 items in our haystack, but the first item might be the needle, in which case we would return in just 1 iteration of our loop.

In general we'd say this is O(n) runtime and the "worst case" part would be implied. But to be more specific we could say this is worst case O(n) and best case O(1) runtime. For some algorithms we can also make rigorous statements about the "average case" runtime.


### Log N Runtimes
We commonly seeO(log N) in runtimes. Where does this come from?

Lets condiser the example of Binary Search:

```javascript
const binarySearch = function (arr, x, start, end) { 
       
    // Base Condtion 
    if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===x) return true; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  
        return binarySearch(arr, x, start, mid-1); 
    else
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return binarySearch(arr, x, mid+1, end); 
} 
// Driver code 
let arr = [1, 3, 5, 7, 8, 9]; 
let x = 5; 
```


"how many times must we divide our original array size (n) in half until we get down to 1?"

`$$ n * \frac{1}{2} * \frac{1}{2} * \frac{1}{2} ... = 1 $$`

How many `$ \frac{1}{2} $`s are there?  We don't know yet, but we can call that number x:
`$$ n * (\frac{1}{2})^x = 1 $$`


Now we solve for x:
 `$$ n * \frac{1^x}{2^x} = 1$$`
 `$$ n * \frac{1}{2^x} = 1$$`
 `$$ n / 2^x = 1 $$`
 `$$ n = 2^x $$`


Take the `$\log_{2}$` of both sides...
    `$$ \log_{2}n = \log_{2}2^x $$`
what power must we raise 2 to, to get `$2^x$`? 
 That's just x.
  `$$ \log_{2}n = x $$`
  
 
## Recursive Runtimes
  
## Practice?