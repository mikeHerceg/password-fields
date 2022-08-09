import {useState } from 'react';

export const useForm = () =>{

    const [errors, setErrors] = useState<string[]>([])
    const [passwordA, setPasswordA] = useState<string>('')
    const [passwordB, setPasswordB] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>()

    //eslint-disable-next-line
    const specialChars = '(!@#$%^&*()_-+={[}]|:;"<,>.)'+" ' "

    const lowerRegex = new RegExp('^[a-z]*$')
    const upperRegex = new RegExp('^[A-Z]*$')
    const numberRegex = new RegExp('^(0|[1-9][0-9]*)$')


    const validatePasswords = ():boolean =>{
        if(!passwordA || !passwordB){
            setErrors(['both fields must be filled in'])
            return false
        }

        const errorMessages = []
        if(passwordA !== passwordB){
            errorMessages.push('passwords do not match')
        }
        if(passwordA.split('').length < 6){
            errorMessages.push('password requires more than 6 characters')
        }
        if(!passwordA.split('').some(char => upperRegex.test(char))){
            console.log(3)
            errorMessages.push('password requires at least one uppercase letter')
        }
        if(!passwordA.split('').some(char => lowerRegex.test(char))){
            console.log(4)
            errorMessages.push('password requires at least one lowercase letter')
        }
        if(!passwordA.split('').some(char => numberRegex.test(char))){
            console.log(5)
            errorMessages.push('password requires at least one number')
        }
        if(!passwordA.split('').some(char => specialChars.includes(char))){
            console.log(errors, 6)
            errorMessages.push('password requires at least one special character')
        }

        if(errorMessages.length > 0){
            setErrors(errorMessages)
            return false
        }
        setErrors([])
        return true
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(validatePasswords()){
            setSuccessMessage('Success!')
            return
        }
    }
    return {
        setPasswordA,
        passwordA,
        setPasswordB,
        passwordB,
        handleSubmit,
        errors,
        successMessage
    }
}