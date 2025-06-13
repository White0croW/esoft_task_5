import { UserRole } from "./enums";

export interface User {
    id: number;
    name: string;
    age?: number;
    email?: string;
}

export interface Admin extends User {
    role: UserRole;
}