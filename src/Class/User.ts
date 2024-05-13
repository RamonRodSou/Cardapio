import { IProfessional  } from "../Interface/IProfessional"

class User implements IProfessional  {
    id: string
    firstName: string
    lastName: string
    email: string
    telephone: number
    location: string
    instagramLink: string
    instagram: string
    businessName1: string
    businessName2: string
    info: string
    private password: string | number

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string | number,
        telephone: number,
        location: string,
        instagramLink: string,
        instagram: string,
        businessName1: string,
        businessName2: string,
        info: string
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.telephone = telephone
        this.location = location
        this.instagramLink = instagramLink
        this.instagram = instagram
        this.businessName1 = businessName1
        this.businessName2 = businessName2
        this.info = info
    }

    getPassword(): string | number {
        return this.password
    }
}