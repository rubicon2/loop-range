# loop-range

Loops a number within a specified range - useful for repeatedly cycling through array elements, or looping an object position from one side of the screen to the other in a pac-man style game.

The returned value is offset from the min/max value by how far the input value was beyond the max/min value. So if you have a moving object and it overshoots the max screen position by 50, the returned value will be the min value + 50. Likewise, if it goes -50 below the min screen position, it will return the max value - 50.

## Installation

```bash
npm install loop-range
```

## Usage

```js
import { loopInt, loopNumber } from 'loop-range';

const result = loopInt(min, max, value);
```

## Examples

### Looping array indices

```js
import { loopInt } from 'loop-range';

// With code like this you can easily loop from 'c' to 'a' over and over,
// e.g. if you wanted to repeatedly cycle through some array elements.
const someArray = ['a', 'b', 'c'];
let index = 0;

setInterval(() => {
  console.log(someArray[index]);
  index = loopInt(0, someArray.length, index + 1);
}, 1000);
```

### Looping positions

```js
import { loopNumber } from 'loop-range';

// For the sake of example, go from -960 to 960 instead of the obvious choice of 0 to 1920.
const MIN_X_POS = -960;
const MAX_X_POS = 960;
const MOVE_SPEED = 500;
let current_x_pos = 0;

// Imagine this is some kind of physics update tick.
setInterval(() => {
  console.log(current_x_pos);
  const fake_delta = Math.random();
  current_x_pos = loopNumber(
    MIN_X_POS,
    MAX_X_POS,
    current_x_pos + MOVE_SPEED * fake_delta,
  );
}, 1000);
```
