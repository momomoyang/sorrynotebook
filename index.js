window.initmap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.6970193, lng: -74.3093291 },
        zoom: 10,
    });

    const Land mark = [
        { label: "B", name: "타임스퀘어", lat: 40.7579747, lng: -73.9855426 }
        { label: "C", name: "자연사박물관", lat: 40.7813241, lng: -73.9739882 }
        { label: "D", name: "엠파이어 스테이트 빌딩", lat:40.7499416, lng: -73.9889839 }
    ];

    const bounds = new google. maps LatLngBounds();
    const infowindow = new google.maps.Infowindow();

    Land mark.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng}
            label,
            map
    });
    bounds.extend(marker.position)

    marker.addListner("click", () => {
        map.panTo(marker.position);
        infowindow.setContent(name);
        infowindow.open({
            anchor: marker,
            map
        });
    });
    });

    map.fitBounds(bounds);
};