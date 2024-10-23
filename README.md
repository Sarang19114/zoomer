# Video Call Website using Next.js, Clerk, and Stream
### https://zoomer-sepia.vercel.app

This project is a video call website built using **Next.js**, **Clerk** for user authentication, and **Stream** for video calling functionality.

## Features

- User authentication and management powered by **Clerk**.
- Real-time video call functionality using **Stream**.
- Responsive design and seamless user experience.
  
## Prerequisites

Before starting, ensure you have the following:

1. **Node.js** installed on your machine.
2. An account on [**Clerk**](https://clerk.dev/) for authentication.
3. An account on [**Stream**](https://getstream.io/) for video streaming services.
4. **Tailwind CSS** for styling.

## 1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/video-call-app.git
    cd video-call-app
    cd nextjs-flight-booking-app


2. Set up environment variables

   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api-key
   CLERK_API_KEY=your-clerk-api-key
   NEXT_PUBLIC_STREAM_API_KEY=your-stream-api-key
   STREAM_API_SECRET=your-stream-api-secret


3. Install the dependencies:
   ```bash
   npm install

4. Deployment 
For deploying your Next.js project, use Vercel or any other platform of your choice. Make sure to set the environment variables in your deployment environment as well.
