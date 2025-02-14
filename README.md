# Ticz - Ticketing Web App

## Overview
Tix is a modern and user-friendly ticketing web application that allows users to browse events, purchase tickets, and manage their bookings seamlessly. Built with **Next.js** and **Tailwind CSS**, it ensures a smooth and responsive experience across all devices.

## Features
- **Event Listing:** View and explore available events.
- **Ticket Selection:** Choose from different ticket types (e.g., Free, VIP, VVIP).
- **User Authentication:** Secure login and registration.
- **Profile Management:** Update user details and upload avatars.
- **My Tickets:** View and manage purchased tickets.
- **State Persistence:** Form data is saved using IndexedDB or local storage to prevent loss on page refresh.
- **Accessibility:** Fully keyboard-navigable and screen-reader-friendly.

## Technologies Used
- **Frontend:** Next.js, Tailwind CSS
- **State Management:** useState, useEffect (React Hooks)
- **Storage:** IndexedDB / Local Storage
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/tix.git
   ```
2. Navigate to the project folder:
   ```sh
   cd tix
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
Tix/
│-- public/              # Static assets (SVG, images, icons)
│-- components/          # Reusable components (Header, TicketForm, etc.)
│-- pages/               # Next.js pages (events, my-tickets, etc.)
│-- styles/              # Global styles and Tailwind configurations
│-- utils/               # Helper functions (form validation, local storage handling)
│-- README.md            # Project documentation
```

## How It Works
### 1. Navigation Bar
- Contains links to **Events**, **My Tickets**, and **About Project**.
- Displays a logo (replacing "tix" with a local SVG file).
- The "My Tickets" button directs users to their purchased tickets.

### 2. Ticket Selection Page
- Users can view event details and choose ticket types.
- Number of tickets can be selected.
- Clicking **Next** proceeds to the next step.

### 3. Personal Details Form
- Users enter their **Full Name**, **Email**, and optionally an **Avatar URL**.
- Input fields are validated before submission.
- Data is stored locally to persist across page refreshes.

### 4. Ticket Generation
- Upon successful submission, a **Conference Ticket** is generated.
- Displays the user’s name, email, and avatar.

## Future Enhancements
- Implement real-time ticket availability updates.
- Add payment integration for premium tickets.
- Enable QR code generation for event check-ins.

## Contributors
- **Your Name** ([@yourgithub](https://github.com/yourgithub))

## License
This project is licensed under the **MIT License**.

