import ServerPath from '../Api/path';
import carInTrack from '../pages/mainPage/carInTrack';
import { ICar } from '../types/index';

class Update {
    public async run(id: number, data: Pick<ICar, 'name' | 'color'>): Promise<ICar> {
        const response = await fetch(`${ServerPath.PATH}/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const updatedCar: ICar = await response.json();
            return updatedCar;
        } else if (response.status === 404) {
            throw new Error(`Car with id ${id} not found`);
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }
    public listenerUpdate() {
        const carOnTrack: HTMLDivElement | null = document.querySelector('.car-on-track');
        const removeInput: HTMLInputElement | null = document.querySelector('.remove-input');
        const colorInput: HTMLInputElement | null = document.querySelector('#redact-color');
        const updateButton: HTMLButtonElement | null = document.querySelector('.update');
        const upd = new Update();
        const carTrack = new carInTrack();
        const handleClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement && event.target.classList.contains('select')) {
                const carName = event.target.closest('.car-div')?.querySelector<HTMLSpanElement>('.car-name');
                const id = event.target.closest('.car-div')?.id;
                if (carName && id) {
                    console.log(carName.textContent);
                    console.log('colorInput', colorInput);
                    if (carName.textContent && removeInput) {
                        removeInput.value = carName.textContent;
                        removeInput.focus();
                    }
                    if (updateButton) {
                        updateButton.addEventListener(
                            'click',
                            () => {
                                if (removeInput && colorInput) {
                                    console.log('5', removeInput.value);
                                    const car: Pick<ICar, 'name' | 'color'> = {
                                        name: removeInput.value,
                                        color: colorInput.value,
                                    };
                                    upd.run(Number(id), car);
                                    removeInput.value = '';
                                    setTimeout(() => {
                                        const container = document.querySelector<HTMLDivElement>('.car-on-track');
                                        if (container) {
                                            container.innerHTML = '';
                                            carTrack.putCar();
                                        }
                                    }, 500);
                                }
                            },
                            { once: true }
                        );
                    }
                }
            }
        };

        if (carOnTrack) {
            carOnTrack.addEventListener('click', handleClick);
        }
    }
}

export default Update;
