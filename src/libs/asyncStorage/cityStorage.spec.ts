import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"
const newCity: CityProps = {
  id: "1",
  latitude: 321,
  longitude: 123,
  name: "feira de santana"
}
describe("Storage: CityStorage", () => {
  it("Should be return null when don't have city storaged", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()

  })

  it("Should be return city storaged", async () => {

    await saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)

  })

  it("Should be remove city storaged", async () => {
    await saveStorageCity(newCity)

    await removeStorageCity()
    const response = await getStorageCity()

    expect(response).toBeNull()

  })
})

