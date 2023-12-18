import Navbar from './components/Navbar'
import Exchanges from './components/Exchanges'
import Homepage from './components/Homepage'
import Cryptocurencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'

import './App.css'

import { Switch,Layout } from 'antd'
import { Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    
     <div className="navbar">
      
        <Navbar />
     </div>


     <div className="main">
     <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/"> 
            <Homepage />
            </Route>
            <Route exact path="/exchanges"> 
            <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies"> 
            <Cryptocurencies />
            </Route>
            <Route exact path="/crypto/:coinId"> 
            <CryptoDetails />
            </Route>
            <Route exact path="/news"> 
            <News />
            </Route>
            
          </Switch>

        </div>
      </Layout>

     </div>


     <div className="footer">

     </div>
    </>
  )
}

export default App


