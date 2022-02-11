// import "./App.css";
import Profile from './components/profile/profile'
import user from './components/profile/user.json'
import Statistics from './components/statistics/statistics'
import statJson from './components/statistics/statistical-data.json'
import FriendList from './components/friend-list/friend-list.jsx'
import friends from './components/friend-list/friends.json'
import TransactionHistory from './components/transaction-history/transaction-history.jsx'
import TransactionsJson from './components/transaction-history/transactions.json'

export default function App() {
  return (
    <div className="App">
      <Profile
        imageUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statJson} />
      {/* <Statistics stats={statJson} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={TransactionsJson} />
    </div>
  )
}
