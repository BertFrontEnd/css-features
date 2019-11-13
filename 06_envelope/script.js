const sendBtn = document.querySelector("aside");
const myEnvelope = document.querySelector(".envelope");
const myFlap = document.querySelector('.envelope__flap');
const myPaper = document.querySelector('.envelope__paper');

sendBtn.onclick = function() {
  myFlap.classList.toggle("envelope__flap-close");
  myPaper.classList.toggle("envelope__paper-close");
  myEnvelope.classList.toggle("envelope__send");
  console.log(sendBtn);
  console.log(myFlap);
  console.log(myPaper);
  console.log(myEnvelope);
};
