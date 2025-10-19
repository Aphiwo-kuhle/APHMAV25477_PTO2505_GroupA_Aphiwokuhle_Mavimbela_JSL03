
/* =========================================================
   JSL03 Project: Console-Based Task Manager
   ---------------------------------------------------------
   ✅ Stores tasks as objects in an array
   ✅ Adds up to 3 new tasks via prompts (title, description, status)
   ✅ Each new task gets a unique, incrementing id
   ✅ Validates inputs (non-empty strings and valid status)
   ✅ Alerts when last allowed task is added
   ✅ Filters and logs only "done" tasks
   ✅ Logs all tasks with clear labels
   ✅ Descriptive names + clear comments
   ========================================================= */

// Step 1: Existing tasks (seed data)
const tasks = [
  { id: 1, title: "Study JavaScript", description: "Finish array lesson", status: "done" },
  { id: 2, title: "Clean room", description: "Tidy up and organize desk", status: "doing" }
];

/* ---------------------------------------------------------
   Helper: Safely prompt for a non-empty string.
   - Returns the trimmed string if valid.
   - Returns null if the user cancels.
   - Continues to prompt until a non-empty value or cancel.
--------------------------------------------------------- */
function promptNonEmpty(message) {
  while (true) {
    const input = prompt(message);
    if (input === null) return null; // user clicked Cancel
    const trimmed = input.trim();
    if (trimmed.length > 0) return trimmed;
    alert("Please enter a non-empty value.");
  }
}

/* ---------------------------------------------------------
   Helper: Prompt for a valid status ("todo" | "doing" | "done").
   - Case-insensitive; stores normalized lower-case value.
   - Returns null if the user cancels.
--------------------------------------------------------- */
function promptValidStatus(message) {
  const allowed = ["todo", "doing", "done"];
  while (true) {
    const input = prompt(message + " (todo / doing / done):");
    if (input === null) return null; // user clicked Cancel
    const value = input.trim().toLowerCase();
    if (allowed.includes(value)) return value;
    alert('Status must be "todo", "doing", or "done". Please try again.');
  }
}

/* ---------------------------------------------------------
   Helper: Compute the next unique incremental id.
   - Uses current max id in `tasks` to stay robust if items change.
--------------------------------------------------------- */
function getNextTaskId() {
  if (tasks.length === 0) return 1;
  const maxId = Math.max.apply(
    null,
    tasks.map(t => Number.isFinite(t.id) ? t.id : 0)
  );
  return maxId + 1;
}

/* ---------------------------------------------------------
   Core: Add up to `maxNew` tasks via prompts.
   - Confirms before each addition.
   - Validates title, description, and status.
   - Alerts when the final allowed task has been added.
   - Logs each added task immediately for clarity.
--------------------------------------------------------- */
function addTasks(maxNew = 3) {
  let addedCount = 0;

  while (addedCount < maxNew) {
    const remaining = maxNew - addedCount;
    const wantsToAdd = confirm(`Do you want to add a new task? (${remaining} remaining)`);
    if (!wantsToAdd) break;

    // Collect inputs with validation; cancel aborts the current task creation.
    const title = promptNonEmpty("Enter task title:");
    if (title === null) {
      alert("Task creation cancelled.");
      continue;
    }

    const description = promptNonEmpty("Enter task description:");
    if (description === null) {
      alert("Task creation cancelled.");
      continue;
    }

    const status = promptValidStatus("Enter task status");
    if (status === null) {
      alert("Task creation cancelled.");
      continue;
    }

    // Create and store new task
    const newTask = {
      id: getNextTaskId(),
      title,
      description,
      status
    };
    tasks.push(newTask);
    addedCount++;

    console.log(`✅ Added task #${newTask.id}:`, newTask);

    // If we just added the last allowed task, alert the user.
    if (addedCount === maxNew) {
      alert("There are enough tasks on your board, please check them in the console.");
      break;
    }
  }

  return addedCount;
}

/* ---------------------------------------------------------
   Utility: Log all tasks with a clear label.
--------------------------------------------------------- */
function showAllTasks() {
  // Use a shallow clone to keep console output tidy/read-only looking
  console.log("📋 All Tasks:", tasks.map(t => ({ ...t })));
}

/* ---------------------------------------------------------
   Utility: Filter and log only completed ("done") tasks.
--------------------------------------------------------- */
function showCompletedTasks() {
  const completed = tasks.filter(t => t.status === "done");
  console.log("✅ Completed Tasks:", completed.map(t => ({ ...t })));
}

/* ---------------------------------------------------------
   Program flow
--------------------------------------------------------- */
addTasks(3);        // Prompt user to add up to 3 tasks
showAllTasks();     // Log full board
showCompletedTasks(); // Log only completed tasks

/* ===================== THE END 😎 ===================== */
let matrix = [
  [1, 2, 3],   // row 0
  [4, 5, 6],   // row 1
  [7, 8, 9]    // row 2
];


console.log(matrix[1][2]);
