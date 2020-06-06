# Wc3maps

Get maps information from [wc3maps.com](http://wc3maps.com)

## Example
```ts
import { getMap } from 'wc3maps'

(async () => {
  // Map: https://wc3maps.com/map/43/DBZ_Tribute_Elite_v2.1c
  const mapId = 43
  // When download is true, you will receive the map on map.file
  const download = false
  const map = await getMap(mapId, download)
  console.log(map)
})()
```
[More examples](https://github.com/Warcraft3-GG/epicwar-download-maps/tree/master/examples)

## Available methods
- [x] `Get map`
- [x] `Get and download map`
- [x] `Get total maps`
- [x] `Get maps id per page`
- [x] `Get total maps pages`

## Warcraft3 GG
This repository is part of [Warcraft3-GG](https://github.com/Warcraft3-GG) organization
