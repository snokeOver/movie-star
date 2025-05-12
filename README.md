# 🎬 **Movie Star** - Movie and Series Rating Portal

**Movie Star** is a full-stack web application designed to let users explore, rate, and review movies and TV series. Admins can manage the media library, approve reviews, and analyze user interactions. The portal allows users to engage with movies/series by rating them, leaving reviews, and adding spoilers. It also supports buying and renting movies/series, with streaming integrations for popular platforms.

## 🚀 **Features**

### 1. **User Roles**

### **User**

- **Register & Login**: Secure registration and login with email/password.
- **Browse Media**: Explore movies/series by genre, platform, release year, or rating.
- **Rate and Review**: Users can rate (1-10) and leave detailed reviews.
- **Manage Reviews**: Add spoilers or tags (e.g., "Family-Friendly") to reviews.
- **Like & Comment**: Like and comment on other users' reviews.
- **Watchlist**: Save movies/series to personal watchlists.
- **Purchase/Rent**: Buy or rent movies/series, view purchase history, and access streaming links.

### **Admin**

- **Media Library Management**: Manage movies/series (add, update, delete titles, manage metadata).
- **Review Management**: Approve, unpublish, or delete reviews.
- **Analytics**: View aggregate ratings, most-reviewed titles, and user activity.
- **Content Moderation**: Remove inappropriate content and manage refunds/access revocations.

### 2. **Core Features**

### **Authentication**

- **JWT-based Authentication**: Secure user login using JWT tokens.
- **Password Reset**: Functionality for password reset.

### **Media Library Management (Admin-Only)**

- Admins can populate and manage the database with movie/series entries, including title, genre, release year, director, cast, streaming platform, and pricing options (buy/rent).

### **Review System**

- Users can review movies/series with a 1-10 rating, written content, and tags (e.g., "underrated," "classic"). Reviews can be flagged with spoilers.
- Admins moderate reviews before they're published.

### **Payment System**

- Integration with **Stripe/PayPal/Razorpay** for movie/series purchases and rentals.
- **DRM Protection** (optional): Time-limited access for rented movies and watermarking for self-hosted streams.

### **Search & Filter**

- Users can search and filter movies/series by title, genre, rating, and platform.
- Sort by **recently added**, **highest-rated**, and **most popular** movies/series.

### **Dashboard & Analytics (Admin-Only)**

- View pending reviews, manage user activity, and see statistics like average ratings per title.

### 3. **Pages**

### **Home Page**

- Displays featured movies/series (admin-curated or highest-rated).
- Quick links to **Top Rated**, **Newly Added**, and **Editor’s Picks**.

### **Movie/Series Details Page**

- Displays detailed info for each title with a rating system, user reviews, streaming link, and purchase/rent options.
- Admins can approve or unpublish reviews.

### **All Movies/Series Page**

- List view of all titles, with filters by **genre**, **rating**, **platform**, etc.
- Sort by **recent**, **top-rated**, or **most-liked**.

### **User Profile Page**

- View/edit user profile, see order history, and manage reviews.

## 🛠️ **Technologies Used**

- **Frontend Framework**: Next.js 15 (SSR & SSG)
- **Backend Framework**: Node.js with Express.js
- **Database**: PostgreSQL via Prisma ORM
- **Authentication**: JWT
- **Payment Integration**: Stripe/PayPal/Razorpay
- **UI**: Tailwind CSS (for responsive, utility-first design)
- **State Management**: React Query for server-side data fetching
- **Deployment**: Vercel (for frontend) & Render (for backend)

````

## 📋 **Pages Overview**

1. **Home Page**:
   - Featured media, search bar, and curated sections like "Top Rated" and "Newly Added".
2. **Movie/Series Details Page**:
   - Displays movie details, user reviews, ratings, and "Buy/Rent" options.
3. **Admin Dashboard**:
   - Manage media, reviews, and access to analytics and reports.
4. **User Dashboard**:
   - View and manage watchlist, order history, and profile.

## 🛑 **Prerequisites**

- **Node.js (v16+)**
- **PostgreSQL**: Database setup for Prisma
- **Stripe/PayPal/Razorpay**: Set up accounts for payment integration.

## 🔧 **Setup**

1. Clone the repository:

   ```bash
   bash
   Copy
   git clone https://github.com/your-username/movie-star.git
   cd movie-star

````

2. Install dependencies:

   ```bash
   bash
   Copy
   npm install

   ```

3. Set up environment variables:

   Create a `.env` file and add the following:

   ```
   ini
   Copy
   DATABASE_URL=your_postgresql_database_url
   NEXT_PUBLIC_BASE_API_URL=http://localhost:3000
   STRIPE_API_KEY=your_stripe_key

   ```

4. Start the application:

   ```bash
   bash
   Copy
   npm run dev

   ```

5. Open the application in your browser:

   ```bash
   bash
   Copy
   http://localhost:3000

   ```

## 🖥️ Deployment

- **Deployed Link**: [Live Demo](https://snoke-stationary-front.vercel.app/)
- **GitHub Repository**: [Movie Star Frontend](https://github.com/snokeOver/movie-star)

---

## 🎥 Video Walkthrough

Watch the frontend walkthrough: [Video Explanation](https://drive.google.com/file/d/1dG14a7-4k8pRw9vOt9HG22iwaUKCfRz9/view)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the **Issues** page or submit a pull request.

---

## 👨‍💻 Author

**Shubhankar Halder**

###### MERN, TypeScript, Next.js, Node.js, Express.js, PostgreSQL, Prisma, MongoDB, Mongoose, React.js | Crafting user-friendly, secure, scalable Web Apps | Passionate about Software Engineering

- **GitHub**: [@snokeOver](https://github.com/snokeOver)
- **LinkedIn**: [Shubhankar Halder](https://www.linkedin.com/in/shubhankar-halder/)
