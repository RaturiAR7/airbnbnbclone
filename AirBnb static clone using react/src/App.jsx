import './App.css'
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Data from '../Data';

function App() {
  const elements = Data.map(data => {
    return < Card key={data.id} {...data}></Card>
  })
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div id="card-container">
        {elements}
      </div>
    </>
  )
}

export default App
