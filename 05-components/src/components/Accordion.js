import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === newIndex) {
        return -1;
      }

      return newIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronUp />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
