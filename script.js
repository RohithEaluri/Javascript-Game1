const cardArray = [ 
   {
    name: 'reyna',
    img: 'images/reyna.png',
   },
   {
    name: 'viper',
    img: 'images/viper.png',
   },
   {
    name: 'yoru',
    img: 'images/yoru.png',
   },
   {
    name: 'omen',
    img: 'images/omen.png',
   },
   {
    name: 'jett',
    img: 'images/jett.png',
   },
   {
    name: 'brim',
    img: 'images/brim.png',
   },
   {
    name: 'reyna',
    img: 'images/reyna.png',
   },
   {
    name: 'viper',
    img: 'images/viper.png',
   },
   {
    name: 'yoru',
    img: 'images/yoru.png',
   },
   {
    name: 'omen',
    img: 'images/omen.png',
   },
   {
    name: 'jett',
    img: 'images/jett.png',
   },
   {
    name: 'brim',
    img: 'images/brim.png',
   }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultdisplay = document.querySelector('#result')
let cardsChosen = []
let cardschosenIds = []
const cardswon = []

function createBoard(){
 for(let i=0;i<cardArray.length;i++){
   const card=document.createElement('img')
   card.setAttribute('src', 'images/blank.png')
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipcard)
   gridDisplay.appendChild(card) 

}
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    if(cardsChosen[0] == cardsChosen[1]){
        cards[cardschosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardschosenIds[1]].setAttribute('src', 'images/blank.png')
        alert(' you have clicked the same image')
    }
    if (cardsChosen[0]== cardsChosen[1]){
        cards[cardschosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardschosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardschosenIds[0]].removeEventListener('click', flipcard)
        cards[cardschosenIds[1]].removeEventListener('click', flipcard)

        cardswon.push(cardsChosen)
    }
    else{
        cards[cardschosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardschosenIds[1]].setAttribute('src', 'images/blank.png')
        alert('Try again')
    } 
    resultdisplay.innerHTML = cardswon.length
    cardsChosen=[]
    cardschosenIds=[]

    if(cardswon.length == (cardArray.length/2)){
        resultdisplay.innerHTML= 'You are my most beautiful girl bandu - RE'
    }
}
function flipcard(){
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardschosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkMatch, 500)
    }

}
createBoard()