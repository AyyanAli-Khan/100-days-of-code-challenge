function getAverageScore(...score:number[]):number {
    let totalScore = score.reduce((a: number, b:number):number =>  a + b)
    return totalScore / score.length;
}

console.log(getAverageScore(45,78,89,90)); // output : 75.5
