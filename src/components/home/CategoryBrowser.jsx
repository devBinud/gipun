import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CategoryBrowser.css';

import kidsAttire from "../../assets/images/categories/kids_attire.jpeg"
import menswear from "../../assets/images/categories/mens.jpeg"
import erkok from "../../assets/images/categories/erkok.jpeg"
import mibu_galuk from "../../assets/images/categories/mibu_galuk.jpeg"
import mekhela_sador from "../../assets/images/categories/mekhela_sador.jpeg"
import special from "../../assets/images/categories/special.jpeg"

export default function CategoryBrowser() {
  const scrollRef = useRef(null);

  const categories = [
    { id: 1, name: 'Special', slug: 'special', image: special },
    { id: 2, name: 'Muffler', slug: 'muffler', image: erkok },
    { id: 3, name: 'Customize Order', slug: 'customize-order', image: mekhela_sador},
    { id: 4, name: 'Kids Attire', slug: 'kids-attire', image: kidsAttire },
    { id: 5, name: "Men's Wear", slug: 'mens-wear', image: menswear },
    { id: 6, name: 'Unisex', slug: 'unisex', image: erkok },
    { id: 7, name: 'Mibu Galuk', slug: 'mibu-galuk', image: mibu_galuk },
    { id: 8, name: 'Erkok', slug: 'erkok', image: erkok },
    { id: 9, name: 'Mekhela Sador', slug: 'mekhela-sador', image: mekhela_sador },
  ];

  return (
    <section className="category-browser">
      <div className="category-header">
        <div className="category-scroll" ref={scrollRef}>
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop/${category.slug}`}
              className="category-item"
            >
              <div className="category-circle">
                <img src={category.image} alt={category.name} />
              </div>
              <p className="category-name">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
