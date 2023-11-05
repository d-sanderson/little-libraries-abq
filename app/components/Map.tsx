/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

const Map = ({ libraries, footNote }) => {

  const points = libraries.map(lib => 
    <span
      data-id={lib.id}
      data-geometry-type="Point"
      data-geometry={`[${lib.latitude},${lib.longitude}]`}
      data-popup={`<span class='city-popup'>${lib.name}</span>`}
    ></span>)
  return (
    <div
      class="w-full h-1/2"
    >
      <div
        id="map"
        data-center="[-106.629181, 35.106766]"
        data-zoom="11"
        data-reverse-order-all
      >
        <div data-tile="EsriWorldImagery"></div>
        <div data-tile="OpenStreetMap" data-default-tile></div>
        <div data-hyperleaflet-source data-geometry-display="json">
          {points}
        </div>
        <span class="custom-control zoom-level" id="zoom-level"></span>
      </div>
      <center>{footNote}</center>
    </div>
  )
}

export default Map
