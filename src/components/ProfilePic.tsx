import avatar from "@/assets/avatar.png";

const ProfilePic = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative z-[1]">
        <img
          src={avatar}
          width={300}
          height={300}
          alt=""
          className="rounded-full shadow-xl"
        />
      </div>
    </div>
  )
}

export default ProfilePic;
