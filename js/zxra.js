window.onload = function() {
  document.getElementById("srch").addEventListener("click", () => {
    var query = document.getElementById("search").value, cxId = "d506971a0481c4950", key = "AIzaSyAqPxihb7HtVBVLJMMuF37rCW-CM4epQfY"
    document.getElementById("search").value = ""
    
    fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${cxId}`).then(e => e.json()).then(r => {
      console.log(r)
      
    })
  })
}