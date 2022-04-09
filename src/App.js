import React, { useMemo, useState } from "react";
import "./styles/index.scss";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "unit",
    price: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    setTableData((prevTableData) => {
      return [...prevTableData, formData];
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Tytuł",
        accessor: "title",
      },
      {
        Header: "Opis",
        accessor: "description",
      },
      {
        Header: "Kategoria",
        accessor: "category",
      },
      {
        Header: "Cena",
        accessor: "price",
      },
      {
        Header: "Usuń",
        accessor: () => {
          return <button>Usuń</button>;
        },
      },
    ],
    []
  );

  return (
    <div className="container">
      <div className="addForm">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      <div className="tableWrapper">
        <Table data={tableData} columns={columns} />
      </div>
    </div>
  );
}

export default App;
