# AI Lab & AI Club Website: Setup and Maintenance Guide

Welcome! This document will guide you through setting up, running, and maintaining the AI Lab & AI Club website. The site is built with modern, industry-standard tools and is designed to be easy to update.

## 1. What You Need Installed
Before you start, make sure you have the following installed on your computer:
- **Git:** Used for downloading and updating the code.
- **Node.js:** The environment that runs our website tools. (Download the "LTS" version from nodejs.org).
- **A Code Editor:** We recommend **Visual Studio Code (VS Code)**.

## 2. Setting Up the Website (First Time)
To get the website code and run it on your computer, follow these steps:

1. **Open your computer's Terminal** (Command Prompt or PowerShell on Windows, Terminal on Mac).
2. **Download the code from GitHub:**
   ```bash
   git clone [YOUR_GITHUB_REPOSITORY_URL]
   cd ai-lab-website
   ```
   *(Replace `[YOUR_GITHUB_REPOSITORY_URL]` with the actual link to the repository).*
3. **Install the required packages:**
   ```bash
   npm install
   ```
4. **Start the local development server:**
   ```bash
   npm run dev
   ```
5. **View the website:** Open your web browser and go to `http://localhost:3000`. Any changes you make to the code will automatically show up here!

## 3. How to Update the Website

### Editing Pages
All the pages for the website live in the `src/app` folder. 
- The homepage is `src/app/page.tsx`.
- Other pages (like Projects, People, etc.) have their own folders. For example, to edit the "About Us" page, you will edit `src/app/about-us/page.tsx`.

### Changing Text and Images
- Text can be edited directly inside the `.tsx` files. Look for normal HTML-like text.
- Images are stored in the `public` folder. If you want to add a new image, drop it into `public/`, and you can use it in the code like this: `<img src="/your-image-name.jpg" />`.

### Changing Colors and Styles
We use a tool called **Tailwind CSS**. It lets us style things directly in the code (e.g., `className="text-iwu-red font-bold"`).
- The official colors (IWU Red, Spirit Red, etc.) are already set up.
- You can find the main color settings in `src/app/globals.css`.

## 4. How to Publish Your Changes (Deploying)

The website is set up as a "Static Site" that lives on Amazon Web Services (AWS S3 + CloudFront).

1. **Save your changes** in your code editor.
2. **Commit and push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Briefly describe the change you made"
   git push origin main
   ```
3. **Automatic Deployment:** The website is set up with GitHub Actions (CI/CD). This means that once you push your code to the `main` branch, GitHub will automatically build and publish the new version of the website for you! You do not need to do anything else.

## 5. Helpful Tips for Future Students
- **Keep it Simple:** Try not to overcomplicate the pages. A clean layout is always better than a messy one.
- **Brand Colors:** Use `bg-iwu-red` for AI Lab things and `bg-iwu-spirit` for AI Club things.
- **Don't Break the Build:** Before you push your code, make sure the website still runs locally (`npm run dev`) and there are no big red errors in your terminal.
- **Learn the Basics:** If you're new to this, search for "Next.js App Router crash course" or "Tailwind CSS basics" on YouTube. They are very popular and easy to learn!
