import generateComponents from '../generators/getNameCar';
import carInTrack from '../pages/mainPage/carInTrack';
import garageCounter from '../pages/mainPage/couters/garageCounter';
import { ICar } from '../types/index';

class createNewCar {
    public run(): void {
        const createButton: HTMLButtonElement | null = document.querySelector('.create');
        const createColor: HTMLInputElement | null = document.querySelector('#crete-color');
        const createInput: HTMLInputElement | null = document.querySelector('.crete-input');
        const putCar = new carInTrack();
        const garageCounters = new garageCounter();
        const createCar = new generateComponents();
        if (createButton) {
            createButton.addEventListener('click', () => {
                if (createColor && createInput) {
                    if (createInput.value) {
                        const car: Pick<ICar, 'name' | 'color'> = {
                            name: createInput.value,
                            color: createColor.value,
                        };
                        createCar.createCar(car);
                        createInput.value = '';
                        setTimeout(() => {
                            const container: HTMLDivElement | null = document.querySelector('.car-on-track');
                            (container as HTMLDivElement).innerHTML = '';
                            putCar.putCar();
                            garageCounters.getGarageCounter();
                        }, 100);
                    }
                }
            });
        }
    }
}

export default createNewCar;
