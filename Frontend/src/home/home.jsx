import Service from "./event";
// import image1 from "../image/image1.jpg"
import { useEffect,useState } from "react";
const images = [
  "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481511.jpg?t=st=1734538716~exp=1734542316~hmac=d92dedaf9627a74cc58957591db18a46cad481eafd5a46298f8a5b146c8c541a&w=996",
    "https://www.marriagevenue.in/images/banner2.jpg",
    'https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481511.jpg?t=st=1734538716~exp=1734542316~hmac=d92dedaf9627a74cc58957591db18a46cad481eafd5a46298f8a5b146c8c541a&w=996',
   
    "https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?t=st=1734539282~exp=1734542882~hmac=05e7676280d7d1d6059bad7d677c01bb860323b1c399fc0e2f41c2671fdd19dd&w=996"
  ];
function Home(){
      const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); 

 
    return () => clearInterval(intervalId);
  }, []);

    return (
        <>
       
<div id="home" >
<div id="home3" align="center" >
      <img src={images[currentIndex]} id="home4"/>
    </div>

<div id="home1"  >
    <h1 id="home11">Event management system</h1>
    <h5 id="home11">let's make your memories....</h5>
    <h1 id="home11">Thing perish, but  </h1>
    <h1 id="home11">experiences that </h1>
    <h1 id="home11">Turn in memories don't</h1>
</div  >
</div>
      
<Service></Service>
        </>
    )
}
export default Home;