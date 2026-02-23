// app/lib/data.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
  reviews: { id: number; author: string; rating: number; comment: string; }[];
}

export interface BlogPost {
  id: string;
  title: string;
  preview: string;
  content: string;
  imageUrl: string;
  galleryImages?: string[]; // Optional array of image URLs for galleries
}

export const products: Product[] = [
  {
    id: '6',
    name: 'Advanced Night Cream',
    description: 'Anti-aging cream for ageless beauty. Transformation from wrinkles to smooth, white skin.',
    price: 4800,
    imageUrl: '/products/night-cream.jpg',
    ingredients: ['Retinol', 'Peptides', 'Vitamin E'],
    reviews: [{ id: 11, author: 'Grace', rating: 5, comment: 'Results are real!' }],
  },
  {
    id: '1',
    name: 'Radiant Glow Serum',
    description: 'Skin brightening serum. From dull blackish tone to bright white glow.',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Vitamin C', 'Hyaluronic Acid'],
    reviews: [],
  },
  {
    id: '2',
    name: 'Hydrating Day Cream',
    description: 'No more shirts. Just pure hydration for a clear face.',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Ceramides', 'Glycerin'],
    reviews: [],
  },
  { id: '3', name: 'Gentle Foaming Cleanser', description: 'Fresh base.', price: 2500, imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800', ingredients: [], reviews: [] },
  { id: '4', name: 'Revitalizing Toner', description: 'Refine pores.', price: 2800, imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800', ingredients: [], reviews: [] },
  { id: '5', name: 'Daily Sunscreen', description: 'SPF 30.', price: 3500, imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800', ingredients: [], reviews: [] }
];

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'Hydrating Serums', preview: 'Serum guide.', content: 'Hydrating serums are a cornerstone of any effective skincare routine, especially for those seeking to combat dryness and maintain a plump, youthful complexion. These potent formulations typically feature ingredients like hyaluronic acid, glycerin, and ceramides, which work synergistically to attract and lock moisture into the skin. Regular use can lead to improved skin texture, reduced appearance of fine lines, and a healthy, dewy glow. Apply after cleansing and toning, before heavier moisturizers, to maximize absorption and benefits.', imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Radiant Skin Routine', preview: 'Step-by-step.', content: 'Achieving radiant skin is a journey that requires consistency and the right routine. Start with a gentle cleanser to remove impurities without stripping natural oils. Follow with a toner to balance pH levels. The key step for radiance is often a Vitamin C serum, known for its brightening and antioxidant properties. Hydrate generously with a moisturizer suitable for your skin type, and always finish with a broad-spectrum SPF during the day. Exfoliate 2-3 times a week to shed dead skin cells and reveal fresh, glowing skin underneath.', imageUrl: '/products/radiant-serum.jpg' },
  { id: '3', title: 'Natural Ingredients', preview: 'Botanical power.', content: 'The power of nature lies in its incredible ability to heal, nourish, and protect. In skincare, natural ingredients offer a wealth of benefits, from soothing inflammation to providing potent antioxidant defense. Botanicals like aloe vera, green tea, chamomile, and essential oils are packed with vitamins, minerals, and compounds that work harmoniously with the skin. Embracing natural ingredients means choosing formulations free from harsh chemicals and synthetic additives, allowing your skin to thrive in its most authentic state.', imageUrl: '/blog-placeholder.jpg' },
  { id: '4', title: 'Understanding SPF', preview: 'Sun care.', content: 'Understanding SPF (Sun Protection Factor) is crucial for maintaining healthy, youthful skin. SPF measures a sunscreen\'s ability to protect skin from UVB rays, which cause sunburn and contribute to skin cancer. A higher SPF offers more protection, but none can block 100% of UV radiation. It\'s recommended to use SPF 30 or higher daily, reapplying every two hours, or more often if swimming or sweating. Sun protection goes beyond sunscreen; seek shade, wear protective clothing, and avoid peak sun hours for comprehensive defense against photoaging and skin damage.', imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Anti-Aging Tips', preview: 'Ageless beauty.', content: 'Aging is a natural process, but with the right skincare and lifestyle habits, you can maintain a youthful and radiant complexion for longer. Key anti-aging tips include daily sunscreen application, incorporating antioxidants like Vitamin C and E, using retinoids to boost collagen production, and ensuring adequate hydration. A balanced diet, sufficient sleep, and stress management also play vital roles. Focus on gentle cleansing, consistent moisturizing, and targeted treatments to address specific concerns like fine lines, wrinkles, and loss of firmness.', imageUrl: '/products/night-cream.jpg' },
  { id: '6', title: 'Gentle Cleansing', preview: 'Barrier protection.', content: 'Gentle cleansing is the foundational step for a healthy and resilient skin barrier. Harsh cleansers can strip the skin of its natural oils, leading to dryness, irritation, and increased sensitivity. Opt for sulfate-free, pH-balanced formulas that effectively remove impurities, makeup, and pollutants without compromising the skin\'s protective layer. Massage gently for 60 seconds and rinse with lukewarm water. A healthy skin barrier is crucial for locking in moisture, keeping irritants out, and promoting overall skin wellness.', imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' }
];

export const aboutData = {
  naturalIngredientsImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=800'
};