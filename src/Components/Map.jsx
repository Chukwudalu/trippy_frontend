import {useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1a3d1ZGFsdSIsImEiOiJjbDVocGN2OGcwMGVjM2lsYWY3ZmF5Ym84In0.ednAwsgSiemYp0UQK5lS-w'

const Map = function({tourDetail}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    // const [lng, setLng] = useState(-70.9);
    // const [lat, setLat] = useState(42.35);
    // const [zoom, setZoom] = useState(5);

    const objectLength = Object.keys(tourDetail).length
    const locations = tourDetail.locations
    
    useEffect(() => {
        if(map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 10,
            scrollZoom: false
        })
        
    }, [])

    useEffect(() => {
        if(objectLength >= 1){
            const bounds = new mapboxgl.LngLatBounds();
            locations.forEach(loc => {
                // Create marker
                const el = document.createElement('div');
                el.className = 'marker';
                // Add marker
                new mapboxgl.Marker({
                    element: el,
                    anchor: 'bottom'
                }).setLngLat(loc.coordinates).addTo(map.current)
                // Add popup
                new mapboxgl.Popup({
                                offset: 50
                            })
                            .setLngLat(loc.coordinates)
                            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
                            .addTo(map.current)
                bounds.extend(loc.coordinates)
            })
            map.current.fitBounds(bounds, {
                padding: {
                    top: 200,
                    bottom: 150,
                    left: 100,
                    right: 100
                }
            })
        }
    })
    

    return (
        <section>
            <div ref={mapContainer} className="map-container"></div>
        </section>
    )
}

export default Map