import { getTotalPages } from '../src'

(async () => {
  // Get total map pages
  const mapsPerPage = 15 // default value on wc3maps.com
  const pages: number = await getTotalPages(mapsPerPage)
  console.log(pages)
})()
