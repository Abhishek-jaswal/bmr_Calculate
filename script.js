document.getElementById('calculateBtn').addEventListener("click",()=>{
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(isNaN(age) || isNaN(height) || isNaN(weight)){
        document.getElementById('calculate').innerHTML="Please enter valid details";
    return;
    }
    let bmr ;
    if(gender==="male"){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else if(gender==="female"){
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    document.getElementById('calculate').innerHTML=bmr;
})
