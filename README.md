# **Ngaatec Private Limited Website**

Welcome to the official website of **Ngaatec Private Limited**. This project represents a modern redesign of our company’s online presence, offering detailed insights into our services and a platform for clients to reach out effortlessly.

---

## **Table of Contents**

1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
    - [Prerequisites](#prerequisites)  
    - [Installation](#installation)  
5. [Deployment](#deployment)  
6. [Contact](#contact)

---

## **About the Project**

The Ngaatec Private Limited website is a professional platform that showcases the services we provide while offering a user-friendly way for clients to contact us. Built with simplicity and performance in mind, this site ensures a seamless user experience across all devices.

---

## **Features**

- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.  
- **Service Showcase**: Highlights the professional services offered by Ngaatec.  
- **Contact Form**: Allows users to send inquiries via email using a built-in API.  
- **Client Reviews**: Displays dynamic feedback from our Google reviews.  
- **SEO Optimized**: Ensures visibility and accessibility on search engines.

---

## **Tech Stack**

- **Framework**: Next.js (TypeScript)  
- **Styling**: TailwindCSS  
- **Email API**: Custom `sendEmail` function for handling contact form submissions.

---

## **Getting Started**

### **Prerequisites**

To run the project locally, ensure you have the following installed:  
- **Node.js** (v14 or higher)  
- **npm** or **yarn**  

### **Installation**

1. Clone the repository:  
   ```bash
   git clone https://github.com/ngaandasowa/ngaatec-website.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd ngaatec-website
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Set up environment variables:  
   - Create a `.env.local` file in the root directory with the following:
     ```env
     NEXT_PUBLIC_API_URL=your-api-endpoint
     EMAIL_SERVICE=your-email-service
     EMAIL_API_KEY=your-email-api-key
     ```
5. Start the development server:  
   ```bash
   npm run dev
   ```
6. Open your browser and visit `http://localhost:3000`.

---

## **Deployment**

Deploy your project to platforms like **Vercel** or **Netlify** for seamless hosting.  

1. Build for production:  
   ```bash
   npm run build
   ```
2. Deploy via your hosting provider and ensure environment variables are properly configured.

---

## **Contact**

For inquiries, please contact:  

**Ngaatec Private Limited**  
- Website: [https://ngaatec.co.zw](https://ngaatec.co.zw)  
- Email: [hello@ngaatec.co.zw](mailto:hello@ngaatec.co.zw)  
- Phone: +263783827570