import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './about/about';
import ContactPage from './contact-us/contact-us';
import HomePage from './home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);
