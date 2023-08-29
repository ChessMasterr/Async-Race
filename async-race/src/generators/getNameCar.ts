import { ICar } from '../types/index';

const BRAND: string[] = ['Audi', 'BMW', 'Bugatti', 'Lada', 'Deo', 'Mazda', 'Ford', 'Tesla', 'Mercedes', 'Toyota'];
const MODELS: string[] = ['Q7', 'X5', 'Chiron', '21013', 'Nexia', 'S', 'Mustang', 'Prado', 'Camry', 'GLK'];

class generateComponents {
    public getRandomName(array: Array<string>): string {
        const num: number = Math.floor(Math.random() * array.length);

        return array[num];
    }

    public generateRandomName(): string {
        return `${this.getRandomName(BRAND)} ${this.getRandomName(MODELS)}`;
    }

    public generateColorCar(): string {
        const color: string = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`;
    }

    public createCar(car: Pick<ICar, 'name' | 'color'>): Promise<void> {
        return fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        })
            .then((response) => {
                if (response.status !== 201) {
                    console.error(`Failed to create new car. Status code: ${response.status}`);
                    return;
                }
                response.json().then((data) => {
                    console.log(`New car created! ID: ${data.id}`);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    public createCars(): void {
        const cars: Pick<ICar, 'name' | 'color'>[] = Array.from({ length: 100 }, () => ({
            name: this.generateRandomName(),
            color: this.generateColorCar(),
        }));
        const promises: Promise<void>[] = cars.map((car) => this.createCar(car));
        Promise.all(promises)
            .then(() => {
                console.log('All cars have been created successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default generateComponents;
