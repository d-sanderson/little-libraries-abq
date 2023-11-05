/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import LibraryDetails from "../components/LibraryDetails";
import Map from "../components/Map";
import { GET_VERIFIED_LIBRARIES } from "../queries";

const LibraryListLayout = async ({ context }) => {

  const { results: libraries } = await context.env.DB.prepare(GET_VERIFIED_LIBRARIES).all()


  return (
    <div>
      <Map footNote="Click on a marker to display library information." libraries={libraries} />
      <div>{libraries.map((lib) => <LibraryDetails library={lib} />)}</div>
    </div>
  )
}

export default LibraryListLayout
