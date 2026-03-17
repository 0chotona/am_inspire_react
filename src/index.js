import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// 컴포넌트에 합성(Composition) 및 Props 적용예
// import LibraryPage from "./pages/test/LibraryPage";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <LibraryPage/>
// );

//컴포넌트에 css 적용예
// import LibraryPage from "./pages/test/CommentPage";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <LibraryPage/>
// );

//props 적용한 버튼 적용예
// import ButtonPage from "./pages/test/ButtonPage";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ButtonPage/>
// );

//state(hook) 관리 적용예
// import CapacityPage from "./pages/state/CapacityPage";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CapacityPage/>
// );

//axios 이용하고 통신을 통해 json 데이터를 받아서 화면 구성하는 예
// import BlogJsonPage from "./pages/state/BlogJsonPage";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BlogJsonPage/>
// );


// import EventPage from './pages/event/EventPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <EventPage/>
// );

// import UserPage from './pages/rendering/UserPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserPage/>
// );

import BlogApp from './BlogApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlogApp />
);

// import ContextApp from './ContextApp';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ContextApp/>
// );

// import WeatherPage from './pages/openapi/WeatherPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <WeatherPage/>
// );

// import ForcastApp from './ForcastApp';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ForcastApp/>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
