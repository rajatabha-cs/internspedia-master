//console.log("Hello");
function seterror(id,e){
    element=document.getElementById(id);
    element.getElementsByClassName('formerr')[0].innerHTML=e;
}
function clearerr(){
    e=document.getElementsByClassName('formerr');
    for(let i of e){
        i.innerHTML="";
    }
}
function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
function validate(){
    var rec=true;
    clearerr();
    var user=document.forms['register']["userid"].value;
    if(user.length<5 || user.length>12){
        seterror("user","*Required and must be of length 5 to 12");
        rec=false;
    }
    var pass=document.forms['register']["password"].value;
    if(pass.length<7 || pass.length>12){
        seterror("pass","*Required and must be of length 5 to 12");
        rec=false;
    }
    var nam=document.forms['register']["fname"].value;
    if(onlyLetters(nam)==false){
        seterror("nam","*Required and must be alphabets only");
        rec=false;
    }
    /*
    var country = document.getElementById("country");
    var coun=country.options[country.selectedIndex].value;
    if (coun == "psc") {
        seterror("coun","*Required and must select a country");
        rec=false;
    }
    */
    var lang=document.getElementById("lan");
    if(!lang.checked){
        seterror("lang","*Required, Check the box");
        rec=false;
    }
    return rec;
}