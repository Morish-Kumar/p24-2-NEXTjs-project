import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      title="First meetup"
      address="Some street 5"
      description="this is the first meetup"
    />
    //   <Fragment>
    //   <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="A first meeetup page"/>
    //   <h1>A first meetup</h1>
    //   <address>Some street 5, some city</address>
    //   <p>the meetup description</p>
    // </Fragment>
  );
}

export default MeetupDetails;
