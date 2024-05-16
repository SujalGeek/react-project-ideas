// import React from 'react'

// const App = () => {
//   const name ='Sujal';
//   const x=23;
//   const y=20;
//   const names =['Brad','Hog','Fran']
//   const loggedIn =false;
//   const styles ={
//     color: 'red',
//     fontSize: '20px',
// };
//   return (
//     <div>
//     <div className='text-5xl'>
//       App
//     </div>
//     <p style={styles}>Hello {name}</p>
//     <p>The value of x is{x+y}</p>
//     <ul>
//       {names.map((name,index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//     {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
//       </div>
//   )
// }

// export default App
import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <div>
      <Navbar title="Finding the Job" subtitle="The requirements of the job"/>
      </div>
    </div>
  )
}

export default App
