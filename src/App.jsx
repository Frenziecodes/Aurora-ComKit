import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GetStarted />} index />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
