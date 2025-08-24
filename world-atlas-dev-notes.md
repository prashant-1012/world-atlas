
# 🌐 Project: World Atlas
Tech Stack: React JS + Tailwind CSS + React Router DOM

---

## ✅ 1. Routing Setup (App.jsx)

- Used `createBrowserRouter()` to define all routes
- Used `RouterProvider` to enable routing in the app
- Used `errorElement` to handle unknown/invalid routes gracefully

📌 Important:
```jsx
<RouterProvider router={router} />
```
wraps the whole app and activates routing config.

---

## ✅ 2. Nested Routing & Layout (AppLayout.jsx)

- Used a parent layout (`AppLayout`) to wrap all pages
- Layout includes common UI: `<Header />`, `<Footer />`
- `<Outlet />` = placeholder where route content will load dynamically

📌 Example:
```jsx
<Header />
<Outlet />  // Home, About, Contact etc. load here
<Footer />
```

---

## ✅ 3. Navigation (Header.jsx)

- Used `<NavLink>` to navigate between routes without page reload
- `to="/about"` = tells React Router which path to load
- NavLink automatically adds “active” class styling support

🧠 Tip: Use `NavLink` over `Link` if you want to highlight active tab.

---

## ✅ 4. Error Handling (ErrorPage.jsx)

- Created a fallback page using `errorElement`
- If a user enters an invalid URL (like `/random`), `<ErrorPage />` will be shown
- Improves UX and prevents app crashes

📌 Sample:
```jsx
errorElement: <ErrorPage />
```

---

## 📁 Suggested Folder Structure (So Far)

```
src/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Country.jsx
│   └── Contact.jsx
│
├── UI/
│   ├── Header.jsx
│   └── Footer.jsx
│
├── components.jsx/layout/
│   └── AppLayout.jsx
│
├── App.jsx
└── index.css
```

---

✅ Keep revising weekly by:
- Re-reading this file
- Rewriting one route from scratch
- Explaining `<Outlet />` concept to yourself
