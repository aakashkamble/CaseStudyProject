import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/HomePage'
import Footer from './components/Footer'
import Login from './components/Login.js'
import Services from './components/Services'
import Search from './components/Search'
import Checkin from './components/Checkin'
import TrainList from './components/TrainList'
import AddTrain from './components/AddTrain'
import BookingForm from './components/BookingForm'
import Error from './components/Error'
import PaymentForm from './components/PaymentForm'
import AboutUs from './components/AboutUs'
import SUPPORT from './components/Support'
import ContactUs from './components/ContactUs'
import UserLogin from './components/Login copy'
import Register from './components/Register'
import Testimonial from './components/Testimonial'
import ListTrain from './components/ListTrain'
import './Testimonial.css'
import UserHistory from './components/UserHistory'
import PaymentHistory from './components/PaymentHistory'
import Banner from './components/Banner'
import Notauthenticate from './components/Notauthenticate'
import AdminRegister from './components/AdminRegister'
import UserRegister from './components/UserRegister'
// import Weather from './components/Weather';
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Showcase />
            {/* <Services />
            <Testimonial/> */}
            {/* <Weather/> */}
            {/* <Banner/> */}
            <Footer />
          </Route>
          {/* <Route exact path="/about">
            <AboutUs/>
            
          </Route> */}
          
          <Route exact path="/login">
            <Login />

          </Route>
          <Route exact path="/userlogin">
            <UserLogin />

          </Route>
          <Route exact path="/Register">
            <Register/>

          </Route>


          
          <Route exact path="/adminRegister">
            <AdminRegister/>

          </Route>
          <Route exact path="/userRegister">
            <UserRegister/>

          </Route>
          {/* <Route exact path="/weather">
            <Weather/>
            <Footer />
          </Route> */}
          

          <Route exact path="/checkin">
            <Checkin></Checkin>
            {/* <Footer /> */}
          </Route>

          <Route exact path="/payment">
            <PaymentForm></PaymentForm>
            <Footer />
          </Route>

          <Route exact path="/adminTrainList">
            <TrainList></TrainList>
            {/* <Footer /> */}
          </Route>
          <Route exact path="/userhistory">
            <UserHistory/>
            {/* <Footer /> */}
          </Route>
         
          <Route exact path="/paymenthistory">
            <PaymentHistory/>
            {/* <Footer /> */}
          </Route>
          <Route exact path="/notAuthenticate">
            <Notauthenticate></Notauthenticate>
            {/* <Footer /> */}
          </Route>

          <Route exact path="/edit-train/:trainId">
            <AddTrain />
            {/* <Footer /> */}
          </Route>

          <Route exact path="/addTrain">
            <AddTrain />
            {/* <Footer /> */}
          </Route>

          <Route exact path="/search">
            <Search />
            {/* <Footer /> */}
          </Route>

          <Route path="/checkin">
            <Checkin />
            {/* <Footer /> */}
          </Route>
          <Route path="/contactUs">
            <ContactUs />
           
          </Route>
          <Route exact path="/booking">
            <BookingForm></BookingForm>
            <ListTrain/>
            {/* <Footer /> */}
          </Route>
          
          <Route path='*'>
            <Error />
            {/* <Footer /> */}
          </Route>
          

        </Switch>


      </Router>
    </div>

  )
}

export default App