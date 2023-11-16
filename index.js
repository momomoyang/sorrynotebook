window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.5400456, lng: 126.9921017 },
      zoom: 10
    });
  
    const malls = [
      { label: "C", name: "Coex mall <8:00~ 23:00>", lat: 37.5115557, lng: 127.0595261 },
      { label: "G", name: "Goto mall <10:00~ 15:00>", lat: 37.5062379, lng: 127.0050378 },
      { label: "D", name: "Dongdaemun market <4:00~ 12:00>", lat: 37.566596, lng: 127.007702 },
      { label: "I", name: "IFC mall <10:00~ 20:00", lat: 37.5251644, lng: 126.9255491 },
      { label: "L", name: "Lottetower mall <8:00~ 21:00", lat: 37.5125585, lng: 127.1025353 },
      { label: "M", name: "Myeongdong underground market <8:00~ 24:00>", lat: 37.563692, lng: 126.9822107 },
      { label: "T", name: "Timesquare <8:00~20:00", lat: 37.5173108, lng: 126.9033793 }
    ];

    const bounds = new google.maps.LatLngBounds();
  const infoWindow = new google.maps.InfoWindow();

  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map
    });
    bounds.extend(marker.position);

    marker.addListener("click", () => {
      map.panTo(marker.position);
      infoWindow.setContent(name);
      infoWindow.open({
        anchor: marker,
        map
      });
    });
  });

  map.fitBounds(bounds);
};