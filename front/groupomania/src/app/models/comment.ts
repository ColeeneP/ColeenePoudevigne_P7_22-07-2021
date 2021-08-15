export interface createComment {
    content: string,
    attachment: string,
}

export interface getAllComments {
    idUSERS: string,
    content: string,
    attachment: string,
    likes: Number
}

export interface getOneComment {
    idMESSAGES: string,
    idUSERS: string,
    content: string,
    attachment: string,
    likes: number,
}