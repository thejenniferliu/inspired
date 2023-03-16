let originHeader = document.getElementById('top-header')
console.log(originHeader)
function mockHeader(event){
    console.log(event)
    let originHeader = event.target
    console.log(originHeader)
    if (originHeader.innerHTML[1] === '天' ){
        originHeader.innerHTML = '走吧...';
    } else {
        originHeader.innerHTML = "今天心情如何?"
    }
}
originHeader.addEventListener('click', mockHeader); 

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

button1.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5555/html/music.html";
  });
  
button2.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5555/html/chess.html";
  });
button3.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5555/html/book.html";
  });
button4.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5555/html/paint.html";
  });