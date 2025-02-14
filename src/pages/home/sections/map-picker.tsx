import { useEffect, useRef, useMemo } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Button } from "../../../components/ui/buttons";

const locations = [
    { lat: 41.9028, lng: 12.4964, name: "Roma, Italia" },
    { lat: -34.6037, lng: -58.3816, name: "Buenos Aires, Argentina" },
    { lat: 48.8566, lng: 2.3522, name: "París, Francia" },
];

const MapComponent = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);

    const iconStyle = useMemo(
        () =>
            new Style({
                image: new Icon({
                    src: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
                    scale: 0.3,
                    anchor: [0.5, 1],
                }),
            }),
        []
    );

    const vectorSource = useMemo(() => {
        const source = new VectorSource();
        const features = locations.map((loc) => {
            const feature = new Feature({
                geometry: new Point(fromLonLat([loc.lng, loc.lat])),
            });
            feature.setStyle(iconStyle);
            return feature;
        });
        source.addFeatures(features);
        return source;
    }, [iconStyle]);

    useEffect(() => {
        if (mapInstance.current || !mapRef.current) return;

        const vectorLayer = new VectorLayer({ source: vectorSource });

        const map = new Map({
            target: mapRef.current,
            layers: [new TileLayer({ source: new OSM() }), vectorLayer],
            view: new View({
                center: fromLonLat([0, 0]),
                zoom: 2,
            }),
        });

        const extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [100, 100, 100, 100] });

        mapInstance.current = map;

        const resizeObserver = new ResizeObserver(() => {
            map.updateSize();
        });

        resizeObserver.observe(mapRef.current);

        return () => resizeObserver.disconnect();
    }, [vectorSource]);

    return (
        <div className="flex flex-col items-center justify-center w-full p-6">
            <h2 className="text-[#545454] text-[28px] lg:text-[38px] mb-10 font-[OVTreasure]">
                Aggiungiamo il tuo evento alla nostra mappa fotografica!
            </h2>
            <div ref={mapRef} className="overflow-hidden rounded-[10px] drop-shadow-lg cursor-move w-full xl:w-[80%] h-[700px]" />
            <div className="flex flex-col w-full xl:w-[80%] items-end justify-center p-3">
                <Button className="px-3">Aggiungi la mia città!</Button>
            </div>
        </div>
    );
};

export default MapComponent;
