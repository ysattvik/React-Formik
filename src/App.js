import logo from './logo.svg';
import './App.css';

import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart';
import YouTubeForm from './FormikComponent/YouTubeForm';
import OldYouTubeForm from './FormikComponent/OldYouTubeForm';
import NewYouTubeForm from './FormikComponent/NewYouTubeForm';
import FormikContainer from './formikControl/FormikContainer';
import LoginForm from './formikControl/LoginForm';
import RegistrationForm from './formikControl/RegistrationForm';
import EnrollmentForm from './formikControl/EnrollmentForm';
import UserRegistration from './formikControl/UserRegistration ';

function App() {
  return ( 
   <div className='App'>
      {/* <div className='chart'> */}
     {/* <LineChart/> */}
     {/* <BarChart/> */}
     {/* <DoughnutChart/> */}
     {/* <YouTubeForm/> */}
     {/* <OldYouTubeForm/> */}
     {/* <NewYouTubeForm/> */}
     {/* <FormikContainer/> */}
     {/* <LoginForm/> */}
     {/* <RegistrationForm/> */}
    {/* <EnrollmentForm/> */}
    <UserRegistration/>
     
    
     {/* </div> */}
    </div>
  );
}

export default App;
