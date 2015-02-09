# node-exercises
These are Node exercises from nodeschool website

#### Exercise Hello World

Create a file with extension .js. Once created display by standard output "HELLO WORLD"

#### Exercise Baby Steps

Create a file with extendio .js. As you know, you can access command-line arguments via the global process object. The process object has an argv property which is an array containing the complete command-line. i.e. process.argv.

To get started, write a program that simply contains:

    console.log(process.argv)

Run it with node program.js and some numbers as arguments. e.g:

    $ node program.js 1 2 3

In which case the output would be an array looking something like:

    [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

You'll need to think about how to loop through the number arguments so  you can output just their sum. The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

Also be aware that all elements of process.argv are strings and you may need to coerce them into numbers. You can do this by prefixing the property with + or passing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).

#### Exercise My first I/O

Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

-------------------------------------------------------------------------------

##### HINTS

To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:

    var fs = require('fs')

Now you have the full fs module available in a variable named fs.

All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/lib/node_modules/learnyounode/node_apidoc/fs.html

Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().

Documentation on Buffers can be found by pointing your browser here:
  file:///usr/lib/node_modules/learnyounode/node_apidoc/buffer.html

If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript String can be .split() into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.

#### Exercise My first Async I/O

Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

-------------------------------------------------------------------------------

##### HINTS

The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous.

Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out: [https://github.com/maxogden/art-of-node#callbacks](https://github.com/maxogden/art-of-node#callbacks).

Remember that idiomatic Node.js callbacks normally have the signature:

    function callback (err, data) { /* ... */ }

so you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your Buffer object as the second argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/lib/node_modules/learnyounode/node_apidoc/fs.html

