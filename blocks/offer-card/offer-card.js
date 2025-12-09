import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  block.classList.add('offer-card--main-wrapper');
  const [offerCardWrapper] = block.children;
  console.log("offer card wrapper", offerCardWrapper);
  
  // Create the main card item container
  const offerCardItem = document.createElement('div');
  offerCardItem.className = 'offer-card__item';
  
  // Create inner container for card content
  const offerCardInner = document.createElement('div');
  offerCardInner.className = 'offer-card__inner';
  
  // Process each cell in the row
  const cells = [...offerCardWrapper.children];
  
  cells.forEach((cell, index) => {
    const content = cell.textContent.trim();
    
    if (cell.querySelector('picture')) {
      // Image cell
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'offer-card__image';
      
      const picture = cell.querySelector('picture');
      if (picture) {
        const img = picture.querySelector('img');
        if (img) {
          const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '600' }]);
          moveInstrumentation(img, optimizedPic.querySelector('img'));
          imageWrapper.append(optimizedPic);
        }
      }
      
      offerCardInner.append(imageWrapper);
    } else if (content) {
      // Determine content type based on position and content
      let wrapper = document.createElement('div');
      
      if (index === 1 || content.length < 30) {
        // Tag (second element or short text)
        wrapper.className = 'offer-card__tag';
        wrapper.textContent = content;
      } else if (cell.querySelector('h1, h2, h3, h4, h5, h6')) {
        // Title with heading tag
        wrapper.className = 'offer-card__title';
        wrapper.innerHTML = cell.innerHTML;
      } else if (cell.querySelector('a')) {
        // CTA with link
        wrapper.className = 'offer-card__cta';
        wrapper.innerHTML = cell.innerHTML;
      } else if (content.length < 100 && !cell.querySelector('p')) {
        // Title (short text without paragraph)
        wrapper.className = 'offer-card__title';
        wrapper.textContent = content;
      } else {
        // Description (longer content)
        wrapper.className = 'offer-card__description';
        wrapper.innerHTML = cell.innerHTML;
      }
      
      offerCardInner.append(wrapper);
    }
  });
  
  offerCardItem.append(offerCardInner);
  offerCardWrapper.replaceChildren(offerCardItem);
}

