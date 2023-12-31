import Wrapper from "../Wrapper/index";

const Clients = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid mb-20 max-w-screen-xl mx-auto"
    >
      <div className="flex justify-center w-full mb-10 mt-20  md:flex md:justify-between">
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/zoho.png"}
          className="h-10"
          alt="Zoho"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/intercom.jpg"}
          className="h-10"
          alt="intercom"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/freshwork.png"}
          className="h-10"
          alt="intercom"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/zendesk.png"}
          className="h-10"
          alt="zendesk"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/partners/freshdesk.png"}
          className="h-10"
          alt="intercom"
        />
      </div>
    </section>
  );
};

export default Clients;
