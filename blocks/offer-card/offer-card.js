import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  console.log('offer-card', block);
  // The block should contain the offer card content
  // Expected structure: image, tag, title, description, CTA, (optional empty)
  
  const elements = [...block.children];
  elements.forEach((element, index) => {
    debugger;
    // Handle images (typically first element)
    const picture = element.querySelector('picture');
    if (picture) {
      const img = picture.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]);
        picture.replaceWith(optimizedPic);
      }
      element.classList.add('offer-card__image');
      return;
    }
    
    // Check if element has a link (CTA)
    const link = element.querySelector('a');
    if (link) {
      element.classList.add('offer-card__cta');
      return;
    }
    
    // Check content
    const content = element.textContent.trim();
    if (!content) {
      // Empty element, can be removed or ignored
      return;
    }
    
    // Assign classes based on position and content length
    // Assuming structure: image (0), tag (1), title (2), description (3), CTA (4)
    if (index === 1) {
      element.classList.add('offer-card__tag');
    } else if (index === 2) {
      element.classList.add('offer-card__title');
    } else if (index === 3) {
      element.classList.add('offer-card__description');
    }
  });
}