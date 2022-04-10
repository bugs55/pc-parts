import React, { useMemo, useState } from "react";
import "./styles/index.scss";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  //dane, które użytkownik wpisuje do formularza
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Podzespoły komputera",
    price: "",
  });
  //wszystkie wiersze dodawane z formularza
  const [tableData, setTableData] = useState([]);
  //licznik do ceny całkowitej
  const [priceSum, setPriceSum] = useState(0);

  //zapisywanie danych z formularza do formData
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  //dodawanie wierszy do tableData i zwiększanie licznika priceSum
  const handleClick = () => {
    setTableData((prevTableData) => {
      return [...prevTableData, formData];
    });
    setPriceSum((prevPrice) => {
      return prevPrice + Number(formData.price);
    });
  };

  //nazwy kolumn
  const columns = useMemo(() => {
    //usuwanie wiersza
    const deleteRow = (row, index) => {
      tableData.splice(index, 1);
      setTableData([...tableData]);
      setPriceSum((prevPrice) => {
        return prevPrice - Number(row.price);
      });
    };

    return [
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
        Cell: ({ value }) => {
          return <p>{value} zł</p>;
        },
      },
      {
        Header: "Usuń",
        accessor: (row, index) => {
          return <button onClick={() => deleteRow(row, index)}>Usuń</button>;
        },
      },
    ];
  }, [tableData]);

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
        <div className="priceSum">Suma: {priceSum} zł</div>
      </div>
    </div>
  );
}

export default App;
