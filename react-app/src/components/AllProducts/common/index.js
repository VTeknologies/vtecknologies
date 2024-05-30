import React from "react";

const ProductDetails = ({
  key,
  icon,
  name,
  desc,
  platform,
  videolink,
  appurl,
  installationpprocedures,
  features,
}) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto"
    >
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold mx-4">{name}</p>
      </div>
      <div className="mt-9 flex justify-center place-content-between  items-center">
        <div className="flex-col">
          <p className="text-lg">
            {desc.map((x) => (
              <p className="my-3">{x}</p>
            ))}
          </p>
        </div>
        <div className="w-4/5">
          <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={name} />
        </div>
      </div>
      {features && (
        <div className="flex-col mb-10">
          <p className="text-3xl font-bold">Key Features</p>
          <p className="text-lg">
            {features.map((x) => (
              <p className="my-3">{x}</p>
            ))}
          </p>
        </div>
      )}
      <div className="flex gap-x-6 mb-14 ">
        <a href={videolink} target="_blank">
          <p className="rounded-lg bg-[#D687EB] px-10 py-5 text-white text-2xl font-semibold">
            Demo link
          </p>
        </a>
        <a href={appurl} target="_blank">
          <p className="rounded-lg bg-[#D687EB] px-10 py-5 text-white text-2xl font-semibold ">
            Install Now
          </p>
        </a>
      </div>
      <p className="text-3xl font-bold">Steps to Install the Extension</p>
      <section className="my-4">
        {installationpprocedures.map((x) => (
          <p className="mt-4">{`* ${x}`}</p>
        ))}
      </section>
      {/* <div className="my-5">
        In essence, Zoho Books provides a user-friendly extension to streamline
        the tracking and management of post-dated cheques, contributing to a
        more efficient and organized financial workflow for businesses.
      </div> */}
    </section>
  );
};

export default ProductDetails;
