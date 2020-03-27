
function toggleDark(checkbox){
  document.body.className = checkbox.checked ? "dark" : "";
  document.getElementById("icon").src = "assets/img/" + (checkbox.checked ? "darkIcon" : "icon") + ".png";
}
