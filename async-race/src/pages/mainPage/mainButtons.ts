class MainButtons {
    private container: HTMLElement;
    static buttons = `
    <div class="wrapper">
        <div class="pages">
          <button class="garage-button">garage</button>
          <button class="winners">winners</button>
        </div>
    </div>`;

    constructor() {
        this.container = document.body;
    }

    render() {
        this.container.innerHTML = MainButtons.buttons;
    }
}

export default MainButtons;
