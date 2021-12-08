import { TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { NewsletterContainer, MainText, InputContainer, SendButton, TextContainer } from "./style";
<TextField id="outlined-basic" label="Outlined" variant="outlined" />;

export const Newsletter = () => {

    const {form, onChange, cleanFields} = useForm ({
        name: "",
        email: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        alert('Pronto! Agora você receberá todas as noovidades da Pulsar Imagens!')
        cleanFields()
    }

    return (
        <NewsletterContainer>
            <TextContainer>
                <MainText>
                    Cadastre-se na newsletter e receba novidades
                </MainText>
            </TextContainer>
            <form onSubmit={onSubmitForm}>
                <InputContainer>
                    <TextField
                        name={'name'}
                        value={form.name}
                        onChange={onChange}
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
                    <SendButton
                        type={'submit'}
                    >   Enviar
                    </SendButton>
                </InputContainer>
            </form>
        </NewsletterContainer>
    )
}