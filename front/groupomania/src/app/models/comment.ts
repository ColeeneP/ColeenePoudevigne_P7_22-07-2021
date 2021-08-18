export interface createComment {
    content: string,
}

export interface getAllComments {
    idUSERS: string,
    content: string,
}

export interface getOneComment {
    idMESSAGES: string,
    idUSERS: string,
    content: string,
}