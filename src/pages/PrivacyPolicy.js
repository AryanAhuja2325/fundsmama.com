import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import privacyPolicy from '../assets/imgs/Privacy-Policy-banner.jpg';
import * as COLORS from '../assets/utils/Constants';

const BackgroundBox = styled(Box)({
    marginTop: "100px",
    background: `url(${privacyPolicy}) no-repeat center center`,
    backgroundSize: 'cover',
    padding: '2rem 0',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});

const BannerText = styled(Typography)({
    color: '#fff',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold'
});

const ContentBox = styled(Box)({
    padding: '2rem 0',
});

const HighlightText = styled(Typography)({
    color: '#F60',
});

const Text = styled(Typography)({
    color: COLORS.darkBlue,
    lineHeight: 1.8,
    textAlign: 'justify'
});
const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: COLORS.darkBlue
}));

const PrivacyPolicy = () => {
    return (
        <>
            <BackgroundBox>
                <Container>
                    <BannerText>
                        Privacy <span style={{ color: COLORS.yellow }}>Policy</span>
                    </BannerText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Divider sx={{ borderColor: COLORS.white, width: '10%', borderWidth: 2 }} />
                    </Box>
                </Container>
            </BackgroundBox>
            <ContentBox>
                <Container>
                    <SectionTitle variant="h5" gutterBottom >
                        Girdhar Finlease Private Limited - Privacy Policy
                    </SectionTitle>
                    <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    <Text paragraph>
                        This Privacy Policy of Girdhar Finlease Private Limited (a company incorporated under the Companies Act, 2013 having its registered office at 106, First Floor, Surya Kiran Building, 19 Kasturba Gandhi Marg, New Delhi - 110001, India (in any case, hereinafter referred to as "Fundsmama", "Girdhar Finlease" "we", "our" or "us"), is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the Information Technology Act, 2000. The term "you", "customer", "user", "borrower" denotes the person who avails the services of FundsMama by using the mobile application "Fundsmama" or through any other mode. This privacy policy does not require any physical, electronic, or digital signature.
                    </Text>
                    <Text paragraph>
                        This Privacy Policy is a legally binding document between you and FundsMama. The terms of this Privacy Policy will be effective upon your acceptance of the same by availing its services. This Privacy Policy specifies the terms related to the management and handling of personal information of users (hereinafter referred to as "the Users") using the services of FundsMama platform accessible through mobile/smartphone application name Fundsmama. We understand that you entrust us with certain information to help us provide various Services. In exchange for your trust, you expect and deserve our commitment to treat your information confidential with respect and in accordance with the terms of this Privacy Policy ("Privacy Policy").
                    </Text>
                    <Text paragraph>
                        The Privacy Policy describes the policies and procedures followed by FundsMama with respect to collection, use, disclosure and deletion of your information and other data that we gather when you register for using our Fundsmama Application and Services by creating a user account ("Account"), interact with other Users and third-party websites and services. This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data of information) Rules, 2011 under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information.
                    </Text>
                    <Text paragraph>
                        Please read this Privacy Policy carefully. By using the website/mobile application, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our application or website. you hereby provide your unconditional consent or agreements to as provided under section 43a and section 72a of Information Technology Act, 2000.
                    </Text>
                    <Text paragraph>
                        <strong>FundsMama</strong> complies with all regulations on the protection of Personal Information specified in laws and regulations applicable to information and communication service providers.
                    </Text>
                    <HighlightText paragraph>
                        We recognize the importance of "Personal Information" including "Sensitive Personal Information" provided by natural persons, under lawful contract. We intend to take reasonable measures to keep such information confidential and may share it with our affiliates and third parties under appropriate arrangements and under the applicable laws and policies. The list of such third parties can be accessed from the below link: https://fundsmama.in.
                    </HighlightText>
                    <Text paragraph>
                        We respect your privacy and are committed to protecting it through our compliance with this privacy policy.
                    </Text>
                    <Text paragraph>
                        <strong>This policy describes:</strong>
                    </Text>
                    <ul>
                        <li>the types of information that we may collect from you when you access or use our website(s) or Fundsmama mobile application (collectively, "Platform"); and</li>
                        <li>Our practices for collecting, storing, using, maintaining, protecting, disclosing, transfer, etc. that information.</li>
                    </ul>
                    <Text paragraph>
                        <strong>Your acknowledgment and consent</strong>
                    </Text>
                    <Text paragraph>
                        By visiting Platform you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Platform(s). By mere use of the Platform(s), you expressly and unconditionally agree to the terms and conditions of this Privacy Policy and consent to the collection, usage, storage and handling of the personal information/ sensitive personal data submitted by you in accordance with the terms contained herein.
                    </Text>
                    <Text paragraph>
                        This policy applies only to the information we collect through our Platform(s), in email, text and other electronic communications sent through or in connection therewith (collectively "User Information"). When you submit user Information on the Platform, it shall be deemed that you have granted us the right to collect, store, process, handle and use such User Information, in accordance with this Privacy Policy (as amended from time to time) and privacy policy of FundsMama ("wholly-owned subsidiary of Girdhar Finlease India Pvt Ltd and a licenced NBFC duly registered with Reserve Bank of India, hereinafter referred to as 'Funds Mama'") in case of Loan applications. Please read this policy carefully to understand our policies and practices regarding your information and how it will be treated in accordance with this policy.
                    </Text>
                    <Text paragraph>
                        When you use, download, and access the FundsMama by using Fundsmama Application ("Application"), you are consenting to the collection, transfer, storage, disclosure and other uses of your Information as described in this Privacy Policy. Further, in case you are using our application for availing loan services you are required to please read and agree to the Privacy policy of FundsMama available at <a href="https://fundsmama.com/privacy_policy.php">https://fundsmama.com/privacy_policy.php.</a>
                    </Text>
                    <Text paragraph>
                        The Personal Information Policy of the services of FundsMama is as follows:
                    </Text>
                    <Text paragraph>
                        <strong>A. Definitions</strong>
                    </Text>
                    <Text paragraph>
                        For the purpose of this Privacy Policy:
                    </Text>
                    <Text paragraph>
                        <strong>Account</strong> means a unique account or identifier created for you to access our Service or parts of our Service.
                    </Text>
                    <Text paragraph>
                        <strong>Application</strong> means the software program provided by the Company downloaded by you on any electronic device, named FundsMama.
                    </Text>
                    <Text paragraph>
                        <strong>Company</strong> (referred to as either "the Company", "FundsMama", "We", "Us" or "Our" in this Agreement) refers to Girdhar Finlease Private Limited, Delhi.
                    </Text>
                    <Text paragraph>
                        <strong>Country</strong> refers to: India
                    </Text>
                    <Text paragraph>
                        <strong>State</strong> refers to: Delhi, India
                    </Text>
                    <Text paragraph>
                        <strong>Device</strong> means any device that can access the Service such as a computer, a mobile phone or a digital tablet, etc.
                    </Text>
                    <Text paragraph>
                        <strong>Lending Partner</strong> means banks, non-banking financial companies, and other financial institutions regulated by the Reserve Bank of India, with whom there is an arrangement with FundsMama to facilitate Services through the Platform.
                    </Text>
                    <Text paragraph>
                        <strong>Loan</strong> means various lending products offered by FundsMama or its Lending Partner through Platform to you on the terms and conditions agreed with you.
                    </Text>
                    <Text paragraph>
                        <strong>Loan Application</strong> means the digital journey done by you while applying for Loan on Platform.
                    </Text>
                    <Text paragraph>
                        <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                    </Text>
                    <Text paragraph>
                        <strong>Service</strong> refers to the services provided by the application.
                    </Text>
                    <Text paragraph>
                        <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the service is used.
                    </Text>
                    <Text paragraph>
                        <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </Text>
                    <Text paragraph>
                        <strong>You</strong> mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </Text>

                    <Text paragraph>
                        <strong>B. Type of Personal Information Collected and Purpose and Use of Collection</strong>
                    </Text>

                    <Text paragraph>
                        <strong>Types of Data Collected</strong>
                    </Text>

                    <Text paragraph>
                        <strong>Personal Data</strong>
                    </Text>

                    <Text paragraph>
                        While using our Service, we may ask you to provide us your consent with certain personally identifiable information that can be used to contact or identify you. The Personal Information will not be used for purposes other than providing services. Prior approval of the users would be required, in case of change in the purposes.
                    </Text>

                    <Text paragraph>
                        Personally identifiable information for the purposes of this Privacy Policy may include, but is not limited to:
                    </Text>

                    <Text paragraph>
                        <strong>a) Identity and Profile-related Data:</strong> This includes your first and last name, Date of Birth, country of origin, username or similar identifiers, gender, title, background, feedback, etc.
                    </Text>

                    <Text paragraph>
                        <strong>b) User Correspondence Details:</strong> This includes your email addresses and residential address. Our app also verifies and checks the active SIM status on the device to uniquely identify you and prevent frauds and unauthorized access.
                    </Text>

                    <Text paragraph>
                        It is clarified and declared that we do not view, access, or store Contact Lists from your Device.
                    </Text>

                    <Text paragraph>
                        <strong>c) Location Data:</strong> This includes information about the Location of your device for activities such as serviceability, geo-tagging of wallet transactions, onboarding purposes (in case of Loan Application).
                    </Text>

                    <Text paragraph>
                        <strong>d) KYC Data:</strong> This includes identification documents issued by the government or other authorities which includes one of Officially Valid Documents specified in RBI-KYC directions (Driving License, Voter's ID, NREGA Job Card, Passport, Aadhaar card, PAN etc.). FundsMama may ask for one-time access to the camera for customer onboarding/said KYC process.
                    </Text>

                    <Text paragraph>
                        <strong>e) Transaction Data:</strong> This includes details of transactions that may occur through the Platform or in connection with the Services. For example, transaction data may include the services you have sought or availed through the Platform or confirmations of such services.
                    </Text>

                    <Text paragraph>
                        <strong>f) SMS:</strong> We and our authorized service provider (Finbox) shall access all your SMSs and collect the SMSs with alphabetic or less-than-10-characters numeric sender name only. When the user grants permission, this app and our authorized service provider (Finbox) accesses, reads, collects, and uses the collected SMSs solely for verifying your financial position and assessing your credit risk to enable loan, even when the user is not engaging with the app.
                    </Text>

                    <Text paragraph>
                        <strong>g) Financial Data:</strong> This includes your past credit history, income details, details of loans issued or otherwise applied for through the Platform, payments and repayments thereof, your bank account details, and bank account statements (only in case of loan application by taking one-time access to the storage).
                    </Text>

                    <Text paragraph>
                        <strong>h) Marketing and Communications Data:</strong> This includes your preferences in receiving marketing messages from us and our third parties and your communication preferences.
                    </Text>

                    <Text paragraph>
                        <strong>i) Usage & Device Data:</strong> This includes information about how you use the Services. Usage Data may include information such as your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, Name and Version of system and application software; Other information collected: Installed applications on User's device; crash logs, diagnostic and other app performance data, such as- App launch time to improve user experience, etc.
                    </Text>

                    <Text paragraph>
                        We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.
                    </Text>

                    <Text paragraph>
                        <strong>j) Storage:</strong> Storage access is required for secure download, saving, and/or upload of your KYC and other relevant images/documents (bank statement, etc., if required) to your phone and also for raising complaints by uploading screenshots/images, downloading order history, etc. This ensures a faster application process and a seamless user experience. The image file may contain location data, camera specifications, license information, etc.
                    </Text>

                    <Text paragraph>
                        <strong>k) Miscellaneous Data:</strong> This includes Credit and debit card number (last 4 digits), WiFi connection information, and any information collected by us regarding you available in the public domain.
                    </Text>

                    <Text paragraph>
                        We may receive Personal information about you from third parties, such as social media services, commercially available sources, and business partners. If you access the Website through a social media service or connect a service on the Website to a social media service, the information we collect may include your username associated with that social media service, any information or content the social media service has the right to share with us, such as your profile picture, email address or friends list, and any information you have made public in connection with that social media service.
                    </Text>

                    <Text paragraph>
                        When you connect any Website to social media services, you are authorizing FundsMama to collect, store, use, and retain such information and content in accordance with this Privacy Policy.
                    </Text>

                    <Text paragraph>
                        Further, FundsMama shall share the relevant data with Girdhar Finlease Private Limited/Other Lending Partners and their lending services providers in the event of Loan Application in accordance with this Privacy Policy and the privacy policy of Girdhar Finlease Private Limited/Lending partners (if applicable).
                    </Text>

                    <Text paragraph>
                        We use this information to provide our Service and to improve and customize the features of our Service.
                    </Text>

                    <Text paragraph>
                        You can disable access for these permissions in your device settings at any time or revoke/withdraw access rights from the application; however, we recommend that you keep these permissions enabled so that we can provide you uninterrupted service.
                    </Text>

                    <Text paragraph>
                        <strong>C. Term of Retaining and Use of Personal Information</strong>
                    </Text>

                    <Text paragraph>
                        <strong>Retention of Your Personal Data</strong>
                    </Text>

                    <Text paragraph>
                        The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </Text>

                    <Text paragraph>
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </Text>

                    <Text paragraph>
                        We shall preserve the records pertaining to the identification of the borrowers and their addresses obtained while opening the account and during the course of the business relationship, for at least five years after the business relationship is ended.
                    </Text>

                    <Text paragraph>
                        You may write to us in case you want us to remove your data from our records. We will ensure to fulfill your request subject to any requirement of retaining information as per applicable law.
                    </Text>

                    <Text paragraph>
                        <strong>Use of Your Personal Data</strong>
                    </Text>

                    <Text paragraph>
                        The Company may use Personal Data for the following purposes:
                    </Text>

                    <Text paragraph>
                        <strong>• To Provide and Maintain Our Service:</strong> Including to monitor the usage of our Service.
                    </Text>

                    <Text paragraph>
                        <strong>• To Manage Your Account:</strong> To manage your registration as a user of the Service. The Personal Data you provide can give you access to different functionalities of the Service that are available to you as a registered user.
                    </Text>

                    <Text paragraph>
                        <strong>• For the Performance of a Contract:</strong> The development, compliance, and undertaking of the purchase contract for the products, items, or services you have purchased or of any other contract with Us through the Service.
                    </Text>

                    <Text paragraph>
                        <strong>• To Contact You:</strong> To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates, informative communications, promotions, marketing communications related to the functionalities, products, contracted services, and sponsored content, including the security updates, when necessary or reasonable for their implementation.
                    </Text>

                    <Text paragraph>
                        <strong>• To Provide You with News, Special Offers, and General Information:</strong> About other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about.
                    </Text>

                    <Text paragraph>
                        <strong>• To Manage Your Requests:</strong> To attend and manage your requests to Us.
                    </Text>

                    <Text paragraph>
                        <strong>• For Business Transfers:</strong> We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                    </Text>

                    <Text paragraph>
                        <strong>• To Improve Our Site:</strong> We continually strive to improve our site offerings based on the information and feedback we receive from you.
                    </Text>

                    <Text paragraph>
                        <strong>• The Email Address, Contact Details Provided by You:</strong> Including the contact details linked to your KYCs may be used to send you information, respond to inquiries, and to address other requests or questions and to intimate you of the due date of payments (if any) or breach of any contract entered by you for grant of any service by FundsMama.
                    </Text>

                    <Text paragraph>
                        <strong>• For Other Purposes:</strong> We may use your information for other purposes, such as data analysis, identifying usage trends, fraud detection and prevention, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.
                    </Text>

                    <Text paragraph>
                        <strong>• Otherwise with Your Consent.</strong>
                    </Text>
                    <Text paragraph>
                        <strong>D. Storage and Transfer of Your Personal Data</strong>
                    </Text>

                    <Text paragraph>
                        Your information, including Personal Data, is processed at the Company's operating offices and at any other places where the parties involved in the processing are located, in accordance with applicable laws. The Company ensures that your information, including Personal Data, is processed and stored in servers located in India, in accordance with applicable laws.
                    </Text>

                    <Text paragraph>
                        The Company shall share the data with third parties in the manner as specifically provided in this Privacy Policy.
                    </Text>

                    <Text paragraph>
                        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to the said transfer. However, the Company ensures that the third parties with whom the data is shared are compliant with the technology standards/requirements on cybersecurity stipulated by RBI and other agencies, or as may be specified from time to time.
                    </Text>

                    <Text paragraph>
                        Further, the application gives customers the option to restrict the sharing of data with Third Parties.
                    </Text>

                    <Text paragraph>
                        The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of your data and other personal information.
                    </Text>

                    <Text paragraph>
                        You further agree that such disclosure, sharing, and transfer of your Personal Information shall not cause any wrongful loss to you or to any third party, or any wrongful gain to us or to any third party.
                    </Text>

                    <Text paragraph>
                        You hereby unconditionally agree and permit that except as otherwise provided under this Privacy Policy, FundsMama will disclose your Personal Information to third parties only in the following limited circumstances:
                    </Text>

                    <Text paragraph>
                        <strong>1. With Service Providers:</strong> We may share your personal information with Service Providers to monitor and analyze the use of our Service, to contact you. We may transfer, share, disclose or part with all or any of your Information to various third-party service providers/partners/banks and financial institutions for one or more of the Purposes or as may be required by applicable law. In such cases, we will contractually oblige the receiving parties of the Information to ensure the same level of data protection that is adhered to by FundsMama under applicable law.
                    </Text>

                    <Text paragraph>
                        If you use the Services of third parties through the FundsMama Application, FundsMama may disclose your Personal Information to the associated third-party service providers to facilitate/enhance/complete the Services offered. It is suggested that you go through the privacy policy of Service Providers before providing them with any information. FundsMama shall not be responsible for the use and disclosure of Information by third parties/service providers. By using the site and our services, you authorize us to exchange, share, part with all information related to your details and transaction history to such service providers/credit bureaus/agencies and/or for participation in any telecommunication or electronic clearing network as may be required by applicable law, customary practices, credit reporting, statistical analysis, and credit scoring, verification or risk management and you shall not hold us liable for the use or disclosure of this information.
                    </Text>

                    <Text paragraph>
                        <strong>2. With Business Partners:</strong> We may share your information with trusted partners who work on behalf of or with us under confidentiality/non-disclosure agreements. These entities may use your Personal Information for performing marketing services, delivering goods, administering promotions, analyzing data and usage of the Service through the FundsMama Application, processing credit/debit card payments, operating the Service or providing support and maintenance services for the same, or providing customer service. Further, by consenting to this Privacy Policy, you agree to the said sharing of data and you shall not hold us liable for the use or disclosure of this information.
                    </Text>

                    <Text paragraph>
                        <strong>3. For Payment Processing:</strong> You agree that we use other third parties such as credit/debit card processing companies, payment gateways, pre-paid cards, etc., to enable you to make payments for availing Services on the Application. When you sign up for these Services, you may have the ability to save your card details for future reference and faster future payments. In such cases, we may share your relevant Personal Information as necessary for the third parties to provide such services, including your name, residence address, and email address as available in our records. The processing of payments or authorization is solely in accordance with these third parties' policies, terms, and conditions, and we are not in any manner responsible or liable to you or any third party for any delay or failure at their end in processing the payments.
                    </Text>

                    <Text paragraph>
                        <strong>4. With Government and Law Enforcement Agencies:</strong> We may also share the information with government authorities or courts, pursuant to applicable laws and directives, for any investigation into offenses, to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of various terms and conditions or our policies.
                    </Text>

                    <Text paragraph>
                        <strong>5. For Business Transfers:</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.
                    </Text>

                    <Text paragraph>
                        <strong>6. With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                    </Text>

                    <Text paragraph>
                        <strong>7. With Other Users:</strong> When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
                    </Text>

                    <Text paragraph>
                        <strong>8. Lender/Lending Partner/Lending Service Provider:</strong> Relevant information collected by FundsMama is shared with Girdhar Finlease Private Limited or its Lending partners and their Lending service providers ("Parties") in case the customer wants to make a loan application. Further, the data usage, storage, and transfer are regulated in accordance with the privacy policies of the respective parties. However, the customer shall at all times have the option to revoke the access provided to share the information any further and also, to withdraw consent to share the data with third parties.
                    </Text>

                    <Text paragraph>
                        <strong>9. With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
                    </Text>

                    <Text paragraph>
                        By using our services, you agree and consent to our collection, storage, processing, and sharing of information (including sensitive personal data or information) about you or your use of services with third parties or service providers identified above.
                    </Text>

                    <Text paragraph>
                        When we share, process your information (including sensitive personal data or information) about you or your use of services, we ensure that it is shared or processed in compliance with applicable laws.
                    </Text>

                    <Text paragraph>
                        It is clarified that any information that is freely available or accessible in the public domain or furnished under the Right to Information Act, 2005, or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of this Privacy Policy.
                    </Text>

                    <Text paragraph>
                        If you do not agree to each and all of these terms and conditions, please do not use the website/app to avail Services from FundsMama. You may at any time while availing the Services withdraw your consent by contacting us as described in the "Contact Us" section. However, in the event of withdrawal of consent, we may not be able to serve you any further, and we will retain information which is required for fulfilling regulatory or legal requirements.
                    </Text>

                    <Text paragraph>
                        <strong>E. Security of Personal Data</strong>
                    </Text>

                    <Text paragraph>
                        The security of your Personal Information is very crucial to us. It is our endeavor to protect your Personal Information against any type of unauthorized usage. To do this, FundsMama has adopted measures like internal reviews of the data collection, storage, and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized system access where your personal information is stored. FundsMama has taken measures applicable under law to protect your information.
                    </Text>

                    <Text paragraph>
                        We have implemented technical controls like firewalls, encryption, passwords, WAF, SOC, Anti-virus, etc., and management controls like access management, log review, NDA, etc., for better safety of the information given by you.
                    </Text>

                    <Text paragraph>
                        FundsMama may share information with other third parties under strict confidential/non-disclosure agreements but won't be liable for the security breach of the third party. FundsMama cannot also be held responsible for the loss or damage to you, as a result of you providing the information to third parties.
                    </Text>

                    <Text paragraph>
                        FundsMama has designed and implemented an Incident Management policy which shall be followed in case of any security incident.
                    </Text>

                    <Text paragraph>
                        <strong>F. Children's Privacy</strong>
                    </Text>

                    <Text paragraph>
                        Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from our servers.
                    </Text>

                    <Text paragraph>
                        If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.
                    </Text>

                    <Text paragraph>
                        <strong>G. Method of Disposal of Personal Information</strong>
                    </Text>

                    <Text paragraph>
                        <strong>Procedure of Disposal:</strong>
                    </Text>

                    <Text paragraph>
                        Your Personal Data is immediately disposed of after the purpose of its collection has been fulfilled, in accordance with this policy and other applicable laws. The above information, unless otherwise required by law, shall not be used for any other purposes, other than the original purpose as mentioned in this policy document.
                    </Text>

                    <Text paragraph>
                        You have the right to delete or request that we assist in deleting the Personal Data that we have collected about you.
                    </Text>

                    <Text paragraph>
                        You may update, amend, or delete your information at any time by signing into your Account, if you have one, and visiting the account settings section that allows you to manage your personal information. You may also contact us to request access to, correct, or delete any personal information that you have provided to us. Please note that you shall be able to edit or delete only that information which does not impact the services provided by us to you. You also may not be able to edit the information which has been verified through external sources during the KYC process. In order to update such information, re-KYC needs to be initiated by you. You are also entitled to review the information provided and ensure that any personal information or sensitive personal data or information found to be inaccurate or deficient be corrected or amended as feasible.
                    </Text>

                    <Text paragraph>
                        Please note that the application, in compliance with the applicable laws and guidelines, gives you the right to revoke access to the permissions given by you for using the application or to avail the services. Further, the application gives the option to discontinue sharing the information with third parties.
                    </Text>

                    <Text paragraph>
                        Please note, however, that we may need to retain certain information when we have a legal obligation or lawful basis to do so.
                    </Text>

                    <Text paragraph>
                        <strong>Method of Disposal:</strong>
                    </Text>

                    <Text paragraph>
                        Personal information printed on paper is shredded or incinerated for disposal. Personal information saved in a digital format is deleted by using technology that prevents the recovery of deleted records.
                    </Text>
                    <Text paragraph>
                        <strong>H. Administrators in Charge of Management of Personal Information</strong>
                    </Text>

                    <Text paragraph>
                        FundsMama has designated an administrator in charge of the management of the personal information of Users and strives to protect the personal information.
                    </Text>

                    <Text paragraph>
                        He/she may be accessed as under:
                    </Text>

                    <Text paragraph>
                        <strong>Address:</strong> 106, First Floor, Surya Kiran Building, 19 Kasturba Gandhi Marg, New Delhi - 110001, India
                    </Text>

                    <Text paragraph>
                        <strong>E-mail:</strong> info@fundsmama.com.
                    </Text>

                    <Text paragraph>
                        <strong>I. Cookies</strong>
                    </Text>

                    <Text paragraph>
                        A "cookie" is a small piece of information stored by a web server on a web browser, so it can be later read back from that browser. The APP may use cookies and tracking technology depending on the features offered.
                    </Text>

                    <Text paragraph>
                        No personal information/data/details will be collected via cookies and other tracking technology; however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.
                    </Text>

                    <Text paragraph>
                        <strong>J. Your Consent</strong>
                    </Text>

                    <Text paragraph>
                        By submitting your personal information, you consent to the use of that information by us as detailed in this policy. You hereby expressly and irrevocably authorize FundsMama / its partners / affiliates to collect, store, share, obtain and authenticate any aspect of your personal information / KYC either directly or through any of the authorized agencies and disclose such information to our agents / contractors / service providers and to also use such information in the manner that may be required by FundsMama / its partners / affiliates including for the purposes of its business and for such time period as we may deem fit, within the scope of this privacy policy.
                    </Text>

                    <Text paragraph>
                        In this regard, you expressly and irrevocably authorize FundsMama / its partners / affiliates to collect, use, verify, and authenticate your personal identity information / KYC in any manner as may be deemed fit.
                    </Text>

                    <Text paragraph>
                        <strong>K. Third Party Sites</strong>
                    </Text>

                    <Text paragraph>
                        In relation to the payment gateways used by you to make payments to different sites or for the services, these gateways are managed by third parties and hence are controlled by the same. At some point, some of the information is saved on these third-party sites. FundsMama is not responsible for any type of loss or damage to you with regard to the information held by these third-party sites. However, these payment gateways are digitally encrypted, thereby providing the highest possible degree of privacy, security, and care.
                    </Text>

                    <Text paragraph>
                        Our Services may also have links to third-party websites and services that are outside our control. Further, We, Our group companies, Our affiliates, and the directors and employees ("the Group") accept no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental or consequential, punitive, or exemplary loss, damage or expenses) from Your use of any mobile application or any site or inability to use by any party, howsoever arising, and including any loss, damage or expense arising from, but not limited to, any defect, error, omission, interruption, imperfection, fault, mistake or inaccuracy with any mobile or online application, its Contents (material, information, data, money market movements, news items, etc.) or associated services, or due to unavailability of any application or any part thereof or any Contents or associated services even if the Group are advised of the possibility of such damages, losses or expenses.
                    </Text>

                    <Text paragraph>
                        <strong>FundsMama</strong> is not in any way responsible for the third-party sites and the privacy policy doesn't cover them. For the same, you will have to read the specific privacy policy of the third-party sites.
                    </Text>

                    <Text paragraph>
                        We are not in a position to control or guarantee the accuracy, integrity, or quality of the information, data, text, software, music, sound, photographs, graphics, videos, messages, or other relevant materials available on the Linked Sites. To clarify, please be aware that the information you provide on the Linked Sites shall be governed by the policies of the Linked Sites which you view.
                    </Text>

                    <Text paragraph>
                        <strong>L. Governing Law or Dispute Resolution</strong>
                    </Text>

                    <Text paragraph>
                        This Policy shall be governed by and construed in accordance with the Indian laws. The courts at Gurgaon (HR) shall have exclusive jurisdiction in relation to any disputes arising out of or in connection with this Policy.
                    </Text>

                    <Text paragraph>
                        If any dispute arises between FundsMama and the User in connection with or arising out of the validity, interpretation, implementation, or alleged breach of any provision of the Policy, such dispute shall be referred to and finally resolved by arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996 for the time being in force, which rules are deemed to be incorporated by reference in this clause. There shall be one (1) arbitrator and the seat of the arbitration shall be Gurgaon, India.
                    </Text>

                    <Text paragraph>
                        <strong>M. Right of Users</strong>
                    </Text>

                    <Text paragraph>
                        Users have the right, at any time, to know whether their personal information has been stored and can consult FundsMama to learn about their contents and origin, to verify their accuracy, or to ask for them to be supplemented, cancelled, updated, or corrected, or for transformation into anonymous format or to block any data. Requests should be sent to the administrator in charge of the management of the personal information of Users at the contact information set out above.
                    </Text>

                    <Text paragraph>
                        This Application does not support "Do Not Track" requests. To determine whether any of the third-party services honor the "Do Not Track" requests, please read their privacy policies.
                    </Text>

                    <Text paragraph>
                        <strong>N. Amendments to the Privacy Policy</strong>
                    </Text>

                    <Text paragraph>
                        We may amend, alter, modify, or update the Privacy Policy from time to time, and the same would be conveyed to you by posting it as a notice on the website and Application, along with the link to the updated policy, so that you may be aware of the information we collect and how we use it at all times. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. Users are bound by any changes to the Privacy Policy when they continue to use the Website(s) and/or Application(s) after such changes have been first posted.
                    </Text>

                    <Text paragraph>
                        <strong>DISCLAIMER, FORCE MAJEURE, AND INDEMNITY:</strong>
                    </Text>

                    <Text paragraph>
                        WITHOUT LIMITING THE FOREGOING, EVERYTHING ON THIS SITE, THE CONTENT, SERVICES, AND MATERIALS IN THE SITE ARE PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND EITHER EXPRESS, IMPLIED, OR STATUTORY. WE DO NOT MAKE ANY REPRESENTATIONS, WARRANTIES, OR ENDORSEMENTS REGARDING THE ACCURACY, RELIABILITY, USEFULNESS, OR COMPLETENESS OF THE SERVICES, CONTENT, OR MATERIALS IN THE SITE OR ANY SITE LINKED TO IT. TO THE MAXIMUM EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, DESIGN, ACCURACY, CAPABILITY, SUFFICIENCY, SUITABILITY, CAPACITY, COMPLETENESS, AVAILABILITY, COMPATIBILITY OR ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE. WE DO NOT WARRANT THAT THE SITE OR THE SERVICES, CONTENT, MATERIALS, OR FUNCTIONS CONTAINED IN THE SITE WILL BE CONTINUOUSLY AVAILABLE, UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE, SERVICES, CONTENT, MATERIALS OR THE SERVERS THAT MAKE THE SITE OR SUCH SERVICES, CONTENT, AND MATERIALS AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR ARE ACCURATE OR COMPLETE. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICES, CONTENT, MATERIALS, FUNCTIONS, OR PRODUCTS AVAILABLE THROUGH THE SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION. APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
                    </Text>

                    <Text paragraph>
                        Neither FundsMama and its affiliates, nor their or their affiliates' officers, employees, or agents shall be liable to you or anyone else for any loss, damage, or expense arising out of any access to or use of this Site / Services or any site linked to it, including, without limitation, any loss of revenues or profits, loss of business or loss of data, indirect, incidental, or consequential loss.
                    </Text>

                    <Text paragraph>
                        You agree to indemnify, save, and hold FundsMama, its affiliates, contractors, employees, officers, directors, agents, third-party associates, licensors, and partners harmless from any and all claims, demands, losses, damages, and liabilities, costs, and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the services or of the Site, any violation by you of the Terms of this Privacy Policy, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any material posted/ transmitted by you on the Site including ones that are threatening, libelous, obscene, harassing, or offensive.
                    </Text>

                    <Text paragraph>
                        <strong>FundsMama</strong> reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify FundsMama, including rights to settle, and you agree to cooperate with FundsMama's defense and settlement of these claims. FundsMama will use reasonable efforts to notify you of any claim, action, or proceeding brought by a third party that is subject to the foregoing indemnification upon becoming aware of it.
                    </Text>

                    <Text paragraph>
                        Notwithstanding anything contained in the policy, FundsMama won't be responsible for any loss or damage to you in case of any Force Majeure Event, which is unforeseeable or not within the control of FundsMama. A Force Majeure Event shall mean any event that is beyond the reasonable control of FundsMama and shall include, without limitation, sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorized access to computer, computer system or computer network, computer crashes, breach of security and encryption (provided beyond reasonable control of FundsMama), power or electricity failure or unavailability of adequate power or electricity.
                    </Text>

                    <Text paragraph>
                        You agree that no transmission on the internet can be said to be fully secured; hence, FundsMama cannot ensure the security of all the information provided by you and you do it on your own accord. FundsMama may entrust a third person with the management affairs of personal information for successful service operation and contract performance to the following entities, and entities will manage trustee to protect Personal Information from theft, leak, loss, falsification, or harm in accordance with applicable laws and regulations.
                    </Text>

                    <Text paragraph>
                        <strong>O. Grievance Redressal</strong>
                    </Text>

                    <Text paragraph>
                        In accordance with the Information Technology Act, 2000 and rules made thereunder or in the event you wish to make a complaint regarding any violation of the provisions of the Privacy Policy, or in case of any complaint related to any other matter which concerns you, you can contact the grievance redressal officer as detailed in our Customer Grievance Redressal Policy placed on our website.
                    </Text>

                    <Text paragraph>
                        Your complaint shall be addressed as per the Grievance redressal mechanism of the Company.
                    </Text>

                    <Text paragraph>
                        <strong>P. Effective Date</strong>
                    </Text>

                    <Text paragraph>
                        This privacy policy takes effect from January 01, 2022. (Last amended April 1, 2023)
                    </Text>

                </Container>
            </ContentBox>
        </>
    );
};

export default PrivacyPolicy;
