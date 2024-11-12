import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData.json";
export default function AllProductsLayout() {
  let products = [
    {
      id: "1",
      key: "app/todo",
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
    },
    {
      id: "1",
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
      functionality: [
        "Navigate to the Webtab where the extension is conveniently located.",
        "Click on the extension, invoice section appears where all outstanding transactions with customers.Select one or multiple transactions for which you've received a post-dated cheque.",
        "Follow the same steps for the Bills under the Bills TAB of the application.",
        "Click submit, and the information will be captured under the 'Record Payment' section when selecting the relevant customer or vendor.",

        "Within this section, you can effortlessly record received payments, edit dates, or delete entries as needed. A field displays the total receivables and Total payables for major business decisions.",

        "The system ensures that recording a payment will automatically update the status of the corresponding invoice or bill, marking it as paid and reflecting the transaction in the payments received or paid section.",

        "In essence, Zoho Books provides a user-friendly extension to streamline the tracking and management of post-dated cheques, contributing to a more efficient and organized financial workflow for businesses.",
      ],
    },
    {
      id: "1",
      key: "twilio",
      icon: "assets/apps/twilio.jpg",
      name: "Twilio",
      platform: "FreshDesk",
      description: [
        "Enhance your Freshdesk experience by integrating SMS communication through Twilio.",
        "This app empowers you to seamlessly manage customer interactions via SMS, providing a comprehensive support solution",
      ],
      videolink: "https://www.youtube.com/watch?v=qLThSFZjjF0",
      appurl: "https://www.freshworks.com/apps/twilio_pro/",
      installationpprocedures: [
        "1. Twilio Account Setup:",
        "    Ensure you have a paid Twilio account.",
        "    Purchase a Twilio Dedicated Number from this link: https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console.",

        "2. Validate Twilio Account:",
        "    Enter the following details to validate your Twilio account:",
        "        Twilio Phone Number",
        "        Twilio SID",
        "        Twilio Auth Token",
        "    Click 'Verify Twilio Account' to confirm validation.",

        "3. Validate Freshdesk Account:",
        "    Enter the following details to validate your Freshdesk account:",
        "        Freshdesk Domain",
        "        Freshdesk API Key",
        "    Click 'Verify Freshdesk Account' to confirm validation.",

        "4. Configure SMS Templates:",
        "    Set up auto-response SMS for the following events:",
        "        Status Change: Send SMS when a ticket status is updated.",
        "        New Reply/Public Note: Send SMS when a reply or public note is added.",
        "    Create reusable SMS templates for common customer queries.",

        "5. Configure Incoming SMS Settings:",
        "    Define when to generate tickets from incoming SMS messages:",
        "        Automatically generate tickets for all incoming messages.",
        "        Generate tickets based on a specific message format.",

        "6. Setup Webhook URL:",
        "    Copy the Webhook URL from the 'Incoming SMS Settings' tab.",
        "    Paste it in your Twilio phone number’s webhook configuration.",
        "    For detailed instructions, refer to this guide: https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-php#configure-your-twilio-number.",

        "7. Final Step:",
        "    Complete the installation and start using the app to enhance your Freshdesk support with SMS capabilities.",
      ],
      features: [
        "Automatically convert incoming SMS messages into Freshdesk tickets using a Twilio number.",
        "Notify customers about agent replies via SMS. Customers can respond directly by quoting ticket numbers.",
        "Consolidate all customer messages within a specified timeframe into a single ticket.",
        "Use customizable templates for customers to create tickets via SMS.",
        "Freshdesk agents can send MMS attachments to customers.",
        "Send frequently used SMS templates from the ticket sidebar for follow-ups, closures, or additional information requests.",
        "Send automatic SMS notifications when ticket statuses change.",
      ],
    },
  ];
  products=[...productsData.products]
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto"  
    >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.key} className="border border-solid border-gray-200 rounded-lg hover:shadow-lg">
                <Link
                  to={`/${product.key}`}
                  className="group h-auto max-w-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`${process.env.PUBLIC_URL}/${product.icon}`}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-1 text-lg text-gray-700 text-center font-medium">
                    {product.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-gray-900 text-center">
                    {product.platform}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
