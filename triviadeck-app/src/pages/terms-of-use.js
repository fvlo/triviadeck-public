import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import TdAppBar from '../components/tdAppBar.js'
import LabelBottomNavigation from '../components/bottomNav.js'
import useStyles from '../components/styles.js';

import { Helmet } from "react-helmet"

export default function App() {
    const classes = useStyles();

  return (
    <React.Fragment>

            <div className="application">
              <Helmet
                htmlAttributes={{
                  lang: 'en',
                }}>
                <title>Triviadeck's terms of use</title>
                <meta name="robots" content="noindex" />
              </Helmet>
            </div>

    {/* AppBar at top of page */}
          <TdAppBar />

                <Box flex className={classes.communityPaddingBox} />
    
                {/* Main grid */}
                <Grid
                  container
                  direction="row"
                  justify = "center"
                  item xs={12}
                > 
                      

                    <Grid item xs={10} sm={8} align="center">
                        
                        <body class="c6" align="left"><h1 class="c11" id="h.we1tm4dvu8fo"><span class="c4">Terms Of Use</span></h1><h2 class="c1" id="h.2a9w5gwp1a0c"><span class="c3">Agreement To Terms</span></h2><p class="c2"><span class="c0">These Terms of Use constitute a legally binding agreement (&ldquo;Agreement&rdquo;) made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and Triviadeck (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your access to and use of the triviadeck.io website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</span></p><p class="c2"><span class="c0">Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</span></p><p class="c2"><span class="c0">The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</span></p><p class="c2"><span class="c0">The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.</span></p><h2 class="c1" id="h.f6cyr75e8ady"><span class="c3">Intellectual Property Rights</span></h2><p class="c2"><span class="c0">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, European Union, international copyright laws, and international conventions. The Content and the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</span></p><p class="c2"><span class="c0">Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</span></p><h2 class="c1" id="h.3jcq9bmkckqh"><span class="c3">User Representations</span></h2><p class="c2"><span class="c0">By using the Site, you represent and warrant that: &nbsp;(1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.</span></p><p class="c2"><span class="c0">If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</span></p><h2 class="c1" id="h.qb84sa4u8ido"><span class="c3">Prohibited Activities</span></h2><p class="c2"><span class="c0">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</span></p><p class="c2"><span class="c0">As a user of the Site, you agree not to:</span></p><ol class="c9 lst-kix_1owcfdsqvp21-0 start" start="1"><li class="c2 c5 li-bullet-0"><span class="c0">Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Use the Site to advertise or offer to sell goods and services.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Engage in unauthorized framing of or linking to the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Make improper use of our support services or submit false reports of abuse or misconduct.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Attempt to impersonate another user or person or use the username of another user.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Sell or otherwise transfer your profile.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Use any information obtained from the Site in order to harass, abuse, or harm another person.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Delete the copyright or other proprietary rights notice from any Content.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Copy or adapt the Site&rsquo;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&rsquo;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&ldquo;gifs&rdquo;), 1&times;1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &ldquo;spyware&rdquo; or &ldquo;passive collection mechanisms&rdquo; or &ldquo;pcms&rdquo;).</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</span></li><li class="c2 c5 li-bullet-0"><span class="c0">Use the Site in a manner inconsistent with any applicable laws or regulations.</span></li></ol><h2 class="c1" id="h.64wak52vzylh"><span class="c3">User Generated Contributions</span></h2><p class="c2"><span class="c0">We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</span></p><p class="c2"><span class="c0">1. &nbsp;The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</span></p><p class="c2"><span class="c0">2. &nbsp;You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</span></p><p class="c2"><span class="c0">3. &nbsp;You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</span></p><p class="c2"><span class="c0">4. &nbsp;Your Contributions are not false, inaccurate, or misleading.</span></p><p class="c2"><span class="c0">5. &nbsp;Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</span></p><p class="c2"><span class="c0">6. &nbsp;Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</span></p><p class="c2"><span class="c0">7. &nbsp;Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</span></p><p class="c2"><span class="c0">8. &nbsp;Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</span></p><p class="c2"><span class="c0">9. &nbsp;Your Contributions do not violate any applicable law, regulation, or rule.</span></p><p class="c2"><span class="c0">10. &nbsp;Your Contributions do not violate the privacy or publicity rights of any third party.</span></p><p class="c2"><span class="c0">11. &nbsp;Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</span></p><p class="c2"><span class="c0">12. &nbsp;Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</span></p><p class="c2"><span class="c0">13. &nbsp;Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</span></p><p class="c2"><span class="c0">14. &nbsp;Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</span></p><p class="c2"><span class="c0">Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</span></p><h2 class="c1" id="h.qfi9s0vminql"><span class="c3">Contribution License</span></h2><p class="c2"><span class="c0">You and the Site agree that we may access, store, process, and use any information, personal data and Contributions that you provide following the terms of the Privacy Policy and your choices (including settings).</span></p><p class="c2"><span class="c0">By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you. </span></p><p class="c2"><span class="c0">We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</span></p><p class="c2"><span class="c0">We do not claim any ownership interest in your Contributions, but we do need the right to use your Contributions to the extent necessary to provide the Site and services to users, including to display your Contributions to operate the Site and services. In order for us to make the Contributions you contribute available on the Site, and to operate, market and promote the Site, we need the right to make use of such Contributions &nbsp;in accordance with and subject to this Agreement. For example, if you write trivia content, we need your license to display those Contributions on the Site, and we need the right to sublicense those Contributions to our other users so that they can view those Contributions.</span></p><p class="c2"><span>Therefore, by contributing Contributions to the Site or creating it on the Site you automatically grant to us an irrevocable and perpetual, non-exclusive, transferable, fully-paid, royalty-free, worldwide license, by ourselves or with others, to use, copy, distribute, publicly perform, publicly display, print, publish, republish, excerpt (in whole or in part), reformat, translate, modify, revise and incorporate into other works, those Contributions and any works derived from those Contributions, in any form of media or expression, in the manner in which we from time to time permit Contributions to be used, in compliance with all applicable laws, and to license or permit others to do so. Our rights under this license remain in place even after termination of this Agreement or your account.</span></p><h2 class="c1" id="h.cqbz2wa5wum8"><span>Submissions</span></h2><p class="c2"><span class="c0">You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</span></p><h2 class="c1" id="h.bn3i66vla6h9"><span class="c3">Site Management</span></h2><p class="c2"><span class="c0">We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</span></p><h2 class="c1" id="h.dp3ht44bqpbj"><span class="c3">Term And Termination</span></h2><p class="c2"><span class="c0">These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</span></p><p class="c2"><span class="c0">If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</span></p><h2 class="c1" id="h.6ngea5w749wr"><span class="c3">Modifications And Interruptions</span></h2><p class="c2"><span class="c0">We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</span></p><p class="c2"><span class="c0">We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.</span></p><h2 class="c1" id="h.87cz7sim8kje"><span class="c3">Governing Law</span></h2><p class="c2"><span class="c0">These Terms shall be governed by and defined following the laws of Finland. Triviadeck and yourself irrevocably consent that the courts of Helsinki, Finland shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</span></p><h2 class="c1" id="h.tz5v4tqcp6tr"><span class="c3">Dispute Resolution</span></h2><h3 class="c10" id="h.ky3mwgduxj07"><span class="c7">Binding Arbitration</span></h3><p class="c2"><span class="c0">Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The governing law of the contract shall be the substantive law of Finland.</span></p><h3 class="c10" id="h.j05w8v4p3zk2"><span class="c7">Restrictions</span></h3><p class="c2"><span class="c0">The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</span></p><h3 class="c10" id="h.vmwparlqnlt7"><span class="c7">Exceptions to Arbitration</span></h3><p class="c2"><span class="c0">The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</span></p><h2 class="c1" id="h.69ld5gy8dliu"><span class="c3">Corrections</span></h2><p class="c2"><span class="c0">There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</span></p><h2 class="c1" id="h.ta4bmhqi2g6m"><span class="c3">Disclaimer</span></h2><p class="c2"><span class="c0">THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</span></p><h2 class="c1" id="h.lurabvvcyon3"><span class="c3">Limitations Of Liability</span></h2><p class="c2"><span class="c0">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</span></p><h2 class="c1" id="h.r3d2fpqm7trc"><span class="c3">Indemnification</span></h2><p class="c2"><span class="c0">You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&rsquo; fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</span></p><h2 class="c1" id="h.ondv11iwp9a"><span class="c3">User Data</span></h2><p class="c2"><span class="c0">We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</span></p><h2 class="c1" id="h.aiyoutrfxt6"><span class="c3">Electronic Communications, Transactions, And Signatures</span></h2><p class="c2"><span class="c0">Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</span></p><h2 class="c1" id="h.b1yxg738envl"><span class="c3">Miscellaneous</span></h2><p class="c2"><span class="c0">These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</span></p><h2 class="c1" id="h.6pozoqbg2vga"><span class="c3">Contact Us</span></h2><p class="c2"><span class="c0">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at community@triviadeck.io.</span></p><p class="c2 c8"><span class="c0"></span></p></body>

                        {/* ------------------------------------------- */}
                        <Box mt={10} mb={10}>
                        <Typography
                            variant="body1"
                            align="center"
                            color="textPrimary">
                                Thank you for using Triviadeck!
                        </Typography>
                        </Box>

                    </Grid>
                </Grid>

    
    {/* Bottom navigation bar */}
          <LabelBottomNavigation />
        </React.Fragment>


    
  );
}
