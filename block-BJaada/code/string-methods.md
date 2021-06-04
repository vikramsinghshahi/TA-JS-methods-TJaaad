Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`



- Return : A new string representing the calling string converted to upper case.
-example:
```js
let name = "hello world!"
name.toUppercase(); // "HELLO WORLD"

```

-`toUpperCase` The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).




3. `toLowerCase`


- Return : A new string representing the calling string converted to lower case.
-example:
```js
let name = "HELLO WORLD!"
name.toLowercase(); // "hello world!"

```

-`toLowerCase` The toLowerCase() method returns the calling string value converted to lowercase (the value will be converted to a string if it isn't one).


4. `trim`

- Return : A new string representing str stripped of whitespace from both its beginning and end.
-example:
```js
let name = "    Hello World!     "
name.trim(); // "Hello World!"
````

-`trim` :The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).



5. `trimEnd`


- Return : A new string representing str stripped of whitespace from  its end.
-example:
````js
let name = "    Hello World!     "
name.trim(); // "    Hello World!"
````

-`trim` :The trimEnd() method removes whitespace from ends of a string.

6. `trimStart`

- Return : A new string representing str stripped of whitespace from  its start.
-example:

````js
let name = "    Hello World!     "
name.trimStart(); // "Hello World!     "
````

-`trimStart` :The trimStart() method removes whitespace from start of a string.


7. `concat`
-Parameters: strN - One or more strings to concatenate to str.

- Return :A new string containing the combined text of the strings provided.
-example:

````js
let name = "Hello"
name.concat(" ", "World!"); //  "Hello World!"

````

-`concat` :The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

If the arguments are not of the type string, they are converted to string values before concatenating.


8. `endsWith`

-Parameters: 
searchString-(The characters to be searched for at the end of str.)
length Optional- (If provided, it is used as the length of str. Defaults to str.length.)

- Return : true if the given characters are found at the end of the string; otherwise, false.

-example:

````js
let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true

````

-`endsWith` - This method lets you determine whether or not a string ends with another string. This method is case-sensitive.



9. `includes`
-parameter :
searchString:A string to be searched for within str.

position (Optional):The position within the string at which to begin searching for searchString. (Defaults to 0.)


- Return : true if the search string is found anywhere within the given string; otherwise, false if not.
-example:
````js
let tagline = "Altcampus is a place where you learn the morder day coding. "
tagline.includes("place"); // true
````

-`includes`:This method lets you determine whether or not a string includes another string.


10. `indexOf`

-paramater:searchValue-  The sting value to search for if there is no value in the seached string then it will return -1.
fromIndex (Optional) :An integer representing the index at which to start the search. Defaults to 0.

- Return : The index of the first occurrence of searchValue, or -1 if not found.
-example:

````js
let tagline = "Altcampus is a place where you learn the morder day coding. "

tagline.indexOf("day"); // 48
````

-`indexOf`:The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.



11. `lastIndexOf`

-paramater:searchValue- A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.

-fromIndex (Optional) : The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.

- Return : The index of the last occurrence of searchValue; -1 if not found.
-example:

````js
let tagline = "Altcampus is a place where you learn the morder day coding. "

tagline.lastIndexOf("c"); // 52



````

-`lastIndexOf` :TThe lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.



12. `padEnd`


-Parameters:targetLength-The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.

padString (Optional)-The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).


- Return: A String of the specified targetLength with the padString applied at the end of the current str.

-example:

````js
let name = "Hello World!"
name.padEnd(20, ".");   //"Hello World!........"
````

- `padEnd`:The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.



13. `padStart`

-Parameters:targetLength-
The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
padString (Optional);The string to pad the current str with. If padString is too long to stay within the


- Return : A String of the specified targetLength with padString applied from the start.
-example:
````js
let name = "Hello World!"
name.padStart(5, ".");   //"........Hello World!"


````

-`padStart`:The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.



14. `repeat`

-Parameters:count- An integer between 0 and +Infinity, indicating the number of times to repeat the string.

- Return : A new string containing the specified number of copies of the given string.
-example:
````js
let name = "Hello"
name.repeat(4); // "HelloHelloHelloHello"
````

-`repeat` :The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.





15. `replace`



-Parameter:regexp (pattern):A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
substr:A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
newSubstr (replacement):The String that replaces the substring specified by the specified regexp or substr parameter.
replacerFunction (replacement): A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. 

- Return :A new string, with some or all matches of a pattern replaced by a replacement.
-example:
````js
let name = "Hello World!"
name.replace("Wolrd" , "vikram"); // "Hello vikram!"
````

-`replace` :The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.






16. `slice`
- parameter : 
beginIndex -The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex.
-endIndex (Optional)
The zero-based index before which to end extraction. The character at this index will not be included.

- Return : A new string containing the extracted section of the string.

-example:
````js
let tagline = "Altcampus is a place where you learn the morder day coding. "

tagline.slice(0 , 20);   //  "Altcampus is a place" 
````

-`slice` :The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.





17. `split`

-paramter: Parameters-separator (Optional)
The pattern describing where each split should occur.  The separator can be a simple string or it.
limit (Optional)-A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator,

- Return :An Array of strings, split at each point where the separator occurs in the given string.

-example:

````js
let tagline = "Altcampus is a place where you learn the morder day coding."

tagline.split(" "); // ["Altcampus", "is", "a", "place", "where", "you", "learn", "the", "morder", "day", "coding."]

````

-`split` :The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.



18. `substring`

-Parameters:indexStart - The index of the first character to include in the returned substring.
indexEnd (Optional)- The index of the first character to exclude from the returned substring.

- Return : A new string containing the specified part of the given string.

````js

let tagline = "Altcampus is a place where you learn the morder day coding."

tagline.substring(0, 20);  // "Altcampus is a place"

````

-`substring` :The substring() method returns the part of the string between the start and end indexes, or to the end of the string.