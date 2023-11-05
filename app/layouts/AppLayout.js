import { html } from 'hono/html'

// Anything you put in the body tag here is never re-loaded, so if you need to add a nav, header or footer with data that may change, you should put this in a sub-layout component e.g. main.js
const AppLayout = (props) => html`
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>${props.title}</title>
      <meta name="description" content="${props.description}" />
      <script src="/htmx.min.js"></script>
      <script src="/idiomorph-ext.min.js"></script>
      <script src="/alpine.min.js"></script>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossorigin=""
      ></script>
      <script src="https://unpkg.com/hyperleaflet@0.4.4"></script>
      
      <link rel="stylesheet" href="/app.css" />
    </head>
    <body class="pt-16 antialiased">
      ${props.children}
    </body>
  </html>
`;

export default AppLayout
