import { useNavigate, useParams } from "react-router-dom";
import classes from "./CreateTaskForm.module.css";
import Card from "./UI/Card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const CreateTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const { link } = useParams();
  const decodedLink = decodeURIComponent(link);
  const navigate = useNavigate();

  const addTaskHandler = async (event) => {
    event.preventDefault();

    if (taskTitle.trim() === "") {
      setErrorMessage("Task title cannot be empty");
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      categoryURL: decodedLink,
      isCompleted: false,
    };

    dispatch(addTask(newTask));

    navigate("/");
  };

  return (
    <Card className={classes.wrapper}>
      <div className={classes.header}>
        <h1>Hi There!</h1>
        <p>Create a new task for yourself</p>
      </div>

      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="enter new task"
          onChange={(event) => {
            setTaskTitle(event.target.value);
          }}
          value={taskTitle}
        />
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
