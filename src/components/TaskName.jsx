import { useDispatch, useSelector } from "react-redux";
import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";
import { deleteTask, taskChecked } from "../store/taskSlice";

const TaskName = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      {tasks.length === 0 && (
        <div className={classes.noTasks}>
          <p>No Tasks Found</p>
        </div>
      )}
      <ul className={classes.taskBarList}>
        {tasks.map((task) => {
          const isTaskCompleted = task.isCompleted;
          const taskBarCondition = isTaskCompleted
            ? classes.checkedTaskBar
            : classes.uncheckedTaskBar;
          const taskIconCondition = isTaskCompleted
            ? classes.checkedTaskIcon
            : classes.uncheckedTaskIcon;
          const textCondition = isTaskCompleted
            ? classes.checkedText
            : classes.uncheckedText;
          const checkBoxCondition = isTaskCompleted
            ? classes.checkedBox
            : classes.unCheckedBox;
          const isChecked = isTaskCompleted
            ? classes.checked
            : classes.unchecked;

          return (
            <li
              className={`${classes.taskBar} ${taskBarCondition}`}
              key={task.id}
            >
              <div className={`${classes.taskIcon} ${taskIconCondition}`}>
                <img src={task.categoryURL} alt="category icon" />
              </div>

              <p className={textCondition}>{task.title}</p>

              <FaTrash
                className={classes.delete}
                onClick={() => dispatch(deleteTask(task.id))}
              />

              <div
                className={checkBoxCondition}
                onClick={() => dispatch(taskChecked(task.id))}
              >
                <FaCheck className={isChecked} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskName;
