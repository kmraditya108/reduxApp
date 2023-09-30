import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginContainer from '../screens/Login';
import HomeContainer from '../screens/Home';
import EmployeeList from '../screens/common/EmployeeList';
import TodoList from '../screens/TodoList';

// const AppRoutes = () =>{

//     const mainRouter = createBrowserRouter(
//         createRoutesFromElements(
//             <Route>
//                 <Route path='/' element={<LoginContainer/>}/>
//                 <Route path='/home' element={<HomeContainer/>}/>
//             </Route>
//         )
//     )

//     return <RouterProvider router={mainRouter}/>
// } 

const AppRoutes = () => (
    <Router>
      <Routes>
      <Route exact path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/EmployeeList" element={<EmployeeList />} />
      <Route path="/TodoList" element={<TodoList />} />
      
      </Routes>
    </Router>
  );

  export default AppRoutes;