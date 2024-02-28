let names = document.querySelector('.name')
let text = document.querySelector('.text')
let number = document.querySelector('.number')
let ong = document.querySelector('.ong')
let btn = document.querySelector('.btn')


function umar() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('input-text');

    let newP = document.createElement('p')
    newP.textContent = names.value
    let newb = document.createElement('p')
    newb.textContent = text.value
    let newd = document.createElement('p')
    newd.textContent = number.value

    newP.classList.add('newp')
    newb.classList.add('newb')
    newd.classList.add('newd')
    
    let minusBtn = document.createElement('button');
    minusBtn.classList.add('del')
    minusBtn.textContent = 'delete';
    minusBtn.addEventListener('click', function () {

        newDiv.remove()
    })

    newDiv.appendChild(newP);
    newDiv.appendChild(newb);
    newDiv.appendChild(newd);
    newDiv.appendChild(minusBtn);

    ong.appendChild(newDiv)

    names.value = ''
    text.value = ''
    number.value = ''
}

btn.addEventListener('click', umar)