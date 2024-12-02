import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* custom hooks */}
      {/* useGlobalState :
  const [state, setGlobalState] = useGlobalState({ theme: 'light', language: 'en' });
  const toggleTheme = () => setGlobalState('theme', state.theme === 'light' ? 'dark' : 'light'); */}
      {/* useFtach :
        const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; */}
      {/* useAuth  :
      const AuthComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: 'John Doe', role: 'Admin' })}>Login</button>
      )}
    </div>
  );
}; */}
      {/* useTheme :
 const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}; */}
      {/* useGeolocation :
//   const {
//     isLoading,
//     error,
//     position: { lat, lng },
//     getPosition,
//   } = useGeolocation();
 */}
    </div>
  );
}
