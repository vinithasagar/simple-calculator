function addfun(){
    let a= document.getElementById("first_num").value
    let b= document.getElementById("second_num").value
    let result= document.getElementById('para')
    a= parseFloat(a)
    b= parseFloat(b)
    let sum=a+b
    result.innerHTML=sum;
}

function subfun(){
    let a= document.getElementById("first_num").value
    let b= document.getElementById("second_num").value
    let result= document.getElementById('para')
    a= parseFloat(a)
    b= parseFloat(b)
    let sub=a-b
    result.innerHTML=sub;
}

function mulfun(){
    let a= document.getElementById("first_num").value
    let b= document.getElementById("second_num").value
    let result= document.getElementById('para')
    a= parseFloat(a)
    b= parseFloat(b)
    let mul=a*b
    result.innerHTML=mul;
}

function divfun(){
    let a= document.getElementById("first_num").value
    let b= document.getElementById("second_num").value
    let result= document.getElementById('para')
    a= parseFloat(a)
    b= parseFloat(b)
    let div=a/b
    result.innerHTML=div;
}