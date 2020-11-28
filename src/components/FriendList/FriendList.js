import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(f => (
        <li key={f.id} className={s.item}>
          <span className={f.isOnline ? s.active : s.noActive}></span>
          <img className={s.avatar} src={f.avatar} alt="" width="48" />
          <p className={s.name}>{f.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
