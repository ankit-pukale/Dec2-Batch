//guessing the number
let randomNumber=Math.floor(Math.random()*6)+1
console.log(randomNumber)

// for(let i=1;i<=5;i++){
// let userInput=prompt('Enter your Number:')
//     if(randomNumber==userInput){
//         console.log('your guess is correct')
//         break
//     }else{
//         console.log(`your guess is incorrect you have ${5-i} chance left`)
//     }
// }
let userInput
while(userInput!=randomNumber){
    userInput=prompt('Enter your Number:')
    if(randomNumber==userInput){
        console.log('your guess is correct 😊')
        break
    }else{
        console.log('your Guess is incorrect ☹️')
    }
}


