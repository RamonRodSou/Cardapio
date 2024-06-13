import { Box, Button, FormControl, FormControlLabel, Grid, RadioGroup, TextField, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react';
import BtnLink from '../components/BtnLink/BtnLink';
import { ProductContext, dadosUser } from '../contextApi/ProductContext';
import { useNavigate } from 'react-router-dom';


type Props = {}

const TextInput = styled(TextField)({

    border: 'none',
    borderRadius: '.5rem',
    backgroundColor: '#fff',
    margin: '0.2rem 0 '
})

const DadosPessoasForm = styled('form')({
    margin: '2rem 0',
    border: '1px solid #fff',
    padding: '2rem',
    borderRadius: '.5rem',
})


const Pagamento = (props: Props) => {

    const [value, setValue] = React.useState('sim')
    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [obs, setObs] = useState<string>('')

    const { dadosClient, setDadosClient, bag, setBag } = useContext(ProductContext)
    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue((event.target as HTMLInputElement).value)
    }

    function handleName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
        const newPhone = parseFloat(event.target.value)
        if (!isNaN(newPhone)) {
            setPhoneNumber(newPhone)
        }
    }

    function handleObs(event: React.ChangeEvent<HTMLInputElement>) {
        setObs(event.target.value)
    }

    function handleSubmit() {
        const dados: dadosUser = { name: name, phone: phoneNumber, obs: obs }
        setDadosClient(dados)
        console.log(dadosClient)
        console.log(bag)

        setBag([])
        setName('')
        setPhoneNumber(undefined)
        setObs('')

        navigate('/')

    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} margin={'2rem 0'}>
            <Typography variant='h4'> Dados Pessoais </Typography>
            <DadosPessoasForm onSubmit={handleSubmit}>
                <FormControl sx={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '2rem' }}>
                    <span>
                        <label>Nome:</label>
                        <TextInput type="text"
                            autoComplete="mobile"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            variant="outlined"
                            value={name}
                            onChange={(handleName)}
                            required
                            fullWidth />
                    </span>
                    <span>
                        <label>Telefone:</label>
                        <TextInput type="tel"
                            autoComplete="mobile"
                            id="telefone"
                            name="telefone"
                            placeholder="Digite seu telefone"
                            variant="outlined"
                            value={phoneNumber}
                            onChange={handlePhone}
                            required
                            fullWidth />
                    </span>
                    {/* <span>
                        <label>É WhatsApp?</label>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="yesOrNot"
                            value={value}
                            onChange={handleChange}
                            sx={{ 'display': 'flex', 'flexDirection': 'row' }}
                        >
                            <FormControlLabel value="sim" control={<Radio sx={{ 'color': '#fff' }} />} label="Sim" />
                            <FormControlLabel value="nao" control={<Radio sx={{ 'color': '#fff' }} />} label="Não" />
                        </RadioGroup>
                    </span> */}
                    <span>
                        <label>Obsevarção:</label>
                        <TextInput type="obs"
                            id="observacao"
                            multiline
                            rows={4}
                            placeholder="Tem alguma observação?"
                            value={obs}
                            onChange={handleObs}
                            fullWidth />
                    </span>
                    <Button type='submit'>
                        Finalizar
                    </Button>
                </FormControl>
            </DadosPessoasForm>
        </Box >
    )
}

export default Pagamento