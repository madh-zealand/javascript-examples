// Recap of the most common ways to select html elements in javascript.

/**
 * `getElementById` returns an element matching the specific id.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const firstCellElement = document.getElementById(
  'firstCell',
);

/**
 * `querySelector` returns the first element within the document that matches the
 * specified CSS selector.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * You can also read more about CSS selectors:
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators
 */
// Select by id, using `#` as the prefix.
const middleCellElement = document.querySelector(
  '#middleCell',
);
// Select by class, using `.` as the prefix.
const firstEvenElement = document.querySelector(
  '.even',
);
// Select by element, using no prefix.
const bodyElement = document.querySelector(
  'body',
);

/**
 * `querySelectorAll` returns a list of all elements within the document that matches
 * the specified CSS selector.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * You can also read more about CSS selectors:
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators
 */
// Select all elements with both the classes `cell` and `even` on the page.
const evenCellElements = document.querySelectorAll(
  '.cell.even',
);

/**
 * Function that writes all the elements we have selected to the console.
 * Move your mouse over the elements logged to the console, and it should
 * highlight the element in the page. (Works in Chrome)
 *
 * Try calling this in the console:
 *    `logSelections();`
 */
function logSelections() {
  console.log('firstCellElement', firstCellElement);
  console.log('middleCellElement', middleCellElement);
  console.log('firstEvenElement', firstEvenElement);
  console.log('bodyElement', bodyElement);
  console.log('evenCellElements', evenCellElements);
}
