import { getMapsIDPerPage } from 'wc3maps'

(async () => {
  // Get maps id on page 1
  const mapsId: number[] = await getMapsIDPerPage(1)
  console.log(mapsId)
})()
