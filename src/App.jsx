import './App.css';

function App() {
  
  return(
    <main>
      {/* THE TOP COMPONENT */}
    <div className='p-16 bg-black yext-white flex justufy-between items-center'>
     <h1 className = 'p-4 text-orange-500'>Kimish</h1> 
     <div>
      <button className =  'p-4 bg-blue-500 text-white'>login</button>
      <button className =  'p-4 bg-blue-500 text-white'>sign up</button>
     </div>
    </div>

  {/* THE MIDDLE COMPONENT */}
    <div className = " bg-blue-950 p-16 flex flex-col justify-center items-center">
       <input type = 'text' title = 'todo' className = 'py -4 bg-gray-700 text-white mb-8 pl-6 rounded-2xl'/>
       <button className = 'py=4 px-8 bg-red-600 mt-4'>Add todo</button>
    </div>
    </main>
  );
}

export default App;
