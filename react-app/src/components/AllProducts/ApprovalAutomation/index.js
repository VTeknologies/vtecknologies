import React from "react";
import ProductDetails from "../common";
function ApprovalApp() {
  const a = {
    id: "3",
    key: "approval",
    icon: "assets/apps/approval.jpg",
    name: "Approval Automations",
    platform: "Freshworks",
    description: [
      "Maximize efficiency in your firm by implementing automated approval workflows in Freshdesk",
      "The approval app is the ultimate game-changer for businesses that want to optimize their ticketing solutions like Freshdesk. Say goodbye to tedious, time-consuming manual approval processes, and hello to streamlined and automated approvals.",
      "Our approval app is designed to revolutionize the way businesses handle their approval processes. With just a few clicks, you can set up approval rules based on ticket properties, assign approvers within the Freshdesk ecosystem, and sit back and relax. Our app sends email notifications to the approvers, allowing them to approve or reject requests quickly and efficiently.",
      "We know that sometimes a single approver might not be enough. That's why our app lets you assign multiple approvers to a single rule, and you can choose whether all of them need to approve or just one. It's all up to you.",
      "Give your business the competitive edge it deserves with our approval app.",
    ],
    videolink: "https://www.youtube.com/watch?v=tmYUO4RrstA",
    appurl: "https://www.freshworks.com/apps/approval_automations/",
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

export default ApprovalApp;
