import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // The block should contain the offer card content
  // Structure: image, tag, title, description, CTA
  
  const elements = [...block.children];
  
  elements.forEach((element) => {
    // Handle images
    const picture = element.querySelector('picture');
    if (picture) {
      const img = picture.querySelector('img');
      if (img) {
        const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]);
        picture.replaceWith(optimizedPic);
      }
      element.classList.add('offer-card__image');
    } else {
      // Add appropriate classes based on content
      const content = element.textContent.trim();
      if (content) {
        // This could be tag, title, description, or CTA
        // Classes will be applied based on the structure
        element.classList.add('offer-card__content');
      }
    }
  });
}