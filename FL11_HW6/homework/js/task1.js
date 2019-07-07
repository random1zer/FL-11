const a1 = prompt('Enter x for point A');
const a2 = prompt('Enter y for point A');
const b1 = prompt('Enter x for point B');
const b2 = prompt('Enter y for point B');
const c1 = prompt('Enter x for point C');
const c2 = prompt('Enter y for point C');

const mid_x = (a1 + b1) / 2;
const mid_y = (a2 + b2) / 2;

if (mid_x === c1 && mid_y === c2) {
  console.log(true);
 }else {
  console.log(false);
}




