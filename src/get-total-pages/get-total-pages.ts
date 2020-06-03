import { Wc3mapsEnum } from '../wc3maps.enum'
import { totalMaps } from '../total-maps/total-maps'

/**
 * getTotalPages
 * @description calculate total map pages
 * @param limit limit of maps per page (default Wc3mapsEnum.SEARCH_LIMIT_PER_PAGE)
 */
export async function getTotalPages (limit: number = Wc3mapsEnum.SEARCH_LIMIT_PER_PAGE): Promise<number> {
  const total = await totalMaps()
  return Math.ceil(total / limit)
}
