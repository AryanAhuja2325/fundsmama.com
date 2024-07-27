import React from 'react';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';
import termsAndConds from '../assets/imgs/Terms-and-Conditions.jpg';
import * as COLORS from '../assets/utils/Constants';

const Section = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${termsAndConds})`,
    backgroundSize: 'cover',
    padding: "30px",
    marginTop: "100px",
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}));

const Banner = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: 'white',
    fontSize: '40px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: COLORS.darkBlue
}));

const SectionText = styled(Typography)(({ theme }) => ({
    color: COLORS.darkBlue,
    lineHeight: 1.8,
    textAlign: 'justify'
}))

const TermsAndConditions = () => {
    return (
        <>
            <Section >
                <Banner>
                    Terms & <span style={{ color: COLORS.yellow }}>Conditions</span>
                </Banner>
                <Divider sx={{ borderColor: COLORS.white, marginBottom: 2, width: '10%', borderWidth: 2 }} />
            </Section>

            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <SectionTitle>Terms & Conditions</SectionTitle>
                        <Divider sx={{ borderColor: COLORS.darkBlue, marginBottom: 2, width: '10%', borderWidth: 2 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <SectionText paragraph>
                            Girdhar Finlease Private Limited (CIN: U74899DL1983PTC014960) is a Private Company registered under the Companies Act, 2013 having its registered office at 106 Surya Kiran Building 19 Kasturba Gandhi Marg Delhi New Delhi DL 110001 (hereinafter shall be referred to as "FundsMama'' or "Company" or "us" or "we" are the owner of the mobile application by the name FundsMama ("App") and website at www. fundsmama.com ("Website") (App and Website are hereinafter together referred to as the "Platform").
                        </SectionText>
                        <SectionText paragraph>
                            As a user ("User" or "you") of the Platform, you understand that the Company is a financial - technology platform providing access between you and various financial institutions, data partners and other partners, service providers etc. with a view to facilitate transactions between you and its partners.
                        </SectionText>
                        <SectionText paragraph>
                            By accessing or using any version of the Platform on any compatible device, you agree to be bound by these terms and conditions ("T&Cs") and any other applicable law, whether or not you are a registered member of the Platform. If you do not agree to these T&Cs, then YOU MAY NOT ACCESS THE PLATFORM OR USE ANY SERVICES PROVIDED BY US. The details relating to collection, storage, use and disclosure of your information are provided under the Privacy Policy and are incorporated herein by reference.
                        </SectionText>
                        <SectionText paragraph>
                            These T&Cs read together with our Privacy Policy govern usage of the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            These T&Cs may be amended or varied by FundsMama from time to time. The User is requested to check the Platform periodically for changes; your continued use of or access to the Platform or the services following any changes to these T&Cs constitutes your agreement to be bound by the terms of any such amendment or variation.
                        </SectionText>
                        <SectionText paragraph>
                            These T&Cs form a legal and binding agreement between the User and the Company and are made pursuant to the terms of the Information Technology Act, 2000 and guidelines provided by applicable regulatory authorities including but not limited to the Reserve Bank of India ("RBI").
                        </SectionText>
                        <SectionText paragraph>
                            <strong>GENERAL FEATURES AND FACILITIES PROVIDED BY FUNDSMAMA</strong>
                        </SectionText>
                        <SectionText paragraph>
                            Through the Platform, FundsMama is a brand name that provides an online medium which connects Users with financial institutions. FundsMama is an organization registered with the Reserve Bank of India and holds the license to lend money to the Users. FundsMama is a financial institution under the Companies Act, 2013 or the Banking Regulation Act, 1949 or any other laws for the time being in force in India. FundsMama is not a deposit-taking company or a chit fund or a company offering any investment schemes as per the rules and regulations for the time being in force in India.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>FundsMama</strong> provides an online platform connecting financial partners (financial institutions) with prospective borrowers. We neither lend nor borrow through this Platform; any/all services facilitated through our lender partners shall be on such terms as may be mutually agreed between the User and the lender partner/financial institution. FundsMama does not hold any right to accept or reject the loan application submitted through the Platform. Based on the specific credit underwriting policy of lending financial institutions and their Fair Practice Code, the customer loan application is either accepted or rejected; this acceptance or rejection is conveyed through the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            You hereby confirm to register with us to avail the services provided by us. You hereby understand and acknowledge that the information requested is for the purposes of complying with various laws, regulations, and guidelines (including Know Your Customer (KYC) norms / Anti-Money Laundering (AML) standards / Combating of Financing of Terrorism (CFT) / obligation of FI/NBFC/banks under the Prevention of Money Laundering Act, 2002) promulgated by the Government of India from time to time by the Company or its associated partners.
                        </SectionText>
                        <SectionText paragraph>
                            When you visit the Platform or send emails to us, you are communicating with us electronically. By communicating with us, you consent to receive communication from us electronically. We will communicate with you by e-mail or by posting notices on the Platform, via SMS, WhatsApp, or any other mode of electronic communication. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.
                        </SectionText>
                        <SectionText paragraph>
                            You hereby express your intent to know through telephonic calls, or SMS on your mobile number mentioned in the application form, as well as in this undertaking, or through any other communication mode, various Company/partner's offer schemes or promotional schemes, or any other promotional schemes and hereby authorize Company and its partners' employees, agents, and associates to do so. You confirm that laws in relation to the unsolicited communication referred to in the "National Do Not Call Registry" (the "NDNC Registry") as laid down by the Telecom Regulatory Authority of India will not be applicable for such communication/calls/SMS received from Company, its employees, agents, and/or associates.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>ELIGIBILITY</strong>
                        </SectionText>
                        <SectionText paragraph>
                            The User of the Platform represents, warrants, and declares that in the case of an individual, the User is a natural/legal person who has attained the age of at least 18 years and is legally allowed to enter into a contract in India. The User shall not access and use the Platform if he/she is not competent to contract under the applicable laws, rules, and regulations. The User is allowed to utilize the services in accordance with the terms and conditions detailed hereinafter.
                        </SectionText>
                        <SectionText paragraph>
                            By registering on the Platform, the User hereby undertakes to agree and abide by the T&Cs detailed herein. If the User violates any of these terms and conditions or otherwise violates an agreement entered into through the medium of the Platform, the Company has the right to terminate your membership/delete your profile and/or prohibit you from using or accessing the Platform at any time in its sole discretion, with or without notice.
                        </SectionText>
                        <SectionText paragraph>
                            The User also confirms that his/her annual household income, that is to say, the annual income of my family unit, (i.e., husband/wife, and unmarried children) is more than Rs. 3,00,000/- (Rupees Three Lakhs Only) and therefore, my borrowing under the present facility does not qualify to be treated as a Microfinance Loan under the Reserve Bank of India (Regulatory Framework for Microfinance Loans) Directions, 2022.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>USE OF THE PLATFORM</strong>
                        </SectionText>
                        <SectionText paragraph>
                            You shall not use the Platform otherwise than as an end user. You shall always comply with all applicable laws in your use of the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            You agree not to circumvent, disable or otherwise interfere with security-related features of the Platform or features that prevent or restrict use or copying of any content or enforce limitations on use of the Platform or the content therein.
                        </SectionText>
                        <SectionText paragraph>
                            Except for the services explicitly provided, the Company does not provide, control or endorse any third-party information, products or services in any manner whatsoever, even if such third-party information, products or services are advertised on the Platform. The Company shall under no circumstance be responsible for any delay/default or any other issue in the services provided by its partners.
                        </SectionText>
                        <SectionText paragraph>
                            The Company shall not be responsible for any delay or failure resulting from infrastructure issues, like server uptime, network availability, and connectivity.
                        </SectionText>
                        <SectionText paragraph>
                            The Platform is controlled and offered by the Company from its facilities in India. If you are a user outside India, please take note that the Company is subject only to Indian law and only to the jurisdiction of Indian courts. The Company makes no representations that the Platform is appropriate or available for use in other locations. Therefore, if you are a user outside India, you may use the Platform solely on your own volition and at your own risk. You shall be solely responsible for compliance with local law. However, we comply with all the statutory obligations in this regard and every data or information that we collect is stored on servers located in India.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Do Not Disturb</strong>
                        </SectionText>
                        <SectionText paragraph>
                            In the event you have registered your phone number on the 'Do Not Disturb' registers with your network provider, you shall ensure to take all steps to enable the Company's representatives to contact you via phone to provide details about different financial products and you shall ensure that such calls received by you are pursuant to you providing us with information and you shall not register a complaint with the relevant authorities for the same.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>USER ACCOUNT ON PLATFORM</strong>
                        </SectionText>
                        <SectionText paragraph>
                            If the User wishes to utilize the FundsMama facilities, then the User is required to maintain an account on the Platform and will be required to furnish certain information and details including User name, email id, contact number, and such other information as deemed necessary by the Company and/or its partners for provisioning of services to the User, which shall be collected as per the terms detailed in the Privacy Policy. You further acknowledge that if you do not provide the requested information to the Company, the Company or its partners will be unable to provide or continue its/their services to you. You confirm that all information given to the Company (whether in the Company's online form or otherwise) is true, correct, and not misleading. You agree to provide any additional documents to the Company as may be required from time to time upon your explicit consent as provided under the Privacy Policy. You hereby understand that every time you wish to use credit/financial facility from our partners, you will be provided with an online agreement (specific to the product/facility availed) on the Platform. Upon clicking 'I Accept,' you will be bound by the terms of the said agreement with Company's partners.
                        </SectionText>
                        <SectionText paragraph>
                            The User is responsible for maintaining the confidentiality and security of the account and for activities that occur in or through the User account. The User agrees to accept responsibility for all activities that occur under their account. Users should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if they have any reason to believe that the password has become known to anyone else or if the password is being, or is likely to be, used in an unauthorized manner. Please ensure that the details provided to us are true, correct, accurate, and complete. Under any circumstances, if FundsMama has any reasonable suspicion that the information provided by the User is wrong, inaccurate, or incorrect, FundsMama shall immediately terminate the User account without any notice to the User in this regard. In the event of any changes to the information shared by the User at the time of registering on the Platform, the User shall be responsible for forthwith notifying the said changes to FundsMama. You can access and update most of the information you provided us on the 'dashboard' area of your account after you log in or by writing to us at info@fundsmama.com. The right to use this Platform is personal to the User and is not transferable to any other person or entity.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>MONITORING OF THE PLATFORM AND YOUR ACCOUNT</strong>
                        </SectionText>
                        <SectionText paragraph>
                            The Company always has the right and liberty to monitor the content of the Platform or any part thereof, which shall include information provided in the User account. The monitoring of the Platform is important to determine the veracity of the information provided by you and that every User remains in consonance with the T&Cs provided herein. Subject to the T&Cs mentioned herein, the Company shall also have the liberty to remove any objectionable content which is in contravention of the T&Cs or any applicable laws in force in India or share such information with any governmental authority as per procedures laid down by the law for the time being in force in India.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>PRICES AND PAYMENT</strong>
                        </SectionText>
                        <SectionText paragraph>
                            All prices for the financial products visible on this Platform may change from time to time. The User acknowledges that the price is provided on the Platform on an 'as is' basis as provided by the Company's partners to the Company. However, while purchasing a financial product, the price prevailing at the commencement of placing the order will apply.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>INTELLECTUAL PROPERTY RIGHTS</strong>
                        </SectionText>
                        <SectionText paragraph>
                            The Company grants you a limited, non-transferable, and revocable license to access and use the Platform or any part thereof for availing the services. The User can access the Platform and use the available features, facilities, and utilize the Platform content for availing the Services. This license is non-transferable and does not permit any resale or commercial use of this Platform or its contents; any downloading or copying of account information for the benefit of anyone other than your use; or any use of data mining, robots, or similar data gathering and extraction tools. You are not entitled to duplicate, distribute, create derivative works of, display, or commercially exploit the Platform content, features, or facilities, directly or indirectly, without our prior written permission. You acknowledge that you have no right to have access to the Platform in source-code form. Any unauthorized access to the Platform (or any part thereof) or any networks, servers, or computer systems connected to the Platform and any attempt to modify, adapt, translate, or reverse engineer any part of the Platform or re-format or frame any portion of the pages of the Platform, save to the extent expressly permitted by these T&Cs, is not permitted.
                        </SectionText>
                        <SectionText paragraph>
                            All of the content on the Platform, images, illustrations, graphics, audio clips, video clips, or text, reports generated, trademarks, trade names ("Platform Content"), constitute our and our licensors' intellectual property. Copyright laws in all applicable jurisdictions protect the Platform and the Platform Content.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>FundsMama</strong> and its licensors, if any, are the sole and absolute owner of the Platform including its underlying software and source code associated with the Platform and all the trademarks, copyright, and any other intellectual property rights of any nature in the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            You acknowledge that all intellectual property rights in the Platform and the technology anywhere in the world belong to FundsMama or its licensors, if any, that rights in the Platform are licensed (not sold) to you, and that you have no rights in, or to, the Platform or the technology other than the limited right to avail the facilities provided in accordance with the FundsMama T&Cs.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>USER COMMUNICATION</strong>
                        </SectionText>
                        <SectionText paragraph>
                            While collecting your personal information, we shall seek express consent from you in a specific consent form detailing the manner, modes of communication, and methods for you to be contacted by us, our agents, representatives, affiliates, or anyone calling on our behalf at any contact number or physical or electronic address provided by you while registering your account on the Platform. We may contact you via SMS messages (including text/WhatsApp messages) and calls. Automated messages may be played when the telephone is answered, whether by you or someone else. In the event that an agent or representative calls, he or she may also leave a message on your answering machine, voicemail, or send one via SMS. You hereby agree to be contacted in the foregoing manner for us to assist or notify you in relation to the services.
                        </SectionText>
                        <SectionText paragraph>
                            The User certifies, warrants, and represents that the telephone numbers and/or email addresses and any other information that you have provided to us are your own and not someone else's and are true, accurate, current, and complete. You represent that you are permitted to receive calls at each of the telephone numbers you have explicitly consented to provide to us and emails at each of the email addresses you have provided us. You agree to notify us whenever you stop using a particular telephone number(s) and/or email address(es).
                        </SectionText>
                        <SectionText paragraph>
                            It is further clarified that the consent sought from you shall be used solely in connection with the facilitation of services through the Platform and such information shall not be shared with any third party, save and except an RBI ("Reserve Bank of India") or any other regulatory body, government agency, or any registered financial institution which may require the aforementioned information for processing the loan application as well as the compliance under applicable law. Furthermore, you shall always have the option of revoking your consent by notifying us at any point in time. However, it may result in you not being able to avail our services after such revocation.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>GUIDELINES</strong>
                        </SectionText>
                        <SectionText paragraph>
                            You hereby agree not to use the Platform for any purpose that is unlawful under any applicable laws and/or in violation of the terms of these T&C and our Privacy Policy. You shall not use the Platform in any manner that could damage, disable, overburden, or impair our server, or any network(s) connected to any FundsMama server, or interfere with any other party's use and enjoyment of the Platform. You shall not attempt to gain unauthorized access to any functions and features, other user accounts, computer systems, or networks connected to any FundsMama server, in any manner, including through hacking, password mining, or any other means. You shall not obtain or attempt to obtain any materials or information through any means which is not intentionally made available through the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            You shall not allow third parties to: (i) make and/or distribute copies of the Platform or any deliverable generated by the Platform; (ii) attempt to copy, reproduce, alter, modify, and/or reverse engineer the Platform; and/or (iii) create derivative works of the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            You accept that any and all operations emanating from your device shall be assumed to have been initiated by you.
                        </SectionText>
                        <SectionText paragraph>
                            You shall request FundsMama to block the account immediately if your device has been lost or stolen.
                        </SectionText>
                        <SectionText paragraph>
                            You are responsible for any and all activities that occur in your account. You agree to notify FundsMama immediately of any unauthorized use of the Account or any other breach of security. FundsMama shall not be liable for any loss to you owing to negligent actions on your part, either with or without your knowledge.
                        </SectionText>
                        <SectionText paragraph>
                            You shall be liable for losses incurred by FundsMama or any other party due to a third party's use of the account. You shall not use any other person's account at any time, without the permission of the account holder, and FundsMama cannot be held responsible.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>FundsMama</strong> shall make all reasonable efforts to ensure that your information is kept confidential. However, FundsMama shall not be responsible for any disclosure or leakage of confidential information and/or loss or damage of the device due to theft, negligence, or failure on your part to practice safe computing.
                        </SectionText>
                        <SectionText paragraph>
                            You shall ensure that while using the functions and features, all prevailing and applicable laws, rules, and regulations shall at all times be strictly complied with by you, and FundsMama shall not be liable in any manner whatsoever for default of any nature by you regarding the same.
                        </SectionText>
                        <SectionText paragraph>
                            The Company may wish to stop providing the services and may terminate use of it at any time without giving notice of termination to you. Unless the Company informs the User otherwise, upon any termination, (a) the rights and licenses granted to you in these T&Cs will end; and (b) the User must stop using the Platform or any part thereof forthwith. The Company reserves the right to suspend or cease providing any service and shall have no liability or responsibility to the User in any manner whatsoever.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>PROHIBITED USES</strong>
                        </SectionText>
                        <SectionText paragraph>
                            In addition to other prohibitions as set forth in the T&Cs, you are prohibited from using the Platform: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, provincial, local regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the service or of any related website, other websites, or the internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the service or any related website for violating any of the prohibited uses.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>CREDIT INFORMATION</strong>
                        </SectionText>
                        <SectionText paragraph>
                            Our lending partner(s) can only access your Credit Information (defined below) as your authorized representative upon seeking your explicit consent in a specific consent form and shall use Credit Information for limited end-use purposes consisting of and in relation to the services proposed to be availed by you from us on the Platform. Your Credit Information can be asked from CRIF at multiple checkpoints to ensure you can avail better services over and over again. We shall not aggregate, retain, store, copy, reproduce, republish, upload, post, transmit, sell, or rent the Credit Information to any other person, and the same cannot be copied or reproduced other than as agreed herein.
                        </SectionText>
                        <SectionText paragraph>
                            The Parties acknowledge that the Credit Information provided is solely the property of CRIF and the User (as appropriate). We shall protect and keep confidential the Credit Information both online and offline and use best-in-class security measures in line with applicable laws. The Credit Information shared by you or received on your behalf shall be destroyed, purged, erased, or returned to CRIF promptly either on the User seeking expressly to do so and/or seeking to revoke the consent OR if it is mandated or intimated by regulators. The relationship between you and the parties shall be governed by the laws of India, and all claims or disputes arising therefrom shall be subject to the exclusive jurisdiction of the courts of India.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Definitions:</strong>
                        </SectionText>
                        <SectionText paragraph>
                            Capitalized terms used under this clause but not defined above shall have the following meanings:
                        </SectionText>
                        <SectionText paragraph>
                            "Credit Information" means collectively the Credit Information Report and Credit Score which shall be generated by CRIF;
                        </SectionText>
                        <SectionText paragraph>
                            "CICRA" shall mean the Credit Information Companies (Regulation) Act, 2005 read with related rules and regulations.
                        </SectionText>
                        <SectionText paragraph>
                            "CRIF" shall mean CRIF Credit Information Company of India Private Limited.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>INDEMNITY</strong>
                        </SectionText>
                        <SectionText paragraph>
                            You agree and undertake to indemnify FundsMama, its affiliates, contractors, employees, officers, directors, agents, and its third-party associates, licensors, and lending partners harmless against any claims, demands, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the services or of the Platform, any violation by you of these T&Cs, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any threatening, libellous, obscene, harassing or offensive material posted/ transmitted by you on the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            FundsMama reserves the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify FundsMama, including rights to settle, and you agree to cooperate with FundsMama defence and settlement of these claims. FundsMama will use reasonable efforts to notify you of any claim, action, or proceeding brought by a third party that is subject to the foregoing indemnification upon becoming aware of it.
                        </SectionText>
                        <SectionText paragraph>
                            The terms of this paragraph will survive any termination or cancellation of these T&C or your use of the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>WARRANTIES</strong>
                        </SectionText>
                        <SectionText paragraph>
                            The Platform and the functions and features therein are provided on an "as is" and on an "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>FundsMama</strong> shall make reasonable efforts to make available the Platform and the functions and features at all times. However, we make no warranty that the Platform shall meet your requirements, be uninterrupted, timely, secure, and/or error-free. Further, we do not make any warranty as to the results that may be obtained from the use of the functions and features or as to the accuracy, reliability, and/or quality of the output derived therefrom. FundsMama shall not be liable for the loss and/or damage of the confidential information or data of the User arising as a result of an event or a series of related events, that is beyond the control of FundsMama, including failures of or problems with the internet or part of the internet, attempted hacker attacks, hacker attacks, denial of service attacks and/or viruses or other malicious software attacks or infections.
                        </SectionText>
                        <SectionText paragraph>
                            Any material downloaded or otherwise obtained through the Platform is done at your own discretion and risk, and you are solely responsible for any damage to your device or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from us through or from the service will create any warranty not expressly stated in these T&C.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>ACKNOWLEDGEMENTS</strong>
                        </SectionText>
                        <SectionText paragraph>
                            You acknowledge that FundsMama is an online platform which connects the financial institutions with prospective borrowers and that FundsMama is not an organization registered with the Reserve Bank of India and does not hold any licence to lend money to the Users. You acknowledge that the use of the financial lending activity is entirely between the Users and respective financial institutions and neither FundsMama nor its employees, officers, directors, agents have any interest with regard to any financial lending activity. The service is provided on an "as is" and "as available" basis, you acknowledge that it is your responsibility to verify the information available on the Platform and FundsMama is in no manner liable if the information provided on this Platform is untrue or incorrect. You acknowledge that FundsMama is in no manner responsible for any claim of money or damages in the event a financial institution fails to either grant a loan or a user fails to repay the loan or misrepresents his financial status or commits a fraud or cheating or any other such illegal act.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>LIMITATION OF LIABILITY</strong>
                        </SectionText>
                        <SectionText paragraph>
                            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, NEITHER THE COMPANY NOR ITS AFFILIATED COMPANIES, SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES OR ANY RELATED PARTY SHALL HAVE ANY LIABILITY TO YOU OR TO ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES OR FOR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE ACCESS, USE OR PERFORMANCE OF THIS PLATFORM'S FUNCTIONS AND FEATURES OR FOR INTERRUPTIONS, DELAY, ETC., EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF DAMAGES RESULTING FROM THE COST OF GETTING SUBSTITUTE FACILITIES ON THE PLATFORM, ANY PRODUCTS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE PLATFORM, UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA STATEMENTS OR CONDUCT OF ANYONE ON THE PLATFORM, OR INABILITY TO USE THE PLATFORM, THE PROVISION OF OR FAILURE TO PROVIDE THE FUNCTIONS AND FEATURES, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU WAIVE, RELEASE, DISCHARGE AND HOLD HARMLESS THE COMPANY, ITS AFFILIATED AND SUBSIDIARY COMPANIES, AND EACH OF THEIR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS, FROM ANY AND ALL CLAIMS, LOSSES, DAMAGES, LIABILITIES, EXPENSES AND CAUSES OF ACTION ARISING OUT OF YOUR USE OF THE PLATFORM. THIS CLAUSE SHALL SURVIVE IN PERPETUITY.
                        </SectionText>
                        <SectionText paragraph>
                            THE COMPANY IS MERELY A FACILITATOR AND SHALL NOT BE RESPONSIBLE FOR ANY BREACH, DEFAULT, ERROR COMMITTED BY EITHER THE USER OR ITS PARTNER. THE COMPANY SHALL TO THE BEST OF ITS ABILITIES AND WITHIN THE REALM OF LAW AID THE CONCERNED USER IN TERMS OF PROVISION OF INFORMATION REQUIRED. HOWEVER, THE COMPANY SHALL NOT BE RESPONSIBLE FOR ANY DEFAULT ON BEHALF OF THE USER/PARTNER.
                        </SectionText>
                        <SectionText paragraph>
                            THE COMPANY IS MERELY AN INFORMATION TECHNOLOGY PLATFORM AND THE USER IS ENTITLED TO CONDUCT ITS OWN DILIGENCE BEFORE TAKING ANY STEPS TO INITIATE THE PROCESSES OUTLINED ON THE PLATFORM OR ANY PART THEREOF.
                        </SectionText>
                        <SectionText paragraph>
                            YOUR USE OF THE SERVICE AND ALL INFORMATION, PRODUCTS AND OTHER CONTENT (INCLUDING THAT OF THIRD PARTIES) INCLUDED IN OR ACCESSIBLE FROM THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                        </SectionText>
                        <SectionText paragraph>
                            THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND AS TO THE SERVICE AND ALL INFORMATION, PRODUCTS AND OTHER CONTENT (INCLUDING THAT OF THIRD PARTIES) INCLUDED IN OR ACCESSIBLE FROM THE SERVICE, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>ADVERTISERS/ THIRD PARTY LINKS ON THE PLATFORM</strong>
                        </SectionText>
                        <SectionText paragraph>
                            The Company accepts no responsibility for advertisements contained within the Platform or any part thereof. The Company has no control over and accepts no responsibility for the content of any website or mobile application to which a link from the Platform or any part thereof exists. Such linked websites and mobile applications are provided "as is" for User's convenience only with no warranty, express or implied, for the information provided within them or the veracity thereof.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</strong>
                        </SectionText>
                        <SectionText paragraph>
                            If, at the Company's request, you send certain specific submissions or without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (a) to maintain any comments in confidence; (b) to pay compensation for any comments; or (c) to respond to any comments.
                        </SectionText>
                        <SectionText paragraph>
                            You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libellous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
                        </SectionText>
                        <SectionText paragraph>
                            You are licensing to the Company and its service providers, any information, data, passwords, materials or other content (collectively, "Content") you provide through or to the service. Company and service providers of Company may use, modify, display, distribute, and create new material using such Content to provide the service to you. We may also use, sell, license, reproduce, distribute and disclose aggregate, non-personally identifiable information that is derived through your use of the service. By submitting Content, you automatically agree, or promise that the owner of such Content has expressly agreed that, without any particular time limit, and without the payment of any fees, the Company and its third-party service providers may use the Content for the purposes set out above.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>TAKEDOWN POLICY</strong>
                        </SectionText>
                        <SectionText paragraph>
                            If you believe that there is any content available on the Platform which is contrary to the Company's policies or applicable law, then please notify the Grievance Officer at the email ID provided below. When you send such notice, please ensure that your notification contains the following details:
                        </SectionText>
                        <SectionText paragraph>
                            Your name, email ID, phone number, and postal address;
                        </SectionText>
                        <SectionText paragraph>
                            The exact nature of the objectionable content and the exact location (including the relevant web page) where it appears;
                        </SectionText>
                        <SectionText paragraph>
                            Why do you consider the content to be objectionable?
                        </SectionText>
                        <SectionText paragraph>
                            We will evaluate the contents of the notice and may take such action as we deem appropriate in keeping with our policies and applicable law which may include, asking further details from you or taking down the content that was the subject matter of your notice.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>NOTICES</strong>
                        </SectionText>
                        <SectionText paragraph>
                            Any notice required to be given to the Company under these T&Cs shall be sent by registered mail or recognized courier to the following address: 106 Surya Kiran Building, 19 Kasturba Gandhi Marg, Delhi, New Delhi DL 110001.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>SEVERABILITY</strong>
                        </SectionText>
                        <SectionText paragraph>
                            If any provision of these T&C is held to be illegal, invalid or unenforceable under any present or future applicable laws: (a) such provision will be replaced with another, which is not prohibited or unenforceable and has, as far as possible, the same legal and commercial effect as that which it replaces; and (b) the remaining provisions of the T&C will remain in full force and effect and will not be affected by the illegal, invalid, or unenforceable provision or by its severance here from.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>GOVERNING LAW AND JURISDICTION</strong>
                        </SectionText>
                        <SectionText paragraph>
                            These T&Cs along with the Privacy Policy are governed and construed in accordance with Indian law. By using the Platform, you hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Delhi, India, in the event of any disputes arising out of or in relation to your access to and use of the Platform.
                        </SectionText>
                        <SectionText paragraph>
                            <strong>GRIEVANCE</strong>
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Grievance Redressal Officer:</strong> Rahul Kumar
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Contact Details:</strong> Ph: +91 9711711026
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Email:</strong> <a href="mailto:grievance@fundsmama.com">grievance@fundsmama.com</a>
                        </SectionText>
                        <SectionText paragraph>
                            <strong>Address:</strong> Girdhar Finlease Pvt Ltd., 106 Surya Kiran Building, 19 Kasturba Gandhi Marg, Delhi, New Delhi DL 110001
                        </SectionText>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TermsAndConditions;
