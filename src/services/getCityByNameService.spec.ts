import { mockCityApiResponse } from "@__tests__/mocks/mockCityApiResponse"
import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe("Api: GetCityByNameService", () => {
  it("Should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityApiResponse
    })

    const response = await getCityByNameService("Feira de santana")

    expect(response.length).toEqual(1)

  })
})

