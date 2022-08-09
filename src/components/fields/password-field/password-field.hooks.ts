import { useCallback, useMemo, useState } from 'react';
import { FieldTypes } from '../../../types';



export const usePasswordField = () =>{

    const [fieldType, setFieldType] = useState<FieldTypes>(FieldTypes.Password)
    
    const toggleType = useCallback(() => {
        if(fieldType !== FieldTypes.Password){
            return setFieldType(FieldTypes.Text)
        }
        return setFieldType(FieldTypes.Password)
    },[])

    return {
        fieldType,
        toggleType
    }
}