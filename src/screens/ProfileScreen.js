import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {  selectUser } from '../features/userSlice'
import db, { auth } from '../firebase';
import Nav from '../Nav'
import Navp from '../Navp';
import PlanScreen from './PlanScreen';
import './ProfileScreen.css'


function ProfileScreen() {
    
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState([]);




    useEffect(() => {
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role
                });
            });
        });
    }, [user.uid]);


    var loginButton;
    if ((subscription.role === "Standard") || (subscription.role === "Basic") || (subscription.role === "Premium")) {
      loginButton = <Nav />;
    } else {
      loginButton = <Navp />;
    }




    return (
        <div className="profileScreen">
            {loginButton}  
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt=""
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                        <h3>{`Plans(Current Plan: ${subscription.role})`}</h3>
                        
                        
                            <PlanScreen />
                            <button
                                onClick={() => auth.signOut()} 
                                className="profileScreen_signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}

export default ProfileScreen
