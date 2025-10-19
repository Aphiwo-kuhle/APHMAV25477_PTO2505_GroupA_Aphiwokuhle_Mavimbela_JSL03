# 🧩 JSL03: Console-Based Task Manager

## 📖 Project Description
The **Console-Based Task Manager** is a lightweight JavaScript program that runs entirely in the browser console. It allows users to manage a simple task list by adding, viewing, and filtering tasks.  
Each task is stored as an object inside an array, ensuring structured and organized data. Users can add up to three new tasks through prompts, each with a unique incremental ID, and filter completed tasks for quick tracking.

This project demonstrates key JavaScript fundamentals such as array manipulation, object creation, input validation, filtering, and user interaction through prompts and alerts.

---

## 🛠️ Technologies Used
- **JavaScript (ES6+)** — Core language for logic and interactivity  
- **HTML (Browser Console)** — To run and display the JavaScript program  
- **Console API** — For structured logging and task display  
- **Browser Dialogs (Prompt, Alert, Confirm)** — For user input and interaction  

---

## ✨ Features
✅ **Task Storage as Objects** – Each task (title, description, and status) is stored as an object in an array.  
✅ **Add Up to 3 New Tasks** – Users can add up to three new tasks to the existing list to avoid overload.  
✅ **Unique Incremental IDs** – Each new task automatically receives a unique ID based on the previous one.  
✅ **Input Validation** – Ensures valid and non-empty entries for title, description, and valid status values (`todo`, `doing`, `done`).  
✅ **Completion Filter** – Displays only tasks marked as `"done"` for easy progress tracking.  
✅ **Alerts and Feedback** – Notifies users when the maximum task limit is reached.  
✅ **Clean Console Output** – Logs all tasks and completed tasks with clear, descriptive labels.  
✅ **Well-Commented and Readable Code** – Includes descriptive variable names and logical structure for easy maintenance.  

---

## ⚙️ Setup Instructions

1. **Open your browser** (e.g., Chrome, Edge, or Firefox).  
2. **Open the Developer Console**  
   - Press `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac).  
3. **Copy and Paste the Full Code** into the console window.  
4. **Press Enter** to run the program.  

---

## 💡 Usage Examples

Once the program starts:
1. You’ll be asked if you want to add a new task (`OK` to continue or `Cancel` to stop).
2. Enter the **Task Title**, **Description**, and **Status** when prompted.  
   - Allowed status values: `todo`, `doing`, or `done`.  
3. After adding up to 3 tasks, you’ll see an alert:
   > “There are enough tasks on your board, please check them in the console.”
4. Check the console for:
   - **All Tasks:** A full list of all tasks.  
   - **Completed Tasks:** Only the tasks marked as `"done"`.  

### Example Output (Console)
```javascript
📋 All Tasks: [
  { id: 1, title: "Study JavaScript", description: "Finish array lesson", status: "done" },
  { id: 2, title: "Clean room", description: "Tidy up and organize desk", status: "doing" },
  { id: 3, title: "Buy groceries", description: "Milk, eggs, bread", status: "todo" }
]

✅ Completed Tasks: [
  { id: 1, title: "Study JavaScript", description: "Finish array lesson", status: "done" }
]


🎮 Interaction Instructions
Click OK to add a new task when prompted.

Click Cancel if you don’t want to add more tasks.

Enter valid text inputs for each prompt — blank inputs will be rejected.

Use the console logs to view all tasks or filter completed ones.

🧠 Developer Notes
This project was designed to:

Reinforce JavaScript fundamentals through practical application.

Demonstrate effective use of arrays, objects, functions, and validation loops.
#mgezi

Encourage clean, readable code and user-friendly console interactions.

👩🏽‍💻 Author
Aphiwokuhle Mavimbela

JavaScript Student | Developer in Progress | Passionate About Clean Code & Learning

