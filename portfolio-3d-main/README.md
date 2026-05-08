# 🚀 3D Animated Portfolio - Frontend Showcase

A visually immersive and interactive **personal portfolio website frontend**, designed to showcase projects and skills through a dynamic 3D experience. This project leverages advanced animation libraries to create an engaging user journey.

---

## 🔗 Links
- 🌐 **Live Demo:** [your-live-demo-url.com](https://yash-chauhan.vercel.app)]
- 👨‍💻 **Author's Portfolio:** [yash-chauhan.vercel.app](https://yash-chauhan.vercel.app )

---

## ⚙️ Core Technologies & Libraries
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **GSAP (GreenSock Animation Platform):** The core engine for all high-performance animations.
- **ScrollTrigger:** A GSAP plugin used to create scroll-based animations and interactions.
- **Three.js / Spline / or other 3D library:** The library used to render and manipulate the 3D models.

---

## ✨ Key Features
- 🎞️ **Scroll-Based 3D Animations:** As the user scrolls, 3D models and scenes animate, creating a cinematic storytelling experience.
- 🎭 **Complex Animation Timelines:** Utilizes GSAP to orchestrate intricate sequences and interactions with precision.
- 📱 **Responsive & Performant:** Carefully optimized to ensure smooth animations and a consistent experience across various devices and screen sizes.
- 🎨 **Modern UI/UX:** A clean and intuitive interface that complements the sophisticated 3D visuals.

---

## 🎯 Project Goal
The primary goal of this project was to master and implement advanced frontend animation techniques using **GSAP and ScrollTrigger**. It serves as a powerful demonstration of how to integrate complex 3D elements and scroll-based storytelling into a modern web experience.

---

## ⚠️ Asset Disclaimer
Please note that the 3D models used in this project were **purchased from a third-party marketplace**. The focus of this work was on the frontend development, animation, and integration of these assets, not on 3D modeling itself.

---

## ⚡ Performance (LCTech build)
- **Staged loading:** Room, lab, and character assets load first; the **contact 3D block** (GLBs + textures) loads in the background so the first screen becomes interactive sooner.
- **GPU:** Pixel ratio capped at **1.25**, **no MSAA** on the WebGL canvas, **anisotropy** capped at **4**, `powerPreference: high-performance`.
- **Audio:** Howler **preloads** only sounds needed for the first interactions; others load on first play.
- **HTML:** Font Awesome CSS loads **non-blocking**; project images use **`loading="lazy"`** where applicable.
- **Hosting:** `netlify.toml` sets long **Cache-Control** for static folders.

**Further shrink payload (optional):** Re-export GLBs with [gltf-transform](https://gltftools.com/) (meshopt/draco), compress baked JPGs/WebP (e.g. Squoosh), and trim unused project images.

---

## 👨‍💻 Author
**Yash Chauhan**
- GitHub: [@yashchauhan008](https://github.com/Yashchauhan008 )
- LinkedIn: [yashchauhan](https://www.linkedin.com/in/yashchauhan008 )

---
