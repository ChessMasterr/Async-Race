import './style.css';
class CreateUpdate {
    static block = `<div class="garage">
    <div class="winner__page">
        <h2>Winners (#)</h2>
        <h3>Page #</h3>
        <table class="winners-table">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Car</th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Best time (seconds)</th>
                </tr>
            </thead>
        </table>
        <div class="pagination-winners">
        <button type="button" class="winners__pagination-prev">prev</button>
        <button type="button" class="winners__pagination-next">next</button>
    </div>
    </div>
    <div class="wrapper-car">
                <input type="text" class="crete-input" />
                <input type="color" id="crete-color" />
                <button class="create">create</button>
            </div>
            <div class="redact">
                <input type="text" class="remove-input" />
                <input type="color" id="redact-color" />
                <button class="update">Update</button>
            </div>
            <div class="race-control">
                <button class="race">RACE</button>
                <button class="reset">RESET</button>
                <button class="generate-cars">GENERATE CARS</button>
            </div>
            <h2 class="quantity-cars">Garage #</h2>
            <h3 class="cars-page">Page #</h3>

            <div class="car-on-track">
                
            </div>
            <div class="pagination">
                <button type="button" class="pagination-prev">prev</button>
                <button type="button" class="pagination-next">next</button>
            </div>
            </div>
            `;

    render() {
        const container: HTMLDivElement | null = document.querySelector('.wrapper');
        (container as HTMLDivElement).insertAdjacentHTML('beforeend', CreateUpdate.block);
    }
}

export default CreateUpdate;
