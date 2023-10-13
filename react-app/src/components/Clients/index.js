import Wrapper from "../Wrapper/index";

const Clients = () => {
  return (
    <Wrapper>
      <div className="flex justify-content-center gap-x-3">
        <img src="assets/partners/zoho.png" className="w-8 h-8" alt="Zoho" />
        <img
          src="assets/partners/intercom.jpg"
          className="w-8 h-8"
          alt="intercom"
        />
        <img
          src="assets/partners/freshwork.png"
          className="w-8 h-8"
          alt="intercom"
        />
      </div>
    </Wrapper>
  );
};

export default Clients;
