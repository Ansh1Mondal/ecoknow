import { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google;
    const mapProp = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 5,
    };
    const map = new google.maps.Map(mapRef.current, mapProp);
  }, []);

  return (
    <div
      id="googleMap"
      ref={mapRef}
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
}

export default Map;
