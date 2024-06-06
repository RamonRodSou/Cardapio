import { Box, Link, Typography, styled } from '@mui/material';
import '../../Variavel/_color.css';
import iconInstagram from '../../assets/img/icon-instagran.svg'
import Logo from '../Logo/Logo';
import React, { useEffect } from 'react';
import { AdmAPIGet } from '../../server/AdmAPI';
import BackPage from '../BackPage/BackPage';
import User from '../../Class/User';

interface IProps {
    fetchUser: () => Promise<User[]>
}

const Titulo1 = styled(Typography)({

    fontSize: '1.5rem',
    fontFamily: "Lobster",
    fontWeight: 400,
    color: 'var(--tituloResenha-color)',
    padding: 0,
    marginBottom: '-1.5rem',
    textAlign: 'center',
    marginLeft: '-1rem'

})

const Titulo2 = styled(Typography)({

    fontSize: '2.8rem',
    fontFamily: "Lobster",
    fontWeight: 400,
    color: 'var(--titulo-color)'
})


const NameLogo = ({ fetchUser }: IProps) => {

    const [user, setUser] = React.useState<User[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await AdmAPIGet()
            setUser(data)
        }
        fetchData();
    }, [])

    return (
        <div>
            <BackPage />
            {user.map((item) => (
                <Box
                    display='flex'
                    flexDirection='row'
                    gap='2rem'
                    justifyContent='space-between'
                    margin='1rem .5rem'
                    key={item.id}

                >
                    <Box
                        display='flex'
                        flexDirection='column'

                    >
                        <Titulo1>
                            {item.businessName1}
                        </Titulo1>
                        <Titulo2>
                            {item.businessName2}
                        </Titulo2>
                        <Typography variant="body1" fontSize='.7rem' margin='-.5rem 0 0 0' textTransform='uppercase'>
                            {item.info}
                        </Typography>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            gap='.2rem'
                        >
                            <img src={iconInstagram} alt="Logo Instagram" />
                            <Link
                                href={item.instagramLink}
                                underline="none"
                                color="var(--titulo-color)"
                            >
                                {item.instagram}
                            </Link>
                        </Box>
                    </Box>
                    <Logo data-testid="logo-component" />
                </Box>
            ))}
        </div>
    )
}

export default NameLogo