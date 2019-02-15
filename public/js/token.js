function createItem() {
    localStorage.mytime = Date.now();
  }
  
  function myFunction() {
    var x = localStorage.getItem("mytime");
    document.getElementById("demo").innerHTML = x;
  }
  