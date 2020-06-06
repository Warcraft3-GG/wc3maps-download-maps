import { GetMapFormat } from 'warcraft3gg-dto'

const ROC = 10
const TFT = 20
const REFORGED = 30

export function getFormat (format: number): GetMapFormat {
  return {
    roc: format >= ROC && format < TFT,
    tft: format >= TFT && format < REFORGED,
    reforged: format >= REFORGED
  }
}
