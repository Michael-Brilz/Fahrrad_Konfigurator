//Open model window
function openModel() {
    var x = document.getElementById("multiCollapseExample1");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("multiCollapseExample2").style.display = "none";
      document.getElementById("multiCollapseExample3").style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  //Open basic window
  function openBasic() {
    var y = document.getElementById("multiCollapseExample2");
    if (y.style.display === "none") {
      y.style.display = "block";
      document.getElementById("multiCollapseExample1").style.display = "none";
      document.getElementById("multiCollapseExample3").style.display = "none";
    } else {
      y.style.display = "none";
    }
  }
  //Open extra window
  function openExtra() {
    var z = document.getElementById("multiCollapseExample3");
    if (z.style.display === "none") {
      z.style.display = "block";
      document.getElementById("multiCollapseExample1").style.display = "none";
      document.getElementById("multiCollapseExample2").style.display = "none";
    } else {
      z.style.display = "none";
    }
  }

