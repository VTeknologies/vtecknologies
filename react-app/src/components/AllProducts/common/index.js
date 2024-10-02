import React from "react";

const ProductDetails = ({
  icon,
  name,
  desc,
  videolink,
  appurl,
  installationpprocedures,
  features,
  functionality,
}) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl p-4 mx-auto"
      id="product-details"
    >
      <div className="flex justify-center items-left">
        <p className="text-4xl lg:text-5xl md:text-5xl items-left font-bold ">{name}</p>
      </div>
      <div className="mt-9 flex flex-col md:flex-row justify-center items-left">
        <div className="flex-col w-full">
          <p className="text-lg">
            {desc.map((x, index) => (
              <p key={index} className="my-3">
                {x}
              </p>
            ))}
          </p>
        </div>
        <div className="w-full  lg:w-[40%] lg:h-[250px] flex justify-center mt-6 md:mt-0">
          <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={name} className="max-w-full" />
        </div>
      </div>

      {features && (
        <div className="flex-col mb-10">
          <p className="text-3xl font-bold">Key Features</p>
          <p className="text-lg">
            {features.map((x, i) => (
              <p key={i} className="my-3">
                {x}
              </p>
            ))}
          </p>
        </div>
      )}

      {installationpprocedures && (
        <div>
          <p className="text-3xl font-bold">Steps to Install the Extension</p>
          <section className="my-4 pb-10">
            {installationpprocedures.map((x, index) => (
              <p className="mt-4" key={index}>
                {name === "Twilio" ?
                  x.startsWith("1.") ||
                    x.startsWith("2.") ||
                    x.startsWith("3.") ||
                    x.startsWith("4.") ||
                    x.startsWith("5.") ||
                    x.startsWith("6.") ||
                    x.startsWith("7.") ? (
                    <b>{x}</b>
                  ) : (
                    <>
                      {x.includes("https://") ? (
                        <>
                          <span>{x.split("https://")[0]}</span>
                          <a
                            href={`https://${x.split("https://")[1]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-blue-500"
                          >
                            {`https://${x.split("https://")[1]}`}
                          </a>

                        </>
                      ) : (
                        <span>{x}</span>
                      )}
                    </>
                  ):x}
              </p>
            ))}
          </section>
        </div>
      )}

      <div className="flex gap-x-6 mb-14">
        <a href={videolink} target="_blank" className="w-full sm:w-auto">
          <p className="rounded-lg bg-[#D687EB] px-3 py-1 lg:px-6 lg:py-3 md:px-6 md:py-3  text-white text-xl font-semibold text-center">
            Demo link
          </p>
        </a>
        {appurl && (
          <a href={appurl} target="_blank" className="w-full sm:w-auto">
            <p className="rounded-lg bg-[#D687EB] px-3 py-1 lg:px-6 lg:py-3 md:px-6 md:py-3 text-white text-xl font-semibold text-center">
              Install Now
            </p>
          </a>
        )}
      </div>
      {functionality && (
        <div>
          <p className="text-3xl font-bold">Functionalities</p>
          <p className=" text-lg my-3 ">
            Install the application as mentioned in the steps above.
          </p>
          <p className="text-2xl my-3 font-bold">Invoices</p>

          <section className="my-2">
            <ol>
              {functionality.invoice.map((x, i) => (
                <li className="my-2" key={i}>
                  {`${i + 1}.  ${x}`}
                </li>
              ))}
            </ol>
          </section>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
