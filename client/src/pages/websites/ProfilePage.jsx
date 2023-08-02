import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar/drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import User from '../../Assets/logos/user.png'
import { useEffect } from 'react';



const data = [
  // { name: "Dashboard", icon: <HomeOutlinedIcon />, active: true, color: "#fff", path: "", },
  { name: "My Campaigns", icon: <InboxOutlinedIcon /> },
  { name: "My Profile", icon: <PersonOutlinedIcon /> },
  { name: "Analytics", icon: <BarChartOutlinedIcon />, },
  { name: "Comments", icon: <CommentOutlinedIcon /> },
  { name: "Comment", icon: <CommentOutlinedIcon /> },
];


const Profile = () => {
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const [previewProfilePicture, setPreviewProfilePicture] = useState(null);

  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaTag);
  }, []);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setSelectedProfilePicture(file);
    setPreviewProfilePicture(URL.createObjectURL(file));
  };

  const updateProfilePicture = () => {
    if (!selectedProfilePicture) {
      return; // No profile picture selected, do nothing
    }

    const formData = new FormData();
    formData.append("profilePicture", selectedProfilePicture);

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you handle profile picture updates on the server
    fetch("YOUR_API_ENDPOINT", formData)
      .then((response) => {
        // Handle success response, e.g., show a success message
        console.log("Profile picture updated successfully!");

        // After the update is successful, you can update the profile picture on the frontend
        // Assuming you have the URL to the updated profile picture
        // Replace 'NEW_PROFILE_PICTURE_URL' with the actual URL of the updated profile picture
        const newProfilePictureURL = "NEW_PROFILE_PICTURE_URL";
        setSelectedProfilePicture(newProfilePictureURL);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating profile picture:", error);
      });
  };




  const containerStyle = {
    position: 'absolute',
    top: '100px',
    left: '261px',
    width: '312px',
    height: '300px',
    background: '#FFFFFFFF',
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: '#DEE1E6FF',
    borderStyle: 'solid',

  };
  const profileContainerStyle = {
    position: 'absolute',
    top: '0px',
    left: '320px', // Adjust the left position as needed
    width: '832px',
    height: '900px',
    background: '#FFFFFFFF',
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: '#DEE1E6FF',
    borderStyle: 'solid',
  };

  if (window.innerWidth <= 768) {
    containerStyle.position = 'static';
    containerStyle.margin = '0 auto';
    containerStyle.width = '100%';
    containerStyle.top = '0';
    containerStyle.left = '0';

    profileContainerStyle.position = 'static';
    profileContainerStyle.margin = '0 auto';
    profileContainerStyle.width = '100%';
    profileContainerStyle.top = '0';
    profileContainerStyle.left = '0';
  }

  const avatarStyle = {
    position: 'absolute',
    top: '28px',
    left: '86px',
    width: '140px',
    height: '140px',
    background: '#C5D0F5FF',
    opacity: '1',
    overflow: 'hidden',
    borderRadius: '70px',
  };

  const avatarImgStyle = {
    width: '140px',
    height: '140px',
  };

  const avatarBadgeStyle = {
    width: '35px',
    height: '35px',
    borderRadius: '17.5px',
  }

  const textStyle = {
    position: 'absolute',
    top: '184px',
    left: '102px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#EB6769FF',
  };

  const infoTextStyle = {
    position: 'absolute',
    top: '256px',
    left: '28px',
    width: '256px',
    fontFamily: 'Mulish',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#9095A0FF',
  };

  const textboxInputStyle = {
    width: '256px',
    height: '36px',
    paddingLeft: '12px',
    paddingRight: '34px',
    fontFamily: 'Mulish',
    fontSize: '14px',
    background: '#a3a3a3ff',
    borderRadius: '6px',
    borderWidth: '0px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '9rem',
    height: '2rem',
    color: 'white',
  };

  return (


    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 250px", marginRight: "30px" }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: "30px" }}>
        <h2 style={{ fontFamily: "Poppins", fontSize: "42px", color: "#171A1FFF", marginBottom: "10px", marginTop: "20px" }}>My Profile</h2>
        <div style={containerStyle} className="container">
          <div style={avatarStyle} className="avatar">
            <label htmlFor="profilePictureInput">
              <img src={previewProfilePicture || selectedProfilePicture || User} alt="Avatar" style={avatarImgStyle} />
              <div style={avatarBadgeStyle} className="badge"></div>
            </label>
            <input
              type="file"
              id="profilePictureInput"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={handleProfilePictureChange}
            />
          </div>

          <div style={textStyle} className="text">
            Laiba Khan
          </div>

          <div style={infoTextStyle} className="text">
            My name is Laiba and I am a student
          </div>

          <div style={profileContainerStyle} className="container">
            <h3 style={{ display: 'flex', justifyContent: 'center', margin: '1rem', }}>Profile</h3>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h5>Full Name</h5>
                <input type="text" id="fullName" style={{ ...textboxInputStyle, width: '800px' }} />
              </div>
            </div>

            <h5 style={{ marginTop: '1rem' }}>Profession</h5>
            <div>
              <input type="text" style={{ ...textboxInputStyle, width: '800px' }} />
            </div>


            <h5 style={{ marginTop: '1rem' }}>Location</h5>
            <div>
              <input type="text" style={{ ...textboxInputStyle, width: '800px' }} />
            </div>

            <h5 style={{ marginTop: '1rem' }}>Bio</h5>
            <div>
              <textarea style={{ ...textboxInputStyle, height: '100px', paddingTop: '7px', paddingBottom: '7px', width: '800px' }}></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem', marginTop: '1rem' }}>
              <button style={buttonStyle} className="button" onClick={updateProfilePicture}>Save Information</button>
            </div>

            <hr />

            <h3 style={{ display: 'flex', justifyContent: 'center', margin: '1rem', }}>Reset Password</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="CurrentPassword" >Current Password</label>
                <input type="password" id="CurrentPassword" style={{ ...textboxInputStyle }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="NewPassword">New Password</label>
                <input type="password" id="NewPNewassword" style={{ ...textboxInputStyle }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="password" id="ConfirmPassword" style={{ ...textboxInputStyle }} />
              </div>
            </div>

            <div className="line"></div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button style={buttonStyle} className="button" onClick={updateProfilePicture}>Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
