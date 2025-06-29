# Terminal ui

Administrative panel interface for viewing, filtration, sorting and updating the statuses of payment terminals. The project is designed with the scalability, localization and convenient architecture based on **REACT + Redux Toolkit + typescript + vite **.

## 🔧 technology

- **React** (component approach, hooks)
- **Redux Toolkit** (Status, Filtering, Pagination)
- **TypeScript** (strict typing)
- **Vite** (Fast Dev server and Bild)
- **SCSS Modules** (isolated style)
- **i18next** (Multilingual Support)
- **Custom SVG Icons** (Cateptory Iconographic)
- **Parcel cache / .prettierrc / eslint.config** -to maintain code quality

## 📁 The structure of the project

├─ PUBLIC/# static resources
├── SRC/
│ ├─ ticket/# Redux Store, Hugs, Pagination
│ ├\ API/# API-QUES (OPTION)
│ ├─ option assets/# images, flagi
│ ├\ FONTS/# fonts
│ ├─ FEATures/terminal/# terminal slice (Redux Logic)
│ ├\ Pages/terminalpage/# Home page with terminals
│ │ ├\ components/# page components
│ ├лння Shared/# Universal Components (Dropdown, icons)
│ ├─ tices/# Types for terminals and sorting
│ ├─ utils/# SCSS MIXINS, Variable, Util
│ ├\ I18.TS # Localization Configuration
│ ├─ App.TSX # root component
│ ├─ mill
│ └─ gllobal.d.ts # global ads
├─ .prettierrc
├─ flow eslint.config.mjs
├─ind vite.config.ts
├─ Deploy.yml # CI/CD or deplocy configuration

## 🧩 The main opportunities
-Display Terminals in the Form of Cards
-Sorting by name or Status
-Search for A Branch
-Pagination of Results
-Currency Change (CZK /EUR)
-Interactive Buttons and Custom Graphics
-Multi -speaking (CZ, SK, Eng)

## 🚀 Launch the project

```bash
npm install      # Establishment of dependencies
npm run dev      # Launching a girl-server (Vite)
npm run build    # Collection of Bild