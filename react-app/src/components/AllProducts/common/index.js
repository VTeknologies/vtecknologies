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
      className="grid max-w-screen-xl mx-auto"
      id="product-details"
    >
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold ">{name}</p>
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
            {features.map((x, i) => (
              <p key={i} className="my-3">
                {x}
              </p>
            ))}
          </p>
        </div>
      )}
      {installationpprocedures && (
        <>
          {" "}
          <p className="text-3xl font-bold">Steps to Install the Extension</p>
          <section className="my-4 pb-10">
            {installationpprocedures.map((x) => (
              <p className="mt-4">{x}</p>
            ))}
          </section>
        </>
      )}

      <div className="flex gap-x-6 mb-14 ">
        <a href={videolink} target="_blank">
          <p className="rounded-lg bg-[#D687EB] px-10 py-5 text-white text-2xl font-semibold">
            Demo link
          </p>
        </a>
        {appurl && (
          <a href={appurl} target="_blank">
            <p className="rounded-lg bg-[#D687EB] px-10 py-5 text-white text-2xl font-semibold ">
              Install Now
            </p>
          </a>
        )}
      </div>
      {functionality && (
        <div>
          <p className="text-3xl font-bold">Functionalites</p>
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
          <p className="text-2xl my-3 font-bold">Bills</p>
          <p className=" text-lg my-3 ">
            The working is similar to that of invoices but her you can manage
            the cheques that you or your firm has issue. The working is
            mentioned below,
          </p>
          <section className="my-2">
            <ol>
              {functionality.bill.map((x, i) => (
                <li className="my-2" key={i}>
                  {`${i + 1}.  ${x}`}
                </li>
              ))}
            </ol>
          </section>
          <p className="text-2xl my-3 font-bold">Record Payments</p>
          <p className=" text-lg my-3 ">
            Record Payment is the place where all the entered data can be see
            for customer under the invoice Cheques and for vendor under the
            Bills Cheques accordingly.
          </p>
          <section className="my-2">
            <ol>
              {functionality.record_payments.map((x, i) => (
                <li className="my-2" key={i}>
                  {`${i + 1}.  ${x}`}
                </li>
              ))}
            </ol>
          </section>
          <p className="text-2xl my-3 font-bold">Paid Reports</p>
          <p className=" text-lg my-3 ">
            This module is specifically to track the invoices and Bills for
            which the payment was recorded from the Post Dated Cheques For Zoho
            Books application. Below is the explanation of the reports this
            module has,
          </p>
          <section className="my-2">
            <ol>
              {functionality.paid_report.map((x, i) => (
                <li className="my-2" key={i}>
                  {`${i + 1}.  ${x}`}
                </li>
              ))}
            </ol>
          </section>
          <p className="text-2xl my-3 font-bold">Activities</p>
          <p className=" text-lg my-3 ">
            Just as the name suggests, this module to track the activities
            happening within the application. Since dealing with cheques is
            crucial, having a track is always beneficial,{" "}
          </p>
          <section className="my-2">
            <ul>
              {functionality.activity.map((x, i) => (
                <li className="my-2" key={i}>
                  {`${i + 1}.  ${x}`}
                </li>
              ))}
            </ul>
          </section>
          <p className=" text-lg my-3 ">
            Hope this document gives you detailed explanation, incase you wish
            to raise any feature request or working of the application, please
            feel free to drop an email to{" "}
            <a
              className=" text-cyan-600"
              href="mailto:support@vtecknologies.com"
            >
              support@vtecknologies.com.
            </a>
          </p>
        </div>
      )}
      {/* <div className="my-5">
        In essence, Zoho Books provides a user-friendly extension to streamline
        the tracking and management of post-dated cheques, contributing to a
        more efficient and organized financial workflow for businesses.
      </div> */}
    </section>
  );
};

export default ProductDetails;
