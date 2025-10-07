---
layout: page
title: Get Your Free Painting Quote
description: Get an instant painting estimate and secure your project with online payment. Professional painting services in Atlanta with transparent pricing.
permalink: /get-quote/
---

<div class="hero" style="padding: 2rem 0;">
    <div class="wrapper">
        <h1>Get Your Free Quote</h1>
        <p>Quick estimate tool and secure online booking for Atlanta painting projects</p>
    </div>
</div>

## Step 1: Project Information

Complete the form below to get an instant estimate and schedule your project. For the most accurate quote, please provide as much detail as possible.

<form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST" data-formspree="true" id="quote-form" style="max-width: 800px; margin: 0 auto;">
    
    <!-- Contact Information -->
    <div style="background: var(--light-gray); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
        <h3 style="margin-top: 0;">Contact Information</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
                <label for="first-name">First Name *</label>
                <input type="text" id="first-name" name="first-name" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="last-name">Last Name *</label>
                <input type="text" id="last-name" name="last-name" class="form-control" required>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" class="form-control" required>
            </div>
        </div>
        
        <div class="form-group">
            <label for="property-address">Property Address *</label>
            <input type="text" id="property-address" name="property-address" class="form-control" placeholder="Full address including city, state, ZIP" required>
        </div>
    </div>

    <!-- Project Details -->
    <div style="background: white; border: 2px solid var(--border-color); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
        <h3 style="margin-top: 0;">Project Details</h3>
        
        <div class="form-group">
            <label for="project-type">Project Type *</label>
            <select id="project-type" name="project-type" class="form-control" required>
                <option value="">Select project type</option>
                <option value="interior">Interior Painting Only</option>
                <option value="exterior">Exterior Painting Only</option>
                <option value="both">Interior & Exterior</option>
                <option value="deck-staining">Deck Staining/Sealing</option>
                <option value="fence-painting">Fence Painting</option>
                <option value="cabinet-painting">Cabinet Painting</option>
                <option value="touch-up">Touch-up Work</option>
                <option value="other">Other (specify in details)</option>
            </select>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
                <label for="room-count">Number of Rooms (Interior)</label>
                <input type="number" id="room-count" name="room-count" class="form-control" min="0" max="20" placeholder="Enter number">
            </div>
            
            <div class="form-group">
                <label for="square-footage">Exterior Square Footage</label>
                <input type="number" id="square-footage" name="square-footage" class="form-control" min="0" placeholder="Approximate sq ft">
            </div>
        </div>
        
        <div class="form-group">
            <label for="current-condition">Current Surface Condition</label>
            <select id="current-condition" name="current-condition" class="form-control">
                <option value="">Select condition</option>
                <option value="excellent">Excellent - recently painted</option>
                <option value="good">Good - minor touch-ups needed</option>
                <option value="fair">Fair - some prep work required</option>
                <option value="poor">Poor - extensive prep work needed</option>
                <option value="new-construction">New construction/never painted</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="paint-quality">Paint Quality Preference</label>
            <select id="paint-quality" name="paint-quality" class="form-control">
                <option value="">Select paint quality</option>
                <option value="premium">Premium - highest quality, longest lasting</option>
                <option value="high-quality">High Quality - excellent durability</option>
                <option value="standard">Standard - good quality, budget-friendly</option>
                <option value="budget">Budget - basic coverage</option>
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
                <option value="seasonal">Seasonal (specify in details)</option>
                <option value="flexible">Flexible</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="project-details">Additional Project Details</label>
            <textarea id="project-details" name="project-details" class="form-control" rows="4" placeholder="Please provide details about: specific rooms or areas, color preferences, any repair work needed, access considerations, pets, special requirements, etc."></textarea>
        </div>
    </div>

    <!-- Instant Estimate -->
    <div id="price-estimate" style="display: none;"></div>

    <!-- Submit Button -->
    <div style="text-align: center; margin: 2rem 0;">
        <button type="submit" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 2rem;">
            Get My Free Quote
        </button>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
            We'll contact you within 4 hours to schedule your free in-home consultation
        </p>
    </div>
</form>

---

## Secure Online Payment Available

Once you approve your quote, you can:
- **Pay deposits online** securely with Stripe
- **Set up payment plans** for larger projects  
- **Pay in full** or make progress payments
- **Traditional payments** also accepted (cash, check)

<div style="background: var(--light-gray); padding: 2rem; border-radius: 10px; margin: 2rem 0;">
    <div class="services-grid">
        <div style="text-align: center;">
            <div style="font-size: 2rem; color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h4>Secure Payments</h4>
            <p>SSL encrypted, PCI compliant payment processing</p>
        </div>
        
        <div style="text-align: center;">
            <div style="font-size: 2rem; color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-credit-card"></i>
            </div>
            <h4>Multiple Options</h4>
            <p>Credit cards, debit cards, bank transfers, or traditional payments</p>
        </div>
        
        <div style="text-align: center;">
            <div style="font-size: 2rem; color: var(--secondary-color); margin-bottom: 1rem;">
                <i class="fas fa-calendar-check"></i>
            </div>
            <h4>Flexible Terms</h4>
            <p>Payment plans available for projects over $2,500</p>
        </div>
    </div>
</div>

---

## What's Included in Your Quote

### Detailed Written Estimate
- **Itemized pricing** for materials and labor
- **Surface preparation** requirements and costs
- **Paint specifications** and quantities
- **Timeline and scheduling** information
- **Terms and conditions** clearly outlined

### Free Consultation Includes
- **Property assessment** of all surfaces to be painted
- **Color consultation** and recommendations
- **Surface condition evaluation** and prep requirements
- **Project timeline** discussion
- **Question and answer** session

---

## Our Quote Process

### 1. Online Form Submission
Complete the form above with your project details

### 2. Initial Contact (Within 4 Hours)
We'll call or email to confirm details and schedule consultation

### 3. Free In-Home Consultation
Professional assessment of your project with detailed measurements

### 4. Written Quote (Within 24 Hours)
Comprehensive written estimate with clear pricing and timeline

### 5. Project Approval & Scheduling
Review, approve, and schedule your project with optional online payment

---

## Pricing Guidelines

While every project is unique, here are typical price ranges for Atlanta area projects:

<div class="services-grid">
    <div class="service-card">
        <h4>Interior Rooms</h4>
        <p><strong>$300 - $600 per room</strong></p>
        <ul style="text-align: left; font-size: 0.9rem;">
            <li>• Standard 12x12 room</li>
            <li>• Includes walls and ceiling</li>
            <li>• Prep work and cleanup</li>
            <li>• Quality paint included</li>
        </ul>
    </div>
    
    <div class="service-card">
        <h4>Exterior Painting</h4>
        <p><strong>$2.00 - $4.00 per sq ft</strong></p>
        <ul style="text-align: left; font-size: 0.9rem;">
            <li>• Includes surface prep</li>
            <li>• Primer and two coats</li>
            <li>• Trim and detail work</li>
            <li>• Cleanup included</li>
        </ul>
    </div>
    
    <div class="service-card">
        <h4>Additional Services</h4>
        <p><strong>Variable Pricing</strong></p>
        <ul style="text-align: left; font-size: 0.9rem;">
            <li>• Deck staining: $2-4/sq ft</li>
            <li>• Cabinet painting: $75-150/door</li>
            <li>• Fence painting: $5-15/linear ft</li>
            <li>• Minor repairs: $50-150</li>
        </ul>
    </div>
</div>

*Prices vary based on surface condition, paint quality, access difficulty, and project size. All quotes are customized to your specific project.*

---

## Why Choose Our Quote System?

<div class="services-grid">
    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-stopwatch"></i>
        </div>
        <h3>Fast Response</h3>
        <p>Initial contact within 4 hours, full quote within 24 hours of consultation</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-eye"></i>
        </div>
        <h3>Transparent Pricing</h3>
        <p>Detailed breakdowns with no hidden fees or surprise charges</p>
    </div>

    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-thumbs-up"></i>
        </div>
        <h3>No Pressure</h3>
        <p>Professional consultation with no high-pressure sales tactics</p>
    </div>
</div>

---

<div style="background: var(--primary-color); color: white; padding: 2rem; border-radius: 10px; text-align: center; margin: 2rem 0;">
    <h3 style="color: white;">Questions About Your Quote?</h3>
    <p>Our team is here to help explain every aspect of your painting project and quote.</p>
    <div class="cta-buttons">
        <a href="tel:{{ site.business.phone }}" class="btn btn-primary">Call {{ site.business.phone }}</a>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-secondary">Contact Form</a>
    </div>
</div>

<script>
// Add event listeners for quote calculator
document.addEventListener('DOMContentLoaded', function() {
    const projectType = document.getElementById('project-type');
    const roomCount = document.getElementById('room-count');
    const sqFootage = document.getElementById('square-footage');
    
    if (projectType) {
        projectType.addEventListener('change', function() {
            if (this.value === 'interior' || this.value === 'both') {
                roomCount.closest('.form-group').style.display = 'block';
            } else {
                roomCount.closest('.form-group').style.display = 'none';
            }
            
            if (this.value === 'exterior' || this.value === 'both') {
                sqFootage.closest('.form-group').style.display = 'block';
            } else {
                sqFootage.closest('.form-group').style.display = 'none';
            }
        });
    }
});
</script>