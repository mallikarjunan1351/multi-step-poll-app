import React from 'react';
import PollForm from './components/PollForm';
import './styles/tailwind.css';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <PollForm />
    </div>
  );
}

export default App;
