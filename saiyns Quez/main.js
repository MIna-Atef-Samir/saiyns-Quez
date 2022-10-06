const correctAnswers = ['A', 'C', 'A', 'B'];
const form = document.querySelector('form')
const result = document.querySelector('.score')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswer.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score +=25
        }
    })

    scrollTo(0,0)
    console.log(score);

result.setAttribute('style', 'display: block')

let i = 0;
const timer = setInterval(() =>{
    result.querySelector('span').textContent = `${i}%`
    if(i === score){
        clearInterval();
    }else{
        i++
    }
},20)
})