import React from "react";

const ProductDetails = () => {
  return (
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
        <p className="text-5xl font-bold mx-4">Task Todo</p>
      </div>
      <div className="my-9 flex flex-row justify-center items-center">
        <p className="w-7/12  text-lg">
          Create your own workflows with custom task lists for managing your
          tickets. Businesses always have a set of processes and rules that need
          to be adhered to in their day to day operations. The Task To do App
          exclusively built for FreshDesk comes in handy to structure this
          process for a newly joined team member and as well as a seasoned
          staff.
        </p>
        <div className="w-5/12">
          <img
            src={process.env.PUBLIC_URL + "/assets/apps/todo.jpg"}
            alt="Todo app logo"
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-3xl font-bold">Highlights of the App</p>
      <p className="my-5">
        Once the app is installed, the admin of the organization would be able
        to
      </p>
      <div className="flex flex-row justify-center items-center">
        <p className="w-6/12 border-2 border-solid border-slate-900  mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-75 hover:ease-in-out hover:animate-pulse ">
          Add a set of tasks for ticket type or dependent fields that agents
          must complete.
        </p>
        <p className="w-6/12 border-2 border-solid border-slate-900  mx-4 px-10 py-5 rounded-lg  shadow hover:shadow-2xl transition-shadow duration-100 hover:ease-in-out hover:animate-pulse">
          All created tasks that are critical or necessary can be marked as
          mandatory. Agents have to complete them before resolving or closing
          the ticket.
        </p>
      </div>
      <p className="my-5">
        Once the app is configured, inside the ticket details page
      </p>
      <div className="flex flex-col justify-start items-start">
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
      </div>
    </section>
  );
};

export default ProductDetails;
