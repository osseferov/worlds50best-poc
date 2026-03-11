import './Partners.css';

export default function Partners({ partners }) {
  return (
    <section className="partners">
      <div className="partners__inner">
        <p className="partners__label">Our Partners</p>
        <div className="partners__grid">
          {partners.map((partner) => (
            <a key={partner.id} href={partner.url} className="partners__item">
              <img
                className="partners__logo"
                src={partner.logo_url}
                alt={partner.name}
                title={partner.name}
                //onError={(e) => { e.target.style.display = 'none'; }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
