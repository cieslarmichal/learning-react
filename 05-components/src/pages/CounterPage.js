import Button from '../components/Button';
import Panel from '../components/Panel';
import { useReducer } from 'react';
import { produce } from 'immer';

const actionType = {
  increment: 'increment',
  decrement: 'decrement',
  changeValueToAdd: 'change-value-to-add',
  addValueToAdd: 'add-value-to-add',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.increment:
      state.count += 1;
      return;
    case actionType.decrement:
      state.count -= 1;
      return;
    case actionType.changeValueToAdd:
      state.valueToAdd = action.payload;
      return;
    case actionType.addValueToAdd:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: actionType.increment });
  };

  const decrement = () => {
    dispatch({ type: actionType.decrement });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: actionType.changeValueToAdd, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: actionType.addValueToAdd });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add more</label>
        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
