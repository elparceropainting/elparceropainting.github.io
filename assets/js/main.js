// Main JavaScript file for BCL-ElParcero Painting website

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Stripe if on quote page
    if (document.getElementById('payment-form')) {
        initializeStripe();
    }
    
    // Initialize form handlers
    initializeContactForms();
    
    // Initialize smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Initialize mobile menu
    initializeMobileMenu();
});

// Stripe Integration
let stripe;
let elements;

function initializeStripe() {
    // Initialize Stripe (replace with your actual publishable key)
    stripe = Stripe('pk_test_your-stripe-publishable-key-here');
    elements = stripe.elements();
    
    // Create card element
    const cardElement = elements.create('card', {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
        },
    });
    
    // Mount card element
    const cardElementDiv = document.getElementById('card-element');
    if (cardElementDiv) {
        cardElement.mount('#card-element');
        
        // Handle form submission
        const form = document.getElementById('payment-form');
        if (form) {
            form.addEventListener('submit', handlePaymentFormSubmit);
        }
    }
}

async function handlePaymentFormSubmit(event) {
    event.preventDefault();
    
    const submitButton = document.getElementById('submit-payment');
    const errorDiv = document.getElementById('card-errors');
    
    // Disable submit button and show loading
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';
    
    try {
        // Get form data
        const formData = new FormData(event.target);
        const amount = parseInt(formData.get('deposit-amount')) * 100; // Convert to cents
        
        // Create payment intent (this would typically be done on your server)
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            'pi_test_payment_intent_client_secret', // Replace with actual client secret from server
            {
                payment_method: {
                    card: elements.getElement('card'),
                    billing_details: {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        address: {
                            line1: formData.get('address'),
                            city: formData.get('city'),
                            state: formData.get('state'),
                            postal_code: formData.get('zip'),
                        },
                    },
                },
            }
        );
        
        if (error) {
            // Show error to customer
            showPaymentError(error.message);
        } else {
            // Payment succeeded
            showPaymentSuccess();
        }
    } catch (err) {
        showPaymentError('An unexpected error occurred. Please try again.');
    }
    
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Payment';
}

function showPaymentError(message) {
    const errorDiv = document.getElementById('card-errors');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}

function showPaymentSuccess() {
    // Hide form and show success message
    const form = document.getElementById('payment-form');
    const successDiv = document.getElementById('payment-success');
    
    if (form && successDiv) {
        form.style.display = 'none';
        successDiv.style.display = 'block';
    }
}

// Contact Form Handling
function initializeContactForms() {
    const contactForms = document.querySelectorAll('form[data-formspree]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactFormSubmit);
    });
}

async function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const formData = new FormData(form);
        const formspreeUrl = form.getAttribute('action');
        
        const response = await fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showFormSuccess(form);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showFormError(form, 'There was an error sending your message. Please try again.');
    }
    
    // Reset button
    submitButton.disabled = false;
    submitButton.textContent = originalText;
}

function showFormSuccess(form) {
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
        <div style="background: var(--success-color); color: white; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
            <i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
    `;
    
    // Insert success message and hide form
    form.parentNode.insertBefore(successMessage, form);
    form.style.display = 'none';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
}

function showFormError(form, message) {
    let errorDiv = form.querySelector('.form-error');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        form.insertBefore(errorDiv, form.firstChild);
    }
    
    errorDiv.innerHTML = `
        <div style="background: var(--accent-color); color: white; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
            <i class="fas fa-exclamation-triangle"></i> ${message}
        </div>
    `;
}

// Smooth Scrolling for Anchor Links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const navTrigger = document.getElementById('nav-trigger');
    const siteNav = document.querySelector('.site-nav');
    
    if (navTrigger && siteNav) {
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!siteNav.contains(e.target) && navTrigger.checked) {
                navTrigger.checked = false;
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navTrigger.checked = false;
            });
        });
    }
}

// Quote Calculator Functions
function calculateQuoteEstimate() {
    const projectType = document.getElementById('project-type')?.value;
    const roomCount = parseInt(document.getElementById('room-count')?.value || 0);
    const sqFootage = parseInt(document.getElementById('square-footage')?.value || 0);
    
    if (!projectType || (!roomCount && !sqFootage)) {
        return;
    }
    
    let basePrice = 0;
    
    // Basic pricing calculation (simplified)
    if (projectType === 'interior') {
        basePrice = roomCount * 350; // $350 per room average
    } else if (projectType === 'exterior') {
        basePrice = sqFootage * 2.5; // $2.50 per sq ft average
    } else if (projectType === 'both') {
        basePrice = (roomCount * 350) + (sqFootage * 2.5);
    }
    
    // Show estimate
    const estimateDiv = document.getElementById('price-estimate');
    if (estimateDiv && basePrice > 0) {
        const lowEnd = Math.round(basePrice * 0.8);
        const highEnd = Math.round(basePrice * 1.2);
        
        estimateDiv.innerHTML = `
            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Estimated Price Range</h4>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--secondary-color); margin-bottom: 0.5rem;">
                    $${lowEnd.toLocaleString()} - $${highEnd.toLocaleString()}
                </div>
                <p style="margin: 0; font-size: 0.9rem; color: #666;">
                    *This is a rough estimate. Final pricing depends on surface conditions, paint quality, and other factors. Contact us for an accurate quote.
                </p>
            </div>
        `;
        estimateDiv.style.display = 'block';
    }
}

// Initialize quote calculator if on quote page
document.addEventListener('DOMContentLoaded', function() {
    const projectTypeSelect = document.getElementById('project-type');
    const roomCountInput = document.getElementById('room-count');
    const sqFootageInput = document.getElementById('square-footage');
    
    if (projectTypeSelect || roomCountInput || sqFootageInput) {
        [projectTypeSelect, roomCountInput, sqFootageInput].forEach(element => {
            if (element) {
                element.addEventListener('change', calculateQuoteEstimate);
                element.addEventListener('input', calculateQuoteEstimate);
            }
        });
    }
});

// Utility Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\D/g, ''));
}

function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Export functions for testing or external use
window.BCLPainting = {
    calculateQuoteEstimate,
    validateEmail,
    validatePhone,
    formatPhoneNumber
};