import React from "react";
import { usePasswordField } from "./password-field.hooks";
import styles from "./password-fields.module.scss";
import { FieldTypes } from "../../types";

interface PasswordFieldProps {
  value: string;
  name: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  isRequired?: boolean;
  error?: string;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  name,
  label,
  onChange,
  onBlur,
  isRequired,
  error,
}) => {
  const { fieldType, toggleType } = usePasswordField();

  return (
    <div className={styles.formWrapper}>
      <label htmlFor={name}>
        {label}
        {isRequired && "*"}
        <button type="button" onClick={toggleType}>
          {fieldType === FieldTypes.Password ? "show" : "hide"} password
        </button>
      </label>
      <input
        name={name}
        type={fieldType}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span>error: {error}</span>}
    </div>
  );
};
