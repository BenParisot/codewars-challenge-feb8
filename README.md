# codewars-challenge-feb8

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.



Solution: 
1. Sort the numbers in the array using the sort() method on the numbers array
2. Create a variable and define it as the sum of the first two numbers in the new sorted array ([0], [1]);
