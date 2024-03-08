var transportation: string[]= ["bike","car","truck"];

var  statements: string[]= ["I like to drive","I love to drive","I hate to drive"];

var len:number = transportation.length

for (let index: number = 0; index <len; index++) {
     console.log(` ${transportation[index]} ${statements[index]}`)
}