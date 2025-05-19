import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityApiResponse: CityAPIResponse = {
  id: "1",
  name: "Feira de santana",
  sys: {
    country: "BR",
  },
  coord: {
    lat: 123,
    lon: 321
  }
}