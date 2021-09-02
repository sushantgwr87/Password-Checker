var s="Low";
var x = document.getElementById("passwordInput");
var y = document.getElementById("toggleIcon");
var z = document.getElementById('result');
y.innerHTML += `<i class="fa fa-eye-slash"></i>`;
function password_submitted(){
    z.className = '';
    var count=0;
    z.innerHTML = "";
    var pass = x.value;
    if(pass=="" || pass==null){
        x.style.border = "3px solid red";
        x.placeholder = "No Input";
        z.classList.add("wrong");
        z.innerHTML += `Please Enter the Password`;
    }
    else{
        if(pass.length>=8 && pass.length<=32){
            count++;
        }
        if(/\d/.test(pass)){
            count ++;
        }
        if(/[a-z]/.test(pass)){  
            count ++;
        }
        if(/[A-Z]/.test(pass)){
            count ++;
        }
        if(/[-!$@#%^&*()_+|~=`{}[\]:";'<>?,./\\]/.test(pass)){
            count ++;
        }
        test(count);
    }
}
function test(c){
    if(c>=5){
        s="STRONG";
        z.classList.add("strong");
    }
    if(c<5 && c>2){
        s= `GOOD<br> Can be Better!`;
        z.classList.add("good");
    }
    if(c<3){
        s="WEAK";
        z.classList.add("weak");
    }
    c=0;
    z.innerHTML += s;
}

document.addEventListener("click", function(evt) {
    var k = document.getElementById('submit');
        targetElement = evt.target;
    do {
        if (targetElement == x) {
            x.style.backgroundColor = "white";
            x.style.border = "3px solid black";
            x.placeholder = "Enter Password";
            z.innerHTML = "";
            x.value = "";
            z.className = '';
            return;
        }
        else if (targetElement == k){
            x.style.backgroundColor = "white";
            return;
        }
        else if (targetElement == y){
            if (x.type === "password") {
                x.type = "text";
                y.innerHTML = "";
                y.innerHTML += `<i class="fa fa-eye"></i>`;
              } 
              else {
                x.type = "password";
                y.innerHTML = "";
                y.innerHTML += `<i class="fa fa-eye-slash"></i>`;
              }
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);

    x.style.backgroundColor = "silver";
    x.style.border = "3px solid black";
    x.placeholder = "Enter Password";
    z.innerHTML = "";
    x.value = "";
    z.className = '';
});
