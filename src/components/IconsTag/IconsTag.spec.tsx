import { render, screen } from "@testing-library/react"
import IconsTag from "./IconsTag"

describe("Testa componente IconTag", () => {
    
    it("Deve ter uma tag img com nome Coração, quando isStar = false", async () => {
        render(<IconsTag isStar={false}/>)

        const imgTag = await screen.getByRole('img', {name: 'Coração',  })
        expect(imgTag).toBeInTheDocument()

    });

    it("Deve ter uma tag img com nome Estrela, quando isStar = true", async () => {
        render(<IconsTag isStar={true}/>)

        const imgTag = await screen.getByRole('img', {name: 'Estrela'})
        expect(imgTag).toBeInTheDocument()
    });
})