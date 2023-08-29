import getCar from '../../Api/getCar';
import createCar from '../../cars/createCar';
import { ICar } from '../../types/index';

class carInTrack {
    private pageNumber = 1;
    public async putCar(): Promise<void> {
        const carApi = new getCar();
        const cars = await carApi.getCarsInPage(this.pageNumber);
        const capPage: HTMLHeadElement | null = document.querySelector('.cars-page');
        const createCars = new createCar();
        if (cars) {
            cars.forEach((car: ICar) => {
                const a = createCars.run(car);
                createCars.render(a);
            });
            if (capPage) {
                capPage.innerText = `Page ${this.pageNumber}`;
            }
        }
    }
    public nextPage(): void {
        const nextButton: HTMLButtonElement | null = document.querySelector('.pagination-next');
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                this.pageNumber += 1;
                const container: HTMLDivElement | null = document.querySelector('.car-on-track');
                (container as HTMLDivElement).innerHTML = '';
                this.putCar();
            });
        }
    }
    public prevPage(): void {
        const prevButton: HTMLButtonElement | null = document.querySelector('.pagination-prev');
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (this.pageNumber > 1) {
                    this.pageNumber -= 1;
                    console.log(this.pageNumber);
                    const container: HTMLDivElement | null = document.querySelector('.car-on-track');
                    (container as HTMLDivElement).innerHTML = '';
                    this.putCar();
                }
            });
        }
    }
}

export default carInTrack;
