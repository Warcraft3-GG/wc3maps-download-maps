import { totalMaps } from '../src'

(async () => {
  // Get total maps
  const total = await totalMaps()
  console.log(total)
})()
