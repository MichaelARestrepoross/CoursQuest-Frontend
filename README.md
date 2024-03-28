# CourseQuest

![Alt text](./Assets/coursquest-banner.png)

## Overview

CourseQuest is a web application designed to help users discover and enroll in online courses. Whether you're looking to learn a new skill, advance your career, or explore a hobby, CourseQuest provides an easy-to-use platform for finding the perfect course to fit your needs.

## Transactions Management Backend

[CourseQuest-Backend Link](https://github.com/MichaelARestrepoross/CoursQuest-Backend)

## Frontend Features

- **Course Listings**: Browse a comprehensive list of available courses, including details such as course name, subject, description, instructor, start date, end date, difficulty level, and cost.
- **Search and Filter**: Utilize the search bar and filter functionality to narrow down the list of courses based on specific criteria such as subject, difficulty level, cost, and start date.
- **User Course View**: Users can view the courses they are currently enrolled in from their account page.
- **Enrollment**: Enroll or unenroll in courses directly from the detailed course page, making it easy to access course materials and start learning.
- **Course Details**: View detailed information about each course, including a description, instructor details, start and end dates, difficulty level, cost, and user reviews.
- **Review System**: Read and write reviews for courses, sharing feedback and insights to help other users make informed decisions.
- **Responsive Design**: Enjoy a seamless user experience across various devices and screen sizes, thanks to CourseQuest's responsive design.

## Frontend Technology Stack

- **Frontend**: Developed using React.js, with functional components and hooks for state management and UI interactions.
- **Styling**: Leveraged Tailwind CSS for styling, ensuring a clean and modern user interface.
- **Routing**: Implemented with React Router for navigation between different views and components.
- **HTTP Requests**: Interacts with the backend API to fetch course data, handle user authentication, and manage user reviews.

## Getting Started Locally

To run CourseQuest locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```sh
    git clone <repository-url>
    cd coursequest
    ```

2. **Install NPM packages**

    ```sh
    npm install
    ```

3. **Set up the Backend**

   Ensure that the backend API is running locally. Refer to the [Bank Transactions Management Backend](https://github.com/MichaelARestrepoross/project-budgeting-app-backend) repository for instructions on setting up the backend.

4. **Start the Application**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## User Stories

**Course Listings**
As a user, I want to browse a comprehensive list of available courses, including details such as course name, subject, description, instructor, start date, end date, difficulty level, and cost.

**Search and Filter**
As a user, I want to utilize the search bar and filter functionality to narrow down the list of courses based on specific criteria such as subject, difficulty level, cost, and start date.

**Enrollment**
As a user, I want to enroll in courses directly from the detailed course page, making it easy to access course materials and start learning.

**Leave course from detailed course**
As a user, I want to leave a course from the detailed course page, if I'm already enrolled or not interested anymore.

**Course Details**
As a user, I want to view detailed information about each course, including a description, instructor details, start and end dates, difficulty level, cost, and user reviews.

**Review System**
As a user, I want to read and write reviews for courses, sharing feedback and insights to help other users make informed decisions.

**Responsive Design**
As a user, I expect the application to provide a seamless user experience across various devices and screen sizes.

**View Enrolled Courses**
As a user, I want to see the list of courses I'm currently enrolled in, allowing me to easily track what courses I have signed up for and navigate to more detailed information about each course. This feature enables me to manage my learning journey efficiently and access course information whenever needed.

## Stretch Goals

- **CSS Animations for Views**: Implement CSS animations throughout the application to enhance the user experience and add visual appeal to various views and interactions. Utilizing CSS animations will provide smooth transitions, subtle effects, and engaging visual feedback, contributing to a more dynamic and immersive user interface.
- **Advanced Search Functionality**: Enhance the search functionality with advanced filters, such as sorting by Subject or if the course is free.

- **Tailwind for Styling**: Implement Tailwind CSS for styling the project, ensuring a consistent and modern UI.
