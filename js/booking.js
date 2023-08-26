document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
        var regPhone = /^\d{10}$/;
        var regName= /^[A-Z a-z]+$/
        var phoneno=document.forms.bookingForm.phone.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var name=document.forms.bookingForm.name.value;
        var email=document.forms.bookingForm.email.value;
        var address=document.forms.bookingForm.address.value;
        var date=document.forms.bookingForm.date.value;
        if(name==null || name=="")
        {
          document.getElementById("errname").innerHTML = "**Enter a  valid name**";
          return false;
        }
        else if (name.match(regName) ){
            document.getElementById("errname").innerHTML = "";
          }
          else{
            document.getElementById("errname").innerHTML = "Name should only contain letters";
          }
         if(phoneno==null || phoneno==""){
          document.getElementById("errphoneno").innerHTML = "**Enter a valid phone number**";
          return false;
        }
        else if (phoneno.match(regPhone) ){
          document.getElementById("errphoneno").innerHTML = ""; 
            }
          else{
            document.getElementById("errphoneno").innerHTML = "**Phone number should contain 10 numbers**";
          }
        if(email==null || email==""){
          document.getElementById("erremail").innerHTML = "**Enter your email**";
          return false;
        }
        else if (email.match(mailformat))
        {
          document.getElementById("erremail").innerHTML = "";

        }
        else{
          document.getElementById("erremail").innerHTML = "Enter a valid mail format";
        }
       if(address==null || address=="" ){
          document.getElementById("erraddress").innerHTML = "**insert your address**";
          return false;
        }
        else{
          document.getElementById("erraddress").innerHTML = "";
        }
      
        if(date==null || date==""){
          document.getElementById("erredate").innerHTML = "**Insert a date**";
          return false;
         }
         else{ 
          document.getElementById("erredate").innerHTML ="";
          alert("successfully booked,will contact u shortly");
          document.getElementById("bookingForm").reset();
        }
        
         }
        );
