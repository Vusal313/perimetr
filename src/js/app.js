
  
    let width = document.getElementById("width");
    let lengt = document.getElementById("length");
    const btnperimetr = document.getElementById("perimetr");
    const btnsahe = document.getElementById("sahe");
    let result = document.getElementById("result");
     
btnperimetr.addEventListener('click',function(){
    let hesabla = 2 * (Number(width.value) + Number (lengt.value));

    result.innerHTML = hesabla;
    width.value="";
    lengt.value="";
})

btnsahe.addEventListener('click',function(){
    let hesabla = Number(width.value) * Number (lengt.value);
    result.innerHTML = hesabla;
    width.value="";
    lengt.value="";
})
