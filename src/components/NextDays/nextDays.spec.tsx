import clearDay from "@assets/clear_day.svg"
import { render, screen } from "@testing-library/react-native"
import { NextDays } from "."

describe("Component: NextDays", () => {
  it("Should be render NextDays", async () => {
    render(<NextDays
      data={[{
        day: "18/07",
        icon: clearDay,
        max: "34",
        min: "31",
        weather: "Céu Limpo"
      },
      {
        day: "19/07",
        icon: clearDay,
        max: "34",
        min: "31",
        weather: "Céu Limpo"
      },
      {
        day: "20/07",
        icon: clearDay,
        max: "34",
        min: "31",
        weather: "Céu Limpo"
      },
      {
        day: "21/07",
        icon: clearDay,
        max: "34",
        min: "31",
        weather: "Céu Limpo"
      }
      ]}
    />)
    expect(screen.getByText("18/07")).toBeTruthy()
  })
})

