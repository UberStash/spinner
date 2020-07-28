let time = 300;
const animationArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (let animation of animationArr) {
setTimeout(() => {
  process.stdout.write(animation);
  //console.log(animation)
}, time);
time += 300;
}

