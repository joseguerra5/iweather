import clearDay from "@assets/clear_day.svg"
import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "."

describe("Component: WheatherItem", () => {
  it("Should be render WheatherItem", async () => {
    render(<WeatherItem
      icon={clearDay}
      title="Umidade do ar"
      value="81%"
    />)
    expect(screen.getByText("Umidade do ar")).toBeTruthy()
  })
})

