import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/Transactions';

import statisticalData from './json/statistical-data.json';
import user from './json/user.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <main>
      <h1>Tasks</h1>
      <h2>Task 01</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title="UPLOADS STATS" stats={statisticalData} />
      <p>-</p>
      <Statistics stats={statisticalData} />
      <h2>Task 03</h2>
      <FriendList friends={friends} />
      <h2>Task 04</h2>
      <TransactionHistory items={transactions} />
    </main>
  );
}

export default App;
