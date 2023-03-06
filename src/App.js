import React, { useState } from "react";
import "./index.css";
import Footer from "./components/FooterList/Footer";
import Header from "./components/HeaderList/Header";
import Section from "./components/SectionList/Section";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Anton", lastName: "She", age: 27, id: 1 },
    { name: "Bayish", lastName: "Bayish", age: 15, id: 2 },
    { name: "Aygerim", lastName: "Burkanbekova", age: 19, id: 3 },
    { name: "Jazmira", lastName: "Kim", age: 18, id: 4 },
    { name: "Cholpon", lastName: "Karaeva", age: 18, id: 5 },
    { name: "Rick", lastName: "Sanchez", age: 80, id: 6 },
    { name: "John", lastName: "Snow", age: 29, id: 7 },
  ]);
  console.log(users);
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
