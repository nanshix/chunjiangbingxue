# Project Blueprint: chunjiangbingxue

This document serves as a comprehensive technical specification for the chunjiangbingxue demonstration website for CHUNJIANG ice and snow theme park. It provides all necessary details for an AI agent to recreate the website from scratch.

## 5. Development Roadmap

### Phase 1: Foundation (Week 1) ✅ COMPLETED
- [x] Create file structure and folders
- [x] Build HTML templates for all pages
- [x] Implement CSS design system
- [x] Create responsive navigation system

### Phase 2: Content & Styling (Week 2) ✅ COMPLETED
- [x] Populate content sections
- [x] Style hero sections with winter theme
- [x] Create photo placeholders in assets/pictures
- [x] Implement footer with social links

### Phase 3: Interactive Features (Week 3) ✅ COMPLETED
- [x] Add JavaScript for smooth scrolling
- [x] Implement parallax effects
- [x] Build image gallery functionality
- [x] Create contact form validation
- [x] Add snow falling effect across all pages
- [x] Integrate 3 SVG activity animations

### Phase 4: Polish & Testing (Week 4) - IN PROGRESS
- [ ] Optimize performance
- [ ] Test all browsers and devices
- [ ] Add loading animations
- [ ] Final content review

### Phase 5: Launch Preparation - PENDING
- [ ] Set up local server for testing
- [ ] Test all booking flows
- [ ] Prepare for image assets
- [ ] Quality assurance checklist

## 1. Project Overview
- **Name:** chunjiangbingxueshijie (春江冰雪乐园)
- **Concept:** A fun, exciting, must-go, kids best love, family friendly ice and snow theme park in shangzhi, harbin
- **Core Functionality:** Multi-page website showcasing the winter wonderland experience
- **Target Audience:** Chinese families, children, winter sports enthusiasts, tourists
- **Language:** Chinese content only (no English version needed)
- **Primary Goal:** Drive park visits and ticket bookings

## Important Notes
- **Language:** All content in Chinese, comments in English
- **Performance:** Fast loading and highly mobile-optimized
- **Deployment:** Push to https://github.com/nanshix/chunjiangbingxueo.git

## 2. Technical Stack
- **Frontend:** Vanilla HTML5, Vanilla CSS3 (Custom Design System), Vanilla JavaScript (ES6+)
- **Data:** Images stored in assets/pictures folder
- **Environment:** Requires a local HTTP server for Fetch API functionality (e.g., Python `http.server`)
- **Layout:** Responsive design with mobile-first approach
- **Interactive Features:**
  - Smooth scrolling navigation
  - Parallax effects on hero sections
  - Image gallery with lightbox
  - Dynamic pricing calculator
  - Contact form validation
  - Snow falling effect on all pages

## 3. Design System (Aesthetics)
- **Style:** Winter wonderland theme with ice blues, cool whites, and crisp whites. Clean, modern, family-friendly design with rounded elements and playful accents
- **Color Palette:**
  - Primary: #E0F2FE (Ice Blue)
  - Secondary: #F0F9FF (Light Sky Blue)
  - Accent: #0EA5E9 (Sky Blue)
  - Text: #1E293B (Dark Slate)
  - Background: #FFFFFF (White)
- **Typography:**
  - Headings: Noto Serif SC (bold, playful)
  - Body: Noto Sans SC (clean, readable)
- **Key UI Elements:**
  - Navigation bar with ice crystal icons
  - Hero banner with parallax effect
  - Feature cards with snowflake borders
  - Photo gallery with hover effects
  - "Book Now" buttons with gradient fills
  - Footer with social icons

## 4. Site Structure (Multi-page Layout)

### File Structure:
```
/
├── index.html              # Main landing page (首页)
├── about.html              # About the park (关于乐园)
├── attractions.html        # Attractions and activities (游乐项目)
├── gallery.html            # Photo gallery (精彩瞬间)
├── tickets.html            # Pricing and booking (门票预订)
├── contact.html            # Contact information (联系我们)
├── ice_park_demo.html      # Reference: snow falling effect demo
├── plan.md                 # This file
├── css/
│   └── style.css          # Main styles with winter theme
├── js/
│   └── main.js             # JavaScript interactions & snow effect
└── activities/
    ├── snowman-making.html         # SVG animation: 雪人制作
    ├── ice-paradise-animation.html # SVG animation: 冰上乐园
    └── snow-tube-slide.html        # SVG animation: 雪圈滑道
```

### Page Structure:
1. **index.html** - Landing Page (首页)
   - Hero section with "春江冰雪乐园" branding
   - Snow falling effect from ice_park_demo.html
   - Quick overview of top attractions (雪人制作, 冰上乐园, 雪圈滑道)
   - Activity preview cards with hover effects
   - Features section (专业场地, 亲子互动, 多样项目, 安全保障)
   - Statistics display (1800平方米冰场, 300米滑道, 20+项目, 50+教练)
   - Call-to-action buttons for booking

2. **about.html** - About The Park (关于乐园)
   - Mission and vision statement
   - Development history (2020-2024 milestones)
   - Facilities overview (冰上乐园, 雪圈滑道, 亲子活动区)
   - Safety guarantees and professional coaches
   - Core values (用心服务, 品质至上, 诚信经营, 绿色环保)

3. **attractions.html** - Attractions & Activities (游乐项目)
   - Tab system for 3 main activities
   - Embedded SVG animations in iframes:
     * 雪人制作 (snowman-making.html)
     * 冰上乐园 (ice-paradise-animation.html)
     * 雪圈滑道 (snow-tube-slide.html)
   - Activity descriptions and highlights
   - Additional activities grid (滑雪, 单板, 雪地摩托, 冰钓, 冰雕, 咖啡厅)

4. **gallery.html** - Photo Gallery (精彩瞬间)
   - Photo grid with placeholder images
   - Lightbox functionality for image viewing
   - Video showcase section
   - Visitor testimonials with star ratings
   - Social media sharing CTA

5. **tickets.html** - Tickets & Pricing (门票预订)
   - Pricing cards: 单人票(¥128), 家庭套票(¥298), VIP通票(¥388)
   - Group booking discounts (10-19人9折, 20-49人85折, 50+人8折)
   - Opening hours schedule
   - Booking policies and FAQs

6. **contact.html** - Contact Information (联系我们)
   - Contact details (地址, 电话, 邮箱)
   - Business hours
   - Transportation guide
   - Interactive contact form
   - Map placeholder
   - FAQ section
   - Social media links

### Global Navigation:
- Sticky header with logo (春江冰雪乐园)
- Main navigation links (首页, 关于乐园, 游乐项目, 精彩瞬间, 门票预订, 联系我们)
- Booking CTA button (立即预订)
- Mobile hamburger menu with responsive design

## 5. Special Features

### Snow Falling Effect
Implemented across all pages based on ice_park_demo.html:
- 40 animated snowflakes with random sizes and speeds
- CSS + JavaScript hybrid approach for smooth performance
- Snowflake symbols: ❄, ❅, ❆, ·, *, •
- Performance optimized with requestAnimationFrame
- Pauses when tab is not visible

### SVG Activity Animations
Three rich SVG animations embedded in activities/ folder:
1. **雪人制作 (snowman-making.html)** - Kids building snowman with particle effects
2. **冰上乐园 (ice-paradise-animation.html)** - Ice skating scene with aurora effects
3. **雪圈滑道 (snow-tube-slide.html)** - Snow tube riding with cheering crowd

Each animation includes:
- Aurora borealis backgrounds
- Twinkling stars
- Animated characters
- Particle effects
- Interactive elements

## 6. Completed Tasks Summary
- ✅ Created complete file structure
- ✅ Built 6 main HTML pages with Chinese content
- ✅ Implemented comprehensive CSS design system with winter theme
- ✅ Added snow falling effect to all pages
- ✅ Created JavaScript for interactivity (navigation, scroll effects, forms)
- ✅ Integrated 3 SVG activity animations in attractions page
- ✅ Implemented responsive design for mobile devices
- ✅ Added contact form with validation
- ✅ Created pricing cards and booking information
- ✅ Added gallery with lightbox functionality
- ✅ Implemented smooth scrolling and parallax effects

## Next Steps
1. Add real images to replace placeholders
2. Implement backend for booking system
3. Add analytics tracking
4. SEO optimization
5. Performance testing across devices
6. Content finalization and proofreading
