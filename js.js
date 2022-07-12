document.getElementById("center-content-div").innerHTML="<object type='text/html' data='slider.html' height=100% width=100%></object>"
document.getElementById("search").addEventListener("keyup",filter)
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.addEventListener("click",clicked)   
});
function clicked(){
    console.log(this)
    if((this.className=='lv1li') || (this.className=='lv1ele')){
        console.log("poraa")
        var par=(this.parentElement.childNodes)
        switch (this) {
            case par[1]:
                document.getElementById("center-content-div").innerHTML="<object type='text/html' data='slider.html' height=100% width=100%></object>"
                break;
            case par[3]:
                document.getElementById("center-content-div").innerHTML="<object type='text/html' data='sign.html' height=100% width=100%></object>"
                break;
            // case par[5]:
            //     document.getElementById("center-content-div").innerHTML="<object type='text/html' data='sign.html' height=100% width=100%></object>"
            //     break;
            case par[7]:
                document.getElementById("center-content-div").innerHTML="<object type='text/html' data='map.html' height=100% width=100%></object>"
                break;
            }
        }
        if(this.textContent=='Student'){
            document.getElementById('center-content-div').innerHTML="<object type='text/html' height=540px width=100% data='student.html'></object>"
        }
        else if(this.textContent=='Faculty'){
            document.getElementById('center-content-div').innerHTML="<object type='text/html' height=540px width=100% data='faculty.html'></object>"
        }
    }
function filter(){
    ids=Array.from(document.getElementsByClassName("details"))
    ids.forEach(item =>{
        if(item.textContent.toLowerCase().indexOf(this.value.toLowerCase())!=-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
}
Array.from(document.getElementsByTagName("img")).forEach(item => {
    item.addEventListener("click",dropDownMenu)
})
Array.from(document.getElementsByTagName("a")).forEach(item =>{
    item.addEventListener("click",dropDownMenu)
})
function dropDownMenu(){
    if(this.nextElementSibling){
        if(this.nextElementSibling.style.display=="block"){
            console.log("ki")
            this.nextElementSibling.style.display="none"
        }
        else{
            console.log("ki")
            this.nextElementSibling.style.display="block"
            before=this.nextElementSibling
        }
    }
}
document.getElementById("profile").addEventListener("pointerenter",nameDisplay)
document.getElementById("profile").addEventListener("pointerleave",nameDisplay)

function nameDisplay(){
    if(document.getElementById('mypic').style.display=="block"){
        document.getElementById('mypic').style.display="none"
    }
    else{
        document.getElementById('mypic').style.display="block"  
    }
}