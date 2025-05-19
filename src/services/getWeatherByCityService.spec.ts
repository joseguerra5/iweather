import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatrherApiResponse"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("Api: getWeatherByCityService", () => {
  it("Should return weather details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse
    })

    const response = await getWeatherByCityService({
      latitude: 123, longitude: 456
    })
    expect(response).toHaveProperty("today")

  })
})

