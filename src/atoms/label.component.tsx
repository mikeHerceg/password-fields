import React from "react";

interface LabelProps {
    label:string,
    name:string,
    isRequired:boolean
}
export const Label:React.FC<LabelProps> = ({label,isRequired,name }) => (
    <label htmlFor={name}>{label}{isRequired && '*'}</label>
)