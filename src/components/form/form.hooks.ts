import { useMemo } from 'react';

export const useForm = () =>{
    const text = useMemo(()=>'text',[]);
    return {
        text
    }
}