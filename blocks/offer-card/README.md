# Offer Card Block

The Offer Card block displays promotional offers in an attractive card format with image, tag, title, description, and call-to-action.

## Features

- Responsive grid layout (1-3 columns based on screen size)
- Beautiful gradient backgrounds
- Hover effects with smooth animations
- Image optimization
- Flexible CTA options

## Content Structure

Each offer card should contain:

1. **Image** - Hero image for the offer (top of card)
2. **Tag** - Small category or label text (e.g., "Mobile", "Limited Time")
3. **Title** - Main heading for the offer
4. **Description** - Detailed description of the offer
5. **CTA** - Call-to-action link or button

## Usage Example

### In AEM Universal Editor

Use the Offer Card component from the Blocks group. Add Offer Card Items with the following fields:

- **Image**: Reference to the offer image
- **Image Alt Text**: Accessibility text for the image
- **Tag**: Category or label (e.g., "Mobile")
- **Title**: Main offer heading
- **Description**: Offer details and benefits
- **CTA Link**: Link destination
- **CTA Text**: Button/link text (default: "Learn more")

### In Document Authoring

```
| Offer Card |
|------------|
| ![Offer Image](/path/to/image.jpg) |
| Mobile |
| For the perfect gift this season, we got you. |
| Up to $700 off phone deals with bonus gifts to TV or tablet bundled with broadband. |
| [Buy now](https://example.com/offers) |
```

## Styling

The block uses:
- Green gradient theme (customizable via CSS)
- Card shadows and hover effects
- Responsive breakpoints at 768px and 1024px
- BEM naming convention for classes

## Customization

To customize the appearance, modify:
- `offer-card.css` - Colors, spacing, typography
- Gradient colors in `.offer-card__item` and `.offer-card__image`
- Card dimensions and breakpoints

## Accessibility

- Provides proper image alt text support
- Semantic HTML structure
- Keyboard navigation support for links/buttons
- Color contrast compliant


