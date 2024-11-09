import PropTypes from 'prop-types';
import Footer from '../layout/Footer/Footer';
import NavigationBar from '../layout/Navbar/NavigationBar';

const TermsSection = ({ title, children }) => (
  <div>
    <h4 style={{ marginBottom: '40px' }}>{title}</h4>
    {children}
  </div>
);

TermsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const TermItem = ({ title, children }) => (
  <div>
    <h3 style={{ marginBottom: '10px', marginTop:'10px', fontSize: '24px' }}>{title}</h3>
    {children}
  </div>
);

TermItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const TermsAndConditions = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <main className="container px-md-5 padding-top">
        <h2 className="text-uppercase" style={{ marginBottom: '20px' }}>Terms and Conditions</h2>

        <TermsSection title="Valgee Transport Services">
          <TermItem title="Purpose & Scope">
            <p style={{ fontSize: '18px', color: '#707070' }}>The purpose of the terms and conditions is to govern the contractual relations between Clients and Valgee Transport Services, hereinafter referred to simply as the &apos;VTS&apos;, with regards to any undertaking or transaction pertaining transportation services.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Except specific terms and conditions are agreed with a Client, and unless otherwise provided, the terms and conditions herein are applicable. The Client or any other agent acting on his/her behalf, acknowledges having read these terms prior to booking, and expressly accepts the same.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Due to the nature of Nigerian roads and the consequences of the current pandemic, the pricing of our services as well as the estimated take off and arrival timelines are approximations only and not definite, they may be subject to change independent of our schedule or choice.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Bookings, Payments & Reservation">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Bookings and payments for both shared or Hire VTS reservations can be made onsite at our office addresses provided here or online via this link www.valgee.com. In the unlikely event a reservation duly made is not secured, affected Client[s] will be rescheduled to another departure time
              at no extra cost.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>VTS generally has a no refund policy for all reservations made from any of its sales channels. Tickets and reservations cannot be transferred to third parties without the prior permission of VTS sought and obtained.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Check-in & Boarding">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Clients on shared service are required to check-in at the designated take off points thirty [30] minutes before the fixed time of departure. Departure time will not be extended for Client’s that don’t check in and board on schedule. Boarding of vehicles are only allowed at designated
              locations as provided on our website except otherwise agreed.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Luggage Regulations">
            <p style={{ fontSize: '18px', color: '#707070' }}>Clients on shared service are advised to travel light on VTS, our services are primarily designed to transport persons and not goods. For logistics purposes, we are unable to accommodate any luggage exceeding 20 kg, with 30”x22”x15 dimensions on shared services for each Client.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Excess Luggage">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              We recommend prior notice and arrangement with VTS in cases of excess luggage at the point of booking/reservation so as to clarify on the best means of transporting Client’s luggage. In cases where Client’s luggage exceeds the regulated weight or dimensions, affected Client’s will be
              asked to either purchase extra seat[s] to accommodate the luggage or pay for alternative arrangement on prior or subsequent vehicles going along the same route.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Packing & Packaging">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Clients are responsible for proper packing and packaging of their luggage/property on transit as VTS will not be held responsible for goods/luggage damaged due to poor/inappropriate packaging. We also recommend the use of flexible travelling bags/boxes as rigid/plastic boxes are
              fragile and may pose a challenge during luggage loading, handling or offloading. Fragile items such as electronics, laptops and other valuables are to be carried by Clients. Fragile Hand luggage are not to be placed in the trunk of our vehicles.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Banned & Regulated Items">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Items banned either by the Nigeria Customs Service, National Drug Law Enforcement Agency, National Food & Drugs Administration and Control or any other Nigerian Law for the time being in force, or such other illegal or prohibited items/products/goods are not allowed on our Vehicles.
              Regulated items/products/goods are to be disclosed and necessary permissions for conveying such luggage/property confirmed before check-in/boarding.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              VTS will report and hand over Client’s who attempt to, or break any law, to relevant authorities and will not be held liable or responsible for the confiscation or seizure of any such items by law enforcement agencies. Explosives and such other hazardous materials such as but not
              limited to - gas cylinders (empty or with content), generators, building materials, fuel in gallons, agrochemicals, herbicides, pesticides; are not allowed on our vehicles.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Luggage Id/Labelling">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              On each parcel, item or luggage unit, clear labelling shall be provided to allow immediate and clear identification of the owner, consignee, place of delivery where applicable and the nature of the goods. The information on the labels must match those appearing on the Client’s
              receipts/boarding pass. Labels shall also meet any applicable regulatory requirements, notably those pertaining to hazardous/regulated products.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Luggage is conveyed at owner’s risk especially on shared service, Client’s are advised to take responsibility for their property until arrival and disembarking. Found but unclaimed properties/luggage will be kept for a maximum of 30 [thirty] days before being disposed of (except
              perishable items which will be discarded depending on how soon they may get bad). Clients shall be solely liable for all consequences arising from lack of poor labelling or marking of luggage/property.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Reservation rescheduling">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Reserved bookings for trips can only be rescheduled before 12 hours to the trip take off time. Reschedule requests sent within the allowed time will be processed at no extra cost and clients are only allowed to reschedule an unused booking twice, after which the ticket will be
              forfeited.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              A penalty of 5,000NGN (for prestige) and 3,000NGN (for regular) will be charged for rescheduling due to lateness or complete change in travel plans after take off time for the shared service, while a twenty percent (20%) of the cost for hire will be charged for hire service.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Clients with unused reservations or rescheduled trips have 30 [thirty] days from the date of initial booking to utilize the reservations or consider such tickets forfeited. Note that all rescheduling is subject to vehicle and seat availability on desired route and subject to current
              rates.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Clients who miss their trips due to late arrival or absence will not receive a refund and will not be allowed to reschedule the affected missed trips.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Online transaction Complications">
            <p style={{ fontSize: '18px', color: '#707070' }}>Clients are required to contact their banks for account statements should they require a refund due to double debits and debits on card transactions or USSD payments without value using our online booking platform to enable us substantiate and process such claims.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Requests for refunds due to online complications may also be processed by sending a mail to valgee.com. Confirmed errors will be addressed provided the account number to be credited has been provided by the Client, a refund will be made within 7 [seven] to 10 [ten] working days.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Under Age Clients">
            <p style={{ fontSize: '18px', color: '#707070' }}>Under age Clients below 12 years cannot travel alone. Unaccompanied children between the ages of 12 to 17 can travel on the condition that the parent or guardian of the underage Client fills appropriate forms authorizing such movement at the point of reservations/booking.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Challenges While On Transit">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              We do our best to maintain our vehicles in order to fulfil our brief by satisfying our customers, however in the event that any of our vehicles breakdown while enroute, alternative arrangements will be made to convey Client’s to their destination within the best possible time. Where an
              alternative vehicle is provided by VTS to complete the trip, tickets cannot be reused and the Clients will not be entitled to any form of compensation for the delay occasioned to get a new vehicle to complete the trip.
            </p>
            <div>&nbsp;</div>
          </TermItem>
        </TermsSection>

        <h2 className="text-uppercase" style={{ marginBottom: '20px', marginTop: '60px' }}>Terms and Conditions</h2>
        <TermsSection title="Valgee Express">
          <TermItem title="Purpose & Scope">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Company and Sender agrees to this terms and conditions upon payment of Valgee Express Limited and other conditions. Shipment means all documents or parcels that travel under Valgee Express waybill and which may be carried by any means Valgee Express chooses including road or any other
              carrier.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Charges">
            <p style={{ fontSize: '18px', color: '#707070' }}>The sender shall pay to the company by transfer or as agreed all sums immediately before shipping the shipment</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The consideration payable to the Company by the Sender for the handling of goods and related services, will be in accordance with the standard tariffs of the Company, to be paid as determined by the Company from time to time.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The Company&apos;s standard tariffs are available on request. Shipment not claimed within 3 working days of its arrival shall attract a daily demurrage charge of ₦500.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Obligations of customer">
            <p style={{ fontSize: '18px', color: '#707070' }}>The Company has a right to inspect the goods and the sender is obligated to allow the company, which includes the right to open and examine the goods.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The receiver is to ensure 100% inspection of goods, acknowledge condition of goods before departure at point of collection from courier as Valgee Express will not be liable for any complaints afterward.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The sender must provide complete and accurate description and particulars of the goods.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Company Liability for Damage or Loss">
            <p style={{ fontSize: '18px', color: '#707070' }}>a. Except insofar as otherwise provided by these Conditions, the Company shall not be liable for any loss or damage whatsoever arising from:</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(i) the act or omission of the Customer or Owner or any person acting on their behalf,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(ii) compliance with the instructions given to the Company by the Customer, Owner or any other person entitled to given them,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(iii) insufficiency of the packing or labelling of the Goods except where such service has been provided by the Company,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(iv) handling, loading, stowage or unloading of the Goods by the Customer or Owner or any person acting on their behalf,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(v) inherent vice of the Goods,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(vi) riots, civil commotions, strikes, lockouts, stoppage or restraint of labor from whatsoever cause,</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(vii) fire, flood or storm, or</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>(viii) any cause which the Company could not avoid and the consequences whereof it could not prevent by the exercise of reasonable diligence.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              b. Where under sub-clause (a) above the Company is not under any liability for loss or damage caused by one or more of the causes, events or occurrence above, the Company shall only be liable to the extent that the causes, events or occurrences for which it is liable under these
              Conditions have contributed to the loss or damage.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Valgee Express’s liability in respect of any one Shipment transported is limited to the declared value of the item as shown on the waybill / invoice.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              The company shall only be liable for direct loss and damage only and this shall be limited to the declared value of the shipment as stated on the waybill. All other types of loss or damage are excluded and this includes but is not limited to lost profits, income, interest, and future
              business. The Company shall not be liable for any loss or damage that is special or indirect, even if the risks (financial or otherwise) associated with such loss or damage was communicated directly or indirectly to the Company before or after the acceptance of the shipment.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Claims are limited to one claim per shipment, settlement of which will be full and final settlement for all loss or damage in connection therewith.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              If the sender regards the limits provided in Clauses above, as insufficient, then the shipper must make a special declaration of value and take out insurance on the shipment as directed by the company’s staff so as to enable it recover the full value of the goods, the payment of the
              premium shall be at the shipper’s expenses, subject to the investigation and subsequent approval by the company’s management.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>All claims must be submitted in writing to Valgee Express within fourteen (14) days from the date that Valgee Express accepted the shipment, failing which Valgee Express shall have no liability whatsoever.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Conditions of Goods">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              The responsibility of proving the quantity, type, physical properties and composition and the condition of the goods and/or the condition of any container at the time of receipt thereof by the Company shall at all times remain with the Sender, and no delivery note, receipt or other
              document furnished or signed at such time by or on behalf of the Company shall constitute conclusive proof thereof.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Deliveries and Pick up">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              Shipments must be identified by the receiver using the waybill codes either by calling out the number of showing the receipt provided by the company upon registration of the shipment before any shipment can be picked up, failure to do so by receiver means that the shipment will not be
              released by Valgee Express.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Shipments shall not be delivered to any receiver’s address but must be picked up at the terminal after drop off by Valgee Express.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Company Lien">
            <p style={{ fontSize: '18px', color: '#707070' }}>As security for money owed for the handling of the goods, The Company shall have a lien over all goods in its possession or under its control.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Sender&apos;s warranties: The Sender shall indemnify and hold the Company harmless for any loss or damage arising out of the sender’s failure to comply with any applicable laws or regulations, and the for the sender’s breach of the following warranties and representations:</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>All information, descriptions, values and other particulars furnished to the Company is complete and accurate;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The goods are the shipper&apos;s sole property or the shipper is authorized by the person owning the goods to enter into this agreement;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The shipment is properly marked, addressed and packed to ensure safe transportation with ordinary care in handling;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>All applicable customs, import, export and other laws and regulations have been complied with</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Payment of shipment fee by the sender’s authorized representative the terms and conditions in this agreement constitute binding and enforceable obligations on the sender;</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Dangerous Goods">
            <p style={{ fontSize: '18px', color: '#707070' }}>Sender warrants that all goods handled are fit to be so handled in the ordinary way and are not dangerous goods;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The Company will not handle any dangerous, corrosive, noxious, hazardous, inflammable or explosive goods or any goods which in its opinion are likely to cause damage;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The sender shall be liable for all losses or damage caused to the Company and/or third parties by all dangerous goods;</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>
              If in the opinion of the Company any goods become a danger to any person or property, the Company shall be entitled to and without notice to the sender take such any steps as it in its sole discretion in respect of the goods. In such event the company shall not be liable under any
              circumstances for the value of the goods or for any other loss or damage sustained by the sender or owner as a result of such steps and still be liable under any circumstances for the value of the goods or for any other loss or damage sustained by the Sender or owner as a result of
              such steps and still be entitled to recover from the sender its remuneration for the handling of the goods together with any costs incurred by the Company.
            </p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Perishable Goods">
            <p style={{ fontSize: '18px', color: '#707070' }}>Perishable goods which are not taken up immediately upon arrival at their destination or which are insufficiently marked or otherwise not identifiable may be disposed of without notice to Sender.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Frozen Food items must be packed in plastic containers.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Frozen medication should be packed in a cold box as the company will not be held liable for damages occurred from the melting of the package</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>Fragile items should be properly packed to prevent damage or breakage</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Route">
            <p style={{ fontSize: '18px', color: '#707070' }}>When carrying goods, The Carrier shall in its sole discretion decide what route to follow.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Company Obligations">
            <p style={{ fontSize: '18px', color: '#707070' }}>It will be deemed that the company has discharged all its obligations in terms hereof, Once the company has delivered or handed the goods to the receiver stated in the waybill at the Valgee Express Terminal.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Subcontracting">
            <p style={{ fontSize: '18px', color: '#707070' }}>The company reserves the right to employ sub-contractors to act for it, and shall have no responsibility or liability to the sender for any acts or omissions of such third parties.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Forfeiture">
            <p style={{ fontSize: '18px', color: '#707070' }}>Shipments not collected / picked up within 1 month shall be forfeited to the Company and the company shall dispose of such shipment accordingly.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Notices">
            <p style={{ fontSize: '18px', color: '#707070' }}>Notices shall be served to the Sender’s phone number provided on the waybill.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="Dispute">
            <p style={{ fontSize: '18px', color: '#707070' }}>
              In case of any dispute arising from shipment, such dispute shall be amicably resolved by the parties. If the dispute, difference or claim is not settled amicably, parties shall jointly appoint a sole arbitrator to arbitrate on the matter after which, such difference or Claim shall then
              be referred to the Federal High Court Jos for Mediation which shall be conducted in accordance with the Federal High Court Procedure Rules.
            </p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>The applicable Laws regarding this agreement are the Laws of the Federal Republic of Nigeria.</p>
            <div>&nbsp;</div>
          </TermItem>

          <TermItem title="General Terms">
            <p style={{ fontSize: '18px', color: '#707070' }}>These terms constitute the sole record of the agreement between the parties. The company shall not be bound by any express or implied term, representation, warranty, promise or the like not recorded herein.</p>
            <div>&nbsp;</div>
            <p style={{ fontSize: '18px', color: '#707070' }}>No relaxation or indulgence which the company may grant to the Sender shall constitute a waiver of the rights of the company regardless of when it arose.</p>
            <div>&nbsp;</div>
          </TermItem>
        </TermsSection>

        <div className='mt-5' style={{ marginBottom: '100px' }}>
          <p style={{ fontSize: '18px', color: '#707070' }}>For further inquiries please contact our customer relations desk via email at info@valgee.com or mobile phone on: +234 806 088 5322</p>
          <b style={{ fontSize: '18px', color: '#707070' }}>Last updated: 1st July 2024</b>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
