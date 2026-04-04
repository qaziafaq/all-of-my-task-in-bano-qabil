const personalContainer = document.getElementById("personalContainer");
const educationContainer = document.getElementById("educationContainer");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const personalForm = document.getElementById("personalForm");
const educationForm = document.getElementById("educationForm");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const messageButtons = document.getElementById("messageButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");

nextBtn.addEventListener("click",function(){
if(personalForm.checkValidity()){
personalContainer.style.display="none";
educationContainer.style.display="block";

}else{
personalForm.reportValidity();

}

});

backBtn.addEventListener("click",function(){
educationContainer.style.display="none";
personalContainer.style.display="block";

});

educationForm.addEventListener("submit",function(event){
event.preventDefault();

const name=document.getElementById("nameInput").value;
const age=document.getElementById("ageInput").value;
const city=document.getElementById("cityInput").value;
const country=document.getElementById("countryInput").value;
const email=document.getElementById("emailInput").value;

const education=document.getElementById("educationInput").value;
const total=document.getElementById("totalMarksInput").value;
const marks=document.getElementById("marksInput").value;
const school=document.getElementById("schoolInput").value;
const university=document.getElementById("UniverstyInput").value;
const degree=document.getElementById("DegreeInput").value;


messageText.innerHTML=`
<strong>Confirm Your Information</strong><br><br>
Name: ${name}<br>
Age: ${age}<br>
City: ${city}<br>
Country: ${country}<br>
Email: ${email}<br><br>
Education: ${education}<br>
Marks: ${marks} / ${total}<br>
School: ${school}<br>
University: ${university}<br>
Degree: ${degree}<br><br>
Is this correct?
`;

messageButtons.style.display="flex";
okBtn.style.display="none";
messageBox.style.display="flex";
});

yesBtn.addEventListener("click",function(){
messageText.innerHTML="Your data is being reviewed, it might take some time.";
messageButtons.style.display="none";
okBtn.style.display="block";
personalForm.reset();
educationForm.reset();
educationContainer.style.display="none";
personalContainer.style.display="block";
});

noBtn.addEventListener("click",function(){
messageBox.style.display="none";
});

okBtn.addEventListener("click",function(){
messageBox.style.display="none";
});
