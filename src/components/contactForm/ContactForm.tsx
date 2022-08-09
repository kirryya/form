import React, {ChangeEvent} from 'react';
import style from "./ContactForm.module.scss";

type ContactFormPropsType = {
    onChangeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    yourNameError: boolean
    emailError: boolean
    messageError: boolean
    message: string
    email: string
    yourName: string
}

export const ContactForm = (props: ContactFormPropsType) => {

    const errorMessage = <div style={{color: "red"}}>Error!</div>

    return (
        <div className={style.form}>
            <input type={"text"} required placeholder={"Enter your name..."} value={props.yourName}
                   className={style.nameForm} onChange={props.onChangeNameHandler}
            />
            <span> {props.yourNameError ? errorMessage : null} </span>

            <input name="email" placeholder={"Enter your email..."} value={props.email}
                   className={style.emailForm} onChange={props.onChangeEmailHandler}
            />
            <span> {props.emailError ? errorMessage : null} </span>

            <input name="phone" placeholder={"Enter your phone..."} value={props.email}
                   className={style.emailForm} onChange={props.onChangeEmailHandler}
            />
            <span> {props.emailError ? errorMessage : null} </span>

            <input name="phone" placeholder={"Enter your Date of birth..."} value={props.email}
                   className={style.emailForm} onChange={props.onChangeEmailHandler}
            />
            <span> {props.emailError ? errorMessage : null} </span>

            <textarea placeholder={"Enter your message..."} value={props.message}
                      className={style.messageForm}
                      onChange={props.onChangeMessageHandler}>{props.message}</textarea>
            <span> {props.messageError ? errorMessage : null} </span>

        </div>
    );
};
