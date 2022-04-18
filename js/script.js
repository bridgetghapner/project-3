
function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: chicago,
    mapTypeId: "terrain",
  });

  var icon = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chicago-style_hot_dog_2.jpg/1200px-Chicago-style_hot_dog_2.jpg",
    scaledSize: new google.maps.Size(100, 100),
  };

  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    icon: icon,
  });

  const chicagoCoords = [
    { lat: 41.0793, lng: -85.1394 },
    { lat: 43.5460, lng: -96.7313 },
  ];

  const chicagoPath = new google.maps.Polyline({
    path: chicagoCoords,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 6,
  });

  chicagoPath.setMap(map);

}


// code for slideshow

var slide_index = 1;
slidesDisplay(slide_index);

function nextSlide(n) {
  slidesDisplay(slide_index += n);
}

function currentSlide(n) {
  slidesDisplay(slide_index = n);
}

function slidesDisplay(n) {
  var i;
  var slides = document.getElementsByClassName("showSlider");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
