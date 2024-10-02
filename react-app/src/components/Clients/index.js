import Wrapper from "../Wrapper/index";

const Clients = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid mb-10 mt-10 max-w-screen-xl mx-auto p-4"
    >
      <div className="w-full grid grid-cols-2 gap-4 md:flex md:justify-between md:gap-0">
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/zoho.png"}
          className="h-10 sm:p-1"  
          alt="Zoho"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/intercom.jpg"}
          className="h-10 sm:p-1"  
          alt="Intercom"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/freshwork.png"}
          className="h-10 sm:p-1"  
          alt="Freshwork"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/zendesk.png"}
          className="h-10 sm:p-1"  
          alt="Zendesk"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/freshdesk.png"}
          className="h-12 sm:p-1"  
          alt="Freshdesk"
        />
      </div>
    </section>
  );
};

export default Clients;
