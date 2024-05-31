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
      "1.Go to the Zoho Books marketplace and search for the application “Post Dated Cheques for Zoho Books”",
      "2.Click on the application and full pager opens with all the application related information.",
      "3.On the right top corner you will find the Buy Now button below which you will find the “Click here to install Extension” to install and experience the 14days free trial.",
      "4.On cluck the link, a new page will open where you will be asked to select the organisation ion which you wish to install the application. This happens only if your Zoho Books account is logged in.",
      "5.If your Zoho Books account is not logged in then you will be requested to login into the account.",
      "6.Once the above step is completed you will have to agree to the terms and condition and click on the next button.",
      "7.The next steps is to authorise the connection, in this new page the Authorisation happens and you can complete by clicking on connect.",
      "8.Now the connection is completed and the last step is to create the authorised connection through Zoho Flow.",
      "9.Click on connect and accept the listed information we wish to access and associate it to the cheques you receive.",
      "10.The installation is completed and you are good to use the our “Post Dated Cheques for Zoho Books” Seamlessly.",
    ],
    features: [
      "Track issued and received cheques",

      " Real time reports for both customer received and vendor issued cheques",

      "Automate payment recording in a single click",

      " Activity logs to track any discrepancies",
    ],
    functionality: [
      "Navigate to the Webtab where the extension is conveniently located.",
      "Click on the extension, invoice section appears where all outstanding transactions with customers.Select one or multiple transactions for which you've received a post-dated cheque.",
      "Follow the same steps for the Bills under the Bills TAB of the application.",
      "Click submit, and the information will be captured under the 'Record Payment' section when selecting the relevant customer or vendor.",

      "Within this section, you can effortlessly record received payments, edit dates, or delete entries as needed. A field displays the total receivables and Total payables for major business decisions.",

      "The system ensures that recording a payment will automatically update the status of the corresponding invoice or bill, marking it as paid and reflecting the transaction in the payments received or paid section.",

      "In essence, Zoho Books provides a user-friendly extension to streamline the tracking and management of post-dated cheques, contributing to a more efficient and organized financial workflow for businesses.",
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
      functionality={a.functionality}
    />
  );
}
