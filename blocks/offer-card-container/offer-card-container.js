export default function decorate(block) {
    const [offerCardContainerWrapper] = block.children;

    const offerCardHTML = document.createElement('div');
    offerCardHTML.classList.add('offer-card-container__wrapper');

    const children = Array.from(offerCardContainerWrapper.children);
    children.forEach(child => {
        if (child.tagName === 'P') {
            const title = document.createElement('h3');
            title.textContent = child.textContent.trim();
            offerCardHTML.appendChild(title);
        }
    });

    const offerCardHolder = document.createElement('div');
    offerCardHolder.classList.add('offer-card-container__holder');
    offerCardHTML.appendChild(offerCardHolder);

    offerCardContainerWrapper.replaceChildren(offerCardHTML);
  }