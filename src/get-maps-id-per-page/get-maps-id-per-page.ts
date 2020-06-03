import { totalMaps } from '../total-maps/total-maps'
import { Wc3mapsEnum } from '../wc3maps.enum'
import { wc3mapsApicall } from '../api/api.wc3maps'

/**
 * getMapsIdPerPage
 * @description Get all maps id inside a page
 * @param page default 0
 * @param limit limit of maps per page
 */
export async function getMapsIDPerPage (page: number = 0, limit: number = Wc3mapsEnum.SEARCH_LIMIT_PER_PAGE): Promise<number[]> {
  const { maps } = await wc3mapsApicall('search', { limit, page })
  return maps.map(map => map.id)
}
