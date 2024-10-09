import './App.css'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {

  let isLoggedIn = false;

  return (
    <>
      <div>
        {isLoggedIn ? (
          <AdminPanel />
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  )
}




export default App
