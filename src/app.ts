// Импорт всех модулей
import { User, Admin } from "./interfaces";
import { greetUser } from "./functions";
import { UserStatusType } from "./types";
import { Car } from "./car";
import { UserRole } from "./enums";

// Задача 1: Создание пользователей
const user1: User = { id: 1, name: "Alice" };
const user2: User = { id: 2, name: "Bob", age: 25 };
const user3: User = { id: 3, name: "Charlie", email: "c@example.com" };
const user4: User = { id: 4, name: "Dave", age: 30, email: "d@example.com" };

// Задача 2: Администратор
const admin: Admin = {
    id: 5,
    name: "Eve",
    role: UserRole.Admin,
};

// Задача 3: Приветствие
console.log(greetUser(user1)); // Привет, Alice!
console.log(greetUser(user2)); // Привет, Bob! Тебе 25 лет.
console.log(greetUser(user3));
console.log(greetUser(user4));

// Задача 6: Статус пользователя
type Status = UserStatusType | 0 | 1;

function getStatusDescription(status: Status): string {
    if (status === 0) return "Неактивен";
    if (status === 1) return "Активен";
    return status === "active" ? "Активен" : "Неактивен";
}

const statusExample: Status = "active";
console.log(getStatusDescription(statusExample)); // Активен

// Задача 7: Класс Car
const myCar = new Car("Tesla", "Model S", 2022);
myCar.drive(150);
console.log(myCar.getDescription()); // Машина: Tesla, модель: Model S, год выпуска: 2022, проехала: 150 км