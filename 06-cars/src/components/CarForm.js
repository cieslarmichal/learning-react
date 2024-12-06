import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.form.name);

  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const input = parseInt(event.target.value) || 0;

    dispatch(changeCost(input));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add a Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
