import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1>Dragon News</h1>
            <div className="grid grid-cols-4">
               <div className="col-span-3">
                  {id}
               </div>
               <div className="col-span-1">
                <RightSideNav></RightSideNav>
               </div>
            </div>
        </div>
    );
};

export default News;