import { SCHEMA } from '../../data/schema';
import './SchemaPanel.css';

const TYPE_CLASS = {
  string:  'type-string',
  integer: 'type-integer',
  boolean: 'type-boolean',
  image:   'type-image',
  url:     'type-url',
};

export default function SchemaPanel({ open, onClose }) {
  return (
    <aside className={`schema-panel ${open ? 'schema-panel--open' : ''}`} aria-hidden={!open}>
      <button className="schema-panel__close" onClick={onClose} aria-label="Close panel">
        ✕
      </button>

      <h2 className="schema-panel__title">Directus Schema</h2>
      <p className="schema-panel__desc">
        These collections power the homepage. React app fetches the data via <code>GET /items/:collection</code> endpoint.
      </p>

      {SCHEMA.map((col) => (
        <div className="collection" key={col.name}>
          <div className="collection__header">
            <span className="collection__dot" />
            <span className="collection__name">{col.name}</span>
            <span className="collection__endpoint">{col.endpoint}</span>
          </div>
          <ul className="collection__fields">
            {col.fields.map((field) => (
              <li className="collection__field" key={field.name}>
                <span className="collection__field-name">{field.name}</span>
                <span className={`collection__field-type ${TYPE_CLASS[field.type] ?? ''}`}>
                  {field.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
