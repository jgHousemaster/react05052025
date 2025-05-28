/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react";

// implement a Student component here

export interface StudentType {}

export function StudentFn({student}) {
  return (<div data-testid="student">Student Function {"id: " + student.id}
  {" name: " + student.name}
  {" age: " + student.age}
  {" grade: " + student.grade}</div>);
}

export class StudentClass extends Component {
  render() {
    const {student} = this.props;
    return <div data-testid="student">Student Class {"id: " + student.id}
  {" name: " + student.name}
  {" age: " + student.age}
  {" grade: " + student.grade}</div>;
  }
}
