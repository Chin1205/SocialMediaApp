import React, { useState } from "react";
import Joi from "joi";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material'
// import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [form, setForm] = useState({
        userName: '',
        userPassword: '',
    })
    // const navigate = useNavigate()

    const [errors, setErrors] = useState({
        userName: '',
        userPassword: '',
    })

    const schema = Joi.object({
        userName: Joi.string().required().label('Username'),
        userPassword: Joi.string().required().label('Password'),
    })

    const handleInputChange = ({currentTarget:input}) => {
        setForm({...form, [input.name]:input.value})
        const {error} = schema.extract(input.name).validate(input.value)
        if(error) {
            setErrors({...errors, [input.name]:error.details[0].message})
        } else {
            delete errors[input.name]
            setErrors(errors)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/admin/')
            .then(res => {
                if(!res.ok) {
                    console.log('error')
                    return
                }
                return res.json()
            })
            .then(data => {
                console.log(data[0].userName)
                // navigate('/')
            })
        
    }

    const isFormInvalid = () => {
        const result = schema.validate(form)
        return !!result.error
    }

    return(
        <Grid container justifyContent={'center'} component={'form'} onSubmit={handleSubmit}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title="Login" />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name='userName' 
                                error={!!errors.userName} helperText={errors.userName} 
                                onChange={handleInputChange} value={form.userName} label="Username" fullWidth variant='standard' />

                                <TextField name='userPassword' type="password"
                                error={!!errors.userPassword} helperText={errors.userPassword} 
                                onChange={handleInputChange} value={form.userPassword} label="Password" fullWidth variant='standard' />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button disabled={(isFormInvalid())} type={'submit'} fullWidth>Login</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )

}

export default LoginForm