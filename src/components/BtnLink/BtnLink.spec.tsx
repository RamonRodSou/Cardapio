import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import BtnLink from './BtnLink'
import { vi } from 'vitest'

describe("Testa componente BtnLink", () => {

    it("Deve haver um componente Link", async () => {
        const mockHandleAddCart = vi.fn()
        const link = "/some-path"
        const title = "Adicionar ao Carrinho"

        render(
            <BrowserRouter>
                <BtnLink handleAddCart={mockHandleAddCart} link={link} title={title} />
            </BrowserRouter>
        )

        const linkComponent = await screen.getByRole('link')
        expect(linkComponent).toBeInTheDocument()
    });


})
