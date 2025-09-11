let minutes = 96;
let speed = 30;
let distance = 0;

for (let i = 0; i < minutes; i += 10) {
    let travelTime = Math.min(10, minutes - i);
    distance += (speed * travelTime) / 60;
    speed = speed * 2;
    if (speed > 120) speed = 120;
}

console.log("Total distance travelled:", distance.toFixed(2), "km");