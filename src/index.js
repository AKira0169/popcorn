import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useState } from 'react';

// import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import './index.css';
// import StarRating from './StarRating';

// function Test() {
//   const [stars, setStars] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={5}
//         color="red"
//         message={['Awful', 'Bad', 'Good', 'Better', 'Best']}
//         defaultRating={3}
//         onRateing={setStars}
//       />
//       <h1>Test{stars}</h1>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/* <Test />

    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      message={['Awful', 'Bad', 'Good', 'Better', 'Best']}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
