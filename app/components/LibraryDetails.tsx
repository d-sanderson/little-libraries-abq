/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

const LibraryDetails = ({ library }) => {
  return (
    <div class="flex">
      <div class="w-1/2">
        <h2 class="mb-2 text-lg font-semibold ">{library.name}</h2>
        <p>{library.description}</p>
        <pre>{library.latitude}</pre>
        <pre>{library.longitude}</pre>
        <pre>{library.approved_status}</pre>
      </div>
    </div>
  )
}

export default LibraryDetails
