import Accordion from "./components/Accordion";

function App () {
  const items = [
    {
      id: '1',
      label: "First Item",
      content: "This is the first item content"
    },
    {
      id: '2',
      label: "Second Item",
      content: "This is the second item content"
    },
    {
      id: '3',
      label: "Third Item",
      content: "This is the third item content"
    },
  ];

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
