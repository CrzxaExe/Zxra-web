let bzb = {}

window.onload = Loader()

async function Loader() {
  /*if(!window.location.hash) {
    window.location = window.location + '#zxras';
    window.location.reload();
  }*/
  await fetch("bzb.json").then(res => res.json()).then(json => bzb = json)
  
  setInterval(updateDigitalClock, 1000)
  updateDigitalClock()
  
  const news = document.getElementById("news")
  NewsIn(news, bzb)
}

function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}

function NewsIn(target, file) {
  let title = document.createElement("b"), img = document.createElement("img"), des = document.createElement("p"), time = document.createElement("c"), link = document.createElement("a")
  title.innerHTML = `<i class='bx bx-chalkboard' ></i> ` + file.berita.title + "<br><br>"
  link.href = file.berita.link
  link.innerText = file.berita.link
  img.src = file.berita.img
  des.textContent = file.berita.des
  time.innerText = "\n\n"+file.berita.stamp
  
  target.appendChild(title)
  target.appendChild(img)
  target.appendChild(des)
  target.appendChild(link)
  target.appendChild(time)
}