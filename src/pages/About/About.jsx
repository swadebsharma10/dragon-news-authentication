import Header from "../../SharedPages/Header/Header";


const About = () => {
    return (
        <section>
        <Header></Header>
        <div className="h-[80vh] flex justify-center items-center">
         <div className="text-center">
         <h3 className="text-3xl text-primary underline">About</h3> 
         <h2 className="text-2xl font-bold text-purple-500">Dragon News.Org</h2> 
         <p>Author: Dr. Dragon </p> 
         <p>Email: dragonnews@Gmail.com</p>
         </div>

        </div>
        </section>
    );
};

export default About;