const heading = document.getElementById("hello");
console.dir(heading.textContent);
setTimeout(() => {
  heading.textContent = "chanche to Java Script";
  heading.style.color = "red";
  heading.style.textAlign = "center";
  heading.style.backgroundColor = "black";
  heading.style.padding = "20px";
}, 1500);
