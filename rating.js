let ratings =[
    {star: 1, value: 'Poor'},
    {star: 2, value: 'Good'},
    {star: 3, value: 'Very good'},
    {star: 4, value: 'Satisfactory'},
    {star: 5, value: 'Excellent'}
]

let feedback = document.querySelectorAll('.rate');
let rates = [...feedback]; //transforming 'feedback' from object to array

let starIcon = document.querySelector('.icon-star');
let survey = document.querySelector('.survey');
let ratingSection = document.querySelector('.ratings');
let btn = document.querySelector('#submit-btn');
let grade;
let rank; //star value
let thankYou = document.querySelector('.thank-you');
let displaySelected = document.querySelector('.display-selected');

// get ratings
rates.forEach(function(rate){
    rate.addEventListener('click', ()=>{
        grade = rate.id;
                rank = ratings[grade-1].value;
        return grade;
    })
})

btn.onclick = function(){
    console.log(`${grade} star(s): ${rank}`);
    starIcon.style.display = 'none';
    survey.style.display = 'none';
    ratingSection.style.display = 'none';
    btn.style.display = 'none';
    thankYou.style.display = 'block';
    displaySelected.textContent = (`You selected ${grade} out of 5`);
}