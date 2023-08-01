function Inserir() {
    let musicnames = ["Blinding Lights", "Love of My life","Old Town road", "Creepin"];
    let artistnames = ["The weekend", "Queen","Lil NasX", "The Weekend"];
    const div = document.querySelector('.playlist-menu');
    for (i = 0; i < 5; i++) {
        div.innerHTML += 
        `<div class="playlists">
            <img src="icon-liked.jpg" class="icon">
            <p>Liked Songs</p>
        </div>`
    }
    const div1 = document.querySelector('.menu-2');
    for (i = 0; i < 4; i++) {
        div1.innerHTML += 
        `<div class="might-like">
            <img src="icon-liked.jpg" class="artist">
            <div class="info-liked">
                <h5 style="font-size: 19px;">${musicnames[i]}</h5>
                <p style="color: #B3B3B3;">${artistnames[i]}</p>
            </div>
        </div>`
    }
}
Inserir();

function AparecerDiv(){
    const div = document.querySelector('.device');
    div.style.display = 'block';
    div.style.display = 'flex';
}


  document.addEventListener('DOMContentLoaded', function() {
    const volumeBar = document.querySelector('.volume-bar');
    const volumeFill = document.querySelector('.volume-fill');

    volumeBar.addEventListener('click', function(event) {
      const clickX = event.clientX - volumeBar.getBoundingClientRect().left;
      const barWidth = volumeBar.offsetWidth;
      const volume = clickX / barWidth;

      volumeFill.style.width = (volume * 100) + '%';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const volumeBar = document.querySelector('.volume-bar1');
    const volumeFill = document.querySelector('.volume-fill1');

    volumeBar.addEventListener('click', function(event) {
      const clickX = event.clientX - volumeBar.getBoundingClientRect().left;
      const barWidth = volumeBar.offsetWidth;
      const volume = clickX / barWidth;

      volumeFill.style.width = (volume * 100) + '%';
    });
  });

   
