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
      "1. Go to the Zoho Books marketplace and search for the application “Post Dated Cheques for Zoho Books”",
      "2. Click on the application and full pager opens with all the application related information.",
      "3. On the right top corner you will find the Buy Now button below which you will find the “Click here to install Extension” to install and experience the 14days free trial.",
      "4. On click the link, a new page will open where you will be asked to select the organisation which you wish to install the application. This happens only if your Zoho Books account is logged in.",
      "5. If your Zoho Books account is not logged in then you will be requested to login into the account.",
      "6. Once the above step is completed you will have to agree to the terms and condition and click on the next button.",
      "7. The next steps is to authorise the connection, in this new page the Authorisation happens and you can complete by clicking on connect.",
      "8. Now the connection is completed and the last step is to create the authorised connection through Zoho Flow.",
      "9. Click on connect and accept the listed information we wish to access and associate it to the cheques you receive.",
      "10. The installation is completed and you are good to use the our “Post Dated Cheques for Zoho Books” Seamlessly.",
    ],
    features: [
      "Track issued and received cheques",

      " Real time reports for both customer received and vendor issued cheques",

      "Automate payment recording in a single click",

      " Activity logs to track any discrepancies",
    ],
    functionality: {
      invoice: [
        "Click on the extension, invoice section appears by default. ",
        "Selected the customer from whom you have received the a check and immediately you can find all the invoices that are not in the paid status. We have provided the option to select multiple invoices as the chances of receiving one single check for multiple invoices are high.",
        "After selecting the customer and the invoices, you can start entering cheque number, the mentioned amount on the cheque and also the future date.",
        "Once you click on submit you can quickly find the selected invoices displayed below to which you allocate the amount accordingly. Also note that we will throw an error if you enter an amount more than the amount mentioned in the cheque, and also show the balance incase there is any.",
        "Finally click on Submit and we will save the data accordingly.",
      ],
      bill: [
        "Click on the bills tab on the top, the bills section will appear.",
        "Selected the vendor to whom you have issued a check and immediately you can find all the bills that are not in the paid status. We have provided the option to select multiple bills as the chances of receiving one single check for multiple bills is possible.",
        "After selecting the vendor and the bills, you can start entering the cheque number, the mentioned amount on the cheque and also the future date.",
        "Once you click on submit you can quickly find the selected bills displayed below to which you allocate the amount accordingly. Also note that we will throw an error if you enter an amount more than the amount mentioned in the cheque, and also show the balance incase there is any.",
        "Finally click on Submit and we will save the data accordingly. ",
      ],
      record_payments: [
        "Select invoice cheques if you wish to record payments for the invoices and the Bills cheques if you wish to record payment s for the Vendor Bills.",
        "On selecting the customer or vendor all the invoices or bills for which a cheque and the desired amount is allocated will be displayed.",
        "In this place you can edit the entry in case you feel the entered data is wrong or there is a data change request from the customer or vendor.",
        "If all the data is correct, you can click on the pay now button to record the payment. Please note that if a particular cheques is associated to multiple invoices or bills, recording payment for any one of the invoice or bills will automatically record the payment for the other.",
        "On clicking the pay now button you will see a pop up where you can select the bank and the payment method to complete the payment.",
      ],
      paid_report: [
        "Click on the tab and you will find a drop down showing Invoice reports and Bills reports.",
        "Select one of the them for which you wish to take refer the reports",
        "Lets say you want to see the report for customers and hence you select the invoice reports option. On selecting this you will get the option to select the desired Customer from the drop down post which you can see the reports getting displayed below.",
      ],
      activity: [
        "Click on the module and find the option to choose either Invoice or Bills.",
        "Based on the selected option we will display all the activities that has happened within the application. For instance, let’s say, a user has added a particular record or edited a particular record, the report will show who the user was, the activity that was performed, the related customer and transaction ID and finally the date of the activity.",
      ],
    },
  };
  return (
    <ProductDetails
      key={a.key}
      icon={a.icon}
      name={a.name}
      desc={a.description}
      platform={a.platform}
      videolink={a.videolink}
      // appurl={a.appurl}
      installationpprocedures={a.installationpprocedures}
      features={a.features}
      functionality={a.functionality}
    />
  );
}
