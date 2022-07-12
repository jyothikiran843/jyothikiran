function validate(){
    ishobbies()
    ismobile() 
    ispassword() 
    firstname() 
    emailValidate() 
    lastname() 
    gend() 
    whatcountry() 
    isyear()  
    isbranch() 
    ageis()
    changeaddress()
    if(ishobbies() && ismobile() && ispassword() && firstname() && emailValidate() && lastname() && gend() && whatcountry() && isyear() && isbranch() && ageis() && changeaddress() && fileValid(document.getElementById("file"))){
        document.body.innerHTML="<object type='text/html' height=540px width=100% data='login.html'></object>"
        alert("Success")
        return true;
    }
    else{
        alert(" You are Useless to fill up a form go sit in nursery")
        return false;
    }
}
function fileValid(e){
    if(e.files.item(0).size<(50*1024)){
        e.style.border="3px solid green"
        return true;
    }
    else{
        e.style.border="3px solid red"
        return false;
    }
}
function fullname(){
    document.querySelector("#full").removeAttribute("readonly")
    document.querySelector("#full").value=document.querySelector("#first").value+" "+document.querySelector("#last").value
    document.querySelector("#full").setAttribute("readonly",true)
    // document.querySelector("#full1").removeAttribute("readonly")
    // document.querySelector("#full1").value=document.querySelector("#full").value
}
function ishobbies(){
    var hobbies=[]
    var s=0;
    document.querySelectorAll(".hobbies").forEach((i,j) => {
        if(i.checked){
            // document.querySelectorAll(".hobbies1")[s].checked=true;
            hobbies.push(i.value);}
            s++});
    if(hobbies.length>=2){
        document.querySelectorAll(".hobbs").forEach(i => {
            i.style.color="green";
        })
        document.querySelector("#hobbieslabel").setAttribute("hidden",true)
        return true;
    }
    else{
        document.querySelectorAll(".hobbs").forEach(i => {
            i.style.color="red";})
            document.querySelector("#hobbieslabel").removeAttribute("hidden")
        return false
    }
}
var re=/[\d\s\.\@\#\$\!\&\*\(\)\[\]\^\/\<\>\;\"\'\:]+/i
function firstname(){
    var fname=document.querySelector("#first").value
    // document.querySelector("#first1").value=fname=document.querySelector("#first").value
    if((fname.length>=3) && !(re.test(fname))){
        document.querySelector("#first").style.border="3px solid  green"
        document.querySelector("#firstnamelabel").setAttribute("hidden",true)
        return true
    }
    else{
        document.querySelector("#first").style.border="3px solid red"
        document.querySelector("#firstnamelabel").removeAttribute("hidden") 
        return false
    }
}
function lastname(){
    var lname=document.querySelector("#last").value;
    // document.querySelector("#last1").value=document.querySelector("#last").value
    if(lname.length>=3 && !(re.test(lname))){
        document.querySelector("#last").style.border="3px solid green"
        document.querySelector("#lastnamelabel").setAttribute("hidden",true)
    return true}
    else{
        document.querySelector("#last").style.border="3px solid red"
        document.querySelector("#lastnamelabel").removeAttribute("hidden") 
    return false}
}
function whatcountry(){
    var country=document.querySelector("#country-india").checked?"india":(document.querySelector("#country-usa").checked?"usa":false)
    if(!country){
        document.querySelector("#country").style.border="3px solid red"
        document.querySelector("#lastnamelabel").removeAttribute("hidden") 
        return false
    }
    else{
        if(document.querySelector("#country-india").checked){
            // document.getElementById("country-india1").checked=true
        }
        else{
            // document.getElementById("country-usa1").checked=true
        }
        document.querySelector("#country").style.border="3px solid green"
        // document.querySelector("#countrylabel").setAttribute("hidden",true)
        return true
    }
}
function ismobile(){
    var mobile=document.querySelector("#mobile").value
    // document.querySelector("#mobile1").value=document.querySelector("#mobile").value
    var country=document.querySelector("#country-india").checked?"india":(document.querySelector("#country-usa").checked?"usa":false)
    if(country=="india"){
        re=/\d{10}/;
        if(re.test(mobile) && mobile.length<11){
            document.querySelector("#mobile").style.border="3px solid green"
            document.querySelector("#mobilelabel").setAttribute("hidden",true)
            return true
        }
        else{
            document.querySelector("#mobile").style.border="3px solid red"
            document.querySelector("#mobilelabel").removeAttribute("hidden")
            return false
        }
    }
    else if(country=="usa"){
        var re=/\d{3}\-\d{3}\-\d{4}/;
        if(re.test(mobile) && mobile.length<13){
            document.querySelector("#mobile").style.border="3px solid green"
            document.querySelector("#mobilelabel").setAttribute("hidden",true)
            return true
        }
        else{
            document.querySelector("#mobile").style.border="3px solid violet"
            document.querySelector("#mobilelabel").removeAttribute("hidden")
            return false
        }   
    }
    else{
        document.querySelector("#mobile").style.border="3px solid pink"
        document.querySelector("#mobilelabel").removeAttribute("hidden")
        return false
    }
}
function ispassword(){
    re=/[\@\#\$\!\%\^\&\*\(\)\-\+\d\s]+/i
    // document.querySelector("#password1").value=document.querySelector("#password").value
    if(document.querySelector("#password").value.length>6 && re.test(document.querySelector("#password").value)){
        document.querySelector("#password").style.border="3px solid green"
        document.querySelector("#passwordlabel").setAttribute("hidden",true)
        return true
    }
    else{
        document.querySelector("#password").style.border="3px solid red"
        document.querySelector("#passwordlabel").removeAttribute("hidden")
        return false
    }
}
function emailValidate(){
    email=document.querySelector("#ail").value
    // document.querySelector("#ail1").value=document.querySelector("#ail").value
    var pattern=/^([a-z]|_)([a-z\d]*)(@)([a-z]+\.[a-z]+|[a-z]+\.[a-z]+\.[a-z]+)$/i
    if(pattern.test(email)){
        document.querySelector("#ail").style.border="3px solid green"
        document.querySelector("#emaillabel").setAttribute("hidden",true)
        return true
    }
    else{
        document.querySelector("#ail").style.border="3px solid red"
        document.querySelector("#emaillabel").removeAttribute("hidden")
        return false
    }
}
function gend(){
    var gender=document.querySelector('#gender-male').checked?"male":(document.querySelector('#gender-female').checked?"female":(document.querySelector('#gender-other').checked?"other":false))
    if(gender){
        // switch (gender) {
        //     case "male":
        //         document.getElementById("gender-male1").checked=true
        //         break;
        //     case "female":
        //         document.getElementById("gender-female1").checked=true
        //         break
        //     case "other":
        //         document.getElementById("gender-other1").checked=true
        //         break
        // }
        document.querySelector("#gender").style.border="3px solid green"
        document.querySelector("#genderlabel").setAttribute("hidden",true)
        return true
    }
    else{
        document.querySelector("#gender").style.border="3px solid red"
        document.querySelector("#genderlabel").removeAttribute("hidden")
        return false
    }
}
function isyear(){
    var yaar=document.querySelector("#year").value
    if(yaar=='None'){
        document.querySelector("#year").style.border="3px solid red"
        document.querySelector("#yearlabel").removeAttribute("hidden")
        return false
    }
    else{
        // var y=document.getElementById("year1");
        // switch (yaar) {
        //     case "P1":
        //         y.value="P1"
        //         break;
        //     case "P2":
        //         y.value="P2"
        //         break
        //     case "E1":
        //         y.value="E1"
        //         break
        //     case "E2":
        //         y.value="E2"
        //         break
        //     case "E3":
        //         y.value="E3"
        //         break
        //     case "E4":
        //         y.value="E4"
        // }
        document.querySelector("#year").style.border="3px solid green"
        document.querySelector("#yearlabel").setAttribute("hidden",true)
        return true
    }
}
function isbranch(){
    var branch=document.querySelector("#branch").value
    if(branch=='None'){
        document.querySelector("#branch").style.border="3px solid red"
        document.querySelector("#branchlabel").removeAttribute("hidden")
        return false
    }
    else{
        // b=document.getElementById("branch1");
        // switch (branch) {
        //     case "CSE":
        //         b.value="CSE"
        //         break;
        //     case "ECE":
        //         b.value="ECE"
        //         break
        //     case "PUC":
        //         b.value="PUC"
        //         break
        //     case "Mech":
        //         b.value="Mech"
        //         break
        //     case "Civil":
        //         b.value="Civil"
        //         break
        //     case "MME":
        //         b.value="MME"
        //         break
        //     case "Chem":
        //         b.value="Chem"
        //         break
        // }
        document.querySelector("#branch").style.border="3px solid green"
        document.querySelector("#branchlabel").setAttribute("hidden",true)
        return true
    }
}
var age;
function ageis(){
    var date=document.querySelector("#bday").value
    // document.querySelector("#bday1").value=document.querySelector("#bday").value
    age=2022-Number(date.split("-")[0]);
    if(date==""){
        document.querySelector("#bday").style.border="2px solid red"
        document.querySelector("#emaillabel").removeAttribute("hidden")
        return false
    }
    else{
        document.querySelector("#bday").style.border="2px solid green"
        document.querySelector("#aged").removeAttribute("hidden")
        document.querySelector("#aged").innerHTML="Your Age: "+age+"Years";
        document.querySelector("#emaillabel").setAttribute("hidden",true)
        return true
    }

}
function changeaddress(){
    document.querySelector("#address").value=(document.querySelector("#address").value).replaceAll(/\d*/gi,"")
    // document.querySelector("#address1").value=document.querySelector("#address").value
    if(document.querySelector("#address").value==""){
        document.querySelector("#address").style.border="3px solid red"
        document.querySelector("#emaillabel").setAttribute("hidden",false)
        return false
    }
    else{
        document.querySelector("#address").style.border="3px solid green"
        document.querySelector("#emaillabel").removeAttribute("hidden")
        return true
    }
}
function show(){
    document.querySelector("#show-password").src="eye.png"
    document.querySelector("#show-password").setAttribute("onmousedown","hide()")
    document.querySelector("#password").setAttribute("type","text")
}
function hide(){
    document.querySelector("#show-password").src="view.png"
    document.querySelector("#show-password").setAttribute("onmousedown","show()")
    document.querySelector("#password").setAttribute("type","password")
}
function alertcheyyu(){
    window.alert("Do You Really Really 100% super sure to reset this useless form in which you spent no effort to fill it?")
}
// var i = 1;
// function changePicture() {
//     document.getElementById("form-div").style.backgroundImage = "url("+i+".png)";
//     document.getElementById("form-div").style.transitionDuration="2s";
//     if (i<4) {
//         i++;
//     } 
//     else {
//         i=0;
//     }
//     setTimeout(changePicture, 2000);
// }