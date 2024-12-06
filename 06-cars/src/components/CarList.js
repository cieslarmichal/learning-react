import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const memoizedCars = createSelector(
    [(state) => state.cars.data, (state) => state.cars.searchTerm],
    (data, searchTerm) => data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const cars = useSelector(memoizedCars);

  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        key={car.id}
        className={`panel ${bold && 'bold'}`}
      >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
