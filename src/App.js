import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {Tasks}  from './Component/Tasks';


// -->rendering direct using class: 
// class App extends React.Component{
//   render(){
//     return(
//       <div className='container'>
//         <Header/>
//       </div>
//     );
//   }
// }


// const name = "Rishav";
// const x = true;


// --> Rendering using function: 

 function App() {
   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div className="container">
    //   <Header/>
       /* <h1>Hello from React</h1>
      <h1>{12+6}</h1>
      <h2>Hello {name}</h2>
      <h2>{x?'yes':'no'}</h2>  */
//     </div>


      // <div className = 'container'>
      //   {/* <Header title='Rishav'/> */}
      //   <Header title={1}/>
      // </div>
       <div className='container'>
          <Header title={'Rishav'} />
          <Tasks />
      </div>


   );
 }

export default App;
