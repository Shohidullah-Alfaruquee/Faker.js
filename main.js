import dataArr from "./jsfiles/data.js";

const generateBtn = document.getElementById('generate-btn');
const name = document.getElementById('name');
const ocupation = document.getElementById("ocup");
const phonNo = document.getElementById('contact');
generateBtn.addEventListener('click', () => {
    let dataIndex = Math.floor(Math.random()*dataArr.length)
    let data = dataArr[dataIndex];

     name.innerHTML= `<span class="visible">Name:</span> ${data.fname} ${data.lname}`;
     ocupation.innerHTML = `<span class="visible">Ocupation:</span>  ${data.ocup}`;
     phonNo.innerHTML = ` <span class="visible">Contact: </span> ${data.contact}`
    
})