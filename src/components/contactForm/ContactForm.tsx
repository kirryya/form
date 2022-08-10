import React, {ChangeEvent} from 'react';
import style from "./ContactForm.module.scss";

type ContactFormPropsType = {
    onChangeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePhoneHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeBirthHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    yourNameError: string
    emailError: string
    phoneError: string
    birthError: string
    messageError: string
    yourName: string
    email: string
    phone: string
    birth: string
    message: string
}

export const ContactForm = (props: ContactFormPropsType) => {

    return (
        <div className={style.form}>

            <label className={style.labelForm}>Name & Surname</label>
            <input type="text" name="yourName"
                   placeholder={"Enter your name..."}
                   value={props.yourName}
                   className={style.inputForm}
                   onChange={props.onChangeNameHandler}
            />
            <span> {props.yourNameError && <span className={style.errorForm}> {props.yourNameError}</span>} </span>

            <label className={style.labelForm}>Email</label>
            <input name="email"
                   placeholder={"Enter your email..."}
                   value={props.email}
                   className={style.inputForm}
                   onChange={props.onChangeEmailHandler}
            />
            <span> {props.emailError && <span className={style.errorForm}> {props.emailError}</span>} </span>

            <label className={style.labelForm}>Phone number( +7__________)</label>
            <input type={"tel"}
                   name="phone"
                   placeholder={" +7_________"}
                   value={props.phone}
                   className={style.inputForm} onChange={props.onChangePhoneHandler}
            />
            <span> {props.phoneError && <span className={style.errorForm}>{props.phoneError}</span>} </span>

            <label className={style.labelForm}>Date of Birth</label>
            <input type={"date"}
                   name="birth"
                   placeholder={"Enter your Date of birth..."}
                   value={props.birth}
                   className={style.inputForm}
                   onChange={props.onChangeBirthHandler}
            />
            <span> {props.birthError && <span className={style.errorForm}>{props.birthError}</span>} </span>

            <label className={style.labelForm}>Message</label>
            <textarea placeholder={"Enter your message..."}
                      value={props.message}
                      className={style.messageForm}
                      onChange={props.onChangeMessageHandler}>
                {props.message}</textarea>
            <span> {props.messageError && <span className={style.errorForm}>{props.messageError}</span>} </span>
        </div>
    );
};
