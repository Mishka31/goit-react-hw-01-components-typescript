import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import s from "./friend-list.module.css";

function FriendList({ friends }) {
  return (
    <section className={s.friends}>
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default FriendList;
