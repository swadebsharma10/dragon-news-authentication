import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { default as qZone1, default as qZone3 } from '../../assets/qZone2.png';
import qZone2 from '../../assets/qZone3.png';



const RightSiteNav = () => {
  return (
    <section className=" m-4">
      <div className="space-y-4 mb-5 border p-3 rounded">
      <h3 className="text-2xl font-bold">Login With </h3>
        <button className="btn btn-outline w-full">
        <FaGoogle></FaGoogle>
        Login with google</button>
        <button className="btn btn-outline w-full">
        <FaGithub></FaGithub>
        Login with github</button>
      </div>

      <div className=" border p-4">
        <h3 className="text-xl font-bold">Find us on </h3>
        <a className="flex items-center border p-4  rounded-t-lg" href="">
         <FaFacebook className="mr-4 text-xl"></FaFacebook> 
         Facebook  
        </a>
        <a className="flex items-center border p-4  border-x" href="">
         <FaTwitter className="mr-4 text-xl"></FaTwitter> 
         Twitter 
        </a>
        <a className="flex items-center border p-4  rounded-b-lg" href="">
         <FaInstagram className="mr-4 text-xl"></FaInstagram> 
         Instagram 
        </a>
      </div>

      {/*Que Zone*/}
      <div className="space-y-4 mb-5 border p-3 rounded">
      <h3 className="text-2xl font-bold">Q Zone </h3>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>

    </section>
  );
};

export default RightSiteNav;
