import App from './pages/app/index';
import carInTrack from './pages/mainPage/carInTrack';
import generateHundredCar from './listeners/generateHundetButton';
import garageCounter from './pages/mainPage/couters/garageCounter';
import './style.css';
import Remove from './listeners/remove';
import Update from './listeners/update';

const app = new App();
app.run();
app.runMainPage();
app.eventListeners();

const generateHundred = new generateHundredCar();
generateHundred.run();

const garageCount = new garageCounter();
garageCount.getGarageCounter();

const carTrack = new carInTrack();
carTrack.putCar();
carTrack.nextPage();
carTrack.prevPage();

const removeButton = new Remove();
removeButton.listenerRemove();

const updateButton = new Update();
updateButton.listenerUpdate();
