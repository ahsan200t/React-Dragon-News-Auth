import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latest = () => {
  return (
    <div className="flex bg-[#F3F3F3] text-black p-2 mx-auto">
      <button className="btn btn-secondary">Latest</button>
      <Marquee speed={100}>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components.....</Link>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components.....</Link>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components.....</Link>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components.....</Link>
      </Marquee>
    </div>
  );
};

export default Latest;
