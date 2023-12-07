/**
 * Task.

Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints

Ignore dots.

All triangles will be right isoceles.

Example:

.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5
 */

function tArea(tStr) {
  let count = 0;
  for (let i = 0; i < tStr.length; i++) {
    if (tStr[i] === '\n') count++;
  }
  const area = (count - 2) ** 2 / 2;
  return area;
}
