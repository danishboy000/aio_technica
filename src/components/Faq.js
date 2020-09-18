import React from 'react'

export default function Faq() {

    var gettingStarted = [
        {
            question:'How do I start with Aio Technica?',
            answer:'To start connecting your devices with Aio Technica we require all customers to fill out our online sign up form which you can reach here or by clicking the <b>Get Connected</b> button anywhere you see it on the website.Once we have verified your details, we will set you up an account and you can start ordering and connecting services.'
        },
        {
            question:'What types of SIM cards do Aio Technica supply?',
            answer:'Aio Technica stock 5 varieties of SIM cards<br /><br />1. Aio Technica Standard (2FF) SIM Cards<br />2. Aio Technica Micro (3FF) SIM Cards<br />3. Aio Technica Nano (4FF) SIM Cards<br />4.Aio Technica Industrial Strength (Ruggedised 2FF) SIM Cards<br />5.Aio Technica Surface Mounted/Solderable SIM Chips',
        
        },
        {
            question:'How do I activate a SIM Card?',
            answer:'Aio Technica SIM cards activate automatically! – we like to keep things simple.<br />Unless specifically requested our Aio Technica SIM cards are delivered in a “Test Ready” state. This allows a SIM to establish a data connection.<br />Once your device establishes a connection, the SIM is allowed to conduct up to 20KB of “Test Data” free of charge. Once your device has passed the 20KB limit it’s state will automatically move to “Activated”. <br />Note: During the time a SIM is in the “Test Ready” state, it is not billable.'
        },
        {
            question:'What data plans do Aio Technica offer?',
            answer:'Aio Technica offer Group Data Plans only GROUP Data Plans – SIMs on a group plan effectively share data with other SIMs on the same plan, for example if you have 5 x 10MB SIM cards you have a “pool” of 50MB of data shared between your fleet. This way if you have devices that under-utilize their data allowance, devices that go over their allowance can borrow from the pool. NOTE: Once your devices have exceeded their “pool” allowance you will be charged excess usage per KB.'
        },
        {
            question:'What other features can I add to my SIM?',
            answer:'Aio Technica currently offer the following features on our SIM Cards.<br /><br />1.SMS Mobile Originating (MO) – SMS Messaging directly from your SIM/Device, this is charged on a Pay-Per Use rate.<br />2.SMS Mobile Terminating (MT) – SMS Messaging sent to and received by your SIM/Device from an outside SIM. There is no charge for our SIMs to receive SMS.<br />3.Voice – Aio Technica offer voice services on a Pay-Per Use or small bundle rate. NOTE: Voice services are subject to approval.<br />1.International Roaming – Aio Technica can offer International Roaming on our SIM Cards for a fixed rate per MB.'
        },
        {
            question:'What networking options do Aio Technica Offer?',
            answer:'Aio Technica can offer the following network configurations<br /><br />1.Standard public internet access – This is the most common set up for most customers, it allows your devices to connect directly to the public internet and start transmitting data immediately.<br />2.Public internet access with a dynamic public IP address – This allows your devices to utilise the public internet but also serves your device a publicly addressable IP address which can be used to contact the device in the field. NOTE: This service is not recommended as it can cause safety & stability issues and is purely subject to approval.<br />3.Static Private IP – This is our recommendation for customers that need a secure method to directly communicate with their device in the field without subjecting it to the public internet. Devices with a private static IP address can be reached using a remote gateway or VPN.'
        },
        {
            question:'How do I order new SIM Cards?',
            answer:'You can order physical SIM cards by emailing support@aiotechnica.com and providing the following information:<br /><br />1.Account Name<br />2.SIM Card Size<br />3.Number of SIMs<br />4.APN/Communication Plan Required<br />5.Rate Plan Required<br />6.Delivery Address'
        },
        {
            question:'What payment and subscriptions terms do Aio Technica offer?',
            answer:'All services from Aio Technica are supplied on a month-to-month basis and billed in monthly in advance. NOTE:  Only excess usage, additional Pay-Per Use features (SMS, etc) and services are billed in a post-paid format. Aio Technica’s standard payment terms are 7 days from date of invoice, unless otherwise negotiated.'
        },
        {
            question:'How long does shipping take?',
            answer:'Aio Technica delivers all domestic North American orders with StarTrack Express. The service is generally overnight delivery to most parts of North America. Parcel tracking is available at StarTrack’s website. International shipping can be arranged and billed to your preferred provider – Please provide Aio Technica with your freight account details on order. Aio Technica can provide international shipping via DHL Express and will arrange a quote before shipment.'
        },
        {
            question:'Technical Support Contacts',
            answer:'You can email Aio Technica technical support through support@aiotechnica.com or by using our Support Portal.'
        },
        {
            question:'Aio Technica network coverage and operating frequencies',
            answer:'The Telstra Mobile network offers the best breadth and depth of third generation mobile coverage in North America covering more than 2.1 million square kilometers. The network provides mobile broadband access to 99% of North Americans, spanning city to country and servicing  many remote coastal and rural communities. Like any other mobile network, mobile coverage depends in part on where you are and what particular device you are using. To get the best out of mobile coverage in regional areas, it is recommended that you adopt an external antenna to increase the signal strength and coverage.<br />Click here to check out coverage<br />Telstra Operating Frequencies:<ul><li>3G – 850MHz (2100 MHz was switched off in 2019)</li><li>4G/LTE – Telstra currently operates 5 frequencies for LTE these are listed below. The critical frequencies for all M2M/IoT applications are B3 & B28</li><li>B1 – 2100MHz</li><li>B3 – 1800MHz (Must have for M2M/IoT)</li><li>B7 – 2600MHz</li><li>B8 – 900MHz</li><li>B28 – 700MHz (Must have for M2M/IoT)</li></ul>'
        },
        {
            question:'What APNs (Access Point Names) are available? ',
            answer:`Aio Technica can provision SIM cards with the following APNs:<p></p><ul><li>telstra.M2M – Assigns your device a private dynamic IP address with direct internet access using NAT.</li><li>telstra.internet – Assigns your device a private dynamic IP address with direct internet access using NAT.</li><li>telstra.extranet <em><strong>(On approval only)</strong></em> – Assigns your device a public dynamic IP (no NAT)</li>
            <li>aiotechnica.com – Aio Technica’s own private static IP network.</li>
            <li>Aio Technica.ipx – Aio Technica’s own private static IP network.</li>
            </ul>
            <p><strong>NOTE:&nbsp;</strong>Our default APN is Aio Technica</p>
            <p><strong>Tech Tip</strong></p>
            <p>The following AT command can be used to set or read the APN from your devices PDP context parameters:</p>
            <p><code>AT+CGDCONT=&lt;cid&gt;[,&lt;PDP_type&gt;[,&lt;APN&gt;[,&lt;PDP_addr&gt;[,&lt;d_comp&gt;[,&lt;h_comp&gt;]]]]]<br>
            OK</code></p>
            <p><code>AT+CGDCONT?<br>
            +CGDCONT: &lt;cid&gt;,&lt;PDP_type&gt;,&lt;APN&gt;,&lt;PDP_addr&gt;,&lt;d_comp&gt;,&lt;h_comp&gt;<br>
            OK</code></p>
            <p><span style="text-decoration: underline;">Aio Technica Example:</span></p>
            <p><code>AT+CGDCONT=1,"IP","Aio Technica"<br>
            OK</code></p>
            <div>
            <div><code>AT+CGDCONT?</code></div>
            <div>
            <div><code>+CGDCONT: 1, "IP", "Aio Technica",,0,0</code></div><div><code>OK</code></div></div></div>`
        },
        {
            question:'I have received my SIM card and its not working',
            answer:`Please check the following:<p></p>
            <ol>
            <li>Is the SIM inserted correctly?</li>
            <li>Is the hardware/device powered up correctly?</li>
            <li>Have you configured the correct APN?</li>
            <li>If possible check the devices SIM status (menu, GUI, LED, etc) or by issuing the AT command AT+CPIN? The +READY response generally rules out a hardware issues, and an +ERROR generally indicates that there is a hardware/device interoperability issue.</li>
            </ol>`
        },
        {
            question:'Does my SIM card have a PIN?',
            answer:`By default Aio Technica SIM cards do not have a PIN code enabled. If required we can supply PIN codes, and an application can use the AT+CLCK command (Facility Lock) to enable SIM PIN.<p></p>
            <div class="gmail_default">The default SIM pin is last 4 digits of PUK, available in Jasper.<p></p>
            </div>
            <div class="gmail_default">Simple way to enable PIN, is insert into mobile, go to SIM security, enable SIM pin, enter the default pin (last 4 digits of PUK). Next time phone reset, user has to enter SIM pin. Once SIM pin is enabled, you can change SIM pin as well.<p></p>
            </div>
            <div class="gmail_default">Customers can also script enabling/disabling etc with AT commands if needed to be done in bulk or part of manufacturing.</div>
            <p><strong>Tech Tip</strong></p>
            <p>The following AT command is used to query SIM status:</p>
            <div><code>AT+CPIN?</code></div>
            <div><code>+CPIN: &lt;code&gt;</code></div>
            <div></div>
            <div><span style="text-decoration: underline;">Example:</span></div>
            <div></div>
            <div>Mobile equipment not waiting for SIM PIN:</div>
            <div></div>
            <div>
            <div><code>AT+CPIN?</code></div>
            <div><code>+CPIN: READY</code></div>
            </div>`
        },
        {
            question:'My device is asking for a PUK code, what do I do?',
            answer:`This occurs when SIM PIN is entered incorrectly 3 times.<p></p>
            <p>Be careful, do not attempt to guess this code! A PUK code is a security feature enabled when you incorrectly enter your personal PIN code into the phone. &nbsp;PUK stands for Pin Unlock Key and is kept by Aio Technica to help protect your SIM card from unauthorised use. To get the PUK code, contact Aio Technica support on 03 9696 3011.</p>
            <p>Incorrectly entering the PUK code ten times will destroy your SIM card. This is a safety feature to help guard against an unauthorised person using your SIM card.</p>
            <p><span style="text-decoration: underline;">Example:</span></p>
            <p>Mobile equipment is waiting for PUK code:</p>
            <p><code>AT+CPIN?<br>
            +CPIN: SIM PUK</code></p>
            <p>Unlock the mobile equipment with 8 digit PUK code and new SIM pin:</p>
            <p><code>AT+CPIN=00001111,1234<br>
            OK</code></p>`
        },
        {
            question:'What is the SIM card IMSI?',
            answer:`Each SIM card can be identified on each operatior network by its international mobile subscriber identity or IMSI.<p></p>
            <p>Aio Technica IMSI format is (15 digits):</p>
            <ul>
            <li>First 3 digits are Mobile Country Code (MCC).</li>
            <li>Next 2 digits are Mobile Network Code (MNC).</li>
            <li>Followed by the&nbsp;mobile station identification number.</li>
            </ul>
            <p>An example IMSI is 505010000011111.</p>
            <p><span style="text-decoration: underline;">Tech Tip:</span></p>
            <p>The following AT command is used to read and identify the IMSI of the SIM card.</p>
            <p><code>AT+CIMI<br>
            &lt;IMSI&gt;<br>
            OK</code></p>`
        },
        {
            question:'What is the SIM card ICCID?',
            answer:`Each SIM card is internationally identified by a unique integrated circuit card identifier (ICCID). Aio Technica dispatch a packing slip with each order that lists each SIM with the ICCID(s).<p></p>
            <p>Some of our SIM card sleeves and the SIM cards themselves have ICCID engraved on them. An ICCID example is 89610 00000 00000 12345.</p>
            <p>Aio Technica use the ICCID as the primary identifier during SIM provisioning and inventory management.</p>`
        },
        {
            question:'What is the SIM card serial number?',
            answer:`Each SIM card has a unique serial number or S/N. Aio Technica dispatch a packing slip with each order that lists each SIM with the serial number(s).<p></p>
            <p>The barcode on the SIM cards sleeve is the&nbsp;serial number, and some sleeves/SIMs have the serial number printed on them, i.e. 0000 1111 2N, which means that the S/N is 0000 1111 2 without the N.</p>`
        },
        {
            question:'What is the SIM card mobile number or MSISDN?',
            answer:`Each SIM card has a unique mobile number or MSISDN. Aio Technica dispatch a packing slip with each order that lists each SIM with the mobile number(s).<p></p>
            <p>You can also get this information from the Aio Technica Control Centre or by contacting technical support, through <a href="mailto:support@aiotechnica.com">support@aiotechnica.com</a></p>`
        },
        {
            question:'Can I use Aio Technica SIM Cards in an iPhone?',
            answer:`While Aio Technica SIM Cards can be used in unlocked Apple iPhone handsets that are being used for M2M/IoT purposes, they will require you to reconfigure the APN on your device.<p></p>
            <p>Due to the changing nature of Apple’s ios environment we regret that we can’t provide step by step advice on changing the APN on your particular iPhone or ios version.</p>
            <p>A majority of our customers have seen success creating a custom profile using the web-service <a href="http://www.unlockit.co.nz/unlockit/">http://www.unlockit.co.nz/unlockit/</a> – This website is not affiliated with Aio Technica in any way and we can take no responsibility for the availability or reliability of the service offered.</p>`
        }

    ];

    var allGettingStarted = gettingStarted.map((item,i) => {
        return (
            <div class="panel panel-default accordion">
                <div class="panel-heading accordion-heading" role="tab" id="headingOne">
                    <h4 class="panel-title accordion-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href={'#collapse_'+i} aria-expanded="true" aria-controls={'collapse_'+i}>
                        {item.question}
                        </a>
                    </h4>
                </div>
                <div id={'collapse_'+i} class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div dangerouslySetInnerHTML={{ __html: item.answer}} class="panel-body accordion-body">
                       
                        
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div class="section-block">
            <div class="container">
                <div class="row">
                <div class="col-md-12 col-sm-12 col-12">
                    <div class="section-heading">
                        <h5>Frequently Asked Questions</h5>
                        <div class="section-heading-line-left"></div>
                    </div>
                    <div class="panel-group mt-40" id="accordion" role="tablist" aria-multiselectable="true">

                        {allGettingStarted}

                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
