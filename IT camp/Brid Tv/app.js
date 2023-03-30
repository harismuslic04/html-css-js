const cardContainer = document.querySelector(".container");
async function getData() {
  const response = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await response.json();
  // console.log("haris");
  console.log(data);
  console.log(data.Video[0]);
  data.Video.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item1";
    const title = document.createElement("h2");
    title.textContent = item.name;
    const link = document.createElement("a");
    link.className = "links";
    link.style.cursor = "pointer";
    const image = document.createElement("img");
    image.src = item.snapshots.sd;
    link.appendChild(image);
    link.appendChild(title);
    card.appendChild(link);
    cardContainer.appendChild(card);
    function pretvori(time) {
      let h = Math.trunc(time / 3600);
      let m = Math.trunc((time % 3600) / 60);
      let s = time - (h * 3600 + m * 60);
      if (m > 9 && s > 9) return `0${h}:${m}:${s}`;
      else if (m > 9 && s <= 9) return `0${h}:${m}:0${s}`;
      else if (m <= 9 && s > 9) return `0${h}:0${m}:${s}`;
      else return `0${h}:0${m}:0${s}`;
    }
    let duration = document.createElement("p");
    duration.className = "duration";
    duration.textContent = pretvori(Number(item.duration));
    card.appendChild(duration);
  });

  let links = document.getElementsByClassName("links");
  console.log(links);

  data.Video.forEach((svaki, index) => {
    links[index].addEventListener("click", function (e) {
      let broj = 0;
      // e.preventDefault();
      if (Array.from(cardContainer.children).length > 25) {
        const videoPusteni = cardContainer.lastChild;
        // console.log(videoPusteni);
        cardContainer.removeChild(videoPusteni);
      }
      let naslov = document.createElement("h2");
      naslov.textContent = svaki.name;
      naslov.style.gridRowStart = "1";
      naslov.style.justifySelf = "Center";
      naslov.style.fontFamily = "sans-serif";
      console.log(naslov);
      let novidiv = document.createElement("div");
      let video = document.createElement("video");
      video.src = svaki.source.hd;
      video.controls = "true";
      video.muted = false;
      video.loop = "true";
      video.height = "430";
      video.width = "700";
      video.autoplay = "true";
      video.style.justifySelf = "center";
      novidiv.append(video);
      novidiv.style.width = "100%";
      novidiv.style.height = "27rem";
      novidiv.style.gridRowStart = "1";
      novidiv.style.display = "grid";
      novidiv.style.justifyContent = "center";

      novidiv.style.gridColumnEnd = "1";
      novidiv.style.gridColumnStart = "6";
      cardContainer.append(novidiv);
      novidiv.append(naslov);

      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    });
  });
}
getData();
