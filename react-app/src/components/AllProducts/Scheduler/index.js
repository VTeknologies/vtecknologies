import React from "react";
import ProductDetails from "../common";
function Scheduler() {
  const a = {
    id: "4",
    key: "scheduler",
    icon: "assets/apps/scheduler.jpg",
    name: "Ticket Schedules",
    platform: "Freshworks",
    description: [
      "Effortlessly schedule your tickets at regular intervals, making ticket management a breeze.",
      "With the Ticket Schedules App designed for Freshdesk, you can effortlessly schedule your tickets at regular intervals, making ticket management a breeze.",
      "Simply download the app from the marketplace and set it up effortlessly.",
      "Enter your Freshdesk URL and API key during installation to get started.",
      "Once installed, you'll find the app conveniently located in the left panel of your Freshdesk account.",
      " Choose from daily, weekly, or monthly options to schedule your tickets with ease. Customize all ticket fields to create personalized and informative content.",
      "Sit back and relax as the app automatically generates tickets based on your scheduled intervals.",
      "Streamline your ticket management process and enhance your Freshdesk experience with the Fresh Desk Scheduler app. Get started today and stay on top of your ticketing game!",
    ],
    videolink: "https://youtu.be/ZgPGDql1bpg",
    appurl: "https://www.freshworks.com/apps/ticket_schedules_1/",
  };
  return (
    <div>
      {" "}
      <ProductDetails
        key={a.key}
        icon={a.icon}
        name={a.name}
        desc={a.description}
        platform={a.platform}
        videolink={a.videolink}
        appurl={a.appurl}
      />
    </div>
  );
}

export default Scheduler;
