import sha1 from 'sha1'
import axios from 'axios'
import { GetMapFileDTO } from 'warcraft3gg-dto'
import { Wc3mapsEnum } from '../wc3maps.enum'

export async function downloadMap (mapId: number): Promise<GetMapFileDTO> {
  const url = `${Wc3mapsEnum.BASE_URL}/download/${mapId}`
  const file = await axios({
    url,
    responseType: 'arraybuffer',
    headers: {
      Referer: Wc3mapsEnum.WEB_URL
    }
  })
  const { data } = file
  const encrypt = sha1(data)
  return {
    content: data,
    sha1: encrypt
  }
}
