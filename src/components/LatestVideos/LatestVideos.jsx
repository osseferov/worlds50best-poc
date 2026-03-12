import { useState } from 'react';
import ArrowRight from '../shared/ArrowRight';
import './LatestVideos.css';

function VideoModal({ videoId, onClose }) {
  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal__inner" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose} aria-label="Close video">✕</button>
        <div className="video-modal__embed">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const thumbnail = video.thumbnail_url
    || `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`;

  return (
    <>
      <article
        className="video-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPlaying(true)}
      >
        <div className="video-card__thumb">
          <img src={thumbnail} alt={video.title} />
          <div className={`video-card__overlay ${hovered ? 'video-card__overlay--hover' : ''}`} />

          {/* Play button */}
          <div className="video-card__play">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>

          {/* Duration badge */}
          {video.duration && (
            <span className="video-card__duration">{video.duration}</span>
          )}
        </div>

        <div className="video-card__body">
          <p className="video-card__category">{video.category}</p>
          <h3 className="video-card__title">{video.title}</h3>
          <p className="video-card__date">
            {new Date(video.date).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'short', year: 'numeric',
            })}
          </p>
        </div>
      </article>

      {playing && (
        <VideoModal videoId={video.youtube_id} onClose={() => setPlaying(false)} />
      )}
    </>
  );
}

export default function LatestVideos({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="latest-videos">
      <div className="latest-videos__inner">
        <div className="latest-videos__header">
          <h2 className="latest-videos__title">Latest Videos</h2>
          <a
            className="latest-videos__link"
            href="https://www.youtube.com/@worlds50best"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Videos <ArrowRight size={11} />
          </a>
        </div>

        <div className="latest-videos__grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
