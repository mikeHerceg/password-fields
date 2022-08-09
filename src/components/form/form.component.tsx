import React from "react";
import { PasswordField } from "../fields/password-field";
import { useForm } from "./form.hooks";
import styles from "./form.module.scss";

export const Form = () => {
  const {
    handleSubmit,
    passwordA,
    setPasswordA,
    passwordB,
    setPasswordB,
    errors,
    successMessage,
  } = useForm();

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <PasswordField
        name={"pwa"}
        label="Password"
        isRequired
        onChange={(e) => {
          setPasswordA({ ...passwordA, value: e.target.value });
        }}
        value={passwordA?.value}
        error={passwordB?.error}
      />
      <PasswordField
        name={"pwb"}
        label="Confirm Password"
        isRequired
        onChange={(e) => {
          setPasswordB({ ...passwordB, value: e.target.value });
        }}
        value={passwordB?.value}
        error={passwordB?.error}
      />
      <button type="submit">Submit</button>
      {errors.length !== 0 && (
        <div>
          {errors.map((error: string, index: number) => (
            <p key={index} className={styles.error}>
              {error}
            </p>
          ))}
        </div>
      )}
      {successMessage && errors.length === 0 && (
        <div className={styles.success}>{successMessage}</div>
      )}
    </form>
  );
};
