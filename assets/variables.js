// Recap of the different ways to declare variables.

/**
 * Defining a read-only variable.
 * The value can't be changed after it is assigned.
 *
 * Try changing this in the console:
 *    `greeting = 'Yo';`
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
const greeting = 'Hello';

/**
 * Defining a writable variable.
 * The value can be changed after it is assigned.
 *
 * Try changing this in the console:
 *    `name = 'Brendan Eich';`
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */
let name = 'Person';

/**
 * Defining a variable in the old school way.
 * Using `var` is not common in modern javascript, but I include it here for
 * information, as it is not uncommon to stumble across this used in older
 * tutorials around the web.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */
var type = 'Old School';

/**
 * Function that writes a personal greeting to the console.
 *
 * Try calling this after you change the variables:
 *    `greet();`
 */
function greet() {
  console.log(greeting + ' ' + name + '!');
}
