



function signup(){
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var mail = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('pwd');
    var images = document.getElementById('image');
    var password =document.getElementById('');
    var confirmpassword=document.getElementById('');
        sessionStorage.setItem('name', name.value);
        sessionStorage.setItem('surname',surname.value);
        sessionStorage.setItem('mail',mail.value);
        sessionStorage.setItem('phonenumber',phoneNumber.value);
        sessionStorage.setItem('imagess', images.value);
        sessionStorage.setItem('Password', password.value);
        sessionStorage.setItem('imagess', confirmpassword.value);
      
        
     
        alert('Your account has been created');
        window.open("LogIn.html");
    }
    
    function signin(){
        var logmail=sessionStorage.getItem('mail');
        var lopw=sessionStorage.getItem('Password');
        var maibox=document.getElementById('email').value;
        var passbox=document.getElementById('pwd').value;
        var location = '';
        if(maibox != logmail ){
            alert("Wrong Email") ;
    this.location.href = location;
        }
        else if(passbox != lopw){
          alert("Wrong Password");
        }else{
            alert("Welcome " +sessionStorage.getItem('name'));
    window.open("Home.html");
        }
    }
    
    