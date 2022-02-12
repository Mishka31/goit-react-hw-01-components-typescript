import defLogo from './default.png' //для примера
import s from './profile.module.css'

type statsOption = {
  followers: number
  views: number
  likes: number
}

interface Props {
  imageUrl: string
  tag: string
  name: string
  location: string
  stats: statsOption
}

export default function Profile({
  imageUrl = defLogo, //знаю что не обязательно, один раз попробовать))
  tag,
  name = '', //для примера
  location,
  stats,
}: Props) {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={imageUrl} alt={tag} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.containerStats + ' ' + s.first}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {stats.followers}</span>
        </li>
        <li className={s.containerStats + ' ' + s.second}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {stats.views}</span>
        </li>
        <li className={s.containerStats + ' ' + s.third}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
