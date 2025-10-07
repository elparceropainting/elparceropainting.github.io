---
layout: page
title: Thank You - BCL-El Parcero Painting
description: Thank you for contacting BCL-El Parcero Painting. We'll get back to you soon with your painting estimate.
permalink: /thank-you/
---

<div class="hero" style="padding: 4rem 0; text-align: center; background: linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%); color: white;">
    <div class="wrapper">
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="font-size: 4rem; color: #4CAF50; margin-bottom: 1rem;">
                ✓
            </div>
            <h1 style="margin-bottom: 1rem; color: white;">Thank You!</h1>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #e8f4fd;">
                Your message has been successfully sent. We appreciate you contacting BCL-El Parcero Painting!
            </p>
        </div>
    </div>
</div>

<div class="wrapper" style="padding: 3rem 0; text-align: center;">
    <div style="max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5aa0; margin-bottom: 1.5rem;">What happens next?</h2>
        
        <div class="services-grid" style="margin: 2rem 0;">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-clock" style="color: #2c5aa0;"></i>
                </div>
                <h3>Quick Response</h3>
                <p>We'll review your project details and get back to you within <strong>2-4 hours</strong> during business hours.</p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-calculator" style="color: #2c5aa0;"></i>
                </div>
                <h3>Free Estimate</h3>
                <p>We'll provide you with a detailed, <strong>no-obligation estimate</strong> for your painting project.</p>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-handshake" style="color: #2c5aa0;"></i>
                </div>
                <h3>Professional Service</h3>
                <p>Our experienced team is ready to transform your home with <strong>quality craftsmanship</strong>.</p>
            </div>
        </div>

        <div style="margin: 3rem 0; padding: 2rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4CAF50;">
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">Need immediate assistance?</h3>
            <p style="margin-bottom: 1rem;">
                For urgent matters, feel free to call us directly:
            </p>
            <p style="font-size: 1.3rem; font-weight: bold; color: #2c5aa0;">
                <a href="tel:{{ site.business.phone }}" style="color: #2c5aa0; text-decoration: none;">
                    {{ site.business.phone }}
                </a>
            </p>
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
                Monday - Friday: 7:00 AM - 7:00 PM<br>
                Saturday: 8:00 AM - 5:00 PM
            </p>
        </div>

        <div style="margin: 3rem 0;">
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                You'll be automatically redirected to our homepage in <span id="countdown">10</span> seconds.
            </p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/" class="cta-button" style="display: inline-block; padding: 12px 24px; background: #2c5aa0; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Go Home Now
                </a>
                <a href="/services/" class="cta-button" style="display: inline-block; padding: 12px 24px; background: #dc3545; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    View Our Services
                </a>
                <a href="/portfolio/" class="cta-button" style="display: inline-block; padding: 12px 24px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    See Our Work
                </a>
            </div>
        </div>
    </div>
</div>

<script>
// Countdown timer and auto-redirect
let countdown = 10;
const countdownElement = document.getElementById('countdown');

const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = '/';
    }
}, 1000);

// Optional: Pause countdown when user hovers over buttons
const buttons = document.querySelectorAll('.cta-button');
let isPaused = false;

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    button.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});

// Modified timer that respects pause
const pausableTimer = setInterval(() => {
    if (!isPaused) {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(pausableTimer);
            window.location.href = '/';
        }
    }
}, 1000);
</script>