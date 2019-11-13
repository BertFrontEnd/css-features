const sendBnt = document.querySelector('aside');
const myFlap = document.querySelector('.envelope__flap');
const myPaper = document.querySelector('.envelope__paper');

sendBnt.onclick = function(e) {
  myFlap.classList.toggle('envelope__flap-close');
  myPaper.classList.toggle("envelope__paper-close");
  console.log(sendBnt);
  console.log(myFlap);
  console.log(myPaper);
};
