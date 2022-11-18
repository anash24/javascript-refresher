let number = 0;


function myFunction() {
    let name = document.getElementById('name').value
    let animal = document.getElementById('animal').value
    document.getElementById('message').innerHTML=('hello ' + name + '. Dont you wish you were a ' + animal + '?')
}

function changeColor() {
    let name = document.getElementById('name').style.backgroundColor = "red"
    
}

