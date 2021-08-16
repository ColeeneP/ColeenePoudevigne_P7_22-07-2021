export interface User {
    firstname: string,
    name: string,
    email: string,
    bio: string,
    imgProfile: string,
    isAdmin,
}

export interface newUser {
    firstname: string,
    name: string,
    email: string,
    password: string,
}

export interface logUser {
    email: string,
    password: string,
}
