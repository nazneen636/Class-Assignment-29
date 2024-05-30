// ===============================================
const result= document.getElementById('result')
const btn= document.getElementById('btn')


btn.addEventListener('click', function(){
    const form= document.querySelector('form')
    const name= document.getElementById('name')
    const age= document.getElementById('age')
    const writtenScore= document.getElementById('written-score')
    const vivaScore= document.getElementById('viva-score')

    result.classList.add('result-div')
    result.innerHTML= name.value+ ' '+ 'your written marks is '+ writtenScore.value+ ' and '+ 'your viva marks is '+ vivaScore.value 
    form.style.backgroundColor = "rgb(219, 239, 242)";
    name.classList.add('red')
    writtenScore.classList.add('red')
    vivaScore.classList.add('red')
})