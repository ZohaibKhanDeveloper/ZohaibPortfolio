import { createBrowserRouter,RouterProvider } from 'react-router';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AboutPage />
    },
    {
      path: '/projects',
      element: <ProjectsPage />
    },
    {
      path: '/certifications',
      element: <CertificationsPage />
    }
  ]);
  return (
      <RouterProvider router={router}>
        <div className="App">
        </div>
      </RouterProvider>
  )
}
export default App;