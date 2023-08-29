import createNewCar from '../../listeners/createNewCar';
import CreateUpdate from '../mainPage/garage';
import MainButtons from '../mainPage/mainButtons';

class App {
    run(): void {
        const mainButtons = new MainButtons();
        mainButtons.render();
    }
    runMainPage(): void {
        const createUpdate = new CreateUpdate();
        createUpdate.render();
        const winners: HTMLElement | null = document.querySelector('.winner__page');
        winners?.classList.add('display-none');
    }
    eventListeners(): void {
        const winners: HTMLElement | null = document.querySelector('.winners');
        const winnersStatistic: HTMLElement | null = document.querySelector('.winner__page');
        const garageButton: HTMLElement | null = document.querySelector('.garage-button');
        const createCar = new createNewCar();
        winners?.addEventListener('click', () => {
            winnersStatistic?.classList.remove('display-none');
        });
        garageButton?.addEventListener('click', () => {
            winnersStatistic?.classList.add('display-none');
        });
        createCar.run();
    }
}

export default App;
