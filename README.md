# More Loops

### 
1. Write a function called `squaredNums` that accepts an array of numbers as a parameter and outputs an array containing the squares of every number. Example: 
```
squaredNums([1, 2, 3]);
=> [1, 4, 9]
```
2. Write a function called `bigFather` that takes in an array of strings and returns a new array with all of the strings capitalized. 
```
bigFather(["luke", "i", "am", "your", "father"]);
=> ["LUKE", "I", "AM", "YOUR", "FATHER"]
```
3. Write a function called `countVowels` that takes in a string and returns the number of vowels found in the string. 
```
countVowels("hello"); 
=> 2
```
```
countVowels("aaaaaaaapples"); 
=> 9
```
4. Write a function called `bigStrings` that takes in an array of strings and returns a new array containing all of the strings that were longer than 10 characters. 
5. Write a function named `sentenceJoiner` that takes in an array of strings and returns a single string with these conditions. 
- The first word should be capitalized.  
- Each word should be separated by a space.  
- There should be a period at the end of the sentence.  
6. Write a function called `longestPhrase` that takes in an array of strings and returns the longest phrase. 
```
longestPhrase(['hi', 'how', 'are', 'you', 'doing today']);
=> 'doing today'
```


### Challenges
1. Write a function called `countNum` that takes in an array of numbers and a target number. This function should return the number of times your target number was found in the array. 
```
countNum([1, 2, 3, 2, 2, 1, 6], 2);
=> 3
```
```
countNum([1, 2, 3, 2, 2, 1, 6], 6);
=> 1
```
2. Write a function called `ninetyNineBottles` that console.logs the lyrics to [99 Bottles of Beer on the Wall](http://www.99-bottles-of-beer.net/lyrics.html). Hint: You should loop, but don't use an array. 
3. Write a function called `buildATree` that takes in a number `n` and console.logs a tree made of `n` rows of asterisks. For example: 
``` 
buildATree(3);  
  
  *
 * *  
* * * 
```
``` 
buildATree(5);  
  
    *
   * *  
  * * * 
 * * * * 
* * * * *  
```