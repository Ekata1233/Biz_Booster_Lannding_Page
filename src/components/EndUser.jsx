'use client';

import { useState, useEffect, useRef } from 'react';

const CUSTOMER_BENEFITS = [
  {
    icon: '📋',
    title: 'Simplified Workflow',
    description: 'Structured process from requirement posting to project completion'
  },
  {
    icon: '✅',
    title: 'Verified Providers',
    description: 'Access to trustworthy, verified service providers'
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    description: 'Live updates and complete process tracking'
  },
  {
    icon: '👥',
    title: 'Trustworthy Community',
    description: 'Build reliable connections through feedback system'
  }
];

const CustomerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="customer-section">
      <div className="container">
        {/* Header Section */}
        <div className={`header-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="badge">
            <span>For Customers</span>
          </div>
          <h1 className="main-title">
            Find Trusted Solutions on 
            <span className="brand-highlight"> FetchTrue</span>
          </h1>
          <p className="subtitle">
            Your gateway to verified suppliers and seamless service experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Side - Description */}
          <div className={`description-section ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="definition-card">
              <h3>Who is a Customer?</h3>
              <p>
                A customer is a person or organization using the FetchTrue platform to find 
                trustworthy goods, services, or customized solutions from approved suppliers. 
                The marketplace is driven by customers, who make requests, specify their wants 
                precisely, and actively interact with service providers to guarantee that the 
                best solutions are provided.
              </p>
            </div>

            <div className="value-proposition">
              <h4>How FetchTrue Empowers You</h4>
              <p>
                Customers may effectively connect with the right suppliers, make educated decisions, 
                and easily and confidently accomplish their business or personal goals by utilizing 
                FetchTrue's reliable platform.
              </p>
            </div>

            <div className="cta-buttons">
              <button className="primary-btn">
                Start Your Journey
              </button>
              <button className="secondary-btn">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className={`benefits-section ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="benefits-header">
              <h2>Key Benefits</h2>
              <p>Experience the difference with FetchTrue</p>
            </div>

            <div className="benefits-grid">
              {CUSTOMER_BENEFITS.map((benefit, index) => (
                <div 
                  key={index}
                  className={`benefit-card ${isVisible ? 'card-visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                  <div className="benefit-check">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className={`process-flow ${isVisible ? 'fade-in-up' : ''}`}>
          <h3>How It Works</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Post Your Requirement</h4>
                <p>Describe exactly what you need</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Get Matched</h4>
                <p>Connect with verified providers</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Collaborate</h4>
                <p>Work together seamlessly</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Complete & Review</h4>
                <p>Finish project and share feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .customer-section {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fbff 0%, #e3f2fd 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .header-content {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #1976d2, #1565c0);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a237e;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .brand-highlight {
          background: linear-gradient(135deg, #1976d2, #1565c0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #546e7a;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        /* Description Section */
        .description-section {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .slide-in-left {
          opacity: 1;
          transform: translateX(0);
        }

        .definition-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(25, 118, 210, 0.1);
          border-left: 4px solid #1976d2;
          margin-bottom: 30px;
        }

        .definition-card h3 {
          color: #1976d2;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .definition-card p {
          color: #37474f;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .value-proposition {
          background: linear-gradient(135deg, #e3f2fd, #bbdefb);
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .value-proposition h4 {
          color: #1565c0;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .value-proposition p {
          color: #37474f;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: linear-gradient(135deg, #1976d2, #1565c0);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(25, 118, 210, 0.3);
        }

        .secondary-btn {
          background: white;
          color: #1976d2;
          border: 2px solid #1976d2;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: #e3f2fd;
          transform: translateY(-2px);
        }

        /* Benefits Section */
        .benefits-section {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
        }

        .slide-in-right {
          opacity: 1;
          transform: translateX(0);
        }

        .benefits-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .benefits-header h2 {
          color: #1a237e;
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .benefits-header p {
          color: #546e7a;
          font-size: 1.1rem;
        }

        .benefits-grid {
          display: grid;
          gap: 20px;
        }

        .benefit-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(25, 118, 210, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: cardSlideIn 0.6s ease forwards;
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(25, 118, 210, 0.15);
        }

        .benefit-icon {
          font-size: 2.5rem;
          min-width: 60px;
        }

        .benefit-content {
          flex: 1;
        }

        .benefit-content h4 {
          color: #1976d2;
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .benefit-content p {
          color: #546e7a;
          line-height: 1.5;
          margin: 0;
        }

        .benefit-check {
          color: #4caf50;
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Process Flow */
        .process-flow {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(25, 118, 210, 0.1);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .process-flow h3 {
          text-align: center;
          color: #1a237e;
          font-size: 2rem;
          margin-bottom: 40px;
        }

        .process-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .process-step {
          text-align: center;
          min-width: 150px;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #1976d2, #1565c0);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: bold;
          margin: 0 auto 15px auto;
        }

        .step-content h4 {
          color: #1976d2;
          margin-bottom: 5px;
          font-size: 1.1rem;
        }

        .step-content p {
          color: #546e7a;
          font-size: 0.9rem;
          margin: 0;
        }

        .process-arrow {
          color: #1976d2;
          font-size: 2rem;
          font-weight: bold;
        }

        /* Animations */
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .process-steps {
            gap: 20px;
          }

          .process-arrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 768px) {
          .customer-section {
            padding: 60px 15px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .process-flow {
            padding: 30px 20px;
          }

          .process-steps {
            flex-direction: column;
            gap: 30px;
          }

          .cta-buttons {
            justify-content: center;
          }

          .benefit-card {
            padding: 20px;
          }

          .benefit-icon {
            font-size: 2rem;
            min-width: 50px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.8rem;
          }

          .definition-card {
            padding: 20px;
          }

          .benefit-card {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .primary-btn, .secondary-btn {
            width: 100%;
            text-align: center;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .header-content,
          .description-section,
          .benefits-section,
          .process-flow,
          .benefit-card {
            transition: none;
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerSection;