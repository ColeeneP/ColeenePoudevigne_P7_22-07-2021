export interface createMessage {
    attachment: string,
}

export interface getAllMessages {
    idUSERS: string,
    attachment: string,
}

export interface getOneMessage {
    idMESSAGES: string,
    idUSERS: string,
    attachment: string,
}