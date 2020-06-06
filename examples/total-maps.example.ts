import { totalMaps } from 'wc3maps'

(async () => {
  // Get total maps
  const total = await totalMaps()
  console.log(total)
})()
