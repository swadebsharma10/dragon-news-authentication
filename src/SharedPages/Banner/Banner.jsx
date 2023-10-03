import moment from 'moment/moment';
import logo from '../../assets/logo.png';

const Banner = () => {
    return (
        <section  className='py-3'>
           <div className='text-center'>
          <p> <img className='mx-auto' src={logo} alt="" /> </p>
          <h3  className='text-red-400 font-bold'> Journalism Without Fear or Favour</h3>
          <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
           </div>
        </section>
    );
};

export default Banner;