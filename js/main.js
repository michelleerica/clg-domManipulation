function changeColor (){
    document.querySelector('.div-with-class').classList.toggle('new-class')
}

// find button
// attach event listener to CLICK
// call changeColor when i click

document.querySelector('#myBtn').addEventListener('click', changeColor)