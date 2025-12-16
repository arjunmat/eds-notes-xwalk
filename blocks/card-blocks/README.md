# Card Blocks

A block component for displaying cards in a grid layout with images and content, following AEM Edge Delivery Services patterns and BEM CSS methodology.

## Features

- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Hover effects with elevation changes
- Optimized images
- BEM CSS naming convention
- Clean, modern design matching the provided mockup

## Usage

In your document, create a table with the block name `card-blocks`:

```
| Card Blocks |
|-------------|
| ![image](path/to/image1.png) |
| ## Phone + Plan |
| ![image](path/to/image2.png) |
| ## 5G Unlimited+ Plans |
| ![image](path/to/image3.png) |
| ## Broadband & Entertainment Bundles |
```

## Structure

Each card consists of:
- **Title**: Using heading tags (h2, h3, or h4)
- **Image**: Icon or illustration (displayed on the right)
- **Optional Description**: Additional text content

## CSS Classes (BEM Format)

- `.card-blocks` - Block container
- `.card-blocks__list` - Grid list container
- `.card-blocks__card` - Individual card item
- `.card-blocks__card-inner` - Card inner wrapper
- `.card-blocks__content` - Text content area
- `.card-blocks__image` - Image/icon container

## Customization

You can customize the appearance by modifying:
- Grid columns: `.card-blocks__list` grid-template-columns
- Card spacing: gap property
- Card styling: padding, border-radius, box-shadow
- Hover effects: transform and box-shadow transitions



