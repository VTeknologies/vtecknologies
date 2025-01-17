import React from "react";
import ProductDetails from "../common";

export default function Payspace() {
    const a = {
            id: "1",
            key: "payspace",
            icon: "assets/apps/payspace.png",
            name: "Payspace",
            platform: "Zoho",
            description: [
              "This ensures that your payroll data is seamlessly synchronized between Payspace and Zoho Books, facilitating accurate payroll accounting and journal creation.",
              "It ensures a smooth flow of payroll-related accounting, making it easier for businesses to manage employee payments and liabilities."
            ],
            videolink: "https://www.youtube.com/watch?v=qLThSFZjjF0",
            appurl: "https://www.freshworks.com/apps/twilio_pro/",
            installationpprocedures: [
              "1. Ensure you have an active Payspace account.",
              "2. Go to the Zoho Books Marketplace and search for the application “Payspace Integration for Zoho Books.",
              "3. Click on the application to open a detailed page with all the relevant information about the app.",
              "4. On the top-right corner, you will find the “Install” button to begin the installation process.",
              "5. Upon clicking the install link, a new page will open. If your Zoho Books account is logged in, you will be prompted to select the organization where you wish to install the app.",
              "6. If your Zoho Books account is not logged in, you will be asked to log in first to continue with the installation.",
              "7. Once logged in, review and agree to the terms and conditions, then click the “Next” button to proceed.",
              "8. After clicking the Next button during the installation of the Payspace Integration App for Zoho Books, you will be prompted to the Authorization Page, where you need to authenticate and establish secure connections with both Payspace and Zoho Books.",
              "9. Click the Payspace connection button,  You will be redirected to the Payspace login page, where you can log in and authorize the connection.",
              "10. Similarly, authenticate and connect your Zoho Books account.",
              "11. Once authorized, Payspace will provide the necessary credentials, and Similarly, authenticate and connect your Zoho Books account.",
              "12. The app will confirm that both systems are securely connected once the authorization is complete.",
              "13. After both connections are established, you will be presented with a final step to install the Payspace Integration App. Click on the Install button to begin the installation process.",
              "14. Once installed, the Payspace Integration App will appear on your Zoho Books widget."
            ],
            features: [
              "Seamless Payroll Data Synchronization: Automatically sync payroll data between Payspace and Zoho Books, ensuring accurate and up-to-date financial records.",
              "Effortless Journal Entry Creation: Automatically generate journal entries for payroll expenses, taxes, liabilities, and net pay with a single click, reducing manual entry errors.",
              "Mapping of Payroll Accounts: Easily map Payspace payroll categories (e.g., salary expenses, taxes) to the corresponding accounts in Zoho Books for accurate bookkeeping.",
              "Real-time Financial Reporting: Instantly generate real-time reports for payroll-related transactions, allowing for quick insights into your payroll expenses and liabilities.",
              "Automated Expense Recording: Automate the recording of net pay, streamlining your payroll accounting process."
            ]
    }
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
