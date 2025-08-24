# 🎨 Siddharth Bansal - Portfolio Website

A modern, neubrutalist-styled portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and showcases my projects and skills.

## ✨ Features

### 🎯 **Design & UX**
- **Neubrutalist Design**: Bold, high-contrast design with thick borders and vibrant colors
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Built-in theme support with CSS variables
- **Performance Optimized**: Fast loading with Next.js optimizations

### 📱 **Sections**
- **Hero & About**: Integrated section with personal introduction
- **Skills**: Interactive skills showcase with animations
- **Projects**: Featured projects with custom images and links
- **Contact**: Contact form with social media links
- **Navigation**: Smooth scrolling navigation with active states

### 🚀 **Technical Features**
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Advanced animations and transitions
- **Next.js 15**: Latest Next.js with App Router
- **Responsive Images**: Optimized images for all screen sizes

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### **Styling & Design**
- **Custom CSS Variables** - Theme management
- **Neubrutalist Design System** - Bold, high-contrast design
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout techniques

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/          # Project images
│   └── images/           # General images
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── contact-section.tsx
│   │   ├── integrated-hero-about.tsx
│   │   ├── navigation.tsx
│   │   ├── page-transition.tsx
│   │   ├── projects-section.tsx
│   │   ├── scroll-indicator.tsx
│   │   └── skills-section.tsx
│   └── lib/             # Utility functions
├── tailwind.config.js   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

### **Color Palette**
- **Primary Pink**: `#FF0080` - Main accent color
- **Primary Green**: `#00FF80` - Secondary accent
- **Primary Blue**: `#0080FF` - Tertiary accent
- **Primary Yellow**: `#FFFF00` - Highlight color
- **Background**: `#ffffff` / `#000000` - Theme dependent

### **Typography**
- **Headings**: Bold, uppercase with drop shadows
- **Body Text**: Clean, readable fonts
- **Font Weights**: Black (900) for headings, Bold (700) for emphasis

### **Components**
- **Neubrutalist Cards**: Thick borders, high contrast
- **Animated Buttons**: Hover effects with translations
- **Smooth Transitions**: Consistent animation timing

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain support available

### **Netlify**
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy from Git

### **Other Platforms**
- **Railway**: Supports Next.js out of the box
- **Render**: Free tier available
- **DigitalOcean App Platform**: Scalable hosting

## 🔧 Customization

### **Adding New Projects**
1. Add project data to `projects-section.tsx`
2. Create project image in `public/projects/`
3. Update technologies and links

### **Modifying Colors**
1. Update CSS variables in `globals.css`
2. Modify Tailwind config for custom colors
3. Update component-specific styles

### **Adding New Sections**
1. Create new component in `src/components/`
2. Import and add to main page
3. Update navigation if needed

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Siddharth Bansal**
- GitHub: [@sidd190](https://github.com/sidd190)
- LinkedIn: [Siddharth Bansal](https://www.linkedin.com/in/siddharth-bansal-968531307/)
- X (Twitter): [@Sidd190b](https://x.com/Sidd190b)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Next.js Team** for the amazing framework
- **Lucide** for beautiful icons

---

⭐ **Star this repository if you found it helpful!**
