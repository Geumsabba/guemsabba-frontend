import React from 'react';
import Select from 'react-select';
import "./BirthDatePicker.css";

const BirthDatePicker = () => {
  const years = Array.from({length: 100}, (_, index) => ({
    value: String(new Date().getFullYear() - index),
    label: `${new Date().getFullYear() - index}년`,
  }));
  const months = Array.from({length: 12}, (_, index) => ({
    value: String(index + 1),
    label: `${index + 1}월`,
  }));
  const days = Array.from({length: 31}, (_, index) => ({
    value: String(index + 1),
    label: `${index + 1}일`,
  }));

  return (
    <div className="birth-date-picker">
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#ccc',
            minHeight: '66px',
            height: '66px',
            borderRadius: 12,
          }),
          indicatorSeparator: state => ({
            display: 'none',
          }),
        }}
        options={years} placeholder="년도" className="select"/>
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#ccc',
            minHeight: '66px',
            height: '66px',
            borderRadius: 12,
          }),
          indicatorSeparator: state => ({
            display: 'none',
          }),
        }}        options={months} placeholder="월" className="select"/>
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#ccc',
            minHeight: '66px',
            height: '66px',
            borderRadius: 12,
          }),
          indicatorSeparator: state => ({
            display: 'none',
          }),
        }}        options={days} placeholder="일" className="select"/>
    </div>
  );
};

export default BirthDatePicker;
