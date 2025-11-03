# Wheel of Fortune

This project is an **interactive web application** that simulates a **Wheel of Fortune game**, where users spin a colorful wheel to win random prizes. It’s designed to be **fun, responsive, and visually engaging** — perfect for learning JavaScript animations and DOM manipulation.

---

## Live Demo

You can view the live version of the project here:  
[Live Demo Link](https://shorookkhaled559.github.io/Wheel-of-Fortune)

---

## Features

- **Interactive Spinning Wheel** — Randomly rotates with smooth animation.  
- **Realistic Pointer & Rotation** — Visual arrow to indicate the winning segment.  
- **Dynamic Prize System** — 24 customizable rewards (cash, gifts, wilds, etc.).  
- **Animated Modal Result** — Displays the prize after the spin ends.  
- **Responsive Layout** — Fully responsive with Tailwind CSS for all screen sizes.  
- **Easy Customization** — Modify prizes, speed, or animation time easily.

---

## Technologies Used

- **HTML5** — Page structure and content.  
- **CSS3 & Tailwind CSS** — Styling, layout, responsiveness, and transitions.  
- **JavaScript (ES6)** — Rotation logic, prize calculation, and modal interactivity.

---

## Project Structure

```
Wheel-of-Fortune/
│
├── img/
│   └── wheel-of-fortune-round-2-removebg-preview.png
│
├── css/
│   └── style.css
│
├── js/
│   └── index.js
│
└── index.html
```

---

## How It Works

1. When the **“Spin”** button is clicked, JavaScript generates a random rotation degree.  
2. The wheel spins using CSS `transform` and slows down smoothly.  
3. After rotation ends, the script calculates the **final position** using the remaining degrees.  
4. Based on that angle, the script determines which **prize section** the arrow points to.  
5. A modal appears showing the winning prize.

---

## Getting Started

1. **Clone or download** this repository.  
2. Make sure the image `wheel-of-fortune-round-2-removebg-preview.png` is inside the `img/` folder.  
3. Open `index.html` in your browser.  
4. Click the **Spin** button to try your luck!

---

## Folder Details

| File / Folder | Description |
|----------------|-------------|
| `index.html` | Main structure and layout |
| `css/style.css` | Styles and background design |
| `js/index.js` | Handles rotation logic and modal display |
| `img/` | Contains the spinning wheel image |

---

## Future Improvements

- Add **sound effects** for spinning and winning.  
- Display **spin history** or total score.  
- Include a **“Free Spin”** or **“Try Again”** feature.  
- Add **confetti animation** for big prizes.

---

## License

This project is **open-source** and free to use, modify, or share for educational and fun purposes.  
Developed by **Shorouk Khaled**.

