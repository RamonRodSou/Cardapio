import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from '@mui/material'
import React from 'react';


type Props = {}

const TextInput = styled(TextField)({

    border: 'none',
    borderRadius: '.5rem',
    backgroundColor: '#fff',
    margin: '0.2rem 0 '
})

const Pagamento = (props: Props) => {

    const [value, setValue] = React.useState('sim')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} margin={'2rem 0'}>
            <Typography variant='h4'> Dados Pessoais </Typography>
            <Grid margin={'2rem 0'} border={'1px solid #fff'} padding={'2rem'} borderRadius={'.5rem'}>
                <FormControl sx={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '2rem' }}>
                    <span>
                        <label>Nome:</label>
                        <TextInput type="text"
                            autoComplete="mobile"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            variant="outlined"
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
                        fullWidth />
                    </span>
                    <span>
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
                    </span>
                    <span>
                        <label>Obsevarção:</label>
                        <TextInput type="obs"
                            id="observacao"
                            multiline
                            rows={4}
                            placeholder="Tem alguma observação?"
                            fullWidth />
                    </span>

                </FormControl>
            </Grid>
        </Box >
    )
}

export default Pagamento