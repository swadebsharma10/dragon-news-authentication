import Banner from "../../SharedPages/Banner/Banner";
import Header from "../../SharedPages/Header/Header";
import LeftSideNav from "../../SharedPages/LeftSiteNav/LeftSideNav";
import RightSiteNav from "../../SharedPages/RightSiteNav/RightSiteNav";
import BreakingNews from "../../components/BreakingNews/BreakingNews";


const Home = () => {
    return (
        <section>
         <Banner></Banner>
         <BreakingNews></BreakingNews>
         <Header></Header>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     <div className="border">
         <LeftSideNav></LeftSideNav>
      </div>
      <div className="md:col-span-2 border">
        <h3 className="text-4xl text-red-600">News Coming Soon</h3>
      </div>
      <div className="border">
         <RightSiteNav></RightSiteNav>
      </div>
         </div>
         
        </section>
    );
};

export default Home;