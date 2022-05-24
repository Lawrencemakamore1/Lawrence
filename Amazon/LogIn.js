


function signup(){
    var name = document.getElementById('Name');
    var surname = document.getElementById('Surname');
    var mail = document.getElementById('Email');
    var phoneNumber = document.getElementById('Number');
   
    var images = document.getElementById('file');
    var password =document.getElementById('Password');
    var confirmpassword=document.getElementById('confirmPassword');
        sessionStorage.setItem('Name', name.value);
        sessionStorage.setItem('Surname',surname.value);
        sessionStorage.setItem('Email',mail.value);
        sessionStorage.setItem('Number',phoneNumber.value);
        
        sessionStorage.setItem('password', password.value);
        sessionStorage.setItem('confirmPassword', confirmpassword.value);
    
      if(name.value.length== 0 &&name.value.length<=6){
            alert('Please fill in your Name');
            return true;
           
        }
        if(surname.value==""){
            alert('Please fill in Last Last');
            return false;
        }
         if(mail.value==""){
            alert('Please fill in yor email');
            return false;
        }if( phoneNumber.value==""){
            alert('Please fill in Contact number');
            return false;
        } if(images.value==""){
            alert('Please pick an image');
            return false;
        } if(password.value==""){
            alert('Please fill in your password');
            
        }if(confirmpassword.value==""){
            alert('Please enter a matching password');
            
        }
    
     
        alert('Your account has been created, Redirecting you to Login Page');
        window.open("LogIn.html");
    }
    
    function signin(){
        var logmail=sessionStorage.getItem('Email');
        var pw=sessionStorage.getItem('password');
        var mailbox=document.getElementById('Email').value;
        var passbox=document.getElementById('Password').value;
        var location='';

        
        if(mailbox == logmail && passbox ==pw ){

            alert("Your Email & Password correct") ;
            alert("Welcome " +sessionStorage.getItem('Name'));
            window.open("Home.html");
           
            
            
        } else if(mailbox==''&&passbox==''){
            alert("Your Email & Password empty");
        }
        else if(mailbox !=logmail &&passbox != pw ){
          alert("Wrong Email or Password");
        }
       
      
    
};

function changeTheImage(){
    const img=document.getElementById("userimage");
    img.src=sessionStorage.getItem("file");
    document.getElementById("person-name").innerText = sessionStorage.getItem("Name");
}
