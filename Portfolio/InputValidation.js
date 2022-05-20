 


    function sendEmail(name,email,phone,feed){
       Email.send({
          Host: "smtp.gmail.com",
          username: "lawrencemakamore1@gmail.com",
          Password: "makakamore",
          To: "makamoke0424@gmail.com",
          From: document.getElementById("email").value,
          subject: "New Enquiry",
          Body: "Name: " + document.getElementById("nameSurname")<br>
                +"Email: " + document.getElementById("email")
                +"Phone: " + document.getElementById("Phone")<br>
                +"Enquiry: " + document.getElementById("feed"),
        }).then((message) => alert("Enquiry recieved, we will be in touch"));

    }
 