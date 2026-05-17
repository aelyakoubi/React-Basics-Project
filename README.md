# Recipe App — React Basics Project

A responsive recipe browsing app built with React, Vite, and Chakra UI.
Features Auth0 authentication, protected routes, a contact form via EmailJS, and dark/light mode support.

---

## Live Demo

- [Visit the Application](https://react-basics-project-a.netlify.app/)

---

## Tech Stack

- React 18
- Vite
- React Router DOM
- Chakra UI (component-based styling, no custom CSS)
- Auth0 (authentication)
- EmailJS (contact form)
- Framer Motion (animations)
- React Icons
- ESLint + Prettier

---

## Features

- Browse and search recipes
- Filter recipes by health labels and diet labels
- Protected routes — contact page and recipe detail require login
- Auth0 login/logout
- Contact form powered by EmailJS
- Light/dark mode support via Chakra UI
- Fully responsive layout

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aelyakoubi/React-Basics-Project.git
cd React-Basics-Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_AUTH0_DOMAIN=your_auth0_domain_here
VITE_AUTH0_CLIENT_ID=your_auth0_client_id_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

### 4. Start the development server

```bash
npm run dev
```

App runs on `http://localhost:5173`

### 5. Build for production

```bash
npm run build
```

---

## Pages & Routes

| Route                 | Page             | Access    |
| --------------------- | ---------------- | --------- |
| `/`                   | Recipes overview | Public    |
| `/about`              | About            | Public    |
| `/login`              | Login            | Public    |
| `/terms`              | Terms            | Public    |
| `/privacy`            | Privacy          | Public    |
| `/contact`            | Contact form     | Protected |
| `/recipe-choice-page` | Recipe detail    | Protected |

---

## Project Structure

```
├── src/
│   ├── assets/
│   │   └── recipe-images/         # Recipe images
│   ├── auth/
│   │   └── auth0-config.js        # Auth0 configuration
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   └── TextInput.jsx
│   │   ├── ContacForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LogoutButton.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── RecipeChoice.jsx
│   │   ├── RecipeItem.jsx
│   │   ├── RecipeItems.jsx
│   │   ├── RecipeSearch.jsx
│   │   ├── SocialIcons.jsx
│   │   └── Welcome.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Privacy.jsx
│   │   ├── RecipeChoicePage.jsx
│   │   ├── RecipesPage.jsx
│   │   └── Terms.jsx
│   ├── utils/
│   │   └── data.js                # Recipe data
│   ├── App.jsx
│   ├── Layout.jsx
│   └── main.jsx
├── public/
│   └── recipe-images/             # Public recipe images
├── Auth0ProviderWrapper.jsx        # Auth0 provider setup
├── routes.jsx                     # Route configuration
├── index.html
├── vite.config.js
├── .eslintrc.json
├── .prettierrc
└── package.json
```

---

## Screenshots

![Screenshot 1](https://github.com/user-attachments/assets/86a5a7d8-dcc9-41c4-bc96-d291b5bb6c29)
![Screenshot 2](https://github.com/user-attachments/assets/a4d225ec-49fe-4acf-8f1e-6865ff5cc0d1)
![Screenshot 3](https://github.com/user-attachments/assets/daa8a371-5519-4b04-892d-5f8bae4118c1)
![Screenshot 4](https://github.com/user-attachments/assets/2845580b-c2ac-4a06-9a48-8de0f6f7cee8)
![Screenshot 5](https://github.com/user-attachments/assets/6e6b0a6e-7a21-4da8-a01d-ba88b38c3ead)
