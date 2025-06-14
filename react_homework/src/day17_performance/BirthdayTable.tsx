import { useMemo, useState } from "react";

export const NAME = "name";
export const AGE = "age";

interface Person {
  name: string;
  birthdate: string;
}
const people: Person[] = [
  {
    name: "John Doe",
    birthdate: "01/15/1990",
  },
  {
    name: "Jane Smith",
    birthdate: "03/22/1985",
  },
  {
    name: "Michael Johnson",
    birthdate: "09/10/1992",
  },
  {
    name: "Emily Williams",
    birthdate: "06/05/1988",
  },
  {
    name: "David Brown",
    birthdate: "12/04/1997",
  },
  {
    name: "Sarah Davis",
    birthdate: "07/19/1991",
  },
  {
    name: "Christopher Wilson",
    birthdate: "11/30/1984",
  },
  {
    name: "Jessica Taylor",
    birthdate: "02/08/1994",
  },
];

const BirthdayTable = () => {
  const [sortBy, setSortBy] = useState("");
  const sortedPeople = useMemo(() => {
    switch (sortBy) {
      case NAME:
        return [...people].sort((a, b) => a.name.localeCompare(b.name));
      case AGE:
        return [...people].sort(
          (a, b) =>
            new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime()
        );
      default:
        return people;
    }
  }, [sortBy]);
  return (
    <div>
      <h2>Birthday Record Table</h2>
      <div>
        Sort By:
        <label>
          <input
            type="radio"
            name="sort"
            value={NAME}
            checked={sortBy === NAME}
            onChange={(e) => setSortBy(e.target.value)}
          />{" "}
          name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value={AGE}
            checked={sortBy === AGE}
            onChange={(e) => setSortBy(e.target.value)}
          />{" "}
          age
        </label>
        <button onClick={() => setSortBy("")}>clear</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Person Name</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {sortedPeople.map((person) => {
              return (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.birthdate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BirthdayTable;
