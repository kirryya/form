import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./Contacts.module.scss";
import {dataFormType, formAPI} from "../api/api";
import {ContactForm} from "./contactForm/ContactForm";

type ValuesType = {
    yourName: string,
    email: string,
    phone: string,
    birth: string,
    message: string,
}

type ErrorsType = {
    yourNameError: string,
    phoneError: string,
    birthError: string,
    emailError: string,
    messageError: string,
}

export const Contact = () => {

    const [send, setSend] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [values, setValues] = useState<ValuesType>({
        yourName: "",
        email: "",
        phone: "",
        birth: "",
        message: "",
    })

    const [errors, setErrors] = useState<ErrorsType>({
        yourNameError: "Required",
        phoneError: "Required",
        birthError: "Required",
        emailError: "Required",
        messageError: "Required",
    })

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSend(null)
        }, 4000)

        return () => {
            clearTimeout(timeOut)
        }

    }, [send])

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toUpperCase()
        setValues({...values, yourName: value})
        if (!value.length) {
            setErrors({...errors, yourNameError: "Please, enter your name & surname!"})
        } else {
            if (!/^([A-Z]{3,30})\s([A-Z]{3,30})$/i.test(value)) {
                setErrors({...errors, yourNameError: "Name & Surname must contain from 3 to 30 latin symbols"})
            } else {
                setValues({...values, yourName: value})
                setErrors({...errors, yourNameError: ""})
            }
        }
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValues({...values, email: value})
        if (!String(value).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || !value.length || value.charAt(0) === ' ') {
            setErrors({...errors, emailError: "Please, enter correct email!"})
        } else {
            setValues({...values, email: value})
            setErrors({...errors, emailError: ""})
        }
    };

    const onChangePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValues({...values, phone: value})
        if (!value.length || value.charAt(0) === ' ') {
            setErrors({...errors, phoneError: "Required"})
            setValues({...values, phone: ""})
        } else {
            if (!/^((\+7)+([0-9]){10})$/.test(value)) {
                setErrors({...errors, phoneError: "Please, enter correct number"})
            } else {
                setValues({...values, phone: value})
                setErrors({...errors, phoneError: ""})
            }
        }
    }

    const onChangeBirthHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setValues({...values, birth: value})
        if (!value.length || value.charAt(0) === ' ') {
            setErrors({...errors, birthError: "Required"})
            setValues({...values, birth: ""})
        } else {
            setValues({...values, birth: value})
            setErrors({...errors, birthError: ""})
        }
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        setValues({...values, message: value})
        if (!value.length || value.charAt(0) === ' ') {
            setErrors({...errors, messageError: "Required"})
        } else {
            if (value.length < 10 || value.length > 300) {
                setErrors({...errors, messageError: "Message must be from 10 to 300 symbols"})
            } else {
                setValues({...values, message: value})
                setErrors({...errors, messageError: ""})
            }
        }
    }

    const disabled = !!errors.birthError || !!errors.yourNameError || !!errors.emailError || !!errors.phoneError || !!errors.messageError

    const onClickSendHandler = () => {
        setLoading(true)
        const dataForm: dataFormType = {
            name: values.yourName,
            email: values.email,
            phone: values.phone,
            birth: values.birth,
            message: values.message,
        }
        console.log(dataForm)
        formAPI.sendMessage(dataForm)
            .then(() => {
                setSend("Message has been sent")
                setValues({...values, yourName: ""})
                setValues({...values, email: ""})
                setValues({...values, phone: ""})
                setValues({...values, birth: ""})
                setValues({...values, message: ""})
            })
            .catch(() => {
                setSend("Message has NOT been SENT")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                {loading
                    ? <div className={style.messageSending}>SENDING...</div>
                    : <div className={style.addForm}>
                        <form>
                            <ContactForm
                                onChangeNameHandler={onChangeNameHandler}
                                onChangeEmailHandler={onChangeEmailHandler}
                                onChangePhoneHandler={onChangePhoneHandler}
                                onChangeBirthHandler={onChangeBirthHandler}
                                onChangeMessageHandler={onChangeMessageHandler}
                                yourNameError={errors.yourNameError}
                                emailError={errors.emailError}
                                phoneError={errors.phoneError}
                                birthError={errors.birthError}
                                messageError={errors.messageError}
                                yourName={values.yourName}
                                email={values.email}
                                phone={values.phone}
                                birth={values.birth}
                                message={values.message}
                            />
                        </form>
                        {send
                            ? <div className={style.message}>{send}</div>
                            : <button className={disabled ? style.buttonDisabled : style.button} type="submit"
                                      onClick={onClickSendHandler}
                                      disabled={disabled}>
                                Send</button>}
                    </div>}
            </div>
        </div>
    );
};