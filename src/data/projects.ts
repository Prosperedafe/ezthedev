export const projects = [
    {
        name: 'Gassit Mobile Application',
        url: '',
        logo: '',
        images: [],
        id: 'gassit-mobile-application',
        position: "001",
        contributions: [
            {
                title: 'Intuitive User Interface:',
                text: 'I designed a clean and easy-to-navigate interface that allows users to browse a variety of gas products and accessories. The interface is optimized for both first-time users and returning customers, with product categories, descriptions, and prices clearly displayed, enabling quick decisions and hassle- free purchasing.'
            },
            {
                title: 'User Registration & Profile Management:',
                text: 'Developed a secure user authentication system that allows users to create and manage their profiles, track order history, and manage delivery addresses. This ensures personalized and streamlined interactions for users.'
            },
            {
                title: 'Secure Payment Integration:',
                text: 'Integrated secure payment gateways to provide multiple payment options such as credit cards, debit cards, and mobile wallets. I implemented encryption protocols to ensure that transactions are safe, giving users confidence in the security of their payments.'
            },
            {
                title: 'Order Tracking & Notifications:',
                text: 'Built a real-time order tracking feature that allows users to follow the status of their gas delivery, from order confirmation to delivery at their doorstep. Implemented push notifications to keep users informed about delivery updates and special promotions.'
            },
            {
                title: 'Performance Optimization:',
                text: 'Optimized the app’s performance to ensure that loading times are minimal, even with a large product catalog. This resulted in a smoother user experience, reduced latency, and faster in-app navigation, particularly for users in areas with slower internet connections.'
            },
            {
                title: 'Scalability & Maintenance:',
                text: 'Ensured the backend architecture could handle increasing numbers of users by optimizing API calls, database queries, and server responses. I also set up a system for ongoing updates and bug fixes, ensuring that the app can evolve based on user feedback and market needs.'
            },
        ],
        stack: [
            {
                title: 'Mobile:',
                text: 'React Native (expo), TypeScript'
            },
            {
                title: 'Notifications',
                text: 'Firebase Cloud Messaging (FCM)'
            },
        ],
        description: 'Developed a feature-rich mobile application using React Native, designed to make it easy for users to order gas and gas-related accessories, such as cylinders, regulators, and hoses, from the convenience of their home. The app aims to simplify the process of ordering and scheduling gas deliveries, providing users with a seamless experience.'
    },
    {
        name: 'Gassit Merchant App',
        url: '',
        logo: '',
        images: [],
        id: 'gassit-merchant-app',
        position: "002",
        contributions: [
            {
                title: 'User-Friendly Merchant Dashboard:',
                text: 'Designed an intuitive and responsive user interface tailored for merchants, enabling them to easily monitor incoming orders, view order histories, and manage their inventory in real-time. The design prioritizes efficiency, ensuring vendors can access key functionalities quickly and process orders with minimal effort.'
            },
            {
                title: 'Order Tracking & Management:',
                text: 'Implemented features allowing merchants to track the status of orders from placement to delivery. I built tools for merchants to update order statuses, ensuring timely deliveries and enhancing customer satisfaction.'
            },
            {
                title: 'QR Code Scanning for Order Verification:',
                text: 'Developed a seamless QR code scanning functionality to facilitate fast and accurate order verification. This feature significantly reduced order processing times and minimized errors in product delivery.'
            },
            {
                title: 'Secure Authentication & Authorization:',
                text: 'Integrated robust authentication mechanisms to ensure that only authorized personnel can access the system. Used modern encryption techniques to secure vendor data and transactions, safeguarding sensitive information.'
            },
            {
                title: 'Analytics & Reporting:',
                text: 'Added a feature that generates sales and transaction reports, giving merchants insights into their business performance and helping them make data-driven decisions.'
            },
        ],
        stack: [
            // {
            //     title: 'Mobile:',
            //     text: 'React Native (expo), TypeScript'
            // },
            // {
            //     title: 'Notifications',
            //     text: 'Firebase Cloud Messaging (FCM)'
            // },
        ],
        description: 'Developed a comprehensive mobile application using React Native to empower gas vendors with tools to efficiently manage and track their orders and transactions. The Gassit Merchant App is designed to streamline the daily operations of vendors, allowing them to track orders, verify deliveries, and manage customer interactions with ease.'
    },
    {
        name: 'Dilusso E-commerce Website',
        url: 'https://dilussostore.shop/',
        logo: '',
        images: [],
        id: 'dilusso-e-commerce-website',
        position: "003",
        contributions: [
            {
                title: 'Product & Category Management:',
                text: 'Designed and implemented endpoints to manage products and their associated categories. This included creating, updating, deleting, and retrieving products with proper validation to ensure data consistency.'
            },
            {
                title: 'User Authentication & Authorization:',
                text: 'Implemented secure user authentication mechanisms using JWT, allowing users to register, log in, and access protected resources. Integrated role-based authorization to manage different levels of access for customers, admins, and staff.'
            },
            {
                title: 'Order Processing:',
                text: 'Developed APIs to handle the entire order lifecycle, from cart management to payment processing and order fulfillment. Ensured that each order is accurately tracked, and users receive timely updates on their order status.'
            },
            {
                title: 'Robust Error Handling:',
                text: 'Implemented comprehensive error handling mechanisms to catch and gracefully respond to potential issues. This ensures a smooth user experience even in case of API failures or incorrect user inputs.'
            },
            {
                title: 'Efficient Data Storage:',
                text: 'Utilized MongoDB for flexible and efficient data storage, optimizing the schema for quick retrieval of product and user data. This led to improved API performance, even with a growing database.'
            },
        ],
        stack: [
            {
                title: 'Backend:',
                text: 'Node.js, Express.js, TypeScript'
            },
            {
                title: 'Database:',
                text: 'MongoDB'
            },
            {
                title: 'Authentication:',
                text: 'JWT'
            },
        ],
        description: 'Created a comprehensive and scalable RESTful API for an e-commerce platform, enabling seamless product management, user authentication, and order processing functionalities. The API serves as the backbone of the e-commerce platform, ensuring smooth communication between the front-end and back-end systems while maintaining high performance and reliability.'
    },
    {
        name: 'Pebbles Signatures',
        url: '',
        logo: '',
        images: [],
        id: 'pebbles-signature',
        contributions: [
            {
                title: 'RESTful APIs for Core Functionalities:',
                text: 'Developed robust APIs to handle user authentication, property listings, booking management, and payment processing. These APIs form the core backbone of the platform, ensuring that users can securely interact with the system.'
            },
            {
                title: 'Property Listings & Advanced Search:',
                text: 'Implemented features that allow users to browse a variety of properties, filter them by location, price, availability, and amenities, making it easy for users to find exactly what they need. The search and filtering capabilities were built to be highly responsive and scalable, even with a growing property database.'
            },
            {
                title: 'Optimized Database Schema:',
                text: 'Designed and optimized MongoDB schemas to efficiently store user, booking, and property data. This resulted in a 30% reduction in query response times, significantly improving the platform’s overall performance.'
            },
            {
                title: 'Payment Integration:',
                text: 'Integrated secure payment gateways, enabling users to pay for bookings seamlessly and ensuring that all transactions are encrypted and secure. Supported various payment options, allowing users to choose their preferred method of payment.'
            },
            {
                title: 'Content Management for Properties:',
                text: 'Developed an interface for property owners to easily upload and manage property details, including images, descriptions, and videos. This ensures that property owners can keep their listings up to date, attracting more potential renters.'
            },
            {
                title: 'Comprehensive Notification System:',
                text: 'Built a robust notification system to keep users and hosts informed about booking confirmations, cancellations, and other critical updates. Notifications were delivered via email, ensuring users are always in the loop.'
            },
        ],
        stack: [
            {
                title: 'Backend:',
                text: 'Node.js, Express.js, TypeScript'
            },
            {
                title: 'Database:',
                text: 'MongoDB'
            },
            {
                title: 'Authentication:',
                text: 'JWT'
            },
        ],
        position: "004",
        description: 'Developed the backend infrastructure for Pebbles Signatures, a property booking platform that allows users to browse and book apartments from anywhere. Using Node.js, Express.js, and MongoDB, I built a scalable, secure, and feature-rich system to support smooth transactions, efficient property searches, and reliable booking management.'
    },
]