import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Login from './pages/signin/Login';
import Gallery from './pages/gallery/Gallery';
import LoginForm from './pages/signin/Login';
import SignUpForm from './pages/signup/SignUpForm';
import ContactUsForm from './pages/contact/ContactUsForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUsForm/>} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
