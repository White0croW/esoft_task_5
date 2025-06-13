import { User } from "./interfaces";

export function greetUser(user: User): string {
    let message = `Привет, ${user.name}!`;
    if (user.age !== undefined) {
        message += ` Тебе ${user.age} лет.`;
    }
    return message;
}