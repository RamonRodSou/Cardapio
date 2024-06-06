import { render, screen } from "@testing-library/react"
import NameLogo from "./NameLogo"
import { AdmAPIGet } from "../../server/AdmAPI"
import { vi } from 'vitest'
import { faker } from "@faker-js/faker"

const mockFetchUserFn = vi.fn(AdmAPIGet).mockImplementation(
    async () => {
        return [
            {
                id: 1,
                firstName: "Ramon",
                lastName: "Rodrigues",
                email: "ramon@rodsoudev.com",
                password: "123456",
                telephone: 21972923210,
                location: "rua a",
                instagram: "@rodsoudev",
                instagramLink: faker.internet.url(),
                businessName1: "Esquina",
                businessName2: "Da carne",
                info: "Do tamanho da sua fome",
                image:  faker.image.urlPlaceholder(),
            },
            {
                id: 2,
                firstName: "Samara",
                lastName: "Rodrigues",
                email: "Samara@rodsoudev.com",
                password: "123456",
                telephone: 21900000000,
                location: "rua a",
                instagram: "@rodsoudev",
                instagramLink: faker.internet.url(),
                businessName1: "Esquina",
                businessName2: "Da Pizza",
                info: "Do tamanho da sua fome",
                image: faker.image.urlPlaceholder(),
            }

        ]
    }
)

const navigateMock = vi.fn()

vi.mock("react-router-dom", () => ({
    useNavigate: () => {
        return navigateMock
    },

    Link: vi.fn().mockImplementation((props) => props.children),
}))

describe("Testa componente NameLogo", () => {

    it("Deve haver um titulo escrito com o primeiro nome do estabelecimento", async () => {

        render(<NameLogo fetchUser={mockFetchUserFn} />)
        const title = await screen.findByText("Esquina", { selector: 'p' })
        expect(title).toBeInTheDocument()
    });

    it("Deve haver um titulo escrito com o segundo nome do estabelecimento", async () => {

        render(<NameLogo fetchUser={mockFetchUserFn} />)
        const title = await screen.findByText("Da carne")
        expect(title).toBeInTheDocument()
    });

    // it("Deve haver Logo do estabelecimento", async () => {

    //     render(<NameLogo fetchUser={mockFetchUserFn} />)
    //     const logoComponent = await screen.getByRole('Logo');
    //     expect(logoComponent).toBeInTheDocument()
    // });

    
})
