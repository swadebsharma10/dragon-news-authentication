import { useLoaderData } from "react-router-dom";
import Banner from "../../SharedPages/Banner/Banner";
import Header from "../../SharedPages/Header/Header";
import LeftSideNav from "../../SharedPages/LeftSiteNav/LeftSideNav";
import RightSiteNav from "../../SharedPages/RightSiteNav/RightSiteNav";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import NewsCard from "../../components/NewsCard/NewsCard";


const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews)


    return (
        <section>
         <Banner></Banner>
         <BreakingNews></BreakingNews>
         <Header></Header>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     <div className="">
         <LeftSideNav></LeftSideNav>
      </div>
      <div className="md:col-span-2 ">
        <div>
         {
          allNews.map(news => <NewsCard
            key={news._id}
            news={news}
            ></NewsCard>)  
         }
        </div>
      </div>
      <div className="">
         <RightSiteNav></RightSiteNav>
      </div>
         </div>
         
        </section>
    );
};

export default Home;