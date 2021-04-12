// pass in the users schema, as well as their vote data.
import "./profile.css";
import React from "react"

//allow them to upload an image.

const Profile = (props)  =>{


    return(
        <div className="profile_container">
            <div className="left">
                <img
                    src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png">
                </img>
            </div>
            <div className="right">
                
            </div>
        </div>
    )
}

export default Profile;