import React from "react";
import ProductDetails from "../common";

export default function PDC() {
  const a = {
    id: "2",
    key: "pdc",
    icon: "assets/apps/PDC.jpeg",
    name: "Post Dated Cheques for Zoho Books",
    platform: "Zoho",
    description: [
      "Post-dated cheques serve as a valuable financial tool for proactively planning and managing cash flow in various transactions.",
      " These cheques are issued with a future date, allowing for scheduled payments. It is essential for businesses to keep a meticulous record of both issued and received post-dated cheques in their accounting systems.",
      " In addressing this need, a dedicated extension has been developed to seamlessly manage checks received from customers or issued to vendors.",
    ],
    videolink: "https://www.youtube.com/watch?v=F2JhkMmz2yQ&t=67s",
    appurl: "https://www.freshworks.com/apps/task_master/",
    installationpprocedures: [
      "The Post Dated Cheque for Zoho Books application is live in the marketplace of Zoho and the same can be installed from there.",
      "Navigate to the Webtab where the extension is conveniently located.",
      "Click on the extension, invoice section appears where all outstanding transactions with customers.Select one or multiple transactions for which you've received a post-dated cheque.",
      "Follow the same steps for the Bills under the Bills TAB of the application.",
      "Click submit, and the information will be captured under the 'Record Payment' section when selecting the relevant customer or vendor.",

      "Within this section, you can effortlessly record received payments, edit dates, or delete entries as needed. A field displays the total receivables and Total payables for major business decisions.",

      "The system ensures that recording a payment will automatically update the status of the corresponding invoice or bill, marking it as paid and reflecting the transaction in the payments received or paid section.",

      "In essence, Zoho Books provides a user-friendly extension to streamline the tracking and management of post-dated cheques, contributing to a more efficient and organized financial workflow for businesses.",
    ],
    features: [
      "Track issued and received cheques",

      " Real time reports for both customer received and vendor issued cheques",

      "Automate payment recording in a single click",

      " Activity logs to track any discrepancies",
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
      features={a.features}
    />
  );
}
