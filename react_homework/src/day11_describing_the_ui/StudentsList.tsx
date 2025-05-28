import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here
export function StudentsListFn({ students }) {
  return (
    <div>
      Students List Function{" "}
      {students.map((student) => {
        return <StudentFn student={student} />;
      })}
    </div>
  );
}

export class StudentsListClass extends Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        Students List Class{" "}
        {students.map((student) => {
          return <StudentFn student={student} />;
        })}
      </div>
    );
  }
}
