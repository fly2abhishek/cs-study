##### You left your computer unlocked and your friend decided to troll you by copying a lot of your files to random spots all over your file system.

Even worse, she saved the duplicate files with random, embarrassing names ("this_is_like_a_digital_wedgie.txt" was clever, I'll give her that).

Write a function that returns a list of all the duplicate files. We'll check them by hand before actually deleting them, since programmatically deleting files is really scary. To help us confirm that two files are actually duplicates, return a list of tuples ↴ where:

the first item is the duplicate file
the second item is the original file
For example:
```php
[(/tmp/parker_is_dumb.mpg, /home/parker/secret_puppy_dance.mpg,
(/home/trololol.mov, /etc/apache2/httpd.conf)]

```
You can assume each file was only duplicated once.


##### You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flight_length (in minutes) and a list of integers movie_lengths (in minutes) and returns a boolean indicating whether there are two numbers in movie_lengths whose sum equals flight_length.

When building your function:

- Assume your users will watch exactly two movies
- Don't make your users watch the same movie twice
- Optimize for runtime over memory


##### Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. 

You can assume the input string only contains lowercase letters.

Examples:

- "civic" should return True
- "ivicc" should return True
- "civil" should return False
- "livci" should return False



##### You created a game. Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. 
So far you're using an algorithm that sorts in $O(nlgn)$ time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

1. a list of unsorted_scores
2. the highest_possible_score in the game and returns a sorted list of scores in less than $O(nlgn)$ time.

For example:
```php
unsorted_scores = [37, 89, 41, 65, 91, 53]
HIGHEST_POSSIBLE_SCORE = 100

# Returns [91, 89, 65, 53, 41, 37]
sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
```


We’re defining nn as the number of unsorted_scores because we’re expecting the number of players to keep climbing.

And, we'll treat highest_possible_score as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.


**Is Unique:** Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


**Check Permutation:** Given two strings, write a method to decide if one is a permutation of the
other.


**URLify:** Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

EXAMPLE

Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"


**Palindrome Permutation:** Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE

Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)


**One Away:** There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE

pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false


**String Compression:** Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).


**Rotate Matrix:** Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


**Zero Matrix:** Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.


**String Rotation:** Assume you have a method is Substring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").