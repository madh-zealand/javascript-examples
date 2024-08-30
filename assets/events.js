// Recap of the most common ways to listen for events in JavaScript.

/**
 * You can catch a click on an element by adding an event listener to it.
 * Here we write a log to the console when clicking on the first button.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 */
const firstButtonElement = document.getElementById(
  'firstButton',
);
firstButtonElement.addEventListener(
  'click',
  () => {
    console.log('First: Clicked!');
  },
);

/**
 * You can prevent the default behavior of an element, such as a link
 * navigating to a new page, by calling `event.preventDefault()` in your
 * event listener.
 *
 * Try to remove `event.preventDefault()` and click the "Second Button" to
 * see what happens.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
 */
const secondButtonElement = document.getElementById(
  'secondButton',
);
secondButtonElement.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    console.log('Second: Clicked!');
  },
);

/**
 * There is a *lot* of different events you can listen for.
 * Here is some examples of events other than just click.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
const thirdButtonElement = document.getElementById(
  'thirdButton',
);
thirdButtonElement.addEventListener(
  'dblclick',
  () => {
    console.log('Third: Double clicked!');
  },
);
thirdButtonElement.addEventListener(
  'mouseover',
  () => {
    console.log('Third: Mouse over!');
  },
);
thirdButtonElement.addEventListener(
  'mouseout',
  () => {
    console.log('Third: Mouse out!');
  },
);
thirdButtonElement.addEventListener(
  'mousemove',
  () => {
    console.log('Third: Mouse move!');
  },
);

/**
 * It's also possible to listen to events that are not mouse related.
 * For example, we can listen to animation events, if you want to do something
 * special when an animation is started, completed or cancelled.
 * See the styling for `.eventTest .button.animated:hover` in {@see style.css}.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/animationcancel_event
 */
const fourthButtonElement = document.getElementById(
  'fourthButton',
);
fourthButtonElement.addEventListener(
  'animationstart',
  () => {
    console.log('Fourth: Animation started!');
  },
);
fourthButtonElement.addEventListener(
  'animationend',
  () => {
    console.log('Fourth: Animation ended!');
  },
);
fourthButtonElement.addEventListener(
  'animationcancel',
  () => {
    console.log('Fourth: Animation canceled!');
  },
);

/**
 * All events contain some data about the event
 * For example, the `click` event has a `ctrlKey` property
 * that tells you whether the Ctrl key was pressed when the event occurred.
 *
 * This example show the state of the modifier keys Ctrl, Shift and Alt when
 * the event occurred.
 * And also logs the entire event object to the console. There is a lot you
 * probably never use, but it can be useful to know that it exists.
 *
 * If you want to read more:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/mouseover_event
 */
const fifthButtonElement = document.getElementById(
  'fifthButton',
);
// Store the event listener in a variable so we can remove it later.
const fifthEventListener = (event) => {
  console.log(
    'Fifth: Clicked!'
    + ' | Ctrl: ' + event.ctrlKey
    + ' | Shift: ' + event.shiftKey
    + ' | Alt: ' + event.altKey,
  );
  console.log(event);
};
fifthButtonElement.addEventListener(
  'click',
  fifthEventListener,
);

/**
 * This function removes the event listener from the fifth button.
 * To remove an event listener, you need to call `removeEventListener`
 * with the same arguments as when you added the listener.
 *
 * Try calling this in the console:
 *    `removeListener();`
 */
function removeListener() {
  fifthButtonElement.removeEventListener(
    'click',
    fifthEventListener,
  );
  console.log(
    'Fifth: Click listener removed! '
    + 'Clicking the fifth button now does nothing.',
  );
}