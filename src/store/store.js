import { configureStore } from "@reduxjs/toolkit";
import taskSlice, { initializeTasks } from "./taskSlice";

export const store = configureStore({
  reducer: { tasks: taskSlice.reducer },
});

store.dispatch(initializeTasks());
