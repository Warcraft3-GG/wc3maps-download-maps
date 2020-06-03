import { wc3mapsApicall } from '../api/api.wc3maps'

/**
 * Return total maps in wc3maps.com
 */
export async function totalMaps () {
  const { total } = await wc3mapsApicall('search')
  return total
}
