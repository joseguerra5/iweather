import { getNextDays } from "./getNextDays"

describe("GetNextDays", () => {
  it("Should be return the next five days", () => {
    const nextFiveDays = getNextDays()

    expect(nextFiveDays.length).toEqual(5)
  })
})