import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    // Create container structure
    const wrapper = document.createElement('div');
    wrapper.classList.add('offer-card-container__wrapper');

    // Process title (first row if it exists and contains title data)
    const firstRow = block.children[0];
    if (firstRow && firstRow.querySelector('p, h1, h2, h3, h4, h5, h6')) {
        const titleElement = firstRow.querySelector('p, h1, h2, h3, h4, h5, h6');
        if (titleElement) {
            const title = document.createElement('h3');
            title.innerHTML = titleElement.innerHTML;
            wrapper.appendChild(title);
        }
    }

    // Create holder for offer cards
    const holder = document.createElement('div');
    holder.classList.add('offer-card-container__holder');

    // Process each child row as an offer card
    [...block.children].forEach((row, index) => {
        // Skip the first row if it was the title
        if (index === 0 && row.querySelector('p, h1, h2, h3, h4, h5, h6') && 
            !row.querySelector('img, picture')) {
            return;
        }

        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('offer-card-item');
        moveInstrumentation(row, cardWrapper);
        
        while (row.firstElementChild) {
            cardWrapper.append(row.firstElementChild);
        }
        
        holder.appendChild(cardWrapper);
    });

    wrapper.appendChild(holder);
    block.textContent = '';
    block.append(wrapper);
}