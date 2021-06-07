Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- Parameter: ()
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js

     let  elements = ['Fire', 'Air', 'Water'];

     console.log(elements.join());
      // expected output: "Fire,Air,Water"

     console.log(elements.join(''));
     // expected output: "FireAirWater"
     ```
   - `join` The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

   - No it does not mutate the original array



3. `flat`
- Parameter: (depth) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
    let num = [ 1, 2 ,3, [4,5, [6,7,[8,9,10]]]];

    console.log(num.flat(Infinity)); // [1,2,3,4,5,6,7,8,9,10]
   - `flat` aThe flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array

4. `push`
- Parameter: The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called..
   - Example:
     ```js
     let animals = ['pigs', 'goats', 'sheep'];

     console.log(animals.push('cows'));
     // expected output: 4

     console.log(animals);
     // expected output: Array ["pigs", "goats", "sheep", "cows"]
     ```
   - `push` The push() method adds one or more elements to the end of an array and returns the new length of the array.
   - yes it mutate the original array

5. `indexOf`
- Parameter: (searchElement) Element to locate in the array.
             (fromIndex Optional)
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
    let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

     console.log(beasts.indexOf('bison'));
     // expected output: 1

     // start from index 2
     console.log(beasts.indexOf('bison', 2));
     // expected output: 4

     ```
   - `indexOf` The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array

6. `lastIndexOf`
- Parameter: (searchElement) Element to locate in the array.
    (fromIndex Optional)

   - Return: The last index of the element in the array; -1 if not found.
   - Example:
     ```js
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3
    
     ```
   - `lastIndexOf` The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
   - No it does not mutate the original array

7. `includes`
- Parameter: (searchElement)  The value to search for.
   - Return: A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified)..
   - Example:
     ```js
     const array1 = [1, 2, 3];

     console.log(array1.includes(2));
    // expected output: true
     ```
   - `includes` The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array

8. `reverse`
- Parameter: reverse() 
   - Return:The reversed array.
   - Example:
     ```js
        const array1 = ['one', 'two', 'three'];
        console.log('array1:', array1);
        // expected output: "array1:" Array ["one", "two", "three"]

        const reversed = array1.reverse();
        console.log('reversed:', reversed);
      // expected output: "reversed:" Array ["three", "two", "one"]

      // Careful: reverse is destructive -- it changes the original array.
        console.log('array1:', array1);
        // expected output: "array1:" Array ["three", "two", "one"]
     ```
   - `reverse` The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
   - yes ,it does mutate the original array

9. `every`
- Parameter: 
            (callbackFn)            A function to test for each element, taking three arguments:
            (element)            The current element being processed in the array.
            (index/ Optional)            The index of the current element being processed in the array.
            (array/ Optional)            The array every was called upon.
            (thisArg /Optional)            A value to use as this when executing callbackFn.
   - Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
           const isBelowThreshold = (currentValue) => currentValue < 40;

          const array1 = [1, 30, 39, 29, 10, 13];

          console.log(array1.every(isBelowThreshold));
          // expected output: true

     ```
   - `every`The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
   - No it does not mutate the original array

10. `shift`
- Parameter: shift()
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
          const array1 = [1, 2, 3];

      const firstElement = array1.shift();

      console.log(array1);
      // expected output: Array [2, 3]

      console.log(firstElement);
      // expected output: 1
     ```
   - `shift` The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
   - yes it does mutate the original array

11. `splice`
- Parameter: (start, deletecount , elemnt to be addor replace in the array)
   - Return: An array containing the deleted elements.
            If only one element is removed, an array of one element is returned.
            If no elements are removed, an empty array is returned.
   - Example:
     ```js
          var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

        console.log(animals.slice(2));
        // expected output: Array ["camel", "duck", "elephant"]

        console.log(animals.slice(2, 4));
        // expected output: Array ["camel", "duck"]

        console.log(animals.slice(1, 5));
        // expected output: Array ["bison", "camel", "duck", "elephant"]
     ```
   - `splice` The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - yes it does mutate the original array

12. `find`
- Parameter: 
          (callbackFn)   Function to execute on each value in the array, taking 3 arguments:
          (element)  The current element in the array.
          (index Optional)    The index (position) of the current element in the array.
          (array Optional)     The array that find was called on.
          (thisArg Optional)  Object to use as this inside callbackFn.
   - Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
          var array1 = [5, 12, 8, 130, 44];

          var found = array1.find(function(element) {
            return element > 10;
          });

          console.log(found);
          // expected output: 12
     ```
   - `find` The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
   - No it does not mutate the original array

13. `unshift`
- Parameter: The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
      const array1 = [1, 2, 3];

      console.log(array1.unshift(4, 5));
      // expected output: 5

      console.log(array1);
      // expected output: Array [4, 5, 1, 2, 3]
     ```
   - `unshift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - yes it does mutate the original array

14. `findIndex`
- Parameter: (callbackFn)
        A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

        It takes three arguments:

        (element)        The current element being processed in the array.
        (index/ Optional)        The index of the current element being processed in the array.
        (array/ Optional)        The array findIndex() was called upon.
        (thisArg /Optional)        Optional object to use as this when executing callbackFn
   - Return: The index of the first element in the array that passes the test. Otherwise, -1..
   - Example:
     ```js
          const array1 = [5, 12, 8, 130, 44];

      const isLargeNumber = (element) => element > 13;

      console.log(array1.findIndex(isLargeNumber));
      // expected output: 3
     ```
   - `findIndex` The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test
   - No it does not mutate the original array

15. `filter`
- Parameter: (callbackFn)
              Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

              It accepts three arguments:

              (element)              The current element being processed in the array.
              (indexOptional)              The index of the current element being processed in the array.
              (arrayOptional)              The array filter was called upon.
              (thisArgOptional)              Value to use as this when executing callbackFn.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            const result = words.filter(word => word.length > 6);

            console.log(result);
            // expected output: Array ["exuberant", "destruction", "present"]
              ```
   - `filter` The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   - No it does not mutate the original array


17. `forEach`
- Parameter: (callbackFn)
              Function to execute on each element. It accepts between one and three arguments:

              (element)
              The current element being processed in the array.
              (index Optional)
              The index of element in the array.
              (array Optional)
              The array forEach() was called upon.
              (thisArg Optional)
              Value to use as this when executing callbackFn.
   - Return: undefined.
   - Example:
     ```js
        const array1 = ['a', 'b', 'c'];

      array1.forEach(element => console.log(element));

      // expected output: "a"
      // expected output: "b"
      // expected output: "c"
     ```
   - `forEach` The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array

18. `map`
- Parameter: (callbackFn)
            Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

            The callbackFn function accepts the following arguments:

            (element)
            The current element being processed in the array.
            (indexOptional)
            The index of the current element being processed in the array.
            (arrayOptional)
            The array map was called upon.
            (thisArgOptional)
            Value to use as this when executing callbackFn.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
    const array1 = [1, 4, 9, 16];

      // pass a function to map
      const map1 = array1.map(x => x * 2);

      console.log(map1);
      // expected output: Array [2, 8, 18, 32]
     ```
   - `map` The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - No it does not mutate the original array

19. `pop`
- Parameter: pop()
   - Return: The removed element from the array; undefined if the array is empty
   - Example:
     ```js
          const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

          console.log(plants.pop());
          // expected output: "tomato"

          console.log(plants);
          // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

          plants.pop();

          console.log(plants);
          // expected output: Array ["broccoli", "cauliflower", "cabbage"]
     ```
   - `pop` The pop() method removes the last element from an array and returns that element. This method changes the length of the arra
   - it mutate the original array

20. `reduce`
- Parameter: (callbackFn)
            A function to execute on each element in the array (except for the first, if no initialValue is supplied).

            It takes four arguments:

            (accumulator)
            The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
            (currentValue)
            The current element being processed in the array.
            (index Optional)
            The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
            (array Optional)  The array reduce() was called upon.
   - Return: The single value that results from the reduction.
   - Example:
     ```js
          const array1 = [1, 2, 3, 4];
          const reducer = (accumulator, currentValue) => accumulator + currentValue;

          // 1 + 2 + 3 + 4
          console.log(array1.reduce(reducer));
          // expected output: 10

          // 5 + 1 + 2 + 3 + 4
          console.log(array1.reduce(reducer, 5));
          // expected output: 15
     ```
   - `reduce` The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   -  it doesn't mutate the original array

21. `slice`
- Parameter: (start, end/optional)
   - Return: A new array containing the extracted elements.
   - Example:
     ```js
            const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

            console.log(animals.slice(2));
            // expected output: Array ["camel", "duck", "elephant"]

            console.log(animals.slice(2, 4));
            // expected output: Array ["camel", "duck"]

            console.log(animals.slice(1, 5));
            // expected output: Array ["bison", "camel", "duck", "elephant"]
     ```
   - `slice` The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - No it does not mutate the original array

22. `some`
- Parameter:(callback)
              A function to test for each element, taking three arguments:

              (element)
              The current element being processed in the array.
              (indexOptional)
              The index of the current element being processed in the array.
              (arrayOptional)
              The array some() was called upon.
              (thisArgOptional)
              A value to use as this when executing callbackFn.
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
        const array = [1, 2, 3, 4, 5];

        // checks whether an element is even
        const even = (element) => element % 2 === 0;

        console.log(array.some(even));
        // expected output: true
     ```
   - `some` The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - No it does not mutate the original array

