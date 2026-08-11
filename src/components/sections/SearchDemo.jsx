import { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Tag } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useReveal } from '../../hooks/useReveal.js';
import { searchItems } from '../../data/content.js';
import styles from './SearchDemo.module.css';

const CATEGORIES = ['All', 'Electronics', 'Accessories', 'Documents', 'Bags'];

export default function SearchDemo() {
  const { ref, isVisible } = useReveal();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return searchItems.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      return matchesQuery && matchesCat;
    });
  }, [query, activeCategory]);

  return (
    <section
      id="search-demo"
      ref={ref}
      className={`section ${styles.searchDemo} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Live demo"
          title="See what people are finding."
          description="Browse a sample of recently reported items. In the real app, you'd search your own lost item here."
          align="center"
        />

        {/* Search bar */}
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon} aria-hidden="true">
            <Search size={18} />
          </span>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search by item, location…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search sample items"
          />
        </div>

        {/* Category filter pills */}
        <div className={styles.filters} role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results grid */}
        {filtered.length > 0 ? (
          <ul className={styles.grid} aria-label="Search results">
            {filtered.map((item) => (
              <li key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span
                    className={`${styles.status} ${item.type === 'found' ? styles.statusFound : styles.statusLost}`}
                  >
                    {item.type === 'found' ? 'Found' : 'Lost'}
                  </span>
                  <span className={styles.category}>
                    <Tag size={12} aria-hidden="true" />
                    {item.category}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.metaItem}>
                    <MapPin size={13} aria-hidden="true" />
                    {item.location}
                  </span>
                  <span className={styles.metaItem}>
                    <Clock size={13} aria-hidden="true" />
                    {item.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty} role="status">
            No items match your search. Try different keywords.
          </p>
        )}
      </div>
    </section>
  );
}
