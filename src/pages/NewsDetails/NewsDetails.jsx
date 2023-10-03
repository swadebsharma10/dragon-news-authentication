import { useParams } from "react-router-dom";
import Banner from "../../SharedPages/Banner/Banner";
import Header from "../../SharedPages/Header/Header";
import RightSiteNav from "../../SharedPages/RightSiteNav/RightSiteNav";


const NewsDetails = () => {
    const {id} = useParams();
    return (
        <section>
           <Banner></Banner>
           <Header></Header>
           <h3 className="text-xl font-semibold">Dragon News</h3>
           <div className="grid md:grid-cols-4 gap-5">
            <div className="md:col-span-3 border">
                news details come here {id}
            </div>
            <div className="border">
                <RightSiteNav></RightSiteNav>
            </div>
           </div>
        </section>
    );
};

export default NewsDetails;