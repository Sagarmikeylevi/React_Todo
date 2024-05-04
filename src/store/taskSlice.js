import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    initializeTasks: (state) => {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        state.tasks = JSON.parse(storedTasks);
      }
    },
    taskChecked: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) task.isCompleted = !task.isCompleted;
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, initializeTasks, taskChecked, deleteTask } =
  taskSlice.actions;

export default taskSlice;
