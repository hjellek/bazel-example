import {render, screen} from '@testing-library/react'
import {App} from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
    test("render", async () => {
        render(<App />)

        expect(await screen.getByRole('heading')).toHaveTextContent('My App')
    })
})
