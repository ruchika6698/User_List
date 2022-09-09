import './App.css';
import { Provider } from 'react-redux';
import store from './redux_store/store/store';
import UserList from "./component/userList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserList />
      </Provider>
    </div>
  );
}

export default App;
