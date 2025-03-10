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
      id: "3",
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
    // {
    //   id: "4",
    //   key: "simplepay",
    //   icon: "assets/apps/simplepay.png",
    //   name: "SimplePay",
    //   platform: "Zoho",
    //   description: [
    //     "The SimplePay Integration App for Zoho Books is designed to streamline the payroll process by synchronizing payroll data and automating journal entries.",
    //     "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities."
    //   ],
    //   videolink: "https://www.youtube.com/watch?v=qLThSFZjjF0",
    //   appurl: "https://www.freshworks.com/apps/twilio_pro/",
    //   installationpprocedures: [
    //     "1. Ensure you have an active SimplePay account.",
    //     "2. Retrieve your SimplePay API Key from your SimplePay account settings. Go to the simpay account, click on your Profile Icon at the top-right corner of the page.",
    //     "3. From the dropdown, select Manage Users.In the Manage Users section, click on the option to Add API User.",
    //     "4. Enter the API User Name and API User Email in the respective fields.",
    //     "5. After filling in the details, click Save.Once you save, an API Key will be generated for the new API user.",
    //     "6. Copy the API Key immediately as it will be displayed only once.",
    //     "7. Remember, after you exit the API user creation page, you will not be able to retrieve the API Key again. Ensure that you save the API Key somewhere secure.",
    //     "8. After clicking the Next button during the installation of the SimplePay Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both SimplePay and Zoho Books.",
    //     "9. Click the simple pay connection connect button, You will be prompted to enter your SimplePay API Key, then click connect. This key is crucial for establishing a secure connection between SimplePay and the app.",
    //     "10. Similar to SimplePay, connect the zohobook connection.",
    //     "11. Once both connections (SimplePay and Zoho Books) are authenticated, the app will confirm that both systems are securely connected.",
    //     "12. After both connections are established, you will be presented with a final step to install the SimplePay Integration App.Click on the Install button to begin the installation process.",
    //     "13. Once installed, the SimplePay Integration App will appear on your Zoho Books Widget."
    //   ],
    //   features: [
    //     "Seamless Payroll Data Synchronization-Automatically sync payroll data between SimplePay and Zoho Books, ensuring accurate and up-to-date financial records.",
    //     "Effortless Journal Entry Creation-Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
    //     "Mapping of Payroll Accounts-Easily map SimplePay payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
    //     "Real-time Financial Reporting-Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
    //     "Automated Expense Recording-Automate the recording of net pay, streamlining your payroll accounting process."
    //   ]
    // },
    // {
    //   id: "5",
    //   key: "payspace",
    //   icon: "assets/apps/payspace.png",
    //   name: "Payspace",
    //   platform: "Zoho",
    //   description: [
    //     "This ensures that your payroll data is seamlessly synchronized between Payspace and Zoho Books, facilitating accurate payroll accounting and journal creation.",
    //     "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities."
    //   ],
    //   videolink: "https://youtu.be/vHplfKYEBjI",
    //   appurl: "https://www.freshworks.com/apps/freshsales_intercom_integration/",
    //   installationpprocedures: [
    //     "1. Ensure you have an active Payspace account.",
    //     "2. Go to the Zoho Books Marketplace and search for the application “Payspace Integration for Zoho Books.",
    //     "3. Click on the application to open a detailed page with all the relevant information about the app.",
    //     "4. On the top-right corner, you will find the “Install” button to begin the installation process.",
    //     "5. Upon clicking the install link, a new page will open. If your Zoho Books account is logged in, you will be prompted to select the organization where you wish to install the app.",
    //     "6. If your Zoho Books account is not logged in, you will be asked to log in first to continue with the installation.",
    //     "7. Once logged in, review and agree to the terms and conditions, then click the “Next” button to proceed.",
    //     "8. After clicking the Next button during the installation of the Payspace Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both Payspace and Zoho Books.",
    //     "9. Click the Payspace connection button,  You will be redirected to the Payspace login page, where you can log in and authorize the connection.",
    //     "10. Similarly, authenticate and connect your Zoho Books account.",
    //     "11. Once authorized, Payspace will provide the necessary credentials, and Similarly, authenticate and connect your Zoho Books account.",
    //     "12. The app will confirm that both systems are securely connected once the authorization is complete.",
    //     "13. After both connections are established, you will be presented with a final step to install the Payspace Integration App. Click on the Install button to begin the installation process.",
    //     "14. Once installed, the Payspace Integration App will appear on your Zoho Books widget."
    //   ],
    //   features: [
    //     "Seamless Payroll Data Synchronization: Automatically sync payroll data between Payspace and Zoho Books, ensuring accurate and up-to-date financial records.",
    //     "Effortless Journal Entry Creation: Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
    //     "Mapping of Payroll Accounts: Easily map Payspace payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
    //     "Real-time Financial Reporting: Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
    //     "Automated Expense Recording: Automate the recording of net pay, streamlining your payroll accounting process."
    //   ]
    // },
    {
      id: "6",
      key: "intercom",
      icon: "assets/apps/intercom.png",
      name: "Intercom",
      platform: "FreshSales",
      description: [
        "The Freshsales and Intercom Integration App is designed to simplify customer management by automatically synchronizing contact data.",
        "It ensures seamless updates, creation, and deletion of contacts between the two platforms, helping businesses maintain consistent and accurate customer information."
      ],
      videolink: "https://youtu.be/vHplfKYEBjI",
      appurl: "https://www.freshworks.com/apps/freshsales_intercom_integration/",
      installationpprocedures: [
        "1. Log in to Intercom:",
        "Visit the Intercom website and log in with your credentials.",

        "2. Access the Developer Hub:",
        "After logging in, click on Settings, then go to Integrations. From there, navigate to the Developer Hub, where you can manage your Intercom apps.",

        "3. Create or Select an App:",
        "If you don’t already have an app, click on Create App, give it a name, and either create a new workspace or select an existing one. Then, click Create App to finalize the process.",
        "If you already have an app, find your app in the list and click on it to proceed.",

        "4. Locate the Test and Publish Option:",
        "After creating the app or selecting an existing one, the system will usually redirect you to the app's page.",
        "If the redirect doesn’t happen, simply find your app in the list and click on it to open the app’s settings page.",
        "Once you're on the app’s page, look at the left-hand menu for the Test and Publish option.",


        "5. Copy the Access Token:",
        "In the Test and Publish section, you’ll find your workspace details, including the Access Token. Copy the token for use in your integration.",

        "6.  Access Token Not Visible:",
        "If the token is not visible, look for the Install App option next to the workspace name. Click on Install App, and once the app is installed, you will be able to see the workspace's Access Token. Copy this token for your integration.",
        "7. Installation:",
        "Log in to your Freshsales account, then go to the Freshsales Marketplace, find the Intercom Integration app, and click Install.",
        "The app will ask for your Freshsales API key, Freshsales URL, and Intercom access token. Enter the credentials and click Verify Your Account. Your credentials will be secured.",
        "Once you verify your account, the app will prompt you to map the fields between Freshsales and Intercom. Ensure that the Freshsales email is mapped to the Intercom email field, as this is mandatory.",
        "Additionally, map fields such as phone, name, and company. After mapping the fields, click Install, and the app will be successfully installed in your Freshsales application.",
        "Now, click on App Settings and then Edit Settings. The field mapping page will be displayed with the correct mapped values populated.",
        "You will see an option to Click to Copy the Webhook near the Edit Credentials button at the top of the field mapping. Click on it to copy the webhook.",
        "After that, make sure to click Save, otherwise, your app will not work.",

        "8. Webhook Setup:",
        "Once you copy the webhook, go to Intercom, find your app, and open it.",
        "On the left side of the app, you will see the Configure option. Click on it, then click the Webhook button.",
        "Paste the copied webhook into the Endpoint URL field. This webhook will be used to trigger events whenever you create, edit, update, or attach a company.",
        "After pasting the webhook, you can assign permissions to the app, such as:",
        "    company.contact.attached, company.contact.detached, company.created, company.deleted, contact.deleted, contact.email.updated, contact.lead.added_email, contact.lead.created, contact.lead.updated, contact.lead.tag.deleted, contact.user.tag.created, contact.user.created, contact.user.updated, contact.user.tag.deleted.",
        "Once you select the topics, click Save.",
        "Now, your app is ready for contact sync."
      ],
      features: [
        "Automatic Contact Creation: When a contact is created in Freshsales or Intercom, it is automatically added to the other platform.",
        "Real-Time Updates: Changes to contact details, including names, emails, or phone numbers, are instantly synchronized.",
        "Contact Deletion: Deleting a contact in one system removes it from the other to ensure data accuracy.",
        "Company Attachment: Links contacts to their associated companies during synchronization, ensuring complete and structured data transfer.",
        "Improved Data Management: Reduces manual effort, eliminates data duplication, and ensures smooth customer management workflows."
      ],
    }

  ];
  products = [...productsData.products]
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




// {
//   "id": "7",
//   "key": "simplepay",
//   "icon": "assets/apps/simplepay.png",
//   "name": "SimplePay",
//   "platform": "Zoho",
//   "description": [
//     "The SimplePay Integration App for Zoho Books is designed to streamline the payroll process by synchronizing payroll data and automating journal entries.",
//     "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities."
//   ],
//   "videolink": "https://www.youtube.com/watch?v=qLThSFZjjF0",
//   "appurl": "https://www.freshworks.com/apps/twilio_pro/",
//   "installationpprocedures": [
//     "1. Ensure you have an active SimplePay account.",
//     "2. Retrieve your SimplePay API Key from your SimplePay account settings. Go to the simpay account, click on your Profile Icon at the top-right corner of the page.",
//     "3. From the dropdown, select Manage Users.In the Manage Users section, click on the option to Add API User.",
//     "4. Enter the API User Name and API User Email in the respective fields.",
//     "5. After filling in the details, click Save.Once you save, an API Key will be generated for the new API user.",
//     "6. Copy the API Key immediately as it will be displayed only once.",
//     "7. Remember, after you exit the API user creation page, you will not be able to retrieve the API Key again. Ensure that you save the API Key somewhere secure.",
//     "8. After clicking the Next button during the installation of the SimplePay Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both SimplePay and Zoho Books.",
//     "9. Click the simple pay connection connect button, You will be prompted to enter your SimplePay API Key, then click connect. This key is crucial for establishing a secure connection between SimplePay and the app.",
//     "10. Similar to SimplePay, connect the zohobook connection.",
//     "11. Once both connections (SimplePay and Zoho Books) are authenticated, the app will confirm that both systems are securely connected.",
//     "12. After both connections are established, you will be presented with a final step to install the SimplePay Integration App.Click on the Install button to begin the installation process.",
//     "13. Once installed, the SimplePay Integration App will appear on your Zoho Books Widget."
//   ],
//   "features": [
//     "Seamless Payroll Data Synchronization-Automatically sync payroll data between SimplePay and Zoho Books, ensuring accurate and up-to-date financial records.",
//     "Effortless Journal Entry Creation-Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
//     "Mapping of Payroll Accounts-Easily map SimplePay payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
//     "Real-time Financial Reporting-Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
//     "Automated Expense Recording-Automate the recording of net pay, streamlining your payroll accounting process."
//   ]
// },
// {
//   "id": "8",
//   "key": "payspace",
//   "icon": "assets/apps/payspace.png",
//   "name": "Payspace",
//   "platform": "Zoho",
//   "description": [
//     "This ensures that your payroll data is seamlessly synchronized between Payspace and Zoho Books, facilitating accurate payroll accounting and journal creation.",
//     "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities."
//   ],
//   "videolink": "https://www.youtube.com/watch?v=qLThSFZjjF0",
//   "appurl": "https://www.freshworks.com/apps/twilio_pro/",
//   "installationpprocedures": [
//     "1. Ensure you have an active Payspace account.",
//     "2. Go to the Zoho Books Marketplace and search for the application “Payspace Integration for Zoho Books.",
//     "3. Click on the application to open a detailed page with all the relevant information about the app.",
//     "4. On the top-right corner, you will find the “Install” button to begin the installation process.",
//     "5. Upon clicking the install link, a new page will open. If your Zoho Books account is logged in, you will be prompted to select the organization where you wish to install the app.",
//     "6. If your Zoho Books account is not logged in, you will be asked to log in first to continue with the installation.",
//     "7. Once logged in, review and agree to the terms and conditions, then click the “Next” button to proceed.",
//     "8. After clicking the Next button during the installation of the Payspace Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both Payspace and Zoho Books.",
//     "9. Click the Payspace connection button,  You will be redirected to the Payspace login page, where you can log in and authorize the connection.",
//     "10. Similarly, authenticate and connect your Zoho Books account.",
//     "11. Once authorized, Payspace will provide the necessary credentials, and Similarly, authenticate and connect your Zoho Books account.",
//     "12. The app will confirm that both systems are securely connected once the authorization is complete.",
//     "13. After both connections are established, you will be presented with a final step to install the Payspace Integration App. Click on the Install button to begin the installation process.",
//     "14. Once installed, the Payspace Integration App will appear on your Zoho Books widget."
//   ],
//   "features": [
//     "Seamless Payroll Data Synchronization: Automatically sync payroll data between Payspace and Zoho Books, ensuring accurate and up-to-date financial records.",
//     "Effortless Journal Entry Creation: Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
//     "Mapping of Payroll Accounts: Easily map Payspace payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
//     "Real-time Financial Reporting: Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
//     "Automated Expense Recording: Automate the recording of net pay, streamlining your payroll accounting process."
//   ]
// },