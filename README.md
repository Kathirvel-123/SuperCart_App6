# SuperCart – React Shopping Cart Application

SuperCart is a modern and responsive shopping cart application built using **React**, **Vite**, **Tailwind CSS**, and **Context API** for global state management.  
The app fetches products from the **FakeStore API**, supports cart manipulation, and displays a full price summary with automatic **USD → INR conversion**.

---

##  Features

### ✅ Core Functionalities
- Fetch products from FakeStore API  
- Add items to cart  
- Remove items  
- Increase / Decrease quantity  
- Automatic **price conversion (USD → INR)**  
- Clean card-based UI  
- Fully responsive
- Global cart state using Context API  
- Navigation using React Router  

---

##  Project Structure
```bash
SUPERCART/
│── node_modules/
│── public/
│ └── vite.svg
│
│── src/
│ ├── assets/
│ ├── Components/
│ │ ├── CartItem.jsx
│ │ └── ProductCard.jsx
│ │
│ ├── Pages/
│ │ ├── CartPage.jsx
│ │ └── ProductsPage.jsx
│ │
│ ├── App.css
│ ├── App.jsx
│ ├── CartContext.jsx
│ └── main.jsx
│
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

##  Tech Stack

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| **React**         | UI Development               |
| **Vite**          | Fast bundler & dev server    |
| **Tailwind CSS**  | Styling & responsive design  |
| **Context API**   | Cart global state management |
| **React Router**  | Page navigation              |
| **FakeStore API** | Fetching product data        |



##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Kathirvel-123/SuperCart_App6.git
cd supercart
```
### 2. Install dependencies
```bash 
npm install
```
### 3. Run the development server
```bash
npm run dev
```

### 4. Your app will start at:
``` bash
 http://localhost:5173/
```
## Important Files Explained
### 🔹 CartContext.jsx

### This file manages all cart logic:

- Add items

-  Remove items

-  Update item quantity

-  Store cart data globally

-  Calculate total price

-  Apply 10% discount

-  Easy access across components


### 💱 Price Conversion (USD → INR)

The FakeStore API returns product prices in USD.
This project converts them to INR using:
```bash 
const usdToInr = (usd) => `₹${(usd * 83).toLocaleString("en-IN")}`;
```
