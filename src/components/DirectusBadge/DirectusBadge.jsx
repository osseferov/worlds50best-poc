import './DirectusBadge.css';

export default function DirectusBadge({ onClick }) {
  return (
    <button className="directus-badge" onClick={onClick} aria-label="View Directus schema">
      <p className="directus-badge__title">⚡ Directus POC</p>
      <p className="directus-badge__body">
        Data served from <code>4 collections</code> via Directus REST API.
        <br />
        Click to view schema →
      </p>
    </button>
  );
}
