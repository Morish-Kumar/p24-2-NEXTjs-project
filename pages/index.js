// our-Domain.com/
// import Layout from '../components/layout/Layout'
// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    address: "some adress 5",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    address: "some adress 10",
    description: "this is a second meetup",
  },
];

function HomePage() {

  // const [loadedMeetups, setLoadedMeetups] = useState([])

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // })

  return (
//   <Layout>
      // <MeetupList meetups={loadedMeetups} />
      <MeetupList meetups={props.meetups} />
//   </Layout> 


  )
}

export function getStaticProps(){
  return{
    props: {
      meetups:DUMMY_MEETUPS
    }
  }
} // fuction name is a reseerved name, NEXT js will look for a function with this name and if it find it it execute the function, NEXT js will call getStaticProps at first. Code inside this function will never be seen on client machine

export default HomePage;
