'use client';

import { useState, useEffect, useRef } from 'react';

const FEATURES = [
  { id: 1, icon: '👥', title: 'Customer Centric Platform', description: 'Built around your needs and preferences' },
  { id: 2, icon: '💬', title: 'Seamless Communication', description: 'Connect effortlessly with your team' },
  { id: 3, icon: '📍', title: 'Real-Time Process Tracking', description: 'Monitor progress as it happens' },
  { id: 4, icon: '✅', title: 'Verified Business Providers', description: 'Trusted and certified partners' },
  { id: 5, icon: '🛠️', title: 'Integrated Business Tools', description: 'All-in-one solution for your business' },
  { id: 6, icon: '📈', title: 'Scalable and Flexible', description: 'Grow with your business needs' },
  { id: 7, icon: '🔒', title: 'Secure Data Management', description: 'Your data is always protected' }
];

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={bannerRef} className="banner-wrapper">
      <div className="banner-container">
        {/* Header Section */}
        <div className={`header-content ${isVisible ? 'header-visible' : ''}`}>
          <div className="badge">Why Choose Us</div>
          <h1 className="main-title">
            What Makes Us 
            <span className="highlight"> Different?</span>
          </h1>
          <p className="subtitle">
            Experience the next generation of business solutions designed to transform 
            your operations and drive sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${isVisible ? 'card-visible' : ''} ${
                activeCard === feature.id ? 'card-active' : ''
              }`}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated Background Effect */}
              <div className="card-glow"></div>
              
              {/* Icon Container */}
              <div className="icon-container">
                <div className="icon-wrapper">
                  <span className="icon">{feature.icon}</span>
                </div>
                <div className="icon-bg"></div>
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>

              {/* Hover Indicator */}
              <div className="hover-indicator">
                <div className="indicator-dot"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="float-circle circle-1"></div>
          <div className="float-circle circle-2"></div>
          <div className="float-circle circle-3"></div>
          <div className="float-blob blob-1"></div>
          <div className="float-blob blob-2"></div>
        </div>
      </div>

      <style jsx>{`
        .banner-wrapper {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #0c1a2d 0%, #1a3a5f 50%, #2a4a7a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .banner-container {
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Header Styles */
        .header-content {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .header-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 114, 255, 0.3);
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #b0c7e8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: var(--delay);
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .card-active {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 198, 255, 0.3);
          transform: translateY(-10px) scale(1.02);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00c6ff, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-active .card-glow {
          opacity: 1;
        }

        /* Icon Styles */
        .icon-container {
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }

        .icon-wrapper {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .card-active .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0, 114, 255, 0.4);
        }

        .icon {
          font-size: 2rem;
          filter: brightness(0) invert(1);
        }

        .icon-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: rgba(0, 198, 255, 0.1);
          border-radius: 50%;
          z-index: 1;
          animation: pulse 3s ease-in-out infinite;
        }

        /* Card Content */
        .card-content {
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
        }

        .card-description {
          font-size: 0.95rem;
          color: #b0c7e8;
          line-height: 1.5;
          margin: 0;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .card-active .card-description {
          opacity: 1;
        }

        /* Hover Indicator */
        .hover-indicator {
          position: absolute;
          bottom: 20px;
          right: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .card-active .hover-indicator {
          opacity: 1;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          background: #00c6ff;
          border-radius: 50%;
          animation: bounce 2s ease-in-out infinite;
        }

        /* Floating Background Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .float-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 198, 255, 0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        .float-blob {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 114, 255, 0.05) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
          filter: blur(40px);
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: 5%;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          bottom: 10%;
          left: 5%;
          animation-delay: 4s;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-title {
            font-size: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .banner-wrapper {
            padding: 60px 20px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .header-content {
            margin-bottom: 50px;
          }

          .feature-card {
            padding: 25px;
          }

          .icon-container {
            width: 70px;
            height: 70px;
          }

          .icon {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 20px;
          }

          .badge {
            font-size: 0.8rem;
            padding: 6px 16px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .feature-card,
          .header-content,
          .float-circle,
          .float-blob {
            transition: none;
            animation: none;
          }
          
          .card-visible,
          .header-visible {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;