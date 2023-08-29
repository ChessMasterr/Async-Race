import { ICar } from '../types/index';
import ServerPath from './path';

class getCar {
    public async getCars(): Promise<ICar[] | null> {
        const response: Response = await fetch(`${ServerPath.PATH}/garage`, {
            method: 'GET',
        });

        if (response.ok) {
            const cars: ICar[] = await response.json();
            return cars;
        } else {
            throw new Error('Failed to fetch cars');
        }
    }

    public async getCarsInPage(page: number): Promise<ICar[] | null> {
        const response: Response = await fetch(`${ServerPath.PATH}/garage?_page=${page}&_limit=7`, {
            method: 'GET',
        });
        if (response.ok) {
            const cars = await response.json();
            return cars;
        } else {
            throw new Error('Failed to fetch CarsInPage');
        }
    }

    public async getTotalCars(): Promise<number | null> {
        const response: Response = await fetch(`${ServerPath.PATH}/garage`, {
            method: 'GET',
        });

        if (response.ok) {
            const cars: ICar[] = await response.json();
            return cars.length;
        } else {
            throw new Error('Failed to fetch Total cars');
        }
    }
}

export default getCar;
