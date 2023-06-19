import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
 

// 908e7ab925fbf0105bff462a17b34666
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDhlN2FiOTI1ZmJmMDEwNWJmZjQ2MmExN2IzNDY2NiIsInN1YiI6IjY0OTA2MjdkNDJiZjAxMDEzYmJlNTg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejm5M2odP6Ads3vtJjJvpgxfgeW_VCujfiZKUiSYKF8