import { useState, useEffect } from 'react';

import './styles/globals.css';
import './App.css';

import { fetchCollection } from './api/directus';
import { NAV_ITEMS } from './data/schema';

import Navbar        from './components/Navbar/Navbar';
import Hero          from './components/Hero/Hero';
import AwardCards    from './components/AwardCards/AwardCards';
import Stories       from './components/Stories/Stories';
import Partners      from './components/Partners/Partners';
import SchemaPanel   from './components/SchemaPanel/SchemaPanel';
import DirectusBadge from './components/DirectusBadge/DirectusBadge';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const [data, setData] = useState({
    hero: null,
    awards: [],
    stories: [],
    partners: [],
  });

  useEffect(() => {
    async function loadAll() {
      const [heroData, awards, stories, partners] = await Promise.all([
        fetchCollection("hero_banner"),
        fetchCollection("award_cards"),
        fetchCollection("stories"),
        fetchCollection("partners"),
      ]);

      // Extract first item from hero_banner array
      const hero =
        Array.isArray(heroData) && heroData.length > 0 ? heroData[0] : null;

      setData({
        hero,
        awards: awards ?? [],
        stories: stories ?? [],
        partners: partners ?? [],
      });
      setLoading(false);
    }
    loadAll();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <p className="loader__logo">50 Best</p>
        <div className="loader__bar" />
        <p className="loader__text">Fetching from Directus…</p>
      </div>
    );
  }

  return (
    <>
      <Navbar navItems={NAV_ITEMS} />

      <main className="page">
        <Hero data={data.hero} />
        <AwardCards cards={data.awards} />
        <Stories stories={data.stories} />
        <Partners partners={data.partners} />
      </main>

      <footer>
        <div className="footer">
          <span className="footer__logo">The World's 50 Best Restaurants</span>
          <span className="footer__copy">© 2025 William Reed Ltd. POC built with Directus + React</span>
        </div>
      </footer>

      <DirectusBadge onClick={() => setPanelOpen(true)} />
      <SchemaPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </>
  );
}
