import { fireEvent, render, screen } from "@testing-library/react"
import TemperaturaSlade from "./TemperaturaSlade"




describe("Testa componente TemperaturaSlade", () => {


    const onChangeMock = vi.fn()
    const setValMock = vi.fn()

    const MIN = 0;
    const MAX = 100;

    it("Deve haver 2 typography, quente e morno", async () => {
        render(<TemperaturaSlade />)

        const mornoTypography = await screen.findByText('Morno')
        expect(mornoTypography).toBeInTheDocument


        const quenteTypography = await screen.findByText('Quente')
        expect(quenteTypography).toBeInTheDocument
    });


    it("Typography quente deve ser vermelho, e o morno verde, e cursor point", async () => {
        render(<TemperaturaSlade />)

        const mornoTypography = await screen.getByText('Morno')
        expect(mornoTypography).toHaveStyle({ cursor: 'pointer', color: '#1CC019' })


        const quenteTypography = await screen.getByText('Quente')
        expect(quenteTypography).toHaveStyle({ cursor: 'pointer', color: '#EF2A39' })

    });


    it("Deve haver um Slider e o valor inicial deve ser 60", async () => {
        render(<TemperaturaSlade />)

        const sliderElement = await screen.getByRole('slider')
        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveAttribute('value', '60')
    });

    it("Deve chamar a função onChange corretamente ao alterar o valor do Slider", async () => {
        render(<TemperaturaSlade onChange={onChangeMock} />)

        const sliderElement = await screen.getByRole('slider')
        fireEvent.change(sliderElement, { target: { value: 80 } })
        expect(onChangeMock).toHaveBeenCalledWith(80)
        expect(sliderElement).toHaveAttribute('value', '80')
    });

})