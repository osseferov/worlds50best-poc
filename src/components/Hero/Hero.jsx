import ArrowRight from '../shared/ArrowRight';
import './Hero.css';

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section className="hero">
      <img
        className="hero__image"
        src={data.image_url}
        alt={data.title}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">2025 Results</p>
        <h1 className="hero__title">
          The World's <em>50 Best</em>
          <br />
          Restaurants
        </h1>
        <p className="hero__subtitle">{data.subtitle}</p>
        <a className="hero__cta" href={data.cta_url}>
          {data.cta_label}
          <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
