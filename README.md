# 🚀 Omkar Patil - Portfolio Website  

This is my **personal portfolio website** built with **React.js** and **Bootstrap**. It showcases my skills, projects, resume, and contact details in an interactive and responsive manner.  

## 🔗 Live Demo  
[View Live Website](https://67a22bf74c98dd03d5c131d9--symphonious-tartufo-8753c9.netlify.app/)  

---

## 🛠️ Technologies Used  
- **Frontend:** React.js, Bootstrap  
- **Backend:** None (Static Portfolio)  
- **Deployment:** GitHub Pages / Netlify / Vercel *(Update based on your deployment)*  
- **Testing:** Jest, React Testing Library  

---

## 📌 Features  
✔️ **Fully Responsive Design** – Works on all devices 📱💻  
✔️ **Dynamic Project Showcase** – Displays my GitHub projects with links  
✔️ **Downloadable Resume** – Easy access to my latest resume  
✔️ **Contact Form** – Users can reach out to me directly via email  
✔️ **Smooth Navigation** – Built with Bootstrap’s navbar for easy navigation  
✔️ **Unit Testing** – Ensures robustness with at least 80% test coverage  

---

## 📂 Project Structure  
```
📦 portfolio-website
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📜 Header.jsx
┃ ┃ ┣ 📜 About.jsx
┃ ┃ ┣ 📜 Projects.jsx
┃ ┃ ┣ 📜 Skills.jsx
┃ ┃ ┣ 📜 Resume.jsx
┃ ┃ ┣ 📜 Contact.jsx
┃ ┃ ┗ 📜 Footer.jsx
┃ ┣ 📂 tests
┃ ┃ ┣ 📜 Projects.test.js
┃ ┃ ┣ 📜 Contact.test.js
┃ ┣ 📜 App.jsx
┃ ┗ 📜 index.js
┣ 📂 public
┃ ┗ 📜 OmkarPatil_Resume.pdf
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 .git
```

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Omkar-07/Portfolio.git
cd Portfolio
npm install
npm run dev
```

---

## 🧪 Running Tests  

### 1️⃣ Install Jest and React Testing Library  
```sh
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

### 2️⃣ Run Tests  
```sh
npm test
```

### 3️⃣ Ensure 80% Test Coverage  
Add this to `package.json`:
```json
"jest": {
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "testEnvironment": "jest-environment-jsdom",
  "collectCoverage": true,
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

---

## 🌟 Contributing  
Feel free to fork this repo, improve the project, and submit a pull request! 🎉

---

## 📜 License  
This project is **MIT licensed**.  

---

⭐ **If you like this project, give it a star on GitHub!** ⭐

