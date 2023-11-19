import Wrapper from "../Wrapper/index";

const Clients = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid grid-cols-12 mb-20 max-w-screen-xl mx-auto"
    >
      <div className="flex justify-between items-stretch gap-x-10 w-full mx-auto">
        <img
          src="assets/partners/zoho.png"
          className="w-full h-70"
          alt="Zoho"
        />
        <img
          src="assets/partners/intercom.jpg"
          className="w-100 h-70"
          alt="intercom"
        />
        <img
          src="assets/partners/freshwork.png"
          className="w-100 h-70"
          alt="intercom"
        />
        <img
          src="assets/partners/zendesk.png"
          className="w-100 h-70"
          alt="zendesk"
        />
        <img
          src="assets/partners/freshdesk.png"
          className="w-100 h-70"
          alt="intercom"
        />
      </div>
    </section>
  );
};

export default Clients;
