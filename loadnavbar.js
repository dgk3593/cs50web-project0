var navFile = new XMLHttpRequest();
navFile.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      document.getElementById('nav_bar').innerHTML = navFile.responseText;
      console.log(navFile.responseText)
  }
}
navFile.open("GET", "navbar.html", true);
navFile.send();
