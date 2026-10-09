
// Object.fromEntries(formData.entries())

'use client'

import React, { useState } from 'react';
import {Eye, EyeSlash} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { signIn, signUp } from '@/lib/auth-clients';


const SignUpPage = () => {

    const handleGoogleSignIn =async() =>{
        const resData =await signIn.social({
            provider:'google'
        })
        console.log(['After Google Sign in', resData])
    }
    const handleGitHubSignIn =async() =>{
        const resData =await signIn.social({
            provider:'github'
        })
        console.log(['After GitHub Sign in', resData])
    }

    const [isVisible, setIsVisible] = useState(false);
    

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string>= {};
     formData.forEach((value, key) => {
      data[key] = value.toString();
    });

     

    console.log('data from for form', data);


    const {data:resData , error} = await signUp.email({
        name:data.name,
        email:data.email,
        password:data.password,
    })
    console.log(resData,error);
};
    return (

         <Card className="min-h-screen flex items-center justify-center mx-w-md w-full shadow-lg">
            <Form className="flex w-96 h-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder='Your name' />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                    <TextField 
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                        }}
                    >
                        <Label>Password</Label>
                    
                        <InputGroup>
                            <InputGroup.Input
                            placeholder='Enter your password'
                            type={isVisible ? "text" : "password"}
                            />
                            <InputGroup.Suffix className="pe-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                    {/* <Check /> */}
                    Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                    Reset
                    </Button>
                </div>
                <div className='container mx-auto items-center gap-4'>
                    <Button
                    onClick={handleGoogleSignIn}>Sign In with Google</Button>
                    <Button onClick={handleGitHubSignIn}>Sign In with GitHub</Button>
                </div>
            </Form>
         </Card>
          
    );
};

export default SignUpPage;