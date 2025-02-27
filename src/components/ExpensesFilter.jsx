import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
