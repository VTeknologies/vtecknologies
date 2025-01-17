import React from "react";
import ProductDetails from "../common";

export default function Intercom() {
    const a = {
            id: "6",
            key: "intercom",
            icon: "assets/apps/intercom.png",
            name: "Intercom",
            platform: "FreshSales",
            description: [
              "The Freshsales and Intercom Integration App is designed to simplify customer management by automatically synchronizing contact data.",
              "It ensures seamless updates, creation, and deletion of contacts between the two platforms, helping businesses maintain consistent and accurate customer information."
            ],
            videolink: "https://www.youtube.com/watch?v=qLThSFZjjF0",
            appurl: "https://www.freshworks.com/apps/twilio_pro/",
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
