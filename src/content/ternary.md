---
title: Ternary operators 
author: Giovani Fouz Jiménez
description: How to simplify your code with...
img: golden.jpg
date: febraury 17, 2022
---

## Check Data Quickly with the Ternary Operator

I love simple code. I’ll always try to get
an expression reduced down to the fewest characters I can.
I used to code as the following snippet shows some time back:

```js
    if(active) {
        var display = 'bold'
      }else {
        var display = 'normal'
    }
```
But when i get to know 'ternary operators' 
I simplified the code to a one-line expression 
and my code has never been the same.

```js
 var display = active ? 'bold' : 'normal';   

```

Ternary operators are common in most languages, and they allow you to
do a quick if/then check. (Although they aren’t exclusively for this
purpose, it is by far the most common usage.) If the ternary operator
isn’t new, why should it interest me? In returning to some of the
larger themes we’ve been exploring, ternary expressions allow your
code to be not just more simple as I’ve mentioned, but also more pre-
dictable. They do this because they cut down on the number of
variables that are being reassigned. Besides, with new variable types,
we hit some problems with excessive if/else statements. If you try to
check a variable and you’re using a block scoped variable, you won’t
be able to access the variable outside of the check.

```js
 if (title === 'manager') {
    const permissions = ['time', 'pay'];
    } else {
    const permissions = ['time'];
    }
    permissions;
// ReferenceError: permissions is not defined

```
Now you’re forced to either use  var , which is accessible outside the block
scope, or you have to define the variable with  let and then reassign it inside
the  if/else block. Here’s how it would look with the assignment before the block:

```js
 if (title === 'manager') {
    const permissions = ['time', 'pay'];
    } else {
    const permissions = ['time'];
    }
    permissions;
// ReferenceError: permissions is not defined

```
Before  let and  const , we didn’t have to worry so much about when variables
were created. Now, in addition to excessive code, there’s a potential for scope
conflicts.
Ternary expressions solve these problems. Clearly, they cut down on a lot of
extra code. But they also allow us to be more predictable by assigning a
value directly to  const . How could you rewrite the preceding code to use  const
and a ternary?

```js
 const permissions = title === 'manager' ? ['time', 'pay'] : ['time']

```
Much cleaner and you now have a predictable value.
There’s one caution we should keep in mind: Though we can chain multiple
ternary expressions together, we should avoid doing so.
Ternary expressions can simplify things, but use them when they add value
and go back to standard 'if blocks' if they create too much ambiguity.
