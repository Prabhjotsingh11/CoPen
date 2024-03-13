# Copen

Welcome to Copen! Copen is a collaborative writing and editing platform that allows multiple users to create and edit content together in real-time.

it is now only a minimum working model.

## Features

- **Collaborative Editing**: Multiple users can simultaneously write and edit content, with changes reflected in real-time.
- **User Authentication**: Secure user authentication system to manage user accounts and permissions.
- **Version History**: Keeps track of the version history of documents, allowing users to revert to previous versions if needed.
- **Rich Text Editing**: Provides a rich text editor with formatting options for creating visually appealing content.
- **Comments and Suggestions**: Allows users to leave comments and suggestions on the document for collaboration and feedback.
- **Notifications**: Sends notifications to users about changes made to the document and mentions.
- **Search and Filter**: Enables users to search for specific content within documents and filter documents based on various criteria.
- **Export Options**: Provides options to export documents in different formats such as PDF, DOCX, or HTML.

## Getting Started

To run Copen locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/KushalGoyal09/CoPen.git
   ```

2. **Install dependencies**:
   ```
   cd CoPen
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and configure environment variables such as database connection details, authentication secret, etc.

4. **Start the development server**:
   ```
   npm start
   ```

5. **Access the application**:
   - Open your web browser and navigate to `http://localhost:3000` to access Copen.

## Tech Stack

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - Redux: State management library for managing application state.
  - Quill.js: Rich text editor for text editing capabilities.
  - WebSocket: Enables real-time communication between clients and server.
- **Backend**:
  - Node.js: JavaScript runtime for building server-side applications.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing documents and user data.
  - Socket.io: Library for real-time, bidirectional communication.
- **Authentication**:
  - JWT (JSON Web Tokens): Token-based authentication mechanism for secure user authentication.
