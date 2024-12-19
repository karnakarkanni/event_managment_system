import { Link } from "react-router-dom";
import About from "./about";
function Service() {
    return (
        <>
            <div id="services" style={{paddingBottom:40}}>
                <h1 id="servicesh" >Events</h1>
                
                 <div id="row">
                   <Link to={"/home/service"} id="link"><div id="cards">
                    <img src="https://cdn.pixabay.com/photo/2014/06/30/11/40/cupcakes-380178_1280.jpg" width={400} height={400} id="card1" alt="" />
                        <h2 align="center">Birthday parties</h2>
                    </div></Link>

                  <Link to={"/home/service"} id="link"> <div id="cards">
                        <img src="https://media.istockphoto.com/id/863913234/photo/thai-wedding-decoration.jpg?s=612x612&w=0&k=20&c=ksrcP3Uv9H3HFOtxIOzbDcBnK6dSPndI-vp7oQ9Sdo4=" width={400} height={400} id="card1" alt="" />
                        <h2 align="center">Marriage</h2>
                    </div></Link> 

                   <Link to={"/home/service"} id="link"> <div id="cards">
                    <img src="https://cdn.pixabay.com/photo/2018/02/16/20/08/human-3158471_640.jpg" width={400} height={400} id="card1" alt="" />
                       <h2 align="center">Annualday celebration </h2>
                    </div></Link>


                  <Link to={"/home/service"} id="link">  <div id="cards">
                    <img src="https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_640.jpg" width={400} height={400} id="card1" alt="" />
                        <h2 align="center">Reception</h2>
                    </div></Link>


                   <Link to={"/home/service1"} id="link"> <div id="cards">
                    <img src="https://cdn.pixabay.com/photo/2016/08/20/15/32/talladega-1607770_640.jpg" width={400} height={400} id="card1" alt="" />
                        <h2 align="center">Sports</h2>
                    </div></Link>


                  <Link to={"/home/service1"} id="link">  <div id="cards">
                    <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg" width={400} height={400} id="card1" alt="" />
                        <h2 align="center">Movie Events</h2>
                    </div></Link>


                  <Link to={"/home/service1"} id="link">  <div id="cards">
                    <img src="https://media.istockphoto.com/id/1633283546/photo/group-of-multiracial-asian-business-participants-casual-chat-during-a-coffee-break-in-seminar.jpg?s=612x612&w=0&k=20&c=pTrdzm_nRR2oTua5TKRPv6IWIxU8XUfDs-heHR5Ct_A=" width={400} height={400} id="card1" alt="" />
                       <h2 align="center">Corporate Events</h2>
                    </div></Link>


                 <Link to={"/home/service"} id="link">   <div id="cards">
                    <img src="https://media.istockphoto.com/id/1482845206/photo/male-asking-a-question-to-a-speaker-during-a-q-and-a-session-at-an-international-tech.jpg?s=612x612&w=0&k=20&c=9Ah3K3fqMnadIprbybdLyGWhXcEcVEKfPWl9Q6wDPfA=" width={400} height={400} id="card1" alt="" />
                        <h2 align="center" >Mice Events</h2>
                    </div></Link>
                </div>
            </div>
            <About></About>

            
        </>
    )
}
export default Service;