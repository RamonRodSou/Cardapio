import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';
import { getProduct } from "../../server/get";
import ProductContainer from "./Product";
import { faker } from "@faker-js/faker";

const mockFetchProductFn = vi.fn(getProduct).mockImplementation(
    async () => {
        return [
            {
                id: "1",
                tipo: "Hamburguer",
                name: "XTudo",
                image: faker.image.urlPlaceholder(),
                valor: " 10,00",
                star: 4.9,
                time: 10,
                ingredientes: [],
                temperatura: 60,
                count: 1,
                descricao: "Esse é o hambúrguer artesanal clássico para quem gosta de saborear um blend de carne moída com bacon suculento e fresco.Carne ao ponto, maionese caseira absurda!Queijo cheddar e fatias finas e crocantes de bacon. Pão brioche macio e amanteigado tostado na chapa"
            }
        ]
    }
);

const navigateMock = vi.fn();

vi.mock("react-router-dom", () => ({
    useNavigate: () => {
        return navigateMock
    },

    Link: vi.fn().mockImplementation((props) => props.children),
}))

describe("Testa componente ProductContainer", () => {
    it("Deve haver um titulo escrito com o tipo do primeiro produto", async () => {

        render(<ProductContainer fetchProduct={mockFetchProductFn} handleSelect={vi.fn()} />)
        const title = await screen.findByText(/Hamburguer/i);
        expect(title).toBeInTheDocument()
    })

})