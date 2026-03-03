# Week-7

📌 Project Title NeuroStack Task Management System

👥 Team Members Ashelyclixon

Divya Gattigolla

📚 Project Overview This project is a Task Management System Prototype developed as part of Week 7 deliverables.

The application allows users to: -Create tasks -Assign tasks to team members -Track task progress -Manage deadlines -Add comments for collaboration -Set task priority (High, Medium, Low)

This simulates a real-world project management tool used in team environments.

🛠️ Technologies Used 🔹 Frontend HTML CSS EJS (Embedded JavaScript Templates)

🔹 Backend Node.js Express.js

🔹 Database MongoDB Atlas (Cloud Database)

⚙️ Installation & Setup

🟢 Step 1: Clone / Download Project git clone https://github.com/Divyashyam228/Week-7
cd WEEK-7

🟢 Step 2: Install Node Modules Make sure Node.js is installed. Then run:

npm install This will create the node_modules folder and install all dependencies.

🟢 Step 3: Configure MongoDB Atlas Open app.js and update the MongoDB connection:

mongoose.connect("mongodb+srv://:@cluster0.xxxxx.mongodb.net/taskDB") 🔑 Replace:

→ your MongoDB Atlas username

→ your password

🟢 Step 4: Allow Network Access (IMPORTANT) In MongoDB Atlas:

Go to Network Access

Add IP: 0.0.0.0/0 or click current ip tab.

🟢 Step 5: Run the Application node app.js

🌐 Step 6: Open in Browser http://localhost:3000

🚀 Features Implemented ✅ Task Creation ✅ Task Editing & Deletion ✅ Task Assignment ✅ Status Tracking (To Do, In Progress, Completed) ✅ Deadline Management ✅ Priority Levels with Color Indicators ✅ Comments for Basic Team Communication ✅ Clean and Responsive UI

🤝 Collaboration Feature A comments field is implemented for each task, allowing team members to: -Add updates -Share notes -Communicate task-related information -This provides a basic level of collaboration within the system.

🎯 Outcome This project demonstrates: -Full-stack development using Node.js and MongoDB -Implementation of CRUD operations -Real-world task management workflow -UI/UX improvements for better usability

📌 Note This is a prototype system designed to demonstrate core concepts of: -Task tracking -Team collaboration -System design for project management
