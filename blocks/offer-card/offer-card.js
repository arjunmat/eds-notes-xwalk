import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = 'offer-card__list';
  
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'offer-card__item';
    moveInstrumentation(row, li);
    
    const cardInner = document.createElement('div');
    cardInner.className = 'offer-card__inner';
    
    // Process each cell in the row
    const cells = [...row.children];
    
    cells.forEach((cell, index) => {
      if (cell.querySelector('picture')) {
        // Image cell
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'offer-card__image';
        imageWrapper.append(cell.firstElementChild);
        cardInner.append(imageWrapper);
      } else {
        // Content cells
        const content = cell.textContent.trim();
        if (content) {
          const wrapper = document.createElement('div');
          
          // Determine content type based on position or content
          if (index === 1 || cell.classList.contains('tag')) {
            wrapper.className = 'offer-card__tag';
          } else if (cell.querySelector('h1, h2, h3, h4, h5, h6')) {
            wrapper.className = 'offer-card__title';
          } else if (cell.querySelector('a.button')) {
            wrapper.className = 'offer-card__cta';
          } else if (cell.textContent.length < 50 && !cell.querySelector('p')) {
            wrapper.className = 'offer-card__title';
          } else {
            wrapper.className = 'offer-card__description';
          }
          
          wrapper.append(...cell.childNodes);
          cardInner.append(wrapper);
        }
      }
    });
    
    li.append(cardInner);
    ul.append(li);
  });
  
  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '600' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  
  block.textContent = '';
  block.append(ul);
}

