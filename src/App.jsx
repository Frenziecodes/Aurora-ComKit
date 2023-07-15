import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Layout from './components/Layout';
import Contribute from './pages/Contribute';
import AuroraHeaders from './AuroraComp/Headers';
import AuroraFeatures from './AuroraComp/Features';
import AuroraPricing from './AuroraComp/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GetStarted />} index />
          <Route path='/Contribute' element={<Contribute/>} />
          <Route path='/AuroraHeaders' element={<AuroraHeaders/>} />
          <Route path='/AuroraFeatures' element={<AuroraFeatures/>} />
          <Route path='/AuroraPricing' element={<AuroraPricing/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
