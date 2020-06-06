import { getFormat } from './get-format.utils'

describe('Get format', () => {
  describe('roc true', () => {
    it('should return roc true when value is 10', () => {
      const response = getFormat(10)
      expect(response.roc).toEqual(true)
      expect(response.tft).toEqual(false)
      expect(response.reforged).toEqual(false)
    })

    it('should return roc true when value is 19', () => {
      const response = getFormat(19)
      expect(response.roc).toEqual(true)
      expect(response.tft).toEqual(false)
      expect(response.reforged).toEqual(false)
    })
  })

  describe('tft true', () => {
    it('should return tft true when value is 20', () => {
      const response = getFormat(20)
      expect(response.roc).toEqual(false)
      expect(response.tft).toEqual(true)
      expect(response.reforged).toEqual(false)
    })

    it('should return tft true when value is 29', () => {
      const response = getFormat(29)
      expect(response.roc).toEqual(false)
      expect(response.tft).toEqual(true)
      expect(response.reforged).toEqual(false)
    })
  })

  describe('reforged true', () => {
    it('should return reforged true when value is greater than 30', () => {
      const response = getFormat(31)
      expect(response.roc).toEqual(false)
      expect(response.tft).toEqual(false)
      expect(response.reforged).toEqual(true)
    })
  })
})
