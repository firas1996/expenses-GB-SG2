import "./ExpensesFilter.css";

const ExpensesFilter = ({ years }) => {
  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select>
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
