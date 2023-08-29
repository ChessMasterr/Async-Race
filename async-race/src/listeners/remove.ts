import ServerPath from '../Api/path';
import carInTrack from '../pages/mainPage/carInTrack';

class Remove {
    public async run(id: number): Promise<void> {
        const response = await fetch(`${ServerPath.PATH}/garage/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }
    public listenerRemove() {
        const carOnTrack: HTMLDivElement | null = document.querySelector('.car-on-track');
        const carTrack = new carInTrack();
        if (carOnTrack) {
            carOnTrack.addEventListener('click', (event) => {
                if (event.target instanceof HTMLElement && event.target.classList.contains('remove')) {
                    const id: string | undefined = event.target.closest('.car-div')?.id;
                    if (id) {
                        const removeInstance = new Remove();
                        removeInstance.run(Number(id));
                        setTimeout(() => {
                            const container: HTMLDivElement | null = document.querySelector('.car-on-track');
                            (container as HTMLDivElement).innerHTML = '';
                            carTrack.putCar();
                        }, 300);
                    }
                }
            });
        }
    }
}

export default Remove;
