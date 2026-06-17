import HomePage from "./frontend/HomePage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthPage from "./frontend/pages/AuthPage";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/authentication" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;