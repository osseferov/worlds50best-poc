import './AwardCards.css';

const FALLBACK_IMAGES = [
  'photo-1414235077428-338989a2e8c0',
  'photo-1555396273-367ea4eb4db5',
  'photo-1466637574441-749b8f19452f',
  'photo-1568901346375-23c9450c58cd',
];

function AwardCard({ card, index }) {
  const handleImgError = (e) => {
    const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    e.target.src = `https://images.unsplash.com/${fallback}?w=400&q=80`;
  };

  return (
    <div className={`award-card ${card.featured ? 'award-card--featured' : ''}`}>
      <img
        src={card.image_url}
        alt={card.name}
        onError={handleImgError}
      />
      <div className="award-card__overlay">
        <p className="award-card__label">{card.award}</p>
        <h2 className="award-card__name">{card.name}</h2>
        {card.sponsor && (
          <p className="award-card__sponsor">{card.sponsor}</p>
        )}
      </div>
    </div>
  );
}

export default function AwardCards({ cards }) {
  const featured = cards.find((c) => c.featured);
  const rest     = cards.filter((c) => !c.featured);

  return (
    <section className="award-cards">
      <div className="award-cards__grid">
        {featured && <AwardCard card={featured} index={0} />}
        {rest.map((card, i) => (
          <AwardCard key={card.id} card={card} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
