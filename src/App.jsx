import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Layout from './components/Layout';
import Contribute from './pages/Contribute';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GetStarted />} index />
          <Route path='/Contribute' element={<Contribute/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
