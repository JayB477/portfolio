function submitcontactform(){
     alert('Hellos');
     var x= document.forms["contactform"]["email"].value;
     if (x==""){
         alert("Email must be filled out");
         return false;
     }else{
         alert('thank you for sbmiting your content')
     }
}