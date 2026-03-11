import ArrowRight from '../shared/ArrowRight';
import './Stories.css';

function StoryCard({ story }) {
  const formattedDate = new Date(story.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="story-card">
      <div className="story-card__image-wrap">
        <img src={story.image_url} alt={story.title} />
      </div>
      <div className="story-card__body">
        <div className="story-card__meta">
          <span className="story-card__category">{story.category}</span>
          <span className="story-card__date">{formattedDate}</span>
        </div>
        <h3 className="story-card__title">{story.title}</h3>
        <p className="story-card__excerpt">{story.excerpt}</p>
        <span className="story-card__arrow">
          Read more <ArrowRight size={11} />
        </span>
      </div>
    </article>
  );
}

export default function Stories({ stories }) {
  return (
    <section className="stories">
      <div className="stories__inner">
        <div className="stories__header">
          <h2 className="stories__title">Latest Stories</h2>
          <a className="stories__link" href="#">
            All Stories <ArrowRight size={11} />
          </a>
        </div>
        <div className="stories__grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
