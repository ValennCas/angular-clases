export interface IUser{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    createdAt:Date;
    role: string;
}

export interface CreateUserPayload {
    firstName:string | null;
    lastName:string | null;
    email:string | null;
    role: string | null;
    createdAt:Date | null;
}