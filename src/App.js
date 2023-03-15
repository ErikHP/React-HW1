const Header = (props) => {
  return (
    <div>
      <h1> Course: {props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.partName}: {props.partEx}</p>
      
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.totalNumber}</p>
    </div>
  )
}

function App() {
  const courseName = 'React';
  const part1 = 'React Basics';
  const part2 = 'React Advanced';
  const part3 = 'Project';
  const ex1 = 4;
  const ex2 = 5;
  const ex3 = 6;
  const total = ex1 + ex2 + ex3;
  return (
    <div>
      <Header name={courseName}/>
      <Content partName={part1} partEx={ex1}/>
      <Content partName={part2} partEx={ex2}/>
      <Content partName={part3} partEx={ex3}/>
      <Total totalNumber={total} />
    </div>
  );
}

export default App;
