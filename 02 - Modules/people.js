let person1 = "Shreyansh";
let person2 = "Tahmil";
let person3 = "Vivek";

/*
So, now if you want to use these same variables outside of this file.
So, how do we do it..?
    ->First we have to tell other files you can use these variables.
*/

// We just exported person1
// module.exports = person1;

/*
So, now what if we also want person2 and person3 inside the other files, how can I use that..?

    -> When exporting multiple items, we wrap them in an object
    -> This object is returned when require() is used
*/

module.exports = { person1, person2, person3 };
