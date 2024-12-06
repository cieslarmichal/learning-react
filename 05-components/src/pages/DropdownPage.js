import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (selectedOption) => {
    setSelection(selectedOption);
  };

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}

export default DropdownPage;
