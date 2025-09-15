const button =document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
        // console.log(e)
        // console.log(e.target)
        if (body.style.backgroundColor === e.target.id) {
            // if body already has that color → reset to white
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else {
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color='black'
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor = e.target.id;
            body.style.color='white'

        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color='white'

        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color='green'

        }
    }

    })
})

