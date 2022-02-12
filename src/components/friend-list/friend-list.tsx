import FriendListItem from './FriendListItem'
import s from './friend-list.module.css'

type Option = {
  avatar: string
  name: string
  isOnline: boolean
  id: number
}

interface Props {
  friends: Option[]
}

function FriendList({ friends }: Props) {
  return (
    <section className={s.friends}>
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  )
}

export default FriendList
