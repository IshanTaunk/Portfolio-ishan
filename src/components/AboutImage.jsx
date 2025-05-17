import profile from '../assets/profile.jpg';
import './AboutImage.scss';

const AboutImage = () => {
    return (
        <div className="profile-pic image-sec">
            <img src={profile} className="profile-pic-image" alt="atlas.jpg"></img>
        </div>
    )
};

export default AboutImage;