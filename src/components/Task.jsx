import TaskCreate from "./TaskCreate";
import TaskDate from "./TaskDate";
import TaskName from "./TaskName";
import Card from "./UI/Card";

const Task = () => {
  return (
    <Card>
      <TaskCreate />
      <TaskDate />
      <TaskName />
    </Card>
  );
};

export default Task;
