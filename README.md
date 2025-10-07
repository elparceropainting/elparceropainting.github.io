# BCL-ElParcero Painting Website

Professional Jekyll website for BCL-ElParcero Painting, a house painting business serving Atlanta, Georgia.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Professional Layout** - Clean, trustworthy design for service business
- **Online Payments** - Secure Stripe integration for deposits and payments
- **Contact Forms** - Formspree integration for lead generation
- **SEO Optimized** - Search engine friendly structure
- **Legal Compliance** - Complete privacy policy, terms of service, and payment policies
- **Service Area Focus** - Atlanta metro area targeting

## Pages Included

### Main Pages
- **Home** (`/`) - Hero section, services overview, call-to-action
- **Services** (`/services/`) - Detailed service descriptions and pricing
- **Portfolio** (`/portfolio/`) - Before/after gallery (placeholder images)
- **About** (`/about/`) - Company story and team information
- **Service Areas** (`/service-areas/`) - Geographic coverage details
- **Contact** (`/contact/`) - Contact forms and business information
- **Get Quote** (`/get-quote/`) - Detailed quote form with calculator

### Legal Pages
- **Privacy Policy** (`/privacy-policy/`) - GDPR/CCPA compliant privacy policy
- **Terms of Service** (`/terms-of-service/`) - Service terms and conditions
- **Payment Policy** (`/payment-policy/`) - Payment terms and methods

## Setup Instructions

### 1. Third-Party Service Configuration

Before deploying, you need to set up these services:

#### Formspree (Contact Forms)
1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form and get your form ID
3. Update `_config.yml`: Replace `your-formspree-id` with your actual form ID

#### Stripe (Payment Processing)
1. Go to [stripe.com](https://stripe.com) and create an account
2. Get your publishable key from the dashboard
3. Update `_config.yml`: Replace `pk_test_your-stripe-key` with your publishable key
4. Update `assets/js/main.js`: Replace the Stripe key in the JavaScript

#### Google Analytics (Optional)
1. Create a Google Analytics account and property
2. Get your tracking ID (G-XXXXXXXXXX format)
3. Update `_config.yml`: Replace `G-XXXXXXXXXX` with your tracking ID

### 2. Content Customization

#### Business Information
Update `_config.yml` with your actual business details:
- Phone number
- Email address
- Service areas
- Business address

#### Contact Information
Update contact details throughout the site:
- Phone numbers in all pages
- Email addresses
- Business hours
- Service area descriptions

#### Images
Replace placeholder images with actual photos:
- Portfolio images in `/portfolio/`
- Add your logo to `/assets/images/`
- Update image references in content

### 3. Deployment

#### GitHub Pages Deployment
1. Push all files to your GitHub repository
2. Go to repository Settings > Pages
3. Select source: Deploy from a branch
4. Select branch: `main` (or `master`)
5. Site will be available at: `https://yourusername.github.io/repository-name`

#### Custom Domain (Optional)
1. Purchase domain and configure DNS
2. Add CNAME file with your domain name
3. Configure GitHub Pages custom domain
4. Update `_config.yml` url field

### 4. Testing

Test all functionality:
- [ ] Contact forms submit properly
- [ ] Payment integration works (use Stripe test mode)
- [ ] All pages load correctly
- [ ] Mobile responsiveness
- [ ] Form validation
- [ ] Link functionality

## File Structure

```
├── _config.yml                 # Site configuration
├── Gemfile                     # Ruby dependencies
├── index.html                  # Homepage
├── _layouts/
│   ├── default.html           # Main layout template
│   └── page.html              # Page layout template
├── _includes/
│   ├── header.html            # Site header/navigation
│   └── footer.html            # Site footer
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── main.js            # JavaScript functionality
├── *.md                       # All page content files
└── README.md                  # This file
```

## Customization Tips

### Colors and Branding
- Edit CSS variables in `assets/css/style.css`
- Update color scheme in `:root` section
- Add your logo to header include

### Content Updates
- All pages are in Markdown format
- Easy to edit without HTML knowledge
- Regular content updates improve SEO

### Adding Services
- Update services list in `_config.yml`
- Add service details to `services.md`
- Create dedicated service pages if needed

## Maintenance

### Regular Updates
- Keep Jekyll and gems updated
- Review and update legal pages annually
- Update portfolio with new work
- Monitor and respond to contact forms

### Security
- Keep third-party service integrations updated
- Monitor for any security advisories
- Use strong passwords for all service accounts
- Enable two-factor authentication where available

## Support

For technical issues with the website:
1. Check GitHub Pages build status
2. Verify third-party service configurations
3. Test in incognito/private browsing mode
4. Check browser console for JavaScript errors

## Legal Compliance

This site includes:
- GDPR-compliant privacy policy
- CCPA-compliant privacy rights
- Comprehensive terms of service
- Clear payment policies
- Third-party service disclosures

**Note:** While the legal pages are comprehensive, consider having them reviewed by a qualified attorney for your specific business needs.

## License

This website template is created for BCL-ElParcero Painting. Modify as needed for your business use.