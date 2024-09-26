import React from "react";
import ProductDetails from "../../AllProducts/common";
function StickyNotes() {
  const a = {
    id: "4",
    key: "stickynotes",
    icon: "assets/apps/stickynotes.jpg",
    name: "Sticky Notes",
    platform: "Freshworks",
    description: [
      "A hub for agents to effortlessly drop notes, highlight crucial comments, and assign action items.",
      "Introducing our innovative Sticky Notes app for Freshdesk, designed to address the common challenges faced by customer support agents when managing lengthy customer conversations and tickets.",
      "Our app serves as a convenient hub for agents to effortlessly drop notes, highlight crucial comments, and assign action items, significantly enhancing internal communication and organization.",
    ],
    features: [
      "Effortless Note-Taking: With the Sticky Notes app, agents can seamlessly jot down important information, ensuring that critical details are always at their fingertips.",

      "Pin Essential Comments: Amidst a barrage of customer comments, agents can pin vital notes and comments, ensuring that they are prominently displayed for easy reference.",

      " Editable Notes: The ability to edit notes empowers agents to keep information relevant and up-to-date, benefitting both the current agent and any future team members handling the same ticket or issue.",

      " All infoPrioritization: Pinning notes allows agents to prioritize criticrmation, guaranteeing that it remains in the spotlight, reducing the risk of overlooking crucial details.",
    ],
    videolink: "https://youtu.be/Ofex-tAZufU",
    appurl: "https://www.freshworks.com/apps/sticky_notes_1/",
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
        features={a.features}
      />
    </div>
  );
}

export default StickyNotes;
