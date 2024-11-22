import Table from "../components/Table";

function TablePage () {
  const config = [
    {
      label: "Name", 
      render: (item) => item.name,
    },
    {
      label: "Color",
      render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>,
    },
    {
      label: "Score",
      render: (item) => item.score,
    },
  ];

  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 5},
    {name: 'Apple', color: 'bg-red-300', score: 3},
    {name: 'Banana', color: 'bg-yellow-500', score: 1},
    {name: 'Lime', color: 'bg-green-500', score: 4},
  ];

  const keyFn = (item) => item.name;

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn}/>
    </div>
  );
}

export default TablePage;
