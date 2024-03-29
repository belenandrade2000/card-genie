import React, {useEffect} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ThoughtForm from '/components/';
// import ThoughtList from '/components/';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || data?.user || {};
  useEffect(()=> {
    console.log(user)
  })
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

return (
  <div> 
    <h1 style={{fontSize: "25px"}}> My Saved Credit Cards</h1> 

    <div style ={{backgroundImage: "url(https://cdn.pixabay.com/photo/2020/10/17/12/48/money-5661928_960_720.png)"}}>
        {!loading && user.savedCC && user.savedCC.map((card) => {
          return (
            <div> 
            <div className="card" style={{"width": "32%", "padding": "10px", "flex": "0 0 31%", "margin": "10px", "border": "2px solid black"}}>
            <img src={card.ccImage} className="card-img-top"style={{"height": "200px", "width": "300px"}}/>
              <div className="card-body">
              <h5 className="card-title" style={{"fontSize": "20px", 'marginBottom': "1px"}}>{card.ccName}</h5>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Type: {card.ccType}</h6>
              <h6 className="card-title"style={{"fontSize": "20px", "fontWeight": "normal"}}>Annual Fee: {card.ccAnnualFee}</h6>
              <p className ="card-text"style={{"fontSize": "20px"}}> Benefits: {card.ccBenefits}</p>
              <a href={card.ccLink} className="btn btn-primary">Apply</a>
            </div>
            </div>
            </div>
          )
        })}
      </div>
  </div>
)

};

export default Profile;
