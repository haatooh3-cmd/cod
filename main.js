
class LottoMachine extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'lotto-machine');

        const heading = document.createElement('h1');
        heading.textContent = 'Lotto Machine';

        const numbersContainer = document.createElement('div');
        numbersContainer.setAttribute('class', 'numbers');

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';
        button.addEventListener('click', () => {
            const usageCountKey = 'lottoGenerationCount';
            let usageCount = parseInt(localStorage.getItem(usageCountKey) || '0');

            if (usageCount < 1) {
                this.generateNumbers(numbersContainer);
                localStorage.setItem(usageCountKey, usageCount + 1);
            } else {
                alert('두 번째부터는 유료입니다.');
            }
        });

        const style = document.createElement('style');
        style.textContent = `
            .lotto-machine {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: sans-serif;
                padding: 20px;
                border: 1px solid var(--lotto-machine-border, #ccc);
                border-radius: 10px;
                background-color: var(--lotto-machine-bg, white);
                color: var(--text-color, #000);
                transition: background-color 0.3s, color 0.3s, border-color 0.3s;
            }
            .numbers {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
                min-height: 60px; /* Ensure space is reserved for numbers */
            }
            .number {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--lotto-number-bg, #f0f0f0);
                margin: 0 5px;
                font-size: 24px;
                font-weight: bold;
                color: var(--text-color, #000);
                transition: background-color 0.3s, color 0.3s;
            }
            button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: var(--button-bg, #007bff);
                color: var(--button-text, white);
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(heading);
        wrapper.appendChild(numbersContainer);
        wrapper.appendChild(button);

        // We no longer generate numbers on initial load.
        // this.generateNumbers(numbersContainer);
    }

    generateNumbers(container) {
        container.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        for (const number of [...numbers].sort((a, b) => a - b)) {
            const numberDiv = document.createElement('div');
            numberDiv.setAttribute('class', 'number');
            numberDiv.textContent = number;
            container.appendChild(numberDiv);
        }
    }
}

customElements.define('lotto-machine', LottoMachine);

// Theme switcher logic
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
};

themeToggleButton.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// Apply saved theme on initial load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
