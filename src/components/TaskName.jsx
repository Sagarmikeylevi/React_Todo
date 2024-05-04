import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const TaskName = () => {
  const taskList = [];
  return (
    <div className={classes.wrapper}>
      {taskList.length === 0 && (
        <div className={classes.noTasks}>
          <p>No Tasks Found</p>
        </div>
      )}
      <ul className={classes.taskBarList}>
        {taskList.map((task, index) => {
          const isTaskCompleted = task.completedDays.includes(date);

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

              <p
                className={textCondition}
                onClick={() => moveToDetailshandler(task.id)}
              >
                {task.title}
              </p>

              <FaTrash className={classes.delete} />

              <div className={checkBoxCondition}>
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
