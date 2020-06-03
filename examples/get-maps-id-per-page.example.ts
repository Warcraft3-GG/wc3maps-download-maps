import { getMapsIDPerPage } from '../src'

(async () => {
  // Get maps id on page 1
  const mapsId: number[] = await getMapsIDPerPage(1)
  console.log(mapsId)
})()
