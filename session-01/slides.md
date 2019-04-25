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


### How to calculate Big O?