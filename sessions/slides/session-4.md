# Computer Science Study
## Session 4
A simple tool for learning programming ([github](https://github.com/fly2abhishek/cs-study)).


## Linked Lists

A linked list is a data structure that represents a sequence of items, with each item storing a pointer to the next one.

- An item in a linked list is called a **node**. 
- The first node is called the **head**. 
- The last node is called the **tail**.

![](/images/s4/linked_list__nodes_and_pointers_labeled_head_and_tail.svg)


#### Strengths:
Fast operations on the ends. Adding elements at either end of a linked list is O(1)O(1). Removing the first element is also O(1)O(1).
Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

#### Weaknesses:
Costly lookups. To access or edit an item in a linked list, you have to take O(i)O(i) time to walk from the head of the list to the iith item.

#### Uses:
Stacks and queues only need fast operations on the ends, so linked lists are ideal.


#### Time and Space Complexity

|	        |  Worst Case |
|---------|-------------|
| space	  | $$O(n)$$    |
| prepend	| $$O(1)$$    |
| append	| $$O(1)$$    |
| lookup	| $$O(n)$$    |
| insert	| $$O(n)$$    |
| delete	| $$O(n)$$    |


#### Implementation

##### PHP
```php
$a = new LinkedListNode(5);
$b = new LinkedListNode(1);
$c = new LinkedListNode(9);

$a->next = $b;
$b->next = $c;
```

##### JavaScript
```javascript
const a = new LinkedListNode(5);
const b = new LinkedListNode(1);
const c = new LinkedListNode(9);

a.next = b;
b.next = c;
```


##### Doubly Linked Lists

In a basic linked list, each item stores a single pointer to the next element.

In a doubly linked list, items have pointers to the next and the previous nodes.

![](/images/s4/linked_list__doubly_linked_nodes_and_pointers.svg)

Doubly linked lists allow us to traverse our list backwards. In a singly linked list, if you just had a pointer to a node in the middle of a list, there would be no way to know what nodes came before it. Not a problem in a doubly linked list.


##### Not cache-friendly

Most computers have caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses.

Array items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically O(n)O(n) time.


#### Creating a Linked List

```javascript
class listNode {
  
  constructor(val) {
      this.value = val;
      this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendToTail(val) {
    var node = new listNode(val);
    
    if (this.head == null) {
      this.head = this.tail = node;
      return;
    } 
    this.tail.next(node);
    this.tail = this.tail.next;
  }
}

```


#### Deleting a Node from a Singly Linked List

```javascript
  const deleteNode = function(head,val) {
    let n = head;  
    if(n.value === val) {
      return head.next;
    }
    while (n.next !== null) {
      if(n.next.value === val) {
          n.next = n.next.next;
          return head;        
      }
      n = n.next;
    }
    return head;
  };
```


#### Doubly Linked List

```javascript
class listNode {
  
  constructor(val) {
      this.value = val;
      this.next = null;
      this.prev = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendToTail(val) {
    var node = new listNode(val);
    
    if (this.head == null) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next(node);
    node.prev = this.tail;
    this.tail = this.tail.next;
  }
}
```