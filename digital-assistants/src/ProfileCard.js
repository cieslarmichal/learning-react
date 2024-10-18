function ProfileCard({ title, handle, image }) {
  return <div>
    <img src={image} alt={title} />
    <div>{title}</div>
    <div>{handle}</div>
  </div>
}

export default ProfileCard;
