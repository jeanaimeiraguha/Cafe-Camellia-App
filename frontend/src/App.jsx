import React from 'react';
import Insert from './Insert';
import Select from './Select';
import Update from './Update';
import Insert2 from './Insert2';
import Select3 from './Select3';
import Update2 from './Update2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/insert" element={<Insert />} />
        <Route path="/select" element={<Select />} />
        <Route path="/insert2" element={<Insert2 />} />
        <Route path='/select3' element={<Select3/>}/>
        <Route path="/update/:id" element={<Update />} /> {/* ✅ leading slash for clarity */}
        <Route path="/update2/:PostId" element={<Update2 />} /> {/* ✅ leading slash for clarity */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
