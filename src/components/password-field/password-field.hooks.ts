import { useState } from "react";
import { FieldTypes } from "../../types";

export const usePasswordField = () => {
  const [fieldType, setFieldType] = useState<FieldTypes>(FieldTypes.Password);

  const toggleType = () => {
    if (fieldType !== FieldTypes.Password) {
      return setFieldType(FieldTypes.Password);
    }
    return setFieldType(FieldTypes.Text);
  };

  return {
    fieldType,
    toggleType,
  };
};
