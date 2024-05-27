import React from "react";
import ProductDetails from "../common";

export default function Todo() {
  const a = {
    id: "1",
    key: "todo",
    icon: "assets/apps/todo.jpg",
    name: "Todo",
    platform: "Freshdesk",
    description: [
      "Create your own workflows with custom task lists for managing your tickets.",
      "Businesses always have a set of processes and rules that need to be adhered to in their day to day operations. The Task To do App exclusively built for freshdesk comes in handy to structure this process for a newly joined team member and as well as a seasoned staff.",
    ],
    videolink: "https://www.youtube.com/watch?v=luOrjK2I1rk",
    appurl: "https://www.freshworks.com/apps/task_master/",
    installationpprocedures: [
      "Make sure to install the app from the Freshdesk marketplace.",
      "Open the Todo app from your gallery",
      "Enter the Freshdesk API key and domain URL",
      "All ticket types available for the account is shown",
      "Each ticket type has a section where you can choose to add/remove tasks",
      "You can also choose to closeresolve tickets only after the set tasks are complete by turning on the toggle button",
      "Click Install and you should see the app live in your ticket details page",
    ],
  };
  return (
    <ProductDetails
      key={a.key}
      icon={a.icon}
      name={a.name}
      desc={a.description}
      platform={a.platform}
      videolink={a.videolink}
      appurl={a.appurl}
      installationpprocedures={a.installationpprocedures}
    />
  );
}
