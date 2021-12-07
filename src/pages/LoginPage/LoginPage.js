import React from "react";
import { Header } from "../../components/Header/Header";
import { MainContainer } from "./styled";
import TextField from '@mui/material/TextField';


export const LoginPage = () => {
    return (
        <div>
        <Header/>
        <MainContainer>
            <form>
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
            </form>
        </MainContainer>
        </div>
        
    )
}