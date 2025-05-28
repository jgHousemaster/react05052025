import { StudentFn, StudentClass } from "../Student";
import { StudentsListFn, StudentsListClass } from "../StudentsList";
import UrgentTasks from "../UrgentTasks";
import {TaskType} from "../UrgentTasks"

export default function Day11Notes() {
  const student = {id: 1, name: "Bob", age: 25, grade: "A"};
  const students = [
      {
        id: 1,
        name: "John",
        age: 20,
        grade: "A",
      },
      {
        id: 2,
        name: "Jane",
        age: 21,
        grade: "B",
      },
      {
        id: 3,
        name: "Jack",
        age: 22,
        grade: "C",
      },
    ];
    const tasks: TaskType[] = [
          { id: 1, name: "Take out the trash", priority: "normal" },
          { id: 2, name: "Prepare project presentation", priority: "urgent" },
          { id: 3, name: "Book flight tickets", priority: "urgent" },
          { id: 4, name: "Water the plants", priority: "normal" },
          { id: 5, name: "Complete React tutorial", priority: "urgent" },
        ];


  return (
    <div>
      <h1>Day 11 Notes</h1>
      {/* This is your play around code */}
      <StudentFn student={student}/>
      <StudentClass student={student}/>
      <StudentsListFn students = {students} />
      <StudentsListClass students = {students} />
      <UrgentTasks tasks={tasks} />
    </div>
  );
}
