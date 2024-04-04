import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-xl font-semibold">Login With</h1>
        <button className="btn btn-outline w-full text-blue-600">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h1 className="text-xl font-semibold mb-3">Find Us On</h1>
        <a className="flex items-center gap-2 p-4 border rounded-t-lg text-lg" href=""><FaFacebook></FaFacebook>
           Facebook
        </a>
        <a className="flex items-center gap-2 p-4 border-x text-lg" href=""><FaTwitter></FaTwitter>
           Twitter
        </a>
        <a className="flex items-center gap-2 p-4 border rounded-b-lg text-lg" href=""><FaInstagram></FaInstagram>
           Instagram
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 space-y-5 mb-6">
        <h1 className="text-xl font-semibold">Q Zone</h1>
         <img src={qzone1} alt="" />
         <img src={qzone2} alt="" />
         <img src={qzone3} alt="" />
      </div>
      
    </div>
  );
};

export default RightSideNav;
