import s from './friend-list.module.css'

interface Props {
  avatar: string
  name: string
  isOnline: boolean
}

const FriendListItem = ({ avatar, name, isOnline }: Props) => {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${isOnline ? s.onlineFriend : s.offlineFriend}`}
      />
      <img className={s.avatar1} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}

export default FriendListItem
