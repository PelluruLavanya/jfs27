let users=[];
console.log(forms.registerform.CPassword);

function register(event)
{
  event.preventDefault();
//   console.log(event.target);
//   console.log("hi");

let form=document.forms.registerform;
let nameEle=form.name;
let phNoEle=form.phNo;
let emailEle=form.email;
let passwordEle=form.password;
let CPasswordEle=form.CPassword;


let name=form.name.value;
let phNo=form.phNo.value;
let email=form.email.value;
let password=form.password.value;
let CPassword=form.CPassword.value;

let error=false;

if(name=="")
    {
       nameEle.style.border="2px solid red";
       error=true;
    }
    if(phNo=="")
        {
           nameEle.style.border="2px solid red";
           error=true;
        }
    
        if(email=="")
            {
               nameEle.style.border="2px solid red";
               error=true;
            }
        
            if(password=="")
                {
                   nameEle.style.border="2px solid red";
                   error=true;
                }
            
                if(CPassword=="")
                    {
                       nameEle.style.border="2px solid red";
                      error=true;
                    }
                    if(error){
                        return;
                    }
                    let phNoPattern=/[6789][0-9]{9}/;
                    let emailPattern=/[a-z0-9.]{4,}@gmail.com/
                    let passwordPattern =/(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Z]{6}   
                     
                     let phNoResult=phNoPattern.test(phNo);
                     let emailResult=phNoPattern.test(phNo);
                     let phNoResult=phNoPattern.test(phNo);



    if(name=="")
    {
      nameEle.style.border="2px solid red";
      nameErrorEle.innerText="Please fill thie text box";
      error=true;
    }
    if(phNo=="")
    {
      phNoEle.style.
    }

     let usersObj={
      name,
      phNo,
      email,
      password
     }   
     
     users.push(userObj);
     console.log(users);
     alert("Registration completed!!!");
                                                        
//to amke textboxes empty
    nameEle.value="";
    phNoEle.value="";
    emailEle.value="";
    passwordEle.value="";
    CPasswordEle.value="";

    //Redirect to login page
    window.location.href="./login.html";
}