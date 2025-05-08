import React from 'react';
import Insert from './Insert';
import Select from './Select';
import Update from './Update';
import Insert2 from './Insert2';
import Select3 from './Select3';
import Update2 from './Update2';
import Insert4 from './Insert4';
import Select4 from './Select4';
import Update4 from './Update4';
import Report from './Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/insert" element={<Insert />} />
        <Route path="/report" element={<Report />} />
        <Route path="/insert4" element={<Insert4 />} />
        <Route path="/select" element={<Select />} />
        <Route path="/insert2" element={<Insert2 />} />
        <Route path='/select3' element={<Select3/>}/>
        <Route path='/select4' element={<Select4/>}/>
        <Route path="/update/:id" element={<Update />} /> {/* ✅ leading slash for clarity */}
        <Route path="/update2/:PostId" element={<Update2 />} /> {/* ✅ leading slash for clarity */}
        <Route path="/update4/:PostId" element={<Update4 />} /> {/* ✅ leading slash for clarity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
