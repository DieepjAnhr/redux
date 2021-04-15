import { useSelector } from 'react-redux';
import './App.css';
import ButtonLeft from './components/button-left';
import TextContent from './components/text';

function App() {
  const nowStateText = useSelector(state => state.getStateText)
  return (
    <div className="App">
        <br />
        <br />
        <div className="left">
            <ButtonLeft />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="right">
            {nowStateText? <TextContent />: " "}
        </div>
    </div>
  );
}

export default App;
