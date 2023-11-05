/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

const Map = ({ libraries, footNote }) => {
  const points = libraries.map(lib =>
    <div
      hx-post="/library"
      hx-trigger="click"
      hx-target="#activeLibrary"
      data-id={lib.id}
      data-geometry-type="Point"
      data-geometry={`[${lib.longitude},${lib.latitude}]`}
      data-popup={`
      <span class='city-popup' >
        <h1>${lib.name}<h1>
        <p>${lib.description}<p>
      </span>
      `}
    ></div>)
  return (
    <div>
      <div
        style={{ height: '600px', width: '80%', margin: '0 auto' }}
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
