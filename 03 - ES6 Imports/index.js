// Entry File (ES Modules)

/*
====================================================
ES Modules (Modern Import/Export)
====================================================

Key differences from CommonJS:
- Uses 'import' and 'export'
- Must include file extension (.js)
- Works in strict mode by default
*/

import greet from "./greet.js";
import { person1, person2, person3 } from "./people.js";

greet(person1);
greet(person2);
greet(person3);

/*
====================================================
Important Notes
====================================================

1. File Extension is Mandatory
   - "./greet.js" ✅
   - "./greet" ❌ (will throw error)

2. __filename and __dirname are NOT available
   - These are CommonJS features
*/

// console.log(__filename); // ❌ Error
// console.log(__dirname);  // ❌ Error


/*
********** Mental Model ************

-> Default export -> "main thing" from a file
-> Named exports -> "multiple specific things" from a file
-> Import -> explicitly pull what you need
*/


/*
*********** Static vs Dynamic ***********
This is a big one:

1. import is static
    → analyzed before execution

2. require() is dynamic
    → runs during execution

This makes ES Modules:

    -> Faster to optimize
    -> Better for tooling (tree-shaking, bundlers)

*/