export interface createComment {
    content: string,
    attachment: string,
}

export interface getAllComments {
    idUSERS: string,
    content: string,
    attachment: string,
}

export interface getOneComment {
    idMESSAGES: string,
    idUSERS: string,
    content: string,
    attachment: string,
}