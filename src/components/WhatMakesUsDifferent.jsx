'use client';

import { useState, useEffect, useRef } from 'react';

const FEATURES = [
  { id: 1, icon: '👥', title: 'Customer Centric Platform' },
  { id: 2, icon: '💬', title: 'Seamless Communication' },
  { id: 3, icon: '📍', title: 'Real-Time Process Tracking' },
  { id: 4, icon: '✅', title: 'Verified Business and Service Providers' },
  { id: 5, icon: '🛠️', title: 'Integrated Business Tools' },
  { id: 6, icon: '📈', title: 'Scalable and Flexible Solution' },
  { id: 7, icon: '🔒', title: 'Secure Data Management' }
];

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={bannerRef} className="banner-wrapper">
      <div className="banner-container">
        <div className="circular-system">
          {/* Central Circle with Heading */}
          <div className={`central-circle ${isVisible ? 'circle-visible' : ''}`}>
            <div className="circle-content">
              <div className="heading-circle">
                <h1 className="main-heading">
                  What Makes Us 
                  <span className="highlight"> Different?</span>
                </h1>
              </div>
              <div className="subtitle-circle">
                Innovative Business Solutions
              </div>
            </div>
          </div>

          {/* Circular Path for Features */}
          <div className="circular-path">
            {/* Animated Orbit Rings */}
            <div className={`orbit-ring ring-1 ${isVisible ? 'ring-visible' : ''}`}></div>
            <div className={`orbit-ring ring-2 ${isVisible ? 'ring-visible' : ''}`}></div>
            
            {/* Circular Feature Points */}
            {FEATURES.map((feature, index) => {
              const angle = (index * 360) / FEATURES.length;
              const radius = 250; // Increased radius to move points further out
              
              return (
                <div
                  key={feature.id}
                  className={`feature-circle ${isVisible ? 'circle-point-visible' : ''}`}
                  style={{
                    '--angle': `${angle}deg`,
                    '--radius': `${radius}px`,
                    '--delay': `${index * 0.1}s`
                  }}
                >
                  {/* Connector Line */}
                  <div className="circle-connector"></div>
                  
                  {/* Circular Feature Card */}
                  <div className="circle-feature-card">
                    <div className="circle-icon-wrapper">
                      <div className="circle-icon-bg">
                        <span className="circle-icon">{feature.icon}</span>
                      </div>
                    </div>
                    <div className="circle-text-bubble">
                      <span className="circle-feature-text">{feature.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner-wrapper {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          position: relative;
          overflow: visible;
        }

        .banner-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }

        /* Circular System Container */
        .circular-system {
          position: relative;
          width: 800px; /* Increased container size */
          height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          overflow: visible;
        }

        /* Central Circle */
        .central-circle {
          width: 280px;
          height: 280px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 20px 40px rgba(25, 118, 210, 0.15),
            inset 0 2px 8px rgba(255, 255, 255, 0.8);
          border: 3px solid #bbdefb;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 30; /* Higher z-index to stay above points */
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .circle-visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .circle-content {
          text-align: center;
          padding: 30px;
        }

        .heading-circle {
          background: linear-gradient(135deg, #1976d2, #1565c0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .main-heading {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
        }

        .highlight {
          display: block;
          font-size: 2rem;
          margin-top: 5px;
        }

        .subtitle-circle {
          font-size: 0.9rem;
          color: #546e7a;
          font-weight: 500;
          background: rgba(187, 222, 251, 0.5);
          padding: 8px 15px;
          border-radius: 20px;
          display: inline-block;
        }

        /* Circular Path */
        .circular-path {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* Orbit Rings */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px dashed rgba(100, 181, 246, 0.4);
          opacity: 0;
          transition: all 0.8s ease;
        }

        .ring-1 {
          width: 550px; /* Increased ring size */
          height: 550px;
          transition-delay: 0.2s;
        }

        .ring-2 {
          width: 600px; /* Increased ring size */
          height: 600px;
          border-width: 1px;
          transition-delay: 0.4s;
        }

        .ring-visible {
          opacity: 1;
        }

        /* Feature Circles - FIXED POSITIONING */
        .feature-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.6s ease;
          transition-delay: var(--delay);
          z-index: 20; /* Lower than central circle */
        }

        .circle-point-visible {
          opacity: 1;
          transform: 
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--radius))
            rotate(calc(-1 * var(--angle)));
        }

        .circle-connector {
          position: absolute;
          top: 50%;
          left: -70px; /* Increased connector length */
          width: 70px;
          height: 2px;
          background: linear-gradient(90deg, #64b5f6, rgba(100, 181, 246, 0.3));
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.3s ease 0.2s;
          z-index: 15;
        }

        .circle-feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 20;
        }

        .circle-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #1976d2, #64b5f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(25, 118, 210, 0.3);
          border: 3px solid white;
          transition: all 0.3s ease;
          position: relative;
        }

        .circle-feature-card:hover .circle-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px rgba(25, 118, 210, 0.4);
        }

        .circle-icon {
          font-size: 2rem;
          filter: brightness(0) invert(1);
        }

        .circle-text-bubble {
          background: white;
          padding: 10px 16px;
          border-radius: 25px;
          box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
          border: 2px solid #e3f2fd;
          min-width: 160px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 20;
        }

        .circle-feature-card:hover .circle-text-bubble {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(25, 118, 210, 0.3);
          border-color: #64b5f6;
        }

        .circle-feature-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: #37474f;
          line-height: 1.3;
        }

        /* Hover effects for connector */
        .circle-feature-card:hover + .circle-connector {
          opacity: 1;
          width: 80px;
        }

        /* Rotating animation for central circle */
        @keyframes rotateSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .central-circle:hover {
          animation: rotateSlow 20s linear infinite;
        }

        /* Floating animation for feature circles */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .circle-feature-card:hover {
          animation: float 3s ease-in-out infinite;
        }

        /* Desktop Layout - FIXED */
        @media (min-width: 1025px) {
          .circular-system {
            width: 800px;
            height: 800px;
          }
        }

        @media (max-width: 1024px) {
          .circular-system {
            width: 700px;
            height: 700px;
          }

          .central-circle {
            width: 240px;
            height: 240px;
          }

          .main-heading {
            font-size: 1.5rem;
          }

          .highlight {
            font-size: 1.7rem;
          }

          .ring-1 {
            width: 480px;
            height: 480px;
          }

          .ring-2 {
            width: 530px;
            height: 530px;
          }

          .feature-circle {
            --radius: 220px;
          }

          .circle-connector {
            left: -60px;
            width: 60px;
          }

          .circle-icon-wrapper {
            width: 70px;
            height: 70px;
          }

          .circle-text-bubble {
            min-width: 140px;
            padding: 8px 14px;
          }
        }

        @media (max-width: 900px) {
          .circular-system {
            width: 600px;
            height: 600px;
          }

          .central-circle {
            width: 200px;
            height: 200px;
          }

          .main-heading {
            font-size: 1.3rem;
          }

          .highlight {
            font-size: 1.5rem;
          }

          .ring-1 {
            width: 400px;
            height: 400px;
          }

          .ring-2 {
            width: 450px;
            height: 450px;
          }

          .feature-circle {
            --radius: 180px;
          }

          .circle-connector {
            left: -50px;
            width: 50px;
          }

          .circle-text-bubble {
            min-width: 120px;
          }

          .circle-feature-text {
            font-size: 0.75rem;
          }
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .banner-wrapper {
            min-height: auto;
            padding: 40px 20px;
          }

          .circular-system {
            width: 100%;
            height: auto;
            display: block;
          }

          .central-circle {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            margin: 0 auto 40px auto;
            opacity: 1;
          }

          .circle-visible {
            transform: none;
          }

          .orbit-ring {
            display: none;
          }

          .circular-path {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 30px;
          }

          .feature-circle {
            position: relative;
            top: auto;
            left: auto;
            transform: none !important;
            opacity: 1;
            margin: 0;
          }

          .circle-point-visible {
            transform: none !important;
          }

          .circle-connector {
            display: none;
          }

          .circle-feature-card {
            flex-direction: row;
            background: white;
            padding: 12px 15px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(25, 118, 210, 0.1);
            min-width: auto;
            width: 100%;
          }

          .circle-text-bubble {
            background: none;
            box-shadow: none;
            border: none;
            padding: 0;
            min-width: auto;
            text-align: left;
            flex: 1;
          }

          .circle-feature-text {
            font-size: 0.8rem;
          }

          .circle-icon-wrapper {
            width: 45px;
            height: 45px;
            min-width: 45px;
          }

          .circle-icon {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .circular-path {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 30px auto 0 auto;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .central-circle,
          .feature-circle,
          .orbit-ring {
            transition: none;
            animation: none;
          }
          
          .circle-visible,
          .circle-point-visible,
          .ring-visible {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;