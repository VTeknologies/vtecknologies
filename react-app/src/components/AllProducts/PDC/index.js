import React from "react";
import ProductDetails from "../common";

export default function PDC() {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid max-w-screen-xl mx-auto"
      >
        <div className="flex flex-row justify-center items-center">
          <img
            className="object-stretch w-12 h-12"
            src={process.env.PUBLIC_URL + "/assets/logo/todo.jpeg"}
            alt=""
            srcset=""
          />
          <p className="text-5xl font-bold mx-4">Post Dated Cheque (PDC)</p>
        </div>
        <div className="my-9 flex justify-center items-center">
          <div className="flex-col">
            <p className="text-lg">
              Track all your issued and received post dated cheques under one
              roof.
              <p className="my-3">
                Post-dated cheques serve as a valuable financial tool for
                proactively planning and managing cash flow in various
                transactions. These cheques are issued with a future date,
                allowing for scheduled payments. It is essential for businesses
                to keep a meticulous record of both issued and received
                post-dated cheques in their accounting systems.
              </p>
            </p>
            <p className=" text-lg my-3">
              In addressing this need, a dedicated extension has been developed
              to seamlessly manage checks received from customers or issued to
              vendors. The process is straightforward:
            </p>
          </div>
          <div className="">
            <img
              src={process.env.PUBLIC_URL + "/assets/apps/scheduler.jpg"}
              alt="PDC app logo"
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-3xl font-bold">Steps to Install the Extension</p>
        <section className="my-4">
          <p className="mt-4">
            1. The Post Dated Cheque for Zoho Books application is live in the
            marketplace of Zoho and the same can be installed from there.
          </p>
          <p className="mt-4">
            2. Once the application is installed yu can access it from Zoho
            Books.
          </p>
          <p className="mt-4">
            3. Navigate to the Webtab where the extension is conveniently
            located.
          </p>
          <p className="mt-4">
            4. Click on the extension, invoice section appears where all
            outstanding transactions with customers.Select one or multiple
            transactions for which you've received a post-dated cheque.
          </p>
          <p className="mt-4">
            5. Follow the same steps for the Bills under the Bills TAB of the
            application.
          </p>
          <p className="mt-4">
            6. Input essential cheque details such as the cheque number and
            date.
          </p>
          <p className="mt-4">
            7. Click submit, and the information will be captured under the
            "Record Payment" section when selecting the relevant customer or
            vendor.
          </p>
          <p className="mt-4">
            8. Within this section, you can effortlessly record received
            payments, edit dates, or delete entries as needed. A field displays
            the total receivables and Total payables for major business
            decisions.
          </p>
          <p className="mt-4">
            9. The system ensures that recording a payment will automatically
            update the status of the corresponding invoice or bill, marking it
            as paid and reflecting the transaction in the payments received or
            paid section.
          </p>
        </section>
        <div className="my-5">
          In essence, Zoho Books provides a user-friendly extension to
          streamline the tracking and management of post-dated cheques,
          contributing to a more efficient and organized financial workflow for
          businesses.
        </div>
        {/* <p className="my-5">
          Once the app is installed, the admin of the organization would be able
          to
        </p> */}
        {/* <div className="flex flex-row justify-center items-center">
          <p className="w-6/12 border-2 border-solid border-slate-900  mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-75 hover:ease-in-out hover:animate-pulse ">
            Add a set of tasks for ticket type or dependent fields that agents
            must complete.
          </p>
          <p className="w-6/12 border-2 border-solid border-slate-900  mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-100 hover:ease-in-out hover:animate-pulse">
            All created tasks that are critical or necessary can be marked as
            mandatory. Agents have to complete them before resolving or closing
            the ticket.
          </p>
        </div> */}
        {/* <p className="my-5">
          Once the app is configured, inside the ticket details page
        </p> */}
        {/* <div className="flex flex-col justify-start items-start">
          <p className="w-full border-2 border-solid border-slate-900 mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-75 hover:ease-in-out hover:animate-pulse mt-5">
            Both agents and admin would be able to see the tasks shown for a
            selected ticket type.
          </p>
          <p className="w-full border-2 border-solid border-slate-900 mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-100 hover:ease-in-out hover:animate-pulse mt-5">
            Agents can refer to the tasks to ensure all steps are followed while
            resolving that particular ticket.
          </p>
          <p className="w-full mt-5 border-2 border-solid border-slate-900 mx-4 px-10 py-5  rounded-lg  shadow hover:shadow-2xl transition-all duration-100 hover:ease-in-out hover:animate-pulse mt-5">
            Agents can refer to the tasks to ensure all steps are followed while
            resolving that particular ticket.
          </p>
        </div> */}
      </section>
      {/* <ProductDetails /> */}
    </>
  );
}
