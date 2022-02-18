import {connect} from 'react-redux'
import { getDealers } from './api/api';
import addDealersAC from './state/actionCreators/addDealersAC'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dealers from './components/Dealers/Dealers';
import Header from './components/Header/Header';
import DealerPage from './components/DealerPage/DealerPage';
import MainPage from './components/MainPage/MainPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    getDealers().then((data) =>{
      this.props.addDealers(data)
    })
  }
  
  render(){
    return(

      <div className="App">

        <Header/>

        <Routes>

            <Route path='/' element={<MainPage/>}/>

            <Route exact path="/dealers" element={<Dealers dealers={this.props.allDealers}/> }>

                <Route path='?name=:name' element={<Dealers dealers={this.props.allDealers}/> }/>

            </Route>
            
            <Route path="/dealers/:id" element={<DealerPage/>}  />

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addDealers : (data) => dispatch(addDealersAC(data))
  }
}
const mapStateToProps = (state) =>{
  return {
    allDealers: state.dealers
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
