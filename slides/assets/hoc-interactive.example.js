export const defaultCode = `


const SimpleComponent = ({keyCode}) =>
  <h1>Simple Component {keyCode}</h1>;

const App = () => <SimpleComponent keyCode={42} />;

render(<App />);
`;
