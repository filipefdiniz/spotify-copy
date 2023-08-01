function Inserir() {
  //Array de músicas
  let musics = {
    info: [
      {
        nome: "Blinding Lights",
        artista: "The Weekend"
      },
      {
        nome: "Take on me",
        artista: "A-ha"
      },
      {
        nome: "Dont stop me now",
        artista: "Queen"
      },
      {
        nome: "Circles",
        artista: "Post Malone"
      },
      {
        nome: "Is there someone else?",
        artista: "The Weekend"
      },
      {
        nome: "Every Breath you take",
        artista: "The police"
      },
      {
        nome: "I will find",
        artista: "Vintage Culture"
      },
    ]
  };

  const div = document.querySelector('.playlist-menu');
  for (i = 0; i < 5; i++) {
    div.innerHTML +=
      `<div class="playlists">
            <img src="icon-liked.jpg" class="icon">
            <p>Liked Songs</p>
        </div>`
  }
  const div1 = document.querySelector('.menu-2');
  for (i = 0; i < musics.info.length; i++) {
    div1.innerHTML +=
      `<div class="might-like">
            <img src="icon-liked.jpg" class="artist">
            <div class="info-liked">
                <h5 style="font-size: 19px;">${musics.info[i].nome}</h5>
                <p style="color: #B3B3B3;">${musics.info[i].artista}</p>
            </div>
        </div>`
  }
}
Inserir();

function AparecerDiv() {
  let div = document.querySelector('.device');
  div.style.display = 'block';
  div.style.display = 'flex';
  let elementoDestino = document.querySelector('.device');
  elementoDestino.scrollIntoView({ behavior: 'smooth' });

  setTimeout(function() {
    div.style.display = 'none'; 
  }, 5000);
}


//Volume bar
document.addEventListener('DOMContentLoaded', function () {
  const volumeBar = document.querySelector('.volume-bar');
  const volumeFill = document.querySelector('.volume-fill');

  volumeBar.addEventListener('click', function (event) {
    const clickX = event.clientX - volumeBar.getBoundingClientRect().left;
    const barWidth = volumeBar.offsetWidth;
    const volume = clickX / barWidth;

    volumeFill.style.width = (volume * 100) + '%';
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const volumeBar = document.querySelector('.volume-bar1');
  const volumeFill = document.querySelector('.volume-fill1');

  volumeBar.addEventListener('click', function (event) {
    const clickX = event.clientX - volumeBar.getBoundingClientRect().left;
    const barWidth = volumeBar.offsetWidth;
    const volume = clickX / barWidth;

    volumeFill.style.width = (volume * 100) + '%';
  });
});


