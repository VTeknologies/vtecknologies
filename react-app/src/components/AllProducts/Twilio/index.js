import React from "react";
import ProductDetails from "../common";
import "../Twilio/twilio.css"

export default function Twilio() {
    const a = {
        id: "3",
        key: "twilio",
        icon: "assets/apps/twilio.jpg",
        name: "Twilio",
        platform: "FreshDesk",
        description: [
            "Enhance your Freshdesk experience by integrating SMS communication through Twilio.",
            "This app empowers you to seamlessly manage customer interactions via SMS, providing a comprehensive support solution"],
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
            "    Complete the installation and start using the app to enhance your Freshdesk support with SMS capabilities."
          ]
               
        ,        
        features: [
                "Automatically convert incoming SMS messages into Freshdesk tickets using a Twilio number.",
                "Notify customers about agent replies via SMS. Customers can respond directly by quoting ticket numbers.",
                "Consolidate all customer messages within a specified timeframe into a single ticket.",
                "Use customizable templates for customers to create tickets via SMS.",
                "Freshdesk agents can send MMS attachments to customers.",
                "Send frequently used SMS templates from the ticket sidebar for follow-ups, closures, or additional information requests.",
                "Send automatic SMS notifications when ticket statuses change."
            
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
