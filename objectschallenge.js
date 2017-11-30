//i = 1
var text = " "
var cars = {
  make: "Honda",
  modelYear: "2012",
  color: "black",
  // accelerate: speed + 10
  carInfo: function() {
    return this.make + " " + this.modelYear + " " + this.color
  },
  speed: 20,
    getSpeed: function() {
    return this.speed
  },
    accelerate: function() {
     this.speed = this.speed + 10
  } ,
    brake: function () {
      this.speed = this.speed - 7
    }
}
function speedUp(ourCar) {
  while (ourCar.speed <= 85) {
   ourCar.accelerate();
   if (ourCar.speed = 85) {
     return 85;
   }
 }
}
function slowDown(ourCar) {
  while (ourCar.speed > 0) {
    ourCar.brake();
    if (ourCar.speed = 0) {
    return 0;}
  }
}
