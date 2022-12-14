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
            <div className={style.formBlock}>
                <label className={style.labelForm}>Name & Surname*</label>
                <input type="text"
                       name="yourName"
                       placeholder={"Enter your name & surname..."}
                       value={props.yourName}
                       className={style.inputForm}
                       onChange={props.onChangeNameHandler}
                />
                <span> {props.yourNameError && <span className={style.errorForm}> {props.yourNameError}</span>} </span>
            </div>
            <div className={style.formBlock}>
                <label className={style.labelForm}>Email*</label>
                <input type="text"  // type="text, чтобы по заданию не срабатывала браузерная валидация email
                       placeholder={"Enter your email..."}
                       value={props.email}
                       className={style.inputForm}
                       onChange={props.onChangeEmailHandler}
                />
                <span> {props.emailError && <span className={style.errorForm}> {props.emailError}</span>} </span>
            </div>
            <div className={style.formBlock}>
                <label className={style.labelForm}>Phone number*</label>
                <input type="tel"
                       name="phone"
                       placeholder={"+7(___)___-__-__"}
                       value={props.phone}
                       className={style.inputForm} onChange={props.onChangePhoneHandler}
                />
                <span> {props.phoneError && <span className={style.errorForm}>{props.phoneError}</span>} </span>
            </div>
            <div className={style.formBlock}>
                <label className={style.labelForm}>Date of Birth*</label>
                <input type="date"
                       name="birth"
                       placeholder={"Enter your Date of birth..."}
                       value={props.birth}
                       className={style.inputForm}
                       onChange={props.onChangeBirthHandler}
                />
                <span> {props.birthError && <span className={style.errorForm}>{props.birthError}</span>} </span>
            </div>
            <div className={style.messageBlock}>
                <label className={style.labelForm}>Message*</label>
                <div>
                <textarea placeholder={"Enter your message..."}
                          rows={4}
                          value={props.message}
                          className={style.messageForm}
                          onChange={props.onChangeMessageHandler}>
                {props.message}</textarea>
                </div>
                <span> {props.messageError && <span className={style.errorForm}>{props.messageError}</span>} </span>
            </div>
        </div>
    );
};
