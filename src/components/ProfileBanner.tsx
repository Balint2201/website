import banner from "@/assets/banner.jpg";

const ProfileBanner = () => {
    return (
        <img
            src={banner}
            width={700}
            height={500}
            className="overflow-hidden"
            alt=""
        />
    )
}

export default ProfileBanner;