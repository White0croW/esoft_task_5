export class Car {
    private mileage: number = 0;

    constructor(
        public make: string,
        public model: string,
        public year: number
    ) { }

    drive(distance: number): void {
        this.mileage += distance;
    }

    getDescription(): string {
        return `Машина: ${this.make}, модель: ${this.model}, год выпуска: ${this.year}, проехала: ${this.mileage} км`;
    }
}