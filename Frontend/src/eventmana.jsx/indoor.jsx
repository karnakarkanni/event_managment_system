import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../home/footer";
import { Link } from "react-router-dom";
const images = [
  "https://www.marriagevenue.in/images/banner2.jpg",
  'https://watermark.lovepik.com/photo/20211122/large/lovepik-wedding-background-board-picture_500664172.jpg',
  "https://i.pinimg.com/736x/20/c4/9e/20c49ec31c7a13a1cadc31fc4beb765f.jpg",
];

function Indoor() {

  const [users, setUsers] = useState([]);
  

 

  const hello = () => {
    axios
      .get("https://event-managment-system-4tvs.onrender.com/indoor")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  };
  useEffect(() => {
    hello();
  }, []);

  const clk = (id, venue, address, type, baseprice) => {
    var v = {
      "id": id,
      "venue": venue,
      "address": address,
      "type": type,
      "baseprice": baseprice
    };

    localStorage.setItem("data", JSON.stringify(v));
  };


  const foundUser = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.venue}</td>
        <td>{user.address}</td>
        <td>{user.type}</td>
        <td>{user.baseprice}</td>
        <td>
          <button onClick={() => clk(user.id, user.venue, user.address, user.type, user.baseprice)}>
            <Link to="/home/service/seemore">See more</Link>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div id="admin">
       
        <div>
          <h1 id="indoorh1" className="highlight">
            With 12 years of excellence in the event industry, our expertise spans all types of events like Weddings, Corporate, Social and MICE.
          </h1>

          <h3 id="indoorh4" className="highlight">
            Our corporate event services ensure a professional and memorable experience. We specialise in delivering high-quality hospitality, and audio-visual management tailored to your corporate needs.
          </h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <h1>Venue Details</h1>
          <table border={2} align="center" style={{ backgroundColor: "#d23a7ed1" }}>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Venue</th>
                <th>Address</th>
                <th>Type</th>
                <th>Baseprice</th>
                <th>See more</th>
              </tr>
            </thead>
            <tbody>{foundUser}</tbody>
          </table>
        </div>
        <div>
          <h1>Portfolio</h1>
          <div id="Portfolio">
            <img style={{ marginRight: 40 }} src="https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_960_720.jpg" alt="" id="portfoliow1" />
            <img src="https://media.istockphoto.com/id/1452134248/photo/indian-wedding-decoration-beautiful-wedding-gate-decoration-stock-photo.jpg?s=612x612&w=0&k=20&c=LC8pOGsEV2q-MhZz0sE8hY-ZmxQiyMVj76OBe6Nik7g=" id="portfoliow" alt="" />
            <img style={{ marginRight: 40 }} src="https://cdn.pixabay.com/photo/2024/04/08/03/53/people-8682585_640.jpg" alt="" id="portfoliow" />
            <img src="https://media.istockphoto.com/id/1234886951/photo/banquet-table-in-a-restaurant-with-flower-decor.jpg?s=612x612&w=0&k=20&c=SfaIP7U8dkS6jQ79MxrvTt2oFbJ2W8xJaiyG2hIXKrw=" id="portfoliow" alt="" />
          </div>
        </div>

        <div align="center">
          <h1 class="section-title">Services We Provide</h1>
          <div class="services-container">
            <h2 class="service-item">Venue selection</h2>
            <h2 class="service-item">Logistics</h2>
            <h2 class="service-item">Hospitality</h2>
            <h2 class="service-item">Food</h2>
            <h2 class="service-item">Decor</h2>
            <h2 class="service-item">Photography</h2>
            <h2 class="service-item">Entertainment</h2>
            <h2 class="service-item">Artist management</h2>
            <h2 class="service-item">Manpower</h2>
            <h2 class="service-item">Audio visual management</h2>
            <h2 class="service-item">SFX Licence</h2>
            <h2 class="service-item">Licence</h2>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Indoor;
