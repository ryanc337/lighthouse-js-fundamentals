const raining = true;
const cold = false;
const temperature = 12;

if (raining) {
  console.log("Don't forget your umbrealla!");
}

if (cold) {
  console.log("make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}
  else {
  console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
