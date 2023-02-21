alert('Working')

document.querySelector('button').addEventListener('click', getRapName)


async function getRapName(){
    const rapName = document.querySelector('input').value
    try {
        const res = await fetch(`htttp://localhost:8000/api/rappers/${rapNmae}`)
        const data = await res.json()
    
        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(err) {
        console.log(err)
    }
    
}



// what is an event loop


// the call stack - one thred == one call stack == one thing at a time


function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n,n);
}

function printSquare(n) {
    var squared = square(n);
    console.log(squared);
}

printSquare(4);



function foo () {
    return foo();
}


// set Timeout
 console.log('Hi');

 setTimeout(function cb() {
    console.log('there');
 }, 5000);

 console.log('JSConfEU');