import { Day } from "."
import clearDay from "@assets/clear_day.svg"
import { render, screen } from "@testing-library/react-native"

describe("Component: Day", () => {
  it("Should be render day", async () => {
    render(<Day
      data={{
        day: "18/07",
        icon: clearDay,
        max: "34",
        min: "31",
        weather: "Céu Limpo"
      }}
    />)
    expect(screen.getByText("18/07")).toBeTruthy()
  })
})

