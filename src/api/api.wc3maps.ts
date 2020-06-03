import axios from 'axios'
import { Wc3mapsEnum } from '../wc3maps.enum'

export async function wc3mapsApicall (path: string, params?: Object) {
  const url = `${Wc3mapsEnum.BASE_URL}/${path}`
  const { data } = await axios({
    url,
    params
  })
  return data
}
