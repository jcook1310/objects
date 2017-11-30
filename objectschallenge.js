var cars = {
  make: "Honda",
  modelYear: "2012",
  color: "black",
  // accelerate: speed + 10
  carInfo: function() {
    return this.make + " " + this.modelYear + " " + this.color
  },
  speed: 120,
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
