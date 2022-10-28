import React, {useState} from "react";
import Joi from "joi";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material'

const RegisterForm = ({editForm}) => {

    const [form, setForm] = useState(editForm || {
        name: '',
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: ''
    })

    const schema = Joi.object({
        name: Joi.string().min(2).required().label('Name'),
        userName: Joi.string().min(5).required().label('Username'),
        userEmail: Joi.string().email({minDomainSegments:2, tlds:{allow:["com", "net", "org"]}}).required().label('Email'),
        userPassword: Joi.string().min(5).required().label('Password'),
        userConfirmPassword: Joi.any().equal(Joi.ref('userPassword')).required()
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

    const handleSubmit = (e) => {
        e.preventDefault()
        // onSubmit(form)
        console.log(form.name, form.userName, form.userEmail, form.userPassword, form.userConfirmPassword)
    }

    const isFormInvalid = () => {
        const result = schema.validate(form)
        return !!result.error
    }

    return( 
        <Grid container justifyContent={'center'} component={'form'} onSubmit={handleSubmit}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title="Register" />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name='name' 
                                error={!!errors.name} helperText={errors.name} 
                                onChange={handleInputChange} value={form.name} label="Name" fullWidth variant='standard' />
                                
                                <TextField name='userName' 
                                error={!!errors.userName} helperText={errors.userName} 
                                onChange={handleInputChange} value={form.userName} label="Username" fullWidth variant='standard' />
                                
                                <TextField name='userEmail' 
                                error={!!errors.userEmail} helperText={errors.userEmail} 
                                onChange={handleInputChange} value={form.userEmail} label="Email" fullWidth variant='standard' />
                                
                                <TextField name='userPassword' type="password"
                                error={!!errors.userPassword} helperText={errors.userPassword} 
                                onChange={handleInputChange} value={form.userPassword} label="Password" fullWidth variant='standard' />
                                
                                <TextField name='userConfirmPassword' type="password"
                                error={!!errors.userConfirmPassword} helperText={errors.userConfirmPassword} 
                                onChange={handleInputChange} value={form.userConfirmPassword} label="Confirm Password" fullWidth variant='standard' />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button disabled={isFormInvalid()} type={'submit'} fullWidth>Register</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default RegisterForm