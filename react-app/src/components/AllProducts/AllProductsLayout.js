import React from "react";

export default function AllProductsLayout() {
  const products = [
    {
      id: "1",
      key: "todo",
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
        "The Post Dated Cheque for Zoho Books application is live in the marketplace of Zoho and the same can be installed from there.",
        "Navigate to the Webtab where the extension is conveniently located.",
        "Click on the extension, invoice section appears where all outstanding transactions with customers.Select one or multiple transactions for which you've received a post-dated cheque.",
        "Follow the same steps for the Bills under the Bills TAB of the application.",
        "Click submit, and the information will be captured under the 'Record Payment' section when selecting the relevant customer or vendor.",

        "Within this section, you can effortlessly record received payments, edit dates, or delete entries as needed. A field displays the total receivables and Total payables for major business decisions.",

        "The system ensures that recording a payment will automatically update the status of the corresponding invoice or bill, marking it as paid and reflecting the transaction in the payments received or paid section.",

        "In essence, Zoho Books provides a user-friendly extension to streamline the tracking and management of post-dated cheques, contributing to a more efficient and organized financial workflow for businesses.",
      ],
    },
  ];
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid max-w-screen-xl mx-auto"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div className="border border-solid border-gray-200 rounded-lg hover:shadow-lg">
                <a
                  key={product.key}
                  href={`/app/${product.key}`}
                  className="group h-auto max-w-full"
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
