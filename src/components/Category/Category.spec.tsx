import { render, screen } from "@testing-library/react"
import Category from "./Category"
import { vi } from 'vitest'


const fetchProductMock = () => Promise.resolve(["Hamburguer", "Combos", "HotDog"])

const navigateMock = vi.fn()

vi.mock("react-router-dom", () => ({
    useNavigate: () => {
        return navigateMock
    },

    Link: vi.fn().mockImplementation((props) => props.children),
}))
describe("Testa componente Category", () => {

    it("Deve ter categoria todos", async () => {

        render(
            <Category />
        )

        const titulo = await screen.findByText(/Todos/i)
        expect(titulo).toBeInTheDocument()

    });

})