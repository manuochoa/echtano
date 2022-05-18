import './App.css';
import Router from "./components/Router";
import Theme from "./Theme";

function App() {
    return (
        <Theme>
            <div className="App">
                <Router/>
            </div>
        </Theme>
    );
}

export default App;
