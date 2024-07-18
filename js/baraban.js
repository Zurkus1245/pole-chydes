
let slovo=document.getElementById('slovo')
let vopros=document.getElementById('vopros')
let in1=document.getElementById('in1')
let butbukva=document.getElementById('butbukva')

const spisokslov=['кошка']
let word=[]
let wordgame=[]
window.onload=start //событие при перезапуске страницы

function start(){//загадывает слово
    let rnd=Math.floor(Math.random()*spisokslov.length)
    console.log('загадано', spisokslov[rnd])
    word = spisokslov[rnd].split('')
    console.log(word)
    for (i=0;i<word.length;i++){
        wordgame.push('*')
    }
    console.log(wordgame)
    slovo.innerText = wordgame.join(' ')
    vopros.innerText +=' '+ wordgame.length +' букв'
}

butbukva.onclick = ugadai
function ugadai(){
    let bukva = in1.value
    for (i=0;i<word.length;i++){
        if (word[i]===bukva){
            console.log('есть такая буква')
            wordgame[i]=bukva
        }}
    if (!word.includes(bukva)){
        console.log('нет такой буквы')
    }
/*
&& и
|| или
 ! не
*/
    slovo.innerText = wordgame.join(' ')
    in1.value=''
    proverka()
}

function proverka() {
    if (wordgame.indexOf('*') === -1) {
        console.log('поздравляем')
        butbukva.hidden = true
    }
    else {
    console.log('крутите барабан')
    }
}

///////////////////////////////////
let baraban=document.getElementById('baraban')
let butbaraban=document.getElementById('butbaraban')

let sector=22.5
let rotate=0
const prizes=['','x2',900,100,'Ш',700,'x3',200,300,500,
'Б',0,'x5',400,'+',800,600]
let numprize=0

butbaraban.onclick=roll
function roll(){
    let rnd=Math.floor(Math.random()*16)+1
    rotate+=360+rnd*sector
    baraban.style = 'transform:rotate(-'+String(rotate)+'deg)'
    console.log(rotate,rnd)
    numprize+=rnd
    if (numprize>16){
        numprize-=16
    }
    console.log('выпало',prizes[numprize])
}



