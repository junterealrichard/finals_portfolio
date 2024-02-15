@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

:root {
  --primary-color: #a855f7;
  --primary-color-dark: #9333ea;
  --secondary-color: #ca8a04;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --extra-light: #faf5ff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  font-family: "Poppins", sans-serif;
}

nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 99;
}

.nav__content {
  max-width: var(--max-width);
  margin: auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .logo a {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  transition: 0.3s;
}
nav .logo a:hover {
  color: var(--primary-color-dark);
}

nav .checkbox {
  display: none;
}

nav input {
  display: none;
}
nav .checkbox i {
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  transition: left 0.3s;
}

ul li a {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  text-decoration: none;
  font-weight: 600;
  color: var(--text-dark);
  transition: 0.3s;
}

ul li a:hover {
  border-top-color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
  color: var(--secondary-color);
}

.section {
  background-color: var(--extra-light);
}

.section__container {
  min-height: 100vh;
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  letter-spacing: 2px;
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.title span {
  font-weight: 600;
}

.description {
  line-height: 1.5rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.action__btns {
  display: flex;
  gap: 1rem;
}

.action__btns button {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}

.hire__me {
  background-color: var(--primary-color);
  color: #ffffff;
}

.hire__me:hover {
  background-color: var(--primary-color-dark);
}

.portfolio {
  color: var(--primary-color);
}

.portfolio:hover {
  background-color: var(--primary-color-dark);
  color: #ffffff;
}

.image {
  display: grid;
  place-items: center;
}

.image img {
  width: min(25rem, 90%);
  border-radius: 100%;
}

@media (width < 750px) {
  nav .checkbox {
    display: block;
  }

  ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 85px);
    left: -100%;
    top: 85px;
    background-color: var(--extra-light);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  nav #check:checked ~ ul {
    left: 0;
  }

  ul li a {
    font-size: 1.25rem;
  }

  .section__container {
    padding: 10rem 1rem 5rem 1rem;
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }

  .image {
    grid-area: 1/1/2/2;
  }

  .action__btns {
    margin: auto;
  }
}
fonts.googleapis.com
You sent
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    // Load tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Tasks loaded from local storage:', savedTasks);
    savedTasks.forEach(savedTask => {
        const task_el = createTaskElement(savedTask);
        list_el.appendChild(task_el); // Append the task element to #tasks
});

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value;

        if (taskText.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task element and add it to the list
        const task_el = createTaskElement(taskText);
        list_el.appendChild(task_el);

        // Save tasks to local storage
        saveTasksToLocalStorage();

        input.value = '';
    });

    // Event delegation for task actions
    list_el.addEventListener('click', (e) => {
        const target = e.target;
        const task_el = target.closest('.task');

        if (!task_el) return;

        if (target.classList.contains('delete')) {
            // Remove task element from the list
            list_el.removeChild(task_el);
            // Save tasks to local storage after removal
            saveTasksToLocalStorage();
        }
    });

    function createTaskElement(taskText) {
        console.log('Creating task element:', taskText);

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = taskText;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        // Event listener for task editing
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                // Save tasks to local storage after editing
                saveTasksToLocalStorage();
            }
        });

        console.log('Task element created:', task_el);
        return task_el;
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(list_el.children).map(task_el => {
            const task_input_el = task_el.querySelector('.text');
            return task_input_el.value;
        });

        // Save tasks array to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        console.log('Tasks saved to local storage:', tasks);
    }
});
