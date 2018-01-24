document.addEventListener('DOMContentLoaded', function() {
  // Write your JavaScript below. After you finish a section, comment out the code.

  console.log("*********SQUARED NUMS***********");
  ///////////// SQUARED NUMS ////////////////////
  ///////////////////////////////////////////////


  function squaredNums(array) {
    var squaredArray = [];

    for (var i = 0; i < array.length; i++) {
      squaredArray.push(array[i]*array[i]);
    }

    return squaredArray;
  }

  var testArray = [1, 3, 5]
  console.log(squaredNums(testArray));



  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********BIG FATHER***********");
  ///////////// BIG FATHER //////////////////////
  ///////////////////////////////////////////////
  function bigFather(stringArray) {
    var allCaps = [];

    for (var i = 0; i < stringArray.length; i++) {
      allCaps.push(stringArray[i].toUpperCase());
    }

    return allCaps;
  }

  var testArray2 = ["yay", "fun", "coding"];
  console.log(bigFather(testArray2));




  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********COUNT VOWELS***********");
  //////////// COUNT VOWELS  ////////////////////
  ///////////////////////////////////////////////
  function countVowels(string) {
    var numVowels = 0;

    for (var i = 0; i < string.length; i++) {
      if ( (string.charAt(i) == "a") || (string.charAt(i) == "e") || (string.charAt(i) == "i") || (string.charAt(i) == "o") || (string.charAt(i) == "u") || (string.charAt(i) == "A") || (string.charAt(i) == "E") || (string.charAt(i) == "I") || (string.charAt(i) == "O") || (string.charAt(i) == "U") ) {
        numVowels += 1;
      }
    }

    return numVowels;
  }

  var stringTest = "yayeyoIu";
  console.log(countVowels(stringTest));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********BIG STRINGS***********");
  //////////// BIG STRINGS  /////////////////////
  ///////////////////////////////////////////////
  function bigStrings(arrayOfStrings) {
    var numOfArrays = 0;

    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].length > 10) {
        numOfArrays += 1;
      }
    }

    return numOfArrays;
  }

  var arrayStringTest = ["TESTING", "overtenchars", "hellohello", "hellohelloo"];
  console.log(bigStrings(arrayStringTest));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********SENTENCE JOINER***********");
  //////////// SENTENCE JOINER  /////////////////
  ///////////////////////////////////////////////
  function sentenceJoiner(stringsArray) {
    stringsArray[0] = stringsArray[0].charAt(0).toUpperCase()+ stringsArray[0].slice(1, stringsArray[0].length);
    var singleStringArray = [];
    var singleString = stringsArray.join(" ");
    var blankSpace = " ";
    var period = ".";

    return singleString + period;
  }

  var arrayStringTest2 = ["testing", "hello", "heyy"];
  console.log(sentenceJoiner(arrayStringTest2));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********LONGEST PHRASE***********");
  //////////// LONGEST PHRASE  //////////////////
  ///////////////////////////////////////////////
  function longestPhrase(arrayOfString) {
    var longestString = "";
    var lgth = 0;

    for (var i = 0; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length > lgth) {
        lgth = arrayOfString[i].length;
        longestString = arrayOfString[i];
      }
    }

    return longestString;
  }

  var arrayStringTest3 = ["testing", "this is the longest string", "second longest string"];
  console.log(longestPhrase(arrayStringTest3));


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  console.log("*********Challenge, Challenge, Challenge***********");
  //////   Challenge, Challenge, Challenge  //////
  ///////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `countNums` below.





  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `ninetyNineBottles` below.






  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
    // Write `buildATree` below.






  //////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////





})