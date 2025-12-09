import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = 'card-blocks__list';
  
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'card-blocks__card';
    moveInstrumentation(row, li);
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-blocks__card-inner';
    
    while (row.firstElementChild) {
      cardInner.append(row.firstElementChild);
    }
    
    [...cardInner.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'card-blocks__image';
      } else {
        div.className = 'card-blocks__content';
      }
    });
    
    li.append(cardInner);
    ul.append(li);
  });
  
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  
  block.textContent = '';
  block.append(ul);
}

