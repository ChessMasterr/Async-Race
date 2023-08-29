import generateComponents from '../generators/getNameCar';
import carInTrack from '../pages/mainPage/carInTrack';
import garageCounter from '../pages/mainPage/couters/garageCounter';

class generateHundredCar {
    public async run(): Promise<void> {
        const generateButton: HTMLDivElement | null = document.querySelector('.generate-cars');
        const garageCounters = new garageCounter();
        const generate = new generateComponents();
        const carTrack = new carInTrack();
        if (generateButton) {
            generateButton.addEventListener('click', async () => {
                await generate.createCars();
                setTimeout(() => {
                    garageCounters.getGarageCounter();
                    const container: HTMLDivElement | null = document.querySelector('.car-on-track');
                    (container as HTMLDivElement).innerHTML = '';
                    carTrack.putCar();
                }, 1000);
            });
        }
    }
}

export default generateHundredCar;
