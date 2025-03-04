
import './App.css'
import FlightSearch from './Components/FlightSearch'

function App() {

  return (
    <>
      <div className="flex items-center justify-center p-[100px] bg-[#eee]">
        <div className='flex justify-center flex-col'>
          <h2 className='text-3xl'>Flight APIs</h2>
          <FlightSearch />
        </div>
      </div>
    </>
  )
}

export default App
