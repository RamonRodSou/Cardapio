import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Search from './Search';


describe("Testa componente Search", () => {
    
    const mockState = vi.fn()

    it("Deve haver um componente Link", async () => {
        render(<Search setSearch={mockState}/>)

        const searchBox = await screen.getByRole('textbox')
        expect(searchBox).toBeInTheDocument()
    });

    it("Deve haver uma imagem", async () => {
        render(<Search setSearch={mockState}/>)

        const img = await screen.getByRole('img',{name: 'Lupa de Pesquisa'})
        expect(img).toBeInTheDocument()
    });

})

