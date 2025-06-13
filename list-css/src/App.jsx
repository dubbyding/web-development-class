import "./App.css";

import AppCSS from "./App.module.css";

import Test from "./Test";

function App() {
  const users = [
    {
      id: 1,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 2,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 3,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 4,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 5,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 6,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 7,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 8,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 9,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
    {
      id: 10,
      firstName: "Ram",
      age: 20,
      profession: "Student",
    },
  ];

  const data = users.map((value) => {
    return (
      <div key={value.id}>
        <p
          className={
            "text-[orange] hover:text-[red] transition-all duration-1000 ease-linear"
          }
       > 
          {value.firstName}
        </p>
        <p>{value.age}</p>
        <p>{value.profession}</p>
      </div>
    );
  });

  return (
    <div>
      <div>{data}</div>
      <Test />
    </div>
  );
}

export default App;
