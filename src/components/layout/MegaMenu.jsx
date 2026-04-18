import { Link } from 'react-router-dom';
import './MegaMenu.css';

import imgMens from '../../assets/images/categories/mens.jpeg';
import imgMekhela from '../../assets/images/categories/mekhela_sador.jpeg';
import imgKids from '../../assets/images/categories/kids_attire.jpeg';
import imgErkok from '../../assets/images/categories/erkok.jpeg';
import imgMibu from '../../assets/images/categories/mibu_galuk.jpeg';
import imgSpecial from '../../assets/images/categories/special.jpeg';


export default function MegaMenu({ category, isOpen, onClose }) {
  const menuData = {
    men: {
      categories: [
        {
          title: "Men's Wear",
          slug: 'mens-wear',
          items: [
            { label: "Kurta", slug: 'mens-wear' },
            { label: "Dhoti Kurta Set", slug: 'mens-wear' },
            { label: "Nehru Jacket", slug: 'mens-wear' },
            { label: "Linen Shirt", slug: 'mens-wear' },
            { label: "Handwoven Muffler", slug: 'muffler' },
          ]
        },
        {
          title: 'Unisex',
          slug: 'unisex',
          items: [
            { label: "Cotton Stole", slug: 'unisex' },
            { label: "Gamosa Towel", slug: 'unisex' },
            { label: "Eri Silk Stole", slug: 'unisex' },
          ]
        },
        {
          title: 'Collections',
          slug: 'special',
          items: [
            { label: "Gipun Special", slug: 'special' },
            { label: "New Arrivals", slug: 'all' },
            { label: "Best Sellers", slug: 'all' },
            { label: "Customize Order", slug: 'customize-order' },
          ]
        },
      ],
      featured: [
        { title: "Men's Wear", image: imgMens, link: '/shop/mens-wear' },
        { title: 'Erkok', image: imgErkok, link: '/shop/erkok' },
      ]
    },
    women: {
      categories: [
        {
          title: 'Mekhela Sador',
          slug: 'mekhela-sador',
          items: [
            { label: "Mekhela Sador Set", slug: 'mekhela-sador' },
            { label: "Muga Silk Mekhela", slug: 'mekhela-sador' },
            { label: "Cotton Mekhela", slug: 'mekhela-sador' },
          ]
        },
        {
          title: 'Mibu Galuk',
          slug: 'mibu-galuk',
          items: [
            { label: "Mibu Galuk Traditional", slug: 'mibu-galuk' },
            { label: "Mibu Galuk Premium", slug: 'mibu-galuk' },
          ]
        },
        {
          title: 'Collections',
          slug: 'special',
          items: [
            { label: "Gipun Special", slug: 'special' },
            { label: "New Arrivals", slug: 'all' },
            { label: "Customize Order", slug: 'customize-order' },
            { label: "Unisex", slug: 'unisex' },
          ]
        },
      ],
      featured: [
        { title: 'Mekhela Sador', image: imgMekhela, link: '/shop/mekhela-sador' },
        { title: 'Mibu Galuk', image: imgMibu, link: '/shop/mibu-galuk' },
      ]
    },
    children: {
      categories: [
        {
          title: 'Kids Attire',
          slug: 'kids-attire',
          items: [
            { label: "Kids Ethnic Set", slug: 'kids-attire' },
            { label: "Girls Frock", slug: 'kids-attire' },
            { label: "Boys Kurta", slug: 'kids-attire' },
            { label: "Kids Dhoti Set", slug: 'kids-attire' },
            { label: "Baby Romper", slug: 'kids-attire' },
          ]
        },
        {
          title: 'Collections',
          slug: 'special',
          items: [
            { label: "Gipun Special", slug: 'special' },
            { label: "New Arrivals", slug: 'all' },
            { label: "Customize Order", slug: 'customize-order' },
          ]
        },
      ],
      featured: [
        { title: 'Kids Attire', image: imgKids, link: '/shop/kids-attire' },
        { title: 'Gipun Special', image: imgSpecial, link: '/shop/special' },
      ]
    }
  };

  const data = menuData[category];

  return (
    <div className={`mega-menu ${isOpen && data ? 'open' : ''}`}>
      {data && (
        <div className="mega-menu-container">
          <div className="mega-menu-grid">

            {/* Category columns */}
            {data.categories.map((cat, idx) => (
              <div key={idx} className="mega-menu-category">
                <h3>
                  <Link to={`/shop/${cat.slug}`} onClick={onClose}>
                    {cat.title}
                  </Link>
                </h3>
                <ul className="mega-menu-list">
                  {cat.items.map((item, i) => (
                    <li key={i}>
                      <Link to={`/shop/${item.slug}`} onClick={onClose}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Featured image cards */}
            <div className="mega-menu-featured-group">
              {data.featured.map((feat, i) => (
                <Link
                  key={i}
                  to={feat.link}
                  className="mega-menu-featured-card"
                  onClick={onClose}
                >
                  <div className="featured-img-wrap">
                    <img src={feat.image} alt={feat.title} />
                  </div>
                  <p className="featured-card-label">{feat.title}</p>
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
