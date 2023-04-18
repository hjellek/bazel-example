import {render, screen} from '@testing-library/react'
import {App} from "./App";

describe("App", () => {
    test("render", async () => {
        render(<App />)

        expect(screen.getByRole('h1')).toHaveTextContent('hello there')
    })
})
