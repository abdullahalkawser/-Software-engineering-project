console.log('this is even js ')

function makered(){
    document.body.style.background = 'red'
}
function makepink(){
    document.body.style.background = 'hotpink'
}



const btnclick = document.getElementById('clikyallow');
btnclick.onclick= yallow


function yallow(){
document.body.style.background = 'yellow'
}




const btngreenclick = document.getElementById('clik-green');
btngreenclick.addEventListener('click', function yallows(){
document.body.style.background = 'green'
}
)


const btnblueclick = document.getElementById('clik-blue');
btnblueclick.addEventListener('click', yallowsy)

function yallowsy(){
document.body.style.background = 'black'
}


// final use forr every day 
document.getElementById('clik-rod').addEventListener('click', function makeGolden(){
    document.body.style.background = 'goldenrod'
})





