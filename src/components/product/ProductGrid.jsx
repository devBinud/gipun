import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
