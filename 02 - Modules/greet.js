function greet(username) {
  console.log(`Hello ${username}!`);
}

/*
Now, if I want to use this same function inside the index.js file and let's suppose if you have like 10 other files.

So, how can I use this exact same function in 10 other files..?

    -> Solution is to use something called modules in node.js.
*/

// First of all we have to tell other file you can use this same function.

module.exports = greet;

// So, now it will allow us to tell other file like you can use this function in all of their other files, which we have inside our directory.

/*
 So, now that we tell other file that you can use this function.

 So, now it's time to bring that function from this file and use it inside index.js file.
*/