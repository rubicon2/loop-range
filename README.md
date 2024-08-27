# loop-range

Loops a number within a specified range - useful for looping array indices back to zero without having to worry about going out of bounds, or looping an object position from one side of the screen to the other in a pac-man style game. Works with any range or value.

## Usage

```js
// loopNumber is for float-type values
import { loopInt, loopNumber } from 'loop-range';

// With code like this you can easily loop from 'c' to 'a' over and over,
// e.g. if you wanted to repeatedly cycle through some array elements.
const someArray = ['a', 'b', 'c'];
let index = 0;
setInterval(() => {
  console.log(someArray[index]);
  index = loopInt(0, someArray.length, index + 1);
}, 1000);
```

## Examples

```js
// returns 0
loopInt(0, 5, 5);

// returns 1
loopInt(0, 5, 6);

// returns 4
loopInt(0, 5, -1);

// returns -5
loopInt(-5, 5, 5);

// returns -4
loopInt(-5, 5, 6);

// returns 4
loopInt(-5, 5, -6);
```
