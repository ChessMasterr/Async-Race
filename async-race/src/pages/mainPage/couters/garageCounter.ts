import getCar from '../../../Api/getCar';

class garageCounter {
    public async getGarageCounter(): Promise<void> {
        const garageQuantity: HTMLDivElement | null = document.querySelector('.quantity-cars');
        const getingCar = new getCar();
        if (garageQuantity) {
            garageQuantity.innerText = `Garage (${await getingCar.getTotalCars()})`;
        }
    }
}

export default garageCounter;
