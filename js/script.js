// Byt namn på första hoodien från Ash till Potato.

let firstArt = document.querySelector('.art-1')
firstArt.children[2].innerText='Potato'

// Byt namn på Home till Start.

let nav = document.querySelector('nav')
nav.children[0].innerText = 'Start'

//Byt namn på Contact till Mail Us.

nav.children[2].innerText = 'Mail Us'

//Byt ut informationen om Sinus Hoodie - Fire.

let secondArt = document.querySelector('.art-2')
secondArt.children[3].innerText = 'Buy this super cool hoodie!'

//Byt bakgrundsfärg och text på en knapp.

secondArt.children[4].style.backgroundColor = 'seagreen'
secondArt.children[4].innerText = 'Purchase'

//Byt bakgrundsfärg på någon av produkterna.

secondArt.style.backgroundColor = 'darkgray'
secondArt.style.color = 'white'

//Byt ut adressen på sidan.

let footer = document.querySelector('footer section')
let address = footer.children[1].children[1]
address.innerHTML = 'blabla</br>Skateboardvägen 3</br>123 45 Staden'

// Byt färg på samtliga <p>.

let paragraph = document.getElementsByTagName('p')
paragraph[0].style.color = 'blue'
paragraph[1].style.color = 'blue'
paragraph[2].style.color = 'blue'
paragraph[3].style.color = 'blue'

//Ändra text på samtliga knappar till add to cart.

let buttons = document.getElementsByTagName('button')

for (let i = 0; i < 3; i++) {
    buttons[i].innerText = 'add to cart'
}

//Lägg till classen active på menyalternativet home.

nav.children[0].classList.add('active')

//Ta bort classen logo på logotypen.

let header = document.querySelector('header')
header.children[0].classList.remove(logo)

// Lägg till ett nytt menyalternativ.


