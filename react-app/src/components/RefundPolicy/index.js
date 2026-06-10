const RefundPolicy = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto px-4"
      id="refund-policy"
    >
      <div className="flex-col justify-center col-span-8 text-left mt-8 mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-9 font-extrabold text-[#094067] leading-tight pt-8 text-center">
          Return, Refund & Cancellation Policy
        </h3>

        <div className="mb-6 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32 justify-center mx-auto">
          <div className="mb-4">
            <p className="text-sm text-[#5F6C7B] italic mb-6">Effective Date: June 2, 2026</p>
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Nature of Service</p>
            PDC Tracker is a cloud-based software solution that enables businesses to manage, track, and monitor post-dated cheques, payment schedules, collections, reminders, and related financial workflows. As our services are digital in nature, no physical products are shipped to customers.
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Subscription Cancellation</p>
            Customers may cancel their subscription at any time through their account settings or by contacting our support team. Upon cancellation:
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>The subscription will remain active until the end of the current billing period.</li>
              <li>No future subscription charges will be applied after cancellation.</li>
              <li>Access to paid features may be restricted after the subscription period expires.</li>
              <li>Customer data may be retained for a limited period as described in our Privacy Policy.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Refund Policy</p>
            We strive to provide a reliable and high-quality service. If you are dissatisfied with your purchase, you may request a refund under the following conditions.
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Eligible Refund Requests</p>
            Refund requests may be considered if:
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>The service cannot be accessed due to a verified technical issue.</li>
              <li>The issue is caused by PDC Tracker and cannot be resolved within a reasonable timeframe.</li>
              <li>The refund request is submitted within 7 calendar days of the initial subscription purchase.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Non-Refundable Situations</p>
            Refunds will not be provided for:
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Change of mind after purchase.</li>
              <li>Failure to use the service after successful activation.</li>
              <li>Partial usage of a subscription period.</li>
              <li>Failure to cancel a subscription before renewal.</li>
              <li>User-side technical issues such as browser, device, internet connectivity, or third-party software problems.</li>
              <li>Violation of our Terms and Conditions.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Refund Processing</p>
            Approved refunds will be processed through the original payment method used during purchase. Refunds are generally processed within 7 to 14 business days, depending on the payment provider and banking institution.
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Chargebacks</p>
            Customers are encouraged to contact us before initiating a chargeback. Unauthorized or fraudulent chargebacks may result in account suspension while the matter is investigated.
          </div>

          <div className="mb-4">
            <p className="mb-3 font-bold">Contact for Refunds and Cancellations</p>
            To request a refund or cancel your subscription, please reach out to our support team:
            <br /><br />
            <span className="font-bold">V Tecknologies</span>
            <br />
            Email: <a href="mailto:support@vtecknologies.com" className="text-[#094067] underline">support@vtecknologies.com</a>
            <br />
            Address: 1st floor, No.W 154 F2, 1st Street, Park road, Anna Nagar western extn, Tiruvallur, Tamilnadu-600101
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
