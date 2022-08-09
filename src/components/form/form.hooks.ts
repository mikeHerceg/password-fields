import {useState } from 'react';

export const useForm = () =>{
    const initialvalue = {
        value:'',
        error:''
    }
    const [errors, setErrors] = useState<string[]>([])
    const [passwordA, setPasswordA] = useState(initialvalue)
    const [passwordB, setPasswordB] = useState(initialvalue)
    const [successMessage, setSuccessMessage] = useState<string>()

    //eslint-disable-next-line
    const specialChars = '(!@#$%^&*()_-+={[}]|:;"<,>.)'+" ' "

    const lowerRegex = new RegExp('^[a-z]*$')
    const upperRegex = new RegExp('^[A-Z]*$')
    const numberRegex = new RegExp('^(0|[1-9][0-9]*)$')


    const validatePasswords = ():boolean =>{
        const valueA = passwordA.value
        const valueB = passwordB.value
        console.log({valueA,valueB})
        const errorMessages = []
        if(valueA !== valueB){
            console.log(1)
            errorMessages.push('passwords do not match')
        }
        if(valueA.split('').length < 6){
            console.log(2)
            errorMessages.push('password requires more than 6 characters')
        }
        if(!valueA.split('').some(char => upperRegex.test(char))){
            console.log(3)
            errorMessages.push('password requires at least one uppercase letter')
        }
        if(!valueA.split('').some(char => lowerRegex.test(char))){
            console.log(4)
            errorMessages.push('password requires at least one lowercase letter')
        }
        if(!valueA.split('').some(char => numberRegex.test(char))){
            console.log(5)
            errorMessages.push('password requires at least one number')
        }
        if(!valueA.split('').some(char => specialChars.includes(char))){
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