import "./AddExpense.css";

const AddExpense = () => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  return (
    <div className="add-expense">
      <form>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input required placeholder="Title" />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min={minDate}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
