import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';

import './mapBoxMap.css';
import { ACCESS_TOKEN } from "./mapBoxConstants";
import {useSelector} from "react-redux";

mapboxgl.accessToken = ACCESS_TOKEN;

export default function Mapbox() {
    const needies = useSelector((state) => state.Needies && state.Needies);
    const mapContainer = useRef(null);
    const map = useRef(null);
     
    // berlin lat, lng
    const [lng, setLng] = useState(13.3885);
    const [lat, setLat] = useState(52.5144);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }, [map, mapContainer]);

    useEffect(() => {
        if (!map.current) return; 
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [map]);

    useEffect(() => {
        const markers = (needies || [])
            .map(n => ({...n, st_asgeojson: JSON.parse(n.st_asgeojson) }))
            .map(n => {
                // popup
                const popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                        `<b>${n.needy}</b><br />` +
                        `${n.description}<br/>` +
                        `<p>Needs: ${n.category}</p>` +
                        (n.img ? `<img src="${n.img}" style="max-width: 200px"/>` : "")
                    );

                // marker
                const el = document.createElement('div');
                el.className = 'marker';
                if (n.img) el.style.backgroundImage = `url(${n.img})`;

                const marker = new mapboxgl.Marker(el);
                marker
                    .setLngLat(n.st_asgeojson.coordinates)
                    .setPopup(popup)
                    .addTo(map.current);

                return marker;
            });

        return () => {
            markers.forEach(m => m.remove()); 
        };
    }, [needies]);

    return (
        <div ref={mapContainer} className="map-container" />
    );
}
