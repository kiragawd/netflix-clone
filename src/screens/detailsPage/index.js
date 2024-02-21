import React, { useEffect, useState } from 'react'
import CoverDetails from '../../components/coverdetails'
import Navbar from '../../components/navbar'
import TilesRow from '../../components/tilesRow'
import requests from '../../services/requests'
import { useParams } from 'react-router-dom';

export default function DetailsPage(props) {

  const [selectedProfile, setSelectedProfile] = useState({})
  let { id } = useParams();
  const Url = requests.fetchId + id +requests.fetchApikey;
  console.log(Url);

  useEffect(() => {

    async function getSelectedProfile() {
      // retreiving selectedProfile to highlight profile icon in navbar
      const selectedProfile = await localStorage.getItem('selectedProfile');
      setSelectedProfile(JSON.parse(selectedProfile));
    };
    getSelectedProfile();

  }, [])
  return (
    <div className='container-main-page'>

      {/* navbar */}
      <Navbar selectedProfile={selectedProfile} />

      {/* cover */}
      <CoverDetails requestUrl={Url} />

     {/* resuable component tile */}
      <div style={{ paddingTop: 16, }}>
       
        <TilesRow title="Similar Movies" requestUrl={requests.fetchTrending} topRow />
      </div>

    </div>
  )
}
