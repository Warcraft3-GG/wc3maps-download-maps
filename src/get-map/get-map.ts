import { GetMapDTO, GetMapFileDTO } from 'warcraft3gg-dto'
import { wc3mapsApicall } from '../api/api.wc3maps'
import { Wc3mapsEnum } from '../wc3maps.enum'
import { downloadMap } from '../download-map/download-map'
import { getFormat } from '../utils/get-format/get-format.utils'
/**
 * getMap
 * @param id Map id
 * @param download When download is true, you will receive the map on map.file
 */
export async function getMap (id: number, download?: boolean): Promise<GetMapDTO> {
  if (typeof id !== 'number') {
    throw new Error('Map id must be a number')
  }
  const path = `map/${id}`
  const { error, map, message } = await wc3mapsApicall(path)
  if (error) {
    throw new Error(message)
  }
  const url = `${Wc3mapsEnum.WEB_URL}/map/${id}/${map.name}`
  const image = `${Wc3mapsEnum.WEB_URL}/maps/${id}/archive/war3map${map.preview ? 'Preview' : 'Map'}.jpg`

  let file: GetMapFileDTO
  if (download) {
    file = await downloadMap(id)
  }

  return {
    id: map.id,
    name: map.name,
    url,
    version: map.editor_ver,
    description: map.description,
    format: getFormat(map.format_version),
    details: {
      category: 'none',
      tileset: map.tileset,
      dimensions: {
        x: map.width,
        y: map.height
      },
      playableArea: {
        x: map.width,
        y: map.height
      },
      date: new Date(map.first_hosted),
      size: map.size,
      players: map.suggestion
    },
    image,
    file
  }
}
