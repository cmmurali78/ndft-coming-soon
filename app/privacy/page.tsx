import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Naturals ADFT",
  description:
    "How Naturals ADFT (Academy of Design, Fashion & Technology) collects, uses, stores and shares your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <section className={`container ${styles.hero}`}>
        <SectionHeading title="Privacy Policy" subtitle="Last Updated: November 2026" mark="lg" />
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.intro}>
          <p>
            Welcome to Naturals Academy of Design, Fashion &amp; Technology (ADFT) (&ldquo;Naturals ADFT&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). We are committed to protecting your privacy and
            ensuring that your personal information is handled responsibly.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, process and share personal information when you
            visit our website, submit an enquiry, explore our programmes, apply for admission, express interest in a
            franchise opportunity or otherwise interact with us.
          </p>
          <p>By accessing or using our website, you acknowledge that you have read this Privacy Policy.</p>
        </div>

        <div className={styles.section}>
          <h2>1. Information we collect</h2>
          <p>We may collect the following categories of information:</p>

          <h3>a. Personal information you provide</h3>
          <p>When you interact with our website or services, you may voluntarily provide information such as:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Mobile number</li>
            <li>Residential address and location</li>
            <li>Date of birth and age</li>
            <li>Educational qualifications and academic details</li>
            <li>Programme or course of interest</li>
            <li>Employment or professional details, where relevant</li>
            <li>Franchise investment preferences and business details</li>
            <li>Information submitted through contact, admission and franchise enquiry forms</li>
            <li>Any other information you choose to share with us.</li>
          </ul>

          <h3>b. Automatically collected information</h3>
          <p>When you visit our website, certain information may be collected automatically, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device and operating system details</li>
            <li>Pages visited and browsing activity</li>
            <li>Date, time and duration of visits</li>
            <li>Referring and exit URLs</li>
            <li>Website usage and interaction data.</li>
          </ul>
          <p>This information helps us understand website performance and improve the user experience.</p>
        </div>

        <div className={styles.section}>
          <h2>2. How we use your information</h2>
          <p>We may use the information collected for the following purposes:</p>
          <ul>
            <li>Responding to programme, admission and general enquiries.</li>
            <li>Providing information about courses, curriculum, fees and learning opportunities.</li>
            <li>Processing admission applications and student registrations.</li>
            <li>Communicating updates regarding programmes, workshops, events and academic activities.</li>
            <li>Responding to franchise enquiries and evaluating potential franchise partnerships.</li>
            <li>Sharing relevant information about our educational offerings and initiatives.</li>
            <li>Improving our website, services and learning experiences.</li>
            <li>Conducting internal research, analysis and business development.</li>
            <li>Meeting applicable legal, regulatory and administrative requirements.</li>
          </ul>
          <p>
            Marketing communications will be sent in accordance with applicable consent and communication requirements.
            You may opt out of promotional communications at any time.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Cookies and tracking technologies</h2>
          <p>
            Our website may use cookies and similar technologies to improve functionality, understand visitor
            behaviour, analyse website performance and enhance your browsing experience.
          </p>
          <p>Cookies may be used to:</p>
          <ul>
            <li>Remember user preferences.</li>
            <li>Support essential website functions.</li>
            <li>Understand website traffic and visitor engagement.</li>
            <li>Measure marketing and campaign performance.</li>
            <li>Improve website content and navigation.</li>
          </ul>
          <p>
            You may manage or disable cookies through your browser settings. Certain website features may not function
            as intended if cookies are disabled.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Sharing of information</h2>
          <p>Naturals ADFT does not sell personal information to third parties.</p>
          <p>We may share relevant information with:</p>
          <ul>
            <li>Authorised employees and representatives responsible for handling enquiries, admissions and operations.</li>
            <li>
              Affiliated organisations, authorised centres and franchise partners, where necessary to respond to or
              fulfil your request.
            </li>
            <li>
              Technology, hosting, communication and service providers who support our website and business operations.
            </li>
            <li>Analytics and marketing service providers, subject to applicable privacy requirements.</li>
            <li>
              Government authorities, regulatory bodies or law enforcement agencies where disclosure is legally
              required.
            </li>
            <li>Relevant parties in connection with a merger, restructuring, acquisition or transfer of business.</li>
          </ul>
          <p>
            We take reasonable steps to ensure that third parties handling information on our behalf maintain
            appropriate confidentiality and security safeguards.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Data security and retention</h2>
          <p>
            We implement reasonable technical, administrative and organisational measures to protect personal
            information against unauthorised access, misuse, alteration, disclosure or loss.
          </p>
          <p>
            Personal information is retained only for as long as necessary to fulfil the purposes for which it was
            collected, meet applicable legal obligations, resolve disputes and maintain relevant business records.
          </p>
          <p>No electronic transmission or storage system can be guaranteed to be completely secure.</p>
        </div>

        <div className={styles.section}>
          <h2>6. Third-Party websites and services</h2>
          <p>
            Our website may contain links to third-party websites, social media platforms, payment gateways and other
            external services.
          </p>
          <p>
            These websites and services operate independently and may have their own privacy policies and practices.
            Naturals ADFT is not responsible for their content, security or privacy practices.
          </p>
          <p>We encourage users to review the relevant third-party policies before sharing personal information.</p>
        </div>

        <div className={styles.section}>
          <h2>7. Children&rsquo;s privacy</h2>
          <p>Naturals ADFT offers educational programmes that may be relevant to young learners.</p>
          <p>
            Where personal information relating to individuals below the age of 18 is collected, we will seek and
            process the information in accordance with applicable parental or guardian consent requirements and other
            applicable laws.
          </p>
          <p>We do not knowingly seek to collect children&rsquo;s personal information without the required authorisation.</p>
        </div>

        <div className={styles.section}>
          <h2>8. Your privacy rights and choices</h2>
          <p>Subject to applicable laws, you may:</p>
          <ul>
            <li>Request access to personal information you have shared with us.</li>
            <li>Request correction or updating of inaccurate information.</li>
            <li>Request deletion of personal information, where legally permissible.</li>
            <li>Withdraw consent for activities based on your consent.</li>
            <li>Opt out of promotional emails and communications.</li>
            <li>Raise concerns regarding the handling of your personal information.</li>
          </ul>
          <p>
            Requests may be submitted using the contact details provided below. We may need to verify your identity
            before processing certain requests.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. International data transfers</h2>
          <p>
            Where our technology or service providers process information outside India, personal information may be
            transferred to other jurisdictions in accordance with applicable data protection laws and requirements.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Changes to this privacy policy</h2>
          <p>
            Naturals ADFT reserves the right to update or modify this Privacy Policy from time to time to reflect
            changes in our business practices, website functionality or applicable legal requirements.
          </p>
          <p>Any changes will be published on this page along with the revised &ldquo;Last Updated&rdquo; date.</p>
          <p>We encourage users to review this page periodically.</p>
        </div>

        <div className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>
            For questions, concerns, requests or grievances relating to this Privacy Policy or the handling of your
            personal information, please contact:
          </p>
          <div className={styles.contact}>
            <p>
              <strong>Naturals Academy of Design, Fashion &amp; Technology (ADFT)</strong>
              Email: <a href="mailto:info@naturalsadft.com">info@naturalsadft.com</a>
              <br />
              Website:{" "}
              <a href="https://www.naturalsadft.com/" target="_blank" rel="noopener noreferrer">
                https://www.naturalsadft.com/
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
