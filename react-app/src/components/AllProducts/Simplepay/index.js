import React from "react";
import ProductDetails from "../common";

export default function SimplePay() {
  const a = {
    id: "1",
    key: "simplepay",
    icon: "assets/apps/simplepay.png",
    name: "SimplePay",
    platform: "Zoho",
    description: [
      "The SimplePay Integration App for Zoho Books is designed to streamline the payroll process by synchronizing payroll data and automating journal entries.",
      "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities.",
    ],
    videolink: "https://youtu.be/MHqqdiRyNDY",
    appurl:
      "https://marketplace.zoho.com/app/books/post-dated-cheque-for-zoho-books",
    installationpprocedures: [
      "1. Ensure you have an active SimplePay account.",
      "2. Retrieve your SimplePay API Key from your SimplePay account settings. Go to the simpay account, click on your Profile Icon at the top-right corner of the page.",
      "3. From the dropdown, select Manage Users.In the Manage Users section, click on the option to Add API User.",
      "4. Enter the API User Name and API User Email in the respective fields.",
      "5. After filling in the details, click Save.Once you save, an API Key will be generated for the new API user.",
      "6. Copy the API Key immediately as it will be displayed only once.",
      "7. Remember, after you exit the API user creation page, you will not be able to retrieve the API Key again. Ensure that you save the API Key somewhere secure.",
      "8. After clicking the Next button during the installation of the SimplePay Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both SimplePay and Zoho Books.",
      "9. Click the simple pay connection connect button, You will be prompted to enter your SimplePay API Key, then click connect. This key is crucial for establishing a secure connection between SimplePay and the app.",
      "10. Similar to SimplePay, connect the zohobook connection.",
      "11. Once both connections (SimplePay and Zoho Books) are authenticated, the app will confirm that both systems are securely connected.",
      "12. After both connections are established, you will be presented with a final step to install the SimplePay Integration App.Click on the Install button to begin the installation process.",
      "13. Once installed, the SimplePay Integration App will appear on your Zoho Books Widget.",
    ],
    features: [
      "Seamless Payroll Data Synchronization-Automatically sync payroll data between SimplePay and Zoho Books, ensuring accurate and up-to-date financial records.",
      "Effortless Journal Entry Creation-Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
      "Mapping of Payroll Accounts-Easily map SimplePay payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
      "Real-time Financial Reporting-Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
      "Automated Expense Recording-Automate the recording of net pay, streamlining your payroll accounting process.",
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
