document.getElementById("innerDiv").addEventListener("click", function() {
  if (this.style.backgroundColor === "purple") {
      this.style.backgroundColor = ""; 
  } else {
      this.style.backgroundColor = "purple";
  }
});
