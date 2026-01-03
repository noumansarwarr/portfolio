import React from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card">
      <StarRating rating={testimonial.rating} />
      <blockquote className="testimonial-text">
        "{testimonial.text}"
      </blockquote>
      <div className="testimonial-author">
        <div className="author-info">
          <span className="author-name">{testimonial.name}</span>
          <span className="author-role">{testimonial.role}</span>
        </div>
        <span className="testimonial-platform">{testimonial.platform}</span>
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Real feedback from real projects. These are the things that matter - 
          trust, communication, and delivery.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
