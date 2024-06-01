import { Box, FormControl, Grid, TextField, Typography, styled } from '@mui/material'


type Props = {}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TextInput = styled(TextField)({

    border: 'none',
    borderRadius: '.5rem',
    backgroundColor: '#fff',
})

const Pagamento = (props: Props) => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} margin={'2rem 0'}>
            <Typography variant='h4'> Dados Pessoais </Typography>
            <Grid margin={'2rem 0'} border={'1px solid #fff'} padding={'2rem'} borderRadius={'.5rem'}>
                <FormControl>
                    <TextInput type="text"
                        autoComplete="mobile"
                        id="nome"
                        name="nome"
                        label="Digite seu nome"
                        variant="filled"
                        margin="normal"
                        fullWidth />

                    <TextInput type="tel"
                        autoComplete="mobile"
                        id="telefone"
                        name="telefone"
                        label="Digite seu telefone"
                        variant="filled"
                        margin="normal"
                        fullWidth />

                </FormControl>
            </Grid>
        </Box>
    )
}

export default Pagamento