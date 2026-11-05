import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Naturals ADFT",
  description:
    "The Terms & Conditions governing your access to and use of the Naturals ADFT (Academy of Design, Fashion & Technology) website, content and services.",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <section className={`container ${styles.hero}`}>
        <SectionHeading title={<>Terms &amp; Conditions</>} subtitle="Last Updated: November 2026" mark="lg" />
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.intro}>
          <p>
            Welcome to Naturals Academy of Design, Fashion &amp; Technology (ADFT). These Terms &amp; Conditions govern
            your access to and use of our website, its content, information and services.
          </p>
          <p>
            By accessing or using this website, you agree to comply with these Terms &amp; Conditions. If you do not
            agree, please discontinue using the website.
          </p>
        </div>

        <div className={styles.section}>
          <h2>1. About Naturals ADFT</h2>
          <p>
            Naturals Academy of Design, Fashion &amp; Technology (ADFT) is a creative education initiative offering
            programmes across:
          </p>
          <ul>
            <li>Fashion &amp; Costume Design</li>
            <li>Interior &amp; Spatial Design</li>
            <li>Digital &amp; Creative Media</li>
          </ul>
          <p>
            Our programmes incorporate creative foundations, practical learning, industry-oriented exposure and
            AI-integrated educational approaches.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Use of the website</h2>
          <p>You agree to use this website only for lawful purposes.</p>
          <p>You shall not:</p>
          <ul>
            <li>Use the website for fraudulent, misleading or unlawful activities.</li>
            <li>Submit false, inaccurate or misleading information through enquiry or application forms.</li>
            <li>Attempt to gain unauthorised access to the website, its servers or associated systems.</li>
            <li>Disrupt or interfere with website functionality or security.</li>
            <li>Copy, reproduce, distribute or commercially exploit website content without prior written permission.</li>
            <li>Upload malicious software, harmful files or unauthorised content.</li>
          </ul>
          <p>We reserve the right to restrict or terminate access where misuse or violation of these terms is identified.</p>
        </div>

        <div className={styles.section}>
          <h2>3. Programme information and admissions</h2>
          <p>
            Naturals ADFT endeavours to ensure that programme descriptions, curriculum details, duration, eligibility
            criteria and other information published on the website are accurate and up to date.
          </p>
          <p>However:</p>
          <ul>
            <li>Programme structures, curriculum, duration and delivery methods may be revised periodically.</li>
            <li>Admission is subject to eligibility criteria, availability and the applicable admission process.</li>
            <li>Submission of an enquiry or application does not guarantee admission.</li>
            <li>Programme fees, payment schedules and other applicable charges will be communicated through official channels.</li>
            <li>
              Specific admission, payment, cancellation and refund conditions will be governed by the applicable
              admission documents and policies.
            </li>
          </ul>
          <p>
            Prospective students are encouraged to verify programme details with the authorised ADFT representative
            before enrolment.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Fees, payments and refunds</h2>
          <p>
            All programme fees, registration charges and other applicable payments will be communicated through
            official ADFT channels.
          </p>
          <p>
            Students are expected to adhere to the payment schedules and financial conditions communicated at the time
            of admission.
          </p>
          <p>
            Refunds, cancellations, transfers and other fee-related matters will be governed by the specific policies
            and written terms applicable to the programme or admission.
          </p>
          <p>Any applicable taxes, statutory charges or additional fees will be communicated separately.</p>
        </div>

        <div className={styles.section}>
          <h2>5. Learning, certification and academic requirements</h2>
          <p>Students enrolled in Naturals ADFT programmes are expected to:</p>
          <ul>
            <li>Participate in prescribed academic and practical learning activities.</li>
            <li>Complete assignments, projects and assessments.</li>
            <li>Follow academic guidelines and institutional policies.</li>
            <li>Maintain professional conduct during classes, workshops and other activities.</li>
            <li>Comply with attendance and assessment requirements applicable to their programme.</li>
          </ul>
          <p>
            Certificates or other academic credentials will be issued subject to successful completion of the prescribed
            programme requirements and applicable assessment criteria.
          </p>
          <p>Naturals ADFT reserves the right to revise academic requirements and assessment processes where necessary.</p>
        </div>

        <div className={styles.section}>
          <h2>6. AI-Integrated learning and technology</h2>
          <p>Naturals ADFT incorporates AI tools and emerging technologies as part of its contemporary learning approach.</p>
          <p>AI-enabled tools are intended to support creativity, exploration, productivity and practical learning.</p>
          <p>
            Students are expected to use these tools responsibly and ethically. AI-generated content must not be
            misrepresented as original work where academic guidelines require independent creation or disclosure.
          </p>
          <p>
            The availability and functionality of third-party AI tools may be subject to the respective providers&rsquo;
            terms, policies and technical limitations.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Franchise enquiries and partnerships</h2>
          <p>
            Naturals ADFT may provide information about franchise opportunities, business partnerships and authorised
            learning centres through its website.
          </p>
          <p>
            Submitting a franchise enquiry does not constitute an offer, acceptance, approval or grant of franchise
            rights.
          </p>
          <p>All franchise proposals are subject to:</p>
          <ul>
            <li>Evaluation of the applicant and proposed business location.</li>
            <li>Financial, infrastructure and operational requirements.</li>
            <li>Due diligence and approval by the authorised management.</li>
            <li>Execution of a separate franchise agreement.</li>
            <li>Compliance with the applicable business and operational guidelines.</li>
          </ul>
          <p>
            Franchise rights, fees, responsibilities, territorial arrangements and other commercial conditions will be
            governed exclusively by the executed franchise agreement.
          </p>
          <p>
            No individual or entity is authorised to represent itself as an ADFT franchise partner without formal
            written approval.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Intellectual property rights</h2>
          <p>All website content, including but not limited to:</p>
          <ul>
            <li>Logos, trademarks and brand identities.</li>
            <li>Text, graphics, illustrations and photographs.</li>
            <li>Programme descriptions and curriculum materials.</li>
            <li>Videos, digital assets and creative content.</li>
            <li>Website design, layout and visual elements.</li>
          </ul>
          <p>
            are owned by or licensed to Naturals ADFT or the respective rights holders and are protected under
            applicable intellectual property laws.
          </p>
          <p>
            No content may be copied, modified, reproduced, published, distributed or commercially used without prior
            written authorisation.
          </p>
          <p>
            Unauthorised use of the Naturals ADFT name, logo, brand identity or other intellectual property is strictly
            prohibited.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Student work, photography and media</h2>
          <p>
            Photographs, videos, student projects and other creative materials may be used for academic documentation,
            institutional communication and promotional purposes, subject to appropriate permissions and applicable
            privacy requirements.
          </p>
          <p>
            Any use of identifiable student photographs, personal information or individual work for promotional
            purposes will be subject to the necessary authorisations.
          </p>
          <p>
            Students retain any intellectual property rights in their original work, subject to applicable institutional
            agreements, third-party rights and programme-specific conditions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Website accuracy and availability</h2>
          <p>
            While we make reasonable efforts to maintain accurate and updated website information, Naturals ADFT does
            not guarantee that all content will always be complete, current, uninterrupted or error-free.
          </p>
          <p>
            We reserve the right to modify, update, suspend or discontinue any part of the website, its content or
            functionality without prior notice, subject to applicable laws.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Third-party links</h2>
          <p>
            Our website may include links to external websites, platforms or services for additional information and
            convenience.
          </p>
          <p>
            Such links do not imply endorsement or responsibility for the content, products, services or practices of
            those third parties.
          </p>
          <p>
            Users access third-party websites at their own discretion and are encouraged to review their respective
            terms and privacy policies.
          </p>
        </div>

        <div className={styles.section}>
          <h2>12. Limitation of liability</h2>
          <p>
            To the extent permitted by applicable law, Naturals ADFT shall not be liable for indirect, incidental or
            consequential losses arising from the use of or inability to access the website.
          </p>
          <p>
            We shall not be responsible for service interruptions, technical issues, third-party platform failures or
            unauthorised access beyond our reasonable control.
          </p>
          <p>
            Nothing in these Terms &amp; Conditions excludes any liability that cannot legally be excluded under
            applicable law.
          </p>
        </div>

        <div className={styles.section}>
          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Naturals ADFT, its authorised representatives, employees and
            associated entities against claims, losses or liabilities arising from your unlawful use of the website,
            violation of these Terms &amp; Conditions or infringement of third-party rights.
          </p>
        </div>

        <div className={styles.section}>
          <h2>14. Modifications to terms</h2>
          <p>Naturals ADFT reserves the right to revise or update these Terms &amp; Conditions from time to time.</p>
          <p>
            Revised terms will be published on this website with the updated date. Continued use of the website
            following publication of changes constitutes acceptance of the revised terms, to the extent permitted by
            applicable law.
          </p>
        </div>

        <div className={styles.section}>
          <h2>15. Governing law and jurisdiction</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India.
          </p>
          <p>
            Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent
            courts in Chennai, Tamil Nadu, India, subject to applicable law.
          </p>
        </div>

        <div className={styles.section}>
          <h2>16. Contact information</h2>
          <p>For questions, clarifications or concerns relating to these Terms &amp; Conditions, please contact:</p>
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
