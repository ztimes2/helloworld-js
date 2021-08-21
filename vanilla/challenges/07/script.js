const mark = {
  firstName: "Mark",
  lastName: "Miller",
  heightInMeters: 1.69,
  massInKilograms: 78,
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  
  calculateBMI: function() {
    this.bmi =  this.massInKilograms / this.heightInMeters ** 2;
    return this.bmi;
  }
};

const john = {
  firstName: "John",
  lastName: "Smith",
  heightInMeters: 1.95,
  massInKilograms: 92,
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  
  calculateBMI: function() {
    this.bmi =  this.massInKilograms / this.heightInMeters ** 2;
    return this.bmi;
  }
};

if (mark.calculateBMI() > john.calculateBMI()) {
  console.log(`${mark.fullName()}'s BMI (${mark.bmi}) is higher than ${john.fullName()}'s (${john.bmi})!`);
} else {
  console.log(`${john.fullName()}'s BMI (${john.bmi}) is higher than ${mark.fullName()}'s (${mark.bmi})!`);
}
