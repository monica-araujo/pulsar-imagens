import React from "react";
import { Header } from "../../components/Header/Header";
import { MainContainer, InputContainer, SendButton, MainText, SignUpText} from "./styled";
import TextField from '@mui/material/TextField';
import { goToSignUpPage } from "../../routes/coordinator";
import { useHistory } from 'react-router-dom'
import useForm from "../../hooks/useForm";

export const LoginPage = () => {

    const history = useHistory()

    const {form, onChange, cleanFields} = useForm ({
        email: "",
        password: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        alert('Login efetuado com sucesso!')
        cleanFields()
    }

    return (
        <div>
        <Header/>
        <MainContainer>
            <MainText>
                Entre para continuar
            </MainText>
            <form onSubmit={onSubmitForm}>
                <InputContainer>
                    <TextField 
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
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
                        value={form.password}
                        onChange={onChange}
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
                    <SendButton
                        type={'submit'}
                    >   Entrar
                    </SendButton>
                    <SignUpText onClick={() => goToSignUpPage(history)}>Não tem conta? Cadastre-se aqui</SignUpText>
                </InputContainer>
            </form>
        </MainContainer>
        </div>
        
    )
}