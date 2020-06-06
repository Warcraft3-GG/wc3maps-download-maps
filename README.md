# Wc3maps

Get maps information from [wc3maps.com](http://wc3maps.com)

## Example
```ts
import { getMap } from 'wc3maps'

(async () => {
  // Map: https://www.wc3maps.com/maps/43
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
