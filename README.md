# AI Tools Hub – Task 2

🏠 Home Page 
<img width="1888" height="906" alt="Screenshot 2026-04-01 124333" src="https://github.com/user-attachments/assets/8b57da9a-58e7-4056-89e9-5dbf3f330773" />



A webpage built using Nunjucks (templating engine) and Vite (bundler) as part of the internship Task 2 requirement.

---

## 🛠️ Tech Stack

| Category | Tool |
|---|---|
| Templating Engine | Nunjucks |
| Bundler | Vite |
| Styling | CSS |
| Deployment | Vercel |

---

## 📁 Folder Structure
```
ai-tools-task2/
├── src/
│   ├── templates/        → index.njk
│   └── assets/           → style.css
├── dist/                 → compiled output
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ How to Run
```bash
# Clone the repo
git clone https://github.com/sriharikante/Ai-Tools-Task2

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## ✨ Features

- Nunjucks used for templating instead of plain HTML
- Vite handles build and outputs final HTML to `/dist`
- Clean and simple layout
- Fully deployed on Vercel

---

 🔗 Links

- 🌐 Live: https://ai-tools-task-2.vercel.app/
- 💻 GitHub: https://github.com/sriharikante/Ai-Tools-Task2

---

## ⏱️ Time Taken

Approximately 6–8 hours




**Submission Message**

Hi,

I have completed Task 2 of the internship.

I recreated the Task 1 project as a webpage using Nunjucks for templating and Vite as the bundler.
The final compiled output is available in the /dist folder.

🌐 Live Link: https://ai-tools-task-2.vercel.app/
💻 GitHub: https://github.com/sriharikante/Ai-Tools-Task2

Please let me know if anything needs to be changed.

Thank you!




**Nunjucks + Vite Explanation**

🔧 Nunjucks (Templating Engine)
Instead of writing everything in one plain HTML file, I structured the page
inside a Nunjucks template (index.njk). It keeps the code clean and organized.

⚡ Vite (Bundler)
I added a custom plugin in vite.config.js that renders the Nunjucks template
and writes the final index.html into the /dist folder automatically on build.

📚 What I Learned
This was my first time properly using a templating engine. Fixing the path
issues between Nunjucks and Vite took some time, but once it worked, the whole
build process made a lot of sense to me.
