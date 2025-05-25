<div align="center">

# 🚀 Aswin's Portfolio - Frontend

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

![Portfolio Banner](https://via.placeholder.com/1200x400/1a1a2e/e94560?text=Aswin's+Portfolio+Frontend)

A modern, responsive React-based frontend for Aswin Hariram's portfolio website. This application features a clean UI with smooth animations, an AI-powered chatbot assistant, and responsive design for all device sizes.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI/UX** | Built with React 18 and styled with SCSS modules |
| 📱 **Responsive Design** | Fully responsive layout that works on all devices |
| 🎭 **Smooth Animations** | Implemented using Framer Motion for buttery smooth transitions |
| 🤖 **AI Chatbot** | Interactive assistant powered by LangChain and OpenAI |
| 📧 **Contact Form** | Secure form with validation and real-time feedback |
| 📝 **Markdown Support** | Renders rich text content with React Markdown |
| 🌓 **Dark/Light Mode** | Built-in theme switcher |
| ⚡ **Optimized Performance** | Code splitting and lazy loading for fast load times |

</div>

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript |
| **Styling** | SCSS Modules, CSS Variables |
| **Animation** | Framer Motion, GSAP |
| **State Management** | React Context API |
| **Routing** | React Router v6 |
| **Form Handling** | React Hook Form |
| **Markdown** | React Markdown |
| **API** | Axios, WebSockets |
| **Testing** | Jest, React Testing Library |
| **Linting** | ESLint, Prettier |

</div>

### Key Dependencies

```json
{
  "@emailjs/browser": "^3.11.0",
  "@gsap/react": "^2.1.2",
  "@headlessui/react": "^2.2.2",
  "framer-motion": "^10.18.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-markdown": "^10.1.0",
  "react-router-dom": "^7.5.3",
  "sass": "^1.68.0"
}
```

## 🔧 Project Structure

```
Frontend/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── chatbot/    # AI assistant implementation
│   │   └── ...         # Other components
│   ├── pages/          # Application pages
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .env                # Environment variables
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration for production
└── package.json        # Dependencies and scripts
```

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository and navigate to the Frontend directory:
   ```bash
   git clone <repository-url>
   cd my-portfolio-2.0/Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file with the following variables:
   ```
   VITE_API_URL=http://localhost:5001
   VITE_CHAT_API_URL=http://localhost:5001/chat
   VITE_CONTACT_URL=http://localhost:5001/contact
   VITE_RESUME_URL=<your-resume-url>
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🐳 Docker

The frontend can be built and run using Docker:

```bash
docker build -t portfolio-frontend .
docker run -p 3000:80 portfolio-frontend
```

## 📚 Key Components

### Chatbot

The AI-powered chatbot assistant (`src/components/chatbot/Chatbot.jsx`) provides an interactive way for visitors to learn about Aswin's skills, projects, and experience. It communicates with the backend API to process questions and display responses.

### Features:
- Real-time messaging interface
- Markdown rendering for formatted responses
- Quick response buttons for common questions
- Mobile-friendly with keyboard adjustments

## 🌐 API Integration

The frontend communicates with the backend API for:

1. **Chatbot functionality**: Sends user messages and receives AI-generated responses
2. **Contact form**: Submits user inquiries with name, email, optional phone number, and message

API endpoints are configured through environment variables for flexibility across different environments.

### Contact Form Integration

The contact form (`src/components/contact/ContactForm.jsx`) provides a user-friendly interface for visitors to send messages. Key features include:

- **Form Validation**: Client-side validation for required fields and email format
- **Status Feedback**: Visual indicators for loading, success, and error states
- **Responsive Design**: Adapts to different screen sizes
- **Animation**: Smooth animations using Framer Motion

#### Contact Form Workflow:

1. User fills out the form with name, email, optional phone number, and message
2. Client-side validation ensures all required fields are filled and email format is valid
3. Form data is sent to the backend API endpoint specified in the environment variable `VITE_CONTACT_URL`
4. Loading state is shown during submission
5. Success or error message is displayed based on the API response
6. Form is reset after successful submission

## 🚢 Deployment

The frontend is configured for deployment on Vercel and is currently hosted at [https://aswin-hariram.vercel.app/](https://aswin-hariram.vercel.app/)

## 📄 License

This project is licensed under the MIT License.
