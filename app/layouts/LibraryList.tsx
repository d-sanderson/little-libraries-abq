/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import LibraryDetails from "../components/LibraryDetails";
import Map from "../components/Map";

const LibraryListLayout = async ({ context }) => {

  const { results: libraries } = await context.env.DB.prepare(
    "SELECT * FROM LittleLibraries"
  ).all()


  return (
    <div>
      <Map footNote="Click on a marker to display library information." libraries={libraries} />
      <div>{libraries.map((lib) => <LibraryDetails library={lib} />)}</div>
    </div>
  )
}

export default LibraryListLayout
