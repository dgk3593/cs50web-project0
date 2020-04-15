var navFile = new XMLHttpRequest();
navFile.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      document.getElementById('nav_bar').innerHTML = navFile.responseText;
      console.log(navFile.responseText)
  }
}
navFile.open("GET", "navbar.html", true);
navFile.send();


function wikiSearch(){
  var query = document.getElementById("searchQuery").value;
  if (query === "")
  {
    return false;
  }
  var link = "https://dragalialost.gamepedia.com/index.php?search=" + query;
  window.open(link, '_blank')
  return true;
}
