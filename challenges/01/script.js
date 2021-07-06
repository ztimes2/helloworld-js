const markHeightInMeters = 1.69;
const markMassInKilograms = 78; 

const johnHeightInMeters = 1.95;
const johnMassInKilograms = 92;

let isMarkBMIHigher;
isMarkBMIHigher = markMassInKilograms / markHeightInMeters ** 2 > johnMassInKilograms / johnHeightInMeters ** 2;

console.log(isMarkBMIHigher);