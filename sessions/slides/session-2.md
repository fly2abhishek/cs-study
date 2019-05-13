# Computer Science Study
## SESSION 2
A simple tool for learning programming ([github](https://github.com/fly2abhishek/cs-study)).



## Asymptotic Analysis (cont...)


### Log N Runtimes
We commonly see $O(log N)$ in runtimes. Where does this come from?

Lets candider the example of Binary Search:


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
```c++
int f(int n) {
  if (n <= 1) {
    return 1;
  }
  return f(n - 1) + f(n - 1);
}
```


Suppose we call f(4). This calls f(3) twice. Each of those calls to f(3) calls f(2), until we get down to f(1)

![](/images/recursive-runtime.png)


| Level | Nodes | Expression                 | Runtime |
|-------|-------|----------------------------|---------|
| 0     | 1     |                            | $$2^0$$ |
| 1     | 2     |$$2 * l-1 = 2$$             | $$2^1$$ |
| 2     | 4     |$$2 * l-1 = 2 * 2^1 = 2^2$$ | $$2^2$$ |
| 3     | 8     |$$2 * l-1 = 2 * 2^2 = 2^3$$ | $$2^3$$ |
| 4     | 16    |$$2 * l-1 = 2 * 2^3 = 2^4$$ | $$2^4$$ |


Therefore, there will be $$2^0+ 2^1 + 2^2 + 2^3 + 2^4 + .. + 2^n$$ 
(which is $2^n+1 - 1$) nodes.

When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like 
O(branches ^ depth), 

Where branches is the number of times each recursive call branches. In this case, this gives us $$O(2^n)$$
     


## Practice?


What is the time, space complexity of following code :
```javascript
        int a = 0, b = 0;    
        for (i = 0; i < N; i++) {
            a = a + rand();  
        }
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
```
Assume that `rand()` is $O(1)$ time, $O(1)$ space function.


1. $O(N * M)$ time, $O(1)$ space
2. $O(N + M)$ time, $O(N + M)$ space
3. $O(N + M)$ time, $O(1)$ space
4. $O(N * M)$ time, $O(N + M)$ space
5. $O(N * M) time, O(N * M)$ space


What is the time, space complexity of following code :
```c
    int a = 0, b = 0;    
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            a = a + j;
        }
    }
    for (k = 0; k < N; k++) {
        b = b + k;
    } 
```


1. $O(N * N)$ time, $O(1)$ space
2. $O(N)$ time, $O(N)$ space
3. $O(N)$ time, $O(N)$ space
4. $O(N * N)$ time, $O(N)$ space
5. $O(N * N * N)$ time, $O(1)$ space


What is the time complexity of the following code :
```c
    int a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }
```


1. $O(N)$
2. $O(N*log(N))$
3. $O(N * Sqrt(N))$
4. $O(N*N)$


Total number of runs = $N + (N - 1) + (N - 2) + … 1 + 0$

$$= N * (N + 1) / 2$$

$$= 1/2 * N^2 + 1/2 * N$$

$O(N^2)$ times.


What is the time complexity of the following code :
```c
 int a = 0, i = N;
    while (i > 0) {
      a += i;
        i /= 2;
     }
```


1. $O(N)$
2. $O(Sqrt(N))$
3. $O(N / 2)$
4. $O(log N)$
5. $O(log(log N))$


We have to find the smallest x such that $N / 2^x < 1$ OR $2^x > N$

$$x = log(N)$$


What is time complexity of following code :
```c
        int count = 0;
        for (int i = N; i > 0; i /= 2) {
            for (int j = 0; j < i; j++) {
                count += 1;
            }
        }
```


1. $O(N * N)$
2. $O(N * log N)$
3. $O(N * log(log(N)))$
4. $O(N)$
5. $O(N * Sqrt(N))$


In the first iteration, the j loop runs N times.

In the second iteration, the j loop runs $N / 2$ times.

In the ith iteration, the j loop runs $N / 2^i$ times.

So, the total number of runs of loop $= N + N / 2 + N / 4 + … 1$

=$$ N * ( 1 + 1/2 + 1/4 + 1/8 + … ) < 2 * N$$


What is the time complexity of the following code :
```c
    int i, j, k = 0;
    for (i  = n/2; i <= n; i++) {
        for (j = 2; j <= n; j = j * 2) {
            k = k + n/2;
        }
    }
```


1. $Θ(n)$
2. $Θ(nLogn)$
3. $Θ(n^2)$
4. $Θ(n^2 / Logn)$
5. $Θ(n^2Logn)$


Lets just assume n = 8 for now. 
We will try to see, the values of j corresponding to each i.
```
i = 4, j = 2, 4, 8
i = 5, j = 2, 4, 8
i = 6, j = 2, 4, 8
i = 7, j = 2, 4, 8
i = 8, j = 2, 4, 8
```

If you notice, j keeps doubling till it is less than or equal to n. Number of times, you can double a number till it is less than n would be log(n).

Lets take more examples here to convince ourselves.
```
 n = 16, j = 2, 4, 8, 16
 n = 32, j = 2, 4, 8, 16, 32

```

So, j would run for $O(log n)$ steps. 
i runs for $n/2 $steps.

So, total steps $= O (n/ 2 * log (n)) = O(n logn)$


In the following C++ function, let n >= m.
```c
    int gcd(int n, int m) {
            if (n%m ==0) return m;
            if (n < m) swap(n, m);
            while (m > 0) {
                n = n%m;
                swap(n, m);
            }
            return n;
    }
```    


1. $Θ(log n)$
2. $Ω(n)$
3. $Θ(log log n)$
4. $Θ(sqrt(n))$


Let us say n = fibonacci(N) and m = fibonacci(N - 1)

fibonacci(N) = fibonacci(N-1) + fibonacci(N-2)

OR n = m + k where k < m.

Therefore the step
```
n = n % m will make n = k

swap(n, m) will result in

n = fibonacci(N-1)
    
m = k = fibonacci(N-2)
```

So, it will take N steps before m becomes 0.

This means, in the worst case, this algorithm can take N step if n is Nth fibonacci number.


```javascript
/* 
 * arr is sorted 
 * arr.length() = N
 * The function is initially called as searchNumOccurrence(arr, x, 0, N-1)
 */
const searchNumOccurrence = function (arr, x, start, end) {
  
  if (start > end) return false;
  
  let mid = Math.floor(start + end) / 2;
  
  if (arr[mid] < x) return searchNumOccurrence(arr, x, mid + 1, end);
  
  if (arr[mid] > x) return searchNumOccurrence(arr, x, start, mid - 1);
  
  return searchNumOccurrence(arr, x, start, mid - 1) + 1 + searchNumOccurrence(arr, x, mid + 1, end);
  
}
```


```
T(N) = 2 * T(N/2) + constant
     = 4 * T(N/4) + constant     ( 2 * constant = another constant ) 
     = 8 * T(N/8) + constant 
     ...
     = N * T(N/N) + constant 
     = N + constant 
     = O(N)
```