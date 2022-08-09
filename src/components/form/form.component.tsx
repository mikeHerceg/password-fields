import React from "react";
import {useForm} from "./form.hooks";

export const Form = () => {
    const {text} = useForm();
    return (<>{text}</>)
};