import React from "react";
import { Header } from "../../components/Header/Header";
import { MainContainer, InputContainer, SendButton, MainText, LoginText} from "./styled";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { goToLoginPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {

    const history = useHistory()
    
    return (
        <div>
            <Header/>
            <MainContainer>
                <MainText>Cadastre-se</MainText>
                <InputContainer>
                    <TextField
                        name={'name'}
                        //value={form.name}
                        //onChange={onChange}
                        label={'Nome'}
                        placeholder={'Nome e sobrenome'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'name'}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField 
                        name={'email'}
                        //value={form.email}
                        //onChange={onChange}
                        label={'E-mail'}
                        placeholder={'email@email.com'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField 
                        name={'password'}
                        //value={form.email}
                        //onChange={onChange}
                        label={'Senha'}
                        placeholder={'Senha de pelo menos 8 dígitos'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="Desejo receber novidades sobre a Pulsar Imagens"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="Li e concordo com os Termos de Uso do site"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <SendButton
                        type={'submit'}
                    >   Cadastrar
                    </SendButton>
                    <LoginText onClick={() => goToLoginPage(history)}>Já possui uma conta? Entre aqui</LoginText>
                </InputContainer>
            </MainContainer>
        </div>
    )
}