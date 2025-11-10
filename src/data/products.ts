import { Product } from '@/contexts/CartContext';
import headphonesImg from '@/assets/product-headphones.jpg';
import watchImg from '@/assets/product-watch.jpg';
import laptopImg from '@/assets/product-laptop.jpg';
import phoneImg from '@/assets/product-phone.jpg';
import earbudsImg from '@/assets/product-earbuds.jpg';
import cameraImg from '@/assets/product-camera.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'Experience crystal-clear audio with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear.',
    image: headphonesImg,
    category: 'Audio',
    stock: 15,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    description: 'Stay connected and track your fitness goals with our advanced smartwatch. Features include heart rate monitoring, GPS, water resistance, and seamless smartphone integration.',
    image: watchImg,
    category: 'Wearables',
    stock: 20,
  },
  {
    id: '3',
    name: 'Ultra-Thin Laptop',
    price: 1299.99,
    description: 'Power meets portability in this stunning ultra-thin laptop. Equipped with the latest processor, 16GB RAM, 512GB SSD, and a gorgeous 4K display for professionals on the go.',
    image: laptopImg,
    category: 'Computers',
    stock: 8,
  },
  {
    id: '4',
    name: 'Flagship Smartphone',
    price: 899.99,
    description: 'Capture life in stunning detail with our flagship smartphone. Features a triple-camera system, 5G connectivity, all-day battery, and a beautiful edge-to-edge display.',
    image: phoneImg,
    category: 'Mobile',
    stock: 25,
  },
  {
    id: '5',
    name: 'True Wireless Earbuds',
    price: 179.99,
    description: 'Premium sound in a compact package. These wireless earbuds deliver rich audio, active noise cancellation, and up to 24 hours of battery life with the charging case.',
    image: earbudsImg,
    category: 'Audio',
    stock: 30,
  },
  {
    id: '6',
    name: 'Professional Camera',
    price: 1899.99,
    description: 'Capture stunning photos and videos with this professional-grade mirrorless camera. Features a 45MP sensor, 4K video recording, and advanced autofocus system.',
    image: cameraImg,
    category: 'Photography',
    stock: 5,
  },
];
