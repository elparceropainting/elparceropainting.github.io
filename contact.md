---
layout: page
title: Contact BCL-El Parcero Painting
description: Get in touch with Atlanta's trusted painting professionals. Call, email, or use our contact form for your free painting estimate.
permalink: /contact/
---

<div class="hero" style="padding: 2rem 0;">
    <div class="wrapper">
        <h1>Contact Us</h1>
        <p>Ready to transform your home? Get in touch today for your free estimate</p>
    </div>
</div>

## Get Your Free Estimate

We'd love to discuss your painting project and provide you with a detailed, no-obligation estimate. Contact us using any of the methods below:

<div class="services-grid" style="margin: 2rem 0;">
    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-phone"></i>
        </div>
        <h3>Call Us</h3>
        <p><strong><a href="tel:{{ site.business.phone }}">{{ site.business.phone }}</a></strong></p>
        <p>Monday - Friday: 7:00 AM - 7:00 PM<br>
        Saturday: 8:00 AM - 5:00 PM<br>
        Sunday: By appointment</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <h3>Email Us</h3>
        <p><strong><a href="mailto:{{ site.business.email }}">{{ site.business.email }}</a></strong></p>
        <p>We typically respond to emails within 2-4 hours during business hours.</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-map-marker-alt"></i>
        </div>
        <h3>Service Area</h3>
        <p><strong>{{ site.business.address }}</strong></p>
        <p>Serving Atlanta and surrounding areas within a 25-mile radius.</p>
    </div>
</div>

---

## Send Us a Message

Use the form below to tell us about your project, ask questions, or request your free estimate. We'll get back to you promptly!

<form id="contact-form" action="https://formspree.io/f/{{ site.formspree_id }}" method="POST" style="max-width: 600px; margin: 2rem auto;">
    <input type="hidden" name="_subject" value="New Contact Form Submission - {{ site.business.name }}">
    <div class="form-group">
        <label for="name">Full Name *</label>
        <input type="text" id="name" name="name" class="form-control" required>
    </div>

    <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" class="form-control" required>
    </div>

    <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" class="form-control">
    </div>

    <div class="form-group">
        <label for="address">Property Address</label>
        <input type="text" id="address" name="address" class="form-control" placeholder="Street address, City, State, ZIP">
    </div>

    <div class="form-group">
        <label for="project-type">Project Type</label>
        <select id="project-type" name="project-type" class="form-control">
            <option value="">Select project type</option>
            <option value="interior">Interior Painting</option>
            <option value="exterior">Exterior Painting</option>
            <option value="both">Interior & Exterior</option>
            <option value="deck-staining">Deck Staining</option>
            <option value="fence-painting">Fence Painting</option>
            <option value="other">Other</option>
        </select>
    </div>

    <div class="form-group">
        <label for="timeline">Preferred Timeline</label>
        <select id="timeline" name="timeline" class="form-control">
            <option value="">Select timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="flexible">Flexible</option>
        </select>
    </div>

    <div class="form-group">
        <label for="message">Project Details</label>
        <textarea id="message" name="message" class="form-control" rows="5" placeholder="Tell us about your project: number of rooms, square footage, specific areas to be painted, color preferences, any special requirements, etc."></textarea>
    </div>

    <div class="form-group">
        <label for="budget">Estimated Budget (Optional)</label>
        <select id="budget" name="budget" class="form-control">
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-2500">$1,000 - $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over-10000">Over $10,000</option>
        </select>
    </div>

    <div class="form-group">
        <label>
            <input type="checkbox" name="newsletter" value="yes" style="margin-right: 0.5rem;">
            I'd like to receive painting tips and special offers via email
        </label>
    </div>

    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Send Message</button>
</form>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '⏳ Sending Message...';
    submitBtn.disabled = true;
    
    // Create FormData from the form
    const formData = new FormData(form);
    
    // Submit form using fetch API
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success - redirect to thank you page
            window.location.href = '{{ site.url }}/thank-you/';
        } else {
            // Handle error
            return response.json().then(data => {
                throw new Error(data.error || 'Form submission failed');
            });
        }
    })
    .catch(error => {
        // Show error message
        submitBtn.innerHTML = '❌ Error - Try Again';
        submitBtn.disabled = false;
        
        // Show error to user
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 1rem; border-radius: 5px; margin-top: 1rem; border: 1px solid #f5c6cb;';
        errorDiv.innerHTML = `
            <strong>Oops!</strong> There was a problem sending your message. Please try again or call us directly at 
            <a href="tel:{{ site.business.phone }}" style="color: #721c24; font-weight: bold;">{{ site.business.phone }}</a>
        `;
        
        // Remove any existing error messages
        const existingError = form.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        errorDiv.className = 'error-message';
        form.appendChild(errorDiv);
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
        }, 3000);
    });
});
</script>

---

## Why Contact BCL El Parcero Painting?

<div class="services-grid">
    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-clock"></i>
        </div>
        <h3>Quick Response</h3>
        <p>We respond to all inquiries within 4 hours during business hours, often much sooner.</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-calculator"></i>
        </div>
        <h3>Detailed Estimates</h3>
        <p>Comprehensive, written estimates with clear pricing and no hidden fees.</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-handshake"></i>
        </div>
        <h3>Professional Service</h3>
        <p>Courteous, professional service from initial contact through project completion.</p>
    </div>
</div>

---

## Frequently Asked Questions

**Q: How quickly can you provide an estimate?**
A: We typically provide estimates within 24-48 hours of your initial contact. For urgent projects, same-day estimates may be available.

**Q: Do you charge for estimates?**
A: No, all estimates are completely free with no obligation.

**Q: What information do you need for an accurate estimate?**
A: The more details you can provide about your project, the more accurate our estimate will be. Include room dimensions, surfaces to be painted, timeline, and any special requirements.

**Q: Do you work weekends?**
A: We can schedule consultations and some work on Saturdays. Sunday appointments are available by special arrangement.

**Q: How far do you travel for projects?**
A: We serve Atlanta and surrounding areas within a 25-mile radius. Contact us to confirm service in your specific location.

---

## What Happens Next?

1. **Contact Us** - Use any method above to get in touch
2. **Schedule Consultation** - We'll arrange a convenient time to visit your property
3. **Detailed Assessment** - We'll evaluate your project and discuss your vision
4. **Written Estimate** - You'll receive a comprehensive, detailed estimate
5. **Project Planning** - Once approved, we'll schedule your project
6. **Professional Execution** - Our team completes your project with quality and care

---

<div style="background: var(--primary-color); color: white; padding: 2rem; border-radius: 10px; text-align: center; margin: 2rem 0;">
    <h3 style="color: white;">Ready to Get Started?</h3>
    <p>Don't wait to transform your home. Contact BCL El Parcero Painting today and discover why Atlanta homeowners choose us for their painting needs.</p>
    <div class="cta-buttons">
        <a href="tel:{{ site.business.phone }}" class="btn btn-primary">Call Now: {{ site.business.phone }}</a>
        <a href="{{ '/get-quote/' | relative_url }}" class="btn btn-secondary">Get Online Quote</a>
    </div>
</div>