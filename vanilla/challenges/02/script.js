const markHeightInMeters = 1.69;
const markMassInKilograms = 78; 
const markBMI = markMassInKilograms / markHeightInMeters ** 2;

const johnHeightInMeters = 1.95;
const johnMassInKilograms = 92;
const johnBMI = johnMassInKilograms / johnHeightInMeters ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
