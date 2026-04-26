import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types/product';

export default function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Products from backend:', data);
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Group products by category
  const categories = products.reduce((acc, product) => {
    const categoryName = product.category
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letters
    
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-red-200 rounded w-48 mx-auto mb-4"></div>
            <p className="text-red-700">Loading our products... 🥩</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 text-red-950">
          Our Products
        </h2>
        
        {Object.entries(categories).map(([categoryName, items]) => (
          <div key={categoryName} className="mb-14">
            <h3 className="text-2xl font-bold text-red-800 mb-8 border-b-2 border-red-200 pb-3">
              {categoryName}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((product) => (
                <div key={product._id} className="flex bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/128?text=🥩';
                      }}
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-red-950 text-lg">{product.name}</h4>
                      <span className="font-bold text-red-800 text-lg">${product.price}</span>
                    </div>
                    <p className="text-red-700 text-sm">{product.description}</p>
                    <div className="flex gap-1 mt-1">
                      {product.isHalal && (
                        <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Halal</span>
                      )}
                      {product.isOrganic && (
                        <span className="text-xs bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded">Organic</span>
                      )}
                      {product.origin && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">{product.origin}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}