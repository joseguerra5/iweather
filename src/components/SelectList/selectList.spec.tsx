import { fireEvent, render, screen } from "@testing-library/react-native"

import { SelectList } from "@components/SelectList"
describe("Component: SelectList", () => {
  it("Should be render without activity indicator if isLoading prop is undefined", () => {
    const data = [
      { id: "1", name: "Feira de Santana", latitude: 123, longitude: 321 },
      { id: "2", name: "Salvador", latitude: 1233, longitude: 3221 }
    ]

    const onPress = jest.fn()
    render(<SelectList
      data={data}
      onChange={() => { }}
      onPress={onPress}
    />)

    const selectedCity = screen.getByText(/feira/i)
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[0])

  })

  it("Not should be show options when data props is empty", () => {


    render(<SelectList
      data={[]}
      onChange={() => { }}
      onPress={() => { }}
    />)

    const option = screen.getByTestId("options")

    expect(option.children.length).toBe(0)

  })
})

