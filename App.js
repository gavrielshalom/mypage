
            
function addOnClick(){
    var x = document.createElement("LI");
    var t = document.createTextNode(document.getElementById("textToAddS").value);
     x.appendChild(t);
    document.getElementById("listToAdd").appendChild(x);
    document.getElementById("textToAddS").value = "";
}
function deleteOnClick(){
    document.getElementById("listToAdd").firstChild.remove();
    li.remove();
}


function myFunction() {
    document.getElementById("timer").innerText = "";
    var inputVal =  document.getElementById('js-timeout').value;
    var seconds = inputVal, $seconds = document.querySelector('#timer');
    $seconds.textContent = "";
    (function countdown() {
          $seconds.textContent = seconds + ' saniye' + (seconds == 1 ?  '' :  's')
          if(seconds --> 0) setTimeout(countdown, 1000)
      })();
   }
