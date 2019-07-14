function formatTime(minutes) {

  const min = minutes % 60;
  const hour = Math.floor(minutes % 1440 / 60);
  const day = Math.floor(minutes / 1440);
  return `${day} day(s) ${hour} hour(s) ${min} minute(s).`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));