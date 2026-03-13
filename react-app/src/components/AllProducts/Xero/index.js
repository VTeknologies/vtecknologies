import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PlatformBadge from "../../PlatformBadge";
import RelatedProducts from "../../RelatedProducts";
import useSEO from "../../../hooks/useSEO";
import productsData from "../productsData.json";
import hsConnectImg from "./screenshots/hs-connect.png";
import xeroConnectImg from "./screenshots/xero-connect.png";
import fiveTabsImg from "./screenshots/fiveTabs.png";
import xeroInvoiceCardImg from "./screenshots/invoice-card.png";
import xeroContactCardImg from "./screenshots/contact-card.png";
import contactTab from "./screenshots/contact-tab.png";
import productsTab from "./screenshots/products-tab.png";
import invoicesTab from "./screenshots/invoices-tab.png";
import logsTab from "./screenshots/logs-tab.png";
import contactSidebar from "./screenshots/contact-sidebar.png";
import contactBeforeSync from "./screenshots/contact-before.png";
import contactAfterSync from "./screenshots/contact-after.png";
import invoiceSummary from "./screenshots/contact-inv-summary.png";
import invoiceHeader from "./screenshots/deal-inv-header.png";
import invoiceLineItems from "./screenshots/deal-inv-items.png";
import invoicePreview from "./screenshots/deal-inv-preview.png";
import invoiceDraft from "./screenshots/deal-inv-draft.png";
import dealSidebar from "./screenshots/deal-sidebar.png";
import invoiceEdit from "./screenshots/deal-inv-edit.png";
import invoiceApprove from "./screenshots/deal-inv-approve.png";
import invoiceSend from "./screenshots/deal-inv-send.png";
import invoiceClone from "./screenshots/deal-inv-clone.png";
import invoiceVoid from "./screenshots/deal-inv-void.png";
import invoiceHistory from "./screenshots/deal-inv-history.png";

const Screenshot = ({ label }) => (
  <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex items-center justify-center min-h-[220px] w-full">
    <p className="text-gray-400 text-sm text-center px-4">
      [Screenshot: {label}]
    </p>
  </div>
);

const StepNumber = ({ n }) => (
  <span className="w-8 h-8 bg-[#D687EB] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
    {n}
  </span>
);

export default function Xero() {
  const product = productsData.products.find((p) => p.key === "xero");
  const [showInstallation, setShowInstallation] = useState(false);

  useSEO({
    title: product.name,
    description: product.tagline,
  });

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-4 py-8"
    >
      {/* ── Hero ── */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="mb-4">
              <PlatformBadge platform={product.platform} size="md" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#094067] mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-[#5F6C7B] mb-6">{product.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-[#5F6C7B]">For:</span>
              {product.targetUsers.map((u, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {u}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={product.videolink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#D687EB] text-[#D687EB] font-bold rounded-lg hover:bg-[#D687EB] hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
              <HashLink
                to="/app/#contactme"
                className="px-6 py-3 bg-[#094067] text-white font-bold rounded-lg hover:bg-[#0a5a8a] transition-all duration-300"
              >
                Get Access
              </HashLink>
            </div>
          </div>
          <div className="w-full lg:w-[42%]">
            <img
              src={`${process.env.PUBLIC_URL}/${product.icon}`}
              alt={product.name}
              className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(9,64,103,0.15)]"
            />
          </div>
        </div>
      </section>

      {/* ── Problem & Solution ── */}
      <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
          The Challenge
        </h2>
        <p className="text-lg text-[#5F6C7B] leading-relaxed">
          {product.problemStatement}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-4">
          How {product.name} Helps
        </h2>
        <p className="text-lg text-[#5F6C7B] leading-relaxed">
          {product.solution}
        </p>
      </section>

      {/* ── Key Features ── */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100"
            >
              <svg
                className="w-6 h-6 text-[#D687EB] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-[#5F6C7B]">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="mb-12 bg-[#D8EEFE] rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
          Why Teams Use {product.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-8 h-8 bg-[#094067] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-[#094067] font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Installation Guide ── */}
      <section className="mb-12">
        <button
          onClick={() => setShowInstallation(!showInstallation)}
          className="flex items-center justify-between w-full text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#094067]">
            Installation Guide
          </h2>
          <svg
            className={`w-6 h-6 text-[#094067] transition-transform ${showInstallation ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showInstallation && (
          <div className="mt-4 space-y-10">
            {/* Step 1 — Install the app */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-bold text-[#094067] mb-6">
                Step 1 — Install from the HubSpot Marketplace
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <StepNumber n="1" />
                  <p className="text-[#5F6C7B] pt-1">
                    Go to the <strong>HubSpot App Marketplace</strong> and
                    search for <strong>Xero Invoice Sync</strong>, or use the
                    direct install link provided by VTecknologies.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <StepNumber n="2" />
                  <p className="text-[#5F6C7B] pt-1">
                    Click <strong>Install app</strong> on the listing page.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <StepNumber n="3" />
                  <p className="text-[#5F6C7B] pt-1">
                    Select the HubSpot account you want to connect, then review
                    the requested permissions and click{" "}
                    <strong>Connect app</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <StepNumber n="4" />
                  <p className="text-[#5F6C7B] pt-1">
                    You will be redirected back once the installation is
                    complete. The app will appear under{" "}
                    <strong>Settings → Integrations → Connected Apps</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 — Add Cards */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-bold text-[#094067] mb-6">
                Step 2 — Add Cards to Record Views
              </h3>

              <p className="text-sm font-semibold text-[#094067] uppercase tracking-wide mb-4">
                Xero Invoice Card on Deals
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Open any Deal record and click Customize.",
                  'Find "Xero Invoice Sync" in the available cards and drag it to the sidebar.',
                  "Click Save.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNumber n={i + 1} />
                    <p className="text-[#5F6C7B] pt-1">{step}</p>
                  </div>
                ))}
                <img
                  src={xeroInvoiceCardImg}
                  alt="Deal record customization panel — Xero Invoice Sync card being added"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>

              <p className="text-sm font-semibold text-[#094067] uppercase tracking-wide mb-4">
                Xero Sync Card on Contacts
              </p>
              <div className="space-y-4">
                {[
                  "Open any Contact record and click Customize.",
                  'Find "Xero Sync" and drag it to the sidebar.',
                  "Click Save.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNumber n={i + 1} />
                    <p className="text-[#5F6C7B] pt-1">{step}</p>
                  </div>
                ))}
                <img
                  src={xeroContactCardImg}
                  alt="Contact record customization panel — Xero Sync card being added"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>
            </div>

            {/* Step 3 — Connect accounts */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-bold text-[#094067] mb-2">
                Step 3 — Connect HubSpot & Xero
              </h3>
              <p className="text-sm text-[#5F6C7B] mb-6">
                Go to{" "}
                <strong>
                  Settings → Integrations → Connected Apps → Xero Invoice Sync →
                  View settings
                </strong>
                . You will see five tabs: Connection, Contacts, Products,
                Invoices, and Logs.
              </p>
              <img
                src={fiveTabsImg}
                alt="Settings page showing five tabs: Connection, Contacts, Products, Invoices, Logs"
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />

              <div className="mt-8 space-y-6">
                <p className="text-sm font-semibold text-[#094067] uppercase tracking-wide">
                  Connect HubSpot API
                </p>
                <p className="text-sm text-[#5F6C7B] bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                  Your HubSpot account is typically connected automatically
                  during installation. If the status already shows{" "}
                  <strong>Connected</strong>, you can skip these steps.
                </p>
                <p className="text-sm text-[#5F6C7B]">
                  If not connected, follow these steps:
                </p>
                {[
                  "On the Connection tab, click Connect HubSpot API.",
                  "Click the Authorize HubSpot link in the info banner.",
                  "Approve permissions in the new tab, then return and click Refresh Status.",
                  "Status should show Connected.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNumber n={i + 1} />
                    <p className="text-[#5F6C7B] pt-1">{step}</p>
                  </div>
                ))}
                <img
                  src={hsConnectImg}
                  alt="HubSpot API Connection section showing Connected status"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-sm font-semibold text-[#094067] uppercase tracking-wide">
                  Connect Xero
                </p>
                {[
                  "Click Connect to Xero on the same Connection tab.",
                  "Click Open Xero Login in the banner.",
                  "Log in to Xero, select your organisation, and allow access.",
                  "Return and click Refresh Status — status should show Connected with your organisation name.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StepNumber n={i + 1} />
                    <p className="text-[#5F6C7B] pt-1">{step}</p>
                  </div>
                ))}
                <img
                  src={xeroConnectImg}
                  alt="Xero Connection section showing Connected status with organisation name"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
                <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  Both connections must be active before syncing will work.
                </p>
              </div>
            </div>

            {/* Step 4 — Sync Settings */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-bold text-[#094067] mb-6">
                Step 4 — Configure Sync Settings
              </h3>

              {[
                {
                  tab: "Contacts Tab",
                  body: "Toggle contact syncing on or off. Choose a sync direction: Bidirectional, HubSpot to Xero only, or Xero to HubSpot only. Fields synced: email, first name, last name, phone, company, address. Click Sync Contacts Now for an immediate bulk sync.",

                  url: contactTab,
                },
                {
                  tab: "Products Tab",
                  body: "Toggle product syncing on or off. Products sync bidirectionally between the HubSpot Product Library and Xero Items. Click Sync Products Now for an immediate bulk sync.",

                  url: productsTab,
                },
                {
                  tab: "Invoices Tab",
                  body: "Toggle invoice syncing on or off. Invoice sync is one-way: Xero to HubSpot only. Xero invoices are imported as HubSpot Deals. Click Sync Invoices Now for an immediate bulk sync.",

                  url: invoicesTab,
                },
                {
                  tab: "Logs Tab",
                  body: "View a log of all sync actions and errors. Each entry shows the date, type (contact, product, invoice), action (create, update, delete), status (success or error), and details. Use this to troubleshoot any sync issues.",

                  url: logsTab,
                },
              ].map(({ tab, body, url }, i) => (
                <div key={i} className="mb-8 last:mb-0">
                  <p className="text-sm font-semibold text-[#094067] uppercase tracking-wide mb-3">
                    {tab}
                  </p>
                  <p className="text-[#5F6C7B] mb-4">{body}</p>
                  <img
                    src={url}
                    alt={`${tab} screenshot`}
                    className="w-full rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>
              ))}

              <p className="text-sm text-[#5F6C7B] mt-6 bg-gray-50 rounded-lg px-4 py-3">
                After any changes, click <strong>Save Settings</strong> at the
                bottom of the page.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ── App In Action ── */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-2">
          App in Action
        </h2>
        <p className="text-[#5F6C7B] mb-8">
          See how Xero Invoice Sync works directly inside HubSpot Contact and
          Deal records.
        </p>

        {/* Contact Sidebar Card */}
        <div className="mb-10 p-6 md:p-8 bg-white border border-gray-200 rounded-xl">
          <h3 className="text-xl font-bold text-[#094067] mb-2">
            Contact Sidebar Card
          </h3>
          <p className="text-[#5F6C7B] mb-6">
            The Xero Sync card on Contact records shows sync status and a
            summary of outstanding and overdue invoices.
          </p>
          <img
            src={contactSidebar}
            alt="Contact record sidebar showing Xero Sync card with contact details and invoice summary"
            className="w-full rounded-xl border border-gray-200 shadow-sm mb-6"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="font-semibold text-[#094067]">Before Sync</p>
              <p className="text-sm text-[#5F6C7B]">
                If the contact is not yet synced, the card shows a{" "}
                <strong>Sync to Xero</strong> button.
              </p>
              <img
                src={contactBeforeSync}
                alt="Contact record before sync"
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-[#094067]">After Sync</p>
              <p className="text-sm text-[#5F6C7B]">
                Once synced, the card shows the contact's Xero name, email,
                phone, and last synced time.
              </p>
              <img
                src={contactAfterSync}
                alt="Contact record after sync showing contact details from Xero"
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
          </div>

          {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          <div className="space-y-3">
            <p className="font-semibold text-[#094067]">Invoice Summary</p>
            <p className="text-sm text-[#5F6C7B]">
              Outstanding and overdue invoice counts and totals at a glance.
            </p>
            <img
              src={invoiceSummary}
              alt="Invoice summary section of the Xero Sync card showing outstanding and overdue invoice counts and totals"
              className="w-full rounded-xl border border-gray-200 shadow-sm"
            />
          </div>
          {/* <div className="space-y-3">
              <p className="font-semibold text-[#094067]">Invoice List</p>
              <p className="text-sm text-[#5F6C7B]">
                Click View Invoices to see invoice numbers, status, dates, and
                amounts.
              </p>
              <Screenshot label="Expanded invoice list with status tags" />
            </div> */}
          {/* </div> */}
        </div>

        {/* Deal Sidebar Card */}
        <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl">
          <h3 className="text-xl font-bold text-[#094067] mb-2">
            Deal Sidebar Card
          </h3>
          <p className="text-[#5F6C7B] mb-6">
            The Xero Invoice card on Deal records lets you create and manage
            invoices in Xero without leaving HubSpot.
          </p>
          <img
            src={dealSidebar}
            alt="Deal record showing Xero Invoice card with invoice details and actions"
            className="w-full rounded-xl border border-gray-200 shadow-sm mb-6"
          />

          {/* Create */}
          <div className="mt-10">
            <h4 className="text-lg font-bold text-[#094067] mb-4">
              Creating an Invoice
            </h4>
            <p className="text-[#5F6C7B] mb-4">
              When no invoice exists, the form opens automatically. Fill in the
              Xero Contact, Invoice Date, Due Date, Reference, and optional
              fields. Add line items (pre-populated from Deal line items if
              available). For deposit invoices, enable the Deposit Invoice
              toggle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#094067]">
                  Invoice Form — Header Fields
                </p>
                <img
                  src={invoiceHeader}
                  alt="New invoice form — top fields (contact, dates, reference)"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#094067]">
                  Invoice Form — Line Items
                </p>
                <img
                  src={invoiceLineItems}
                  alt="Line items section — description, quantity, unit price, item code, account, tax, discount"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>
            </div>
            <p className="text-sm text-[#5F6C7B] mb-4">
              Click <strong>Preview</strong> to review, then{" "}
              <strong>Create as Draft</strong> to save. The invoice is created
              in Xero as a DRAFT.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#094067]">
                  Invoice Preview
                </p>
                <img
                  src={invoicePreview}
                  alt="Invoice Preview screen"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#094067]">
                  Created as Draft
                </p>
                <img
                  src={invoiceDraft}
                  alt="Invoice Status view after creation — DRAFT tag"
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Lifecycle */}
          <div className="mt-10">
            <h4 className="text-lg font-bold text-[#094067] mb-6">
              Invoice Lifecycle
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  action: "Edit",
                  desc: "On a DRAFT or SUBMITTED invoice, click Edit, make changes, and save as Draft.",
                  screenshot: invoiceEdit,
                },
                {
                  action: "Approve",
                  desc: "On a DRAFT invoice, click Approve. Status changes to AUTHORISED and Send, View Online, and Void buttons appear.",
                  screenshot: invoiceApprove,
                },
                {
                  action: "Send",
                  desc: "On an AUTHORISED invoice, click Send. Xero emails the invoice. Click View Online for a shareable link.",
                  screenshot: invoiceSend,
                },
                {
                  action: "Clone",
                  desc: "Click Clone on any invoice to create a new DRAFT copy — useful for recurring invoices.",
                  screenshot: invoiceClone,
                },
                {
                  action: "Void",
                  desc: "On an AUTHORISED invoice, click Void. Status changes to VOIDED and no further actions are possible.",
                  screenshot: invoiceVoid,
                },
                {
                  action: "History",
                  desc: "Click History to see the full audit trail of changes — date, details, and who made each change.",
                  screenshot: invoiceHistory,
                },
              ].map(({ action, desc, screenshot }) => (
                <div key={action} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#094067] text-white text-sm font-semibold rounded-full">
                      {action}
                    </span>
                  </div>
                  <p className="text-sm text-[#5F6C7B]">{desc}</p>
                  <img
                    src={screenshot}
                    alt={`${action} screenshot`}
                    className="w-full rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Demo ── */}
      {product.videolink && (
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#094067] mb-6">
            See It In Action
          </h2>
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-[0_10px_50px_rgba(9,64,103,0.2)]">
            <div
              className="w-full"
              style={{ minHeight: "480px", height: "60vh", maxHeight: "720px" }}
            >
              <iframe
                src={product.videolink
                  .replace("watch?v=", "embed/")
                  .replace("youtu.be/", "youtube.com/embed/")}
                title={`${product.name} Demo Video`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-sm text-[#5F6C7B] mt-4">
            Watch the full demo to see {product.name} in action
          </p>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="mb-12 bg-gradient-to-r from-[#094067] to-[#0a5a8a] rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Get Started with {product.name}?
        </h2>
        <p className="text-blue-100 mb-6">
          Connect HubSpot and Xero today and eliminate manual data entry for
          good.
        </p>
        <HashLink
          to="/app/#contactme"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#094067] transition-all"
        >
          Contact Us
        </HashLink>
      </section>

      {/* ── Related Products ── */}
      <RelatedProducts
        productKeys={product.relatedProducts}
        currentProductKey={product.key}
      />
    </article>
  );
}
