import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector((state) => {
    const filteredCars = state.cars.data.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()),
    );

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
