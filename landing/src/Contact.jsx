import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import Menu from './components/Menu';
import style from "./Contact.module.css"


export const Contact = () => {
    const geoData = ({lat: -25.3718243, lng: -49.2161051})

    return(
        <div>
            <Menu/>
            <h1>Contato</h1>
            <div>
                <div className={style.wrapMap}>
                    <h2>Mapa</h2>
                    <MapContainer center={[geoData.lat, geoData.lng]} zoom={17} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {geoData.lat && geoData.lng &&
                        <Marker position={[geoData.lat, geoData.lng]}>
                        <Popup>
                        <a target='_blank' href={`https://www.google.com.br/maps/place/Sistema+Fiep+-+Unidade+Centro/@${geoData.lat},${geoData.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu`}>Google maps view</a>
                        </Popup>
                        </Marker>}
                    </MapContainer>
                </div>
                <div>
                    <h2>Zap</h2>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}