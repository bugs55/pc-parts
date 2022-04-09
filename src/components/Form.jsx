import React from "react";
import Input from "./Input";

export default function Form({ formData, handleChange, handleClick }) {
  return (
    <>
      <Input
        name="title"
        label="Nazwa podzespołu"
        type="text"
        value={formData.title}
        handleChange={handleChange}
      />
      <Input
        name="description"
        label="Dane szczegółowe (np. model)"
        type="text"
        value={formData.description}
        handleChange={handleChange}
      />
      <div>
        <label htmlFor="category">Kategoria</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="unit">Podzespoły komputera</option>
          <option value="off-line">Urządzenia peryferyjne</option>
          <option value="software">Oprogramowanie</option>
          <option value="other">Inne</option>
        </select>
      </div>
      <Input
        name="price"
        label="Cena"
        type="number"
        value={formData.price}
        handleChange={handleChange}
      />
      <button className="button" onClick={handleClick}>
        Dodaj
      </button>
    </>
  );
}
