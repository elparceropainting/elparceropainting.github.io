# Setup Checklist for BCL-ElParcero Painting Website

Complete this checklist to fully deploy your Jekyll website with all integrations working.

## ✅ Before Deployment

### 1. Third-Party Service Setup

#### Formspree Configuration
- [ ] Create account at [formspree.io](https://formspree.io)
- [ ] Create new form and get form ID
- [ ] Update `_config.yml`: `formspree_id: "your-actual-form-id"`
- [ ] Test form submission

#### Stripe Payment Setup
- [ ] Create account at [stripe.com](https://stripe.com)
- [ ] Get publishable key from dashboard
- [ ] Update `_config.yml`: `stripe_publishable_key: "pk_live_your-actual-key"`
- [ ] Update `assets/js/main.js` line 47 with same key
- [ ] Set up webhooks for payment confirmations
- [ ] Test payment processing in test mode

#### Google Analytics (Optional)
- [ ] Create Google Analytics account and property
- [ ] Get tracking ID (G-XXXXXXXXXX)
- [ ] Update `_config.yml`: `google_analytics: "G-XXXXXXXXXX"`

### 2. Business Information Updates

#### Contact Details
- [ ] Update phone number in `_config.yml`
- [ ] Update email address in `_config.yml`
- [ ] Update business address in `_config.yml`
- [ ] Verify contact info appears correctly on all pages

#### Service Areas
- [ ] Customize service areas list in `_config.yml`
- [ ] Update service area descriptions in `service-areas.md`
- [ ] Verify all mentioned cities are accurate

#### Business Hours
- [ ] Update business hours in `contact.md`
- [ ] Update availability information throughout site

### 3. Content Customization

#### Homepage
- [ ] Review hero section messaging
- [ ] Update service descriptions
- [ ] Verify call-to-action buttons work

#### Services Page
- [ ] Customize service offerings
- [ ] Update pricing guidelines
- [ ] Add any specialty services

#### About Page
- [ ] Write your company story
- [ ] Add team information
- [ ] Include certifications/licenses

#### Portfolio Page
- [ ] Replace placeholder images with actual work photos
- [ ] Add project descriptions
- [ ] Include customer testimonials

## ✅ Deployment Steps

### 1. Repository Setup
- [ ] Push all files to GitHub repository
- [ ] Verify all files are present and correct
- [ ] Check for any sensitive information in files

### 2. GitHub Pages Configuration
- [ ] Go to repository Settings > Pages
- [ ] Select source: "Deploy from a branch"
- [ ] Select branch: `main` or `master`
- [ ] Wait for deployment (5-10 minutes)
- [ ] Visit your site: `https://username.github.io/repository-name`

### 3. Custom Domain (Optional)
- [ ] Purchase and configure domain
- [ ] Add CNAME file with domain name
- [ ] Configure DNS settings
- [ ] Update `_config.yml` url field
- [ ] Enable HTTPS in GitHub Pages settings

## ✅ Testing Checklist

### 1. Basic Functionality
- [ ] All pages load without errors
- [ ] Navigation menu works on all pages
- [ ] Mobile responsive design works
- [ ] Contact information displays correctly

### 2. Forms Testing
- [ ] Contact form submits successfully
- [ ] Form validation works (required fields)
- [ ] Email notifications received
- [ ] Quote form calculates estimates

### 3. Payment Integration
- [ ] Stripe payment form loads
- [ ] Test payments process (use test cards)
- [ ] Payment confirmation works
- [ ] Error handling displays properly

### 4. SEO and Performance
- [ ] Page titles and descriptions are unique
- [ ] Images have alt text
- [ ] Site loads quickly
- [ ] Google Analytics tracking works (if enabled)

## ✅ Post-Launch Tasks

### 1. Search Engine Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Set up Google My Business listing
- [ ] Create social media profiles

### 2. Marketing Setup
- [ ] Set up email marketing (if planned)
- [ ] Create business cards with website URL
- [ ] Update existing marketing materials
- [ ] Add website to business directories

### 3. Monitoring and Maintenance
- [ ] Set up Google Analytics goals
- [ ] Monitor contact form submissions
- [ ] Test payment processing monthly
- [ ] Schedule regular content updates

## ✅ Legal and Compliance

### 1. Business Registration
- [ ] Verify business is properly licensed in Georgia
- [ ] Confirm insurance coverage is current
- [ ] Update business registration with website

### 2. Legal Pages Review
- [ ] Have attorney review privacy policy (recommended)
- [ ] Verify terms of service match business practices
- [ ] Confirm payment policy aligns with actual practices

## 🚨 Important Security Notes

### API Keys and Secrets
- ⚠️ **Never commit actual API keys to public repositories**
- ⚠️ **Use environment variables for sensitive data in production**
- ⚠️ **Keep Stripe keys secure and use test keys during development**

### Regular Updates
- [ ] Update Jekyll and gems monthly
- [ ] Monitor third-party service status pages
- [ ] Keep all accounts secured with 2FA

## 📞 Support Resources

### Technical Support
- **Jekyll Documentation:** [jekyllrb.com](https://jekyllrb.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Stripe Documentation:** [stripe.com/docs](https://stripe.com/docs)
- **Formspree Support:** [help.formspree.io](https://help.formspree.io)

### Business Resources
- **Google My Business:** [business.google.com](https://business.google.com)
- **Bing Places:** [www.bingplaces.com](https://www.bingplaces.com)
- **Better Business Bureau:** [bbb.org](https://bbb.org)

---

**Completion Date:** ________________

**Deployed Site URL:** ________________

**Notes:** 
_Use this space for any specific configuration notes or custom modifications made during setup._