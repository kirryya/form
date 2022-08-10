import axios from "axios"

const instance = axios.create({
    baseURL: "https://smtp-form.herokuapp.com/",
});

export const formAPI = {
    sendMessage(dataForm: dataFormType) {
        return instance.post("sendMessage", dataForm);
    },
};

export type dataFormType = {
    name: string
    email: string,
    phone: string,
    birth: string,
    message: string,
}