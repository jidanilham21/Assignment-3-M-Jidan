function isArithmeticProgression(numbers) {
    if (numbers.length <= 1) return true;
    
    let diff = numbers[1] - numbers[0];
    
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== diff) {
            return false;
        }
    }
    
    return true;
}
//  M JIDAN ILHAM ICHLASUL AMAL
console.log(isArithmeticProgression([1, 2, 3, 4, 5])); 
console.log(isArithmeticProgression([2, 4, 6, 8])); 
console.log(isArithmeticProgression([2, 4, 6, 9])); 
console.log(isArithmeticProgression([2, 4, 8])); 
console.log(isArithmeticProgression([2, 8, 14, 20, 26])); 
