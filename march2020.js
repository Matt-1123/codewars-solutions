// ------ SAT 3/2/19 ------
// Growing Plant (7kyu)
// Desc: Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let day = 1;
  if(height >= desiredHeight){return day}
  while(height < desiredHeight){
    height += upSpeed;
    if(height >= desiredHeight){
      break;
    }
    height -= downSpeed;
    day++;
  }
  return day; 
}