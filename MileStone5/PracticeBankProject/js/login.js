document.getElementById("btn-submit").addEventListener("click", function(){

    const rmailfeld = document.getElementById('email').value;
    // console.log(rmailfeld)

    const passwordfeld = document.getElementById('password').value;
    // console.log(passwordfeld)

    if (rmailfeld  && passwordfeld ) {
        window.location.href = 'Bank.html'
        
    }
    else{
        console.log('user  not valid')

    }

})