import React from 'react';

const InfoSection: React.FC<{
  id: string;
  className: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
  reverse?: boolean;
  cta: string;
}> = ({ id, className, title, desc, points, image, reverse, cta }) => {
  return (
    <section id={id} className={className}>
      <style>{`
        .info-section-left, .info-section-right {
          padding: 60px 0;
          background-color: #000;
          color: #fff;
        }

        .info-section-left {
          border-top: 1px solid rgba(255, 177, 0, 0.1);
          background: linear-gradient(to bottom, rgba(255, 177, 0, 0.05), transparent);
        }

        .info-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .info-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .info-content {
          order: 2;
        }

        .info-grid.reversed .info-content {
          order: 2;
        }

        @media (min-width: 1024px) {
           .info-grid.reversed .info-content { order: 1; }
           .info-grid.reversed .info-image-box { order: 2; }
        }

        .info-title {
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .info-desc {
          margin-bottom: 32px;
          color: #d1d5db;
        }

        .info-points {
          margin-bottom: 32px;
          list-style: none;
          padding: 0;
        }

        .info-point {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .point-check {
          color: var(--cray-gold);
          font-size: 20px !important;
          font-weight: 700 !important;
        }

        .point-text {
          color: #d1d5db;
        }

        .btn-cta {
          background-color: var(--cray-gold);
          color: #000;
          padding: 14px 20px;
          border-radius: 8px;
          font-weight: 700 !important;
          display: inline-block;
          text-decoration: none;
          transition: 0.3s;
          text-transform: capitalize;
          letter-spacing: 0px;
          font-size: 14px !important;
        }

        .btn-cta:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(255,177,0,0.3); }

        .info-image-box {
          position: relative;
          height: 384px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 177, 0, 0.2);
          order: 1;
        }

        .info-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .info-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }
      `}</style>

      <div className="info-container">
        <div className={`info-grid ${reverse ? 'reversed' : ''}`}>
          <div className="info-content">
            <h2 className="info-title">{title}</h2>
            <p className="info-desc">{desc}</p>
            <ul className="info-points">
              {points.map((p, i) => (
                <li key={i} className="info-point">
                  <span className="point-check">✓</span>
                  <span className="point-text">{p}</span>
                </li>
              ))}
            </ul>
            <a href="#section1" className="btn-cta">
              {cta}
            </a>
          </div>

          <div className="info-image-box">
            <img src={image} alt={title} className="info-image" />
            <div className="info-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;