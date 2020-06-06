import { getMap } from '../src'

(async () => {
  // Map: https://wc3maps.com/map/43/DBZ_Tribute_Elite_v2.1c
  const id = 120408
  const download = true
  const map = await getMap(id, download)
  console.log(map)
})()
