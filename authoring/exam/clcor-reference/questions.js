const BANK = [
{n:1,part:"Part I: AV Fundamentals",title:"Introduction to Collaboration",qs:[
["Which switching method did the traditional PSTN use to connect voice calls?","Circuit switching","Packet switching","Cell switching","Label switching","The PSTN dedicates a fixed circuit end to end for the duration of a call."],
["Which ITU umbrella standard defined early videoconferencing over ISDN?","H.320","H.323","H.264","G.711","H.320 covers narrowband videoconferencing over ISDN; H.323 later brought it to packet networks."],
["Which ITU umbrella standard governs multimedia communication over packet-based (IP) networks?","H.323","H.320","H.248","Q.931","H.323 defines audio, video, and data over IP, including gatekeepers, gateways, and MCUs."],
["What best describes Unified Communications (UC)?","Integrating voice, video, messaging, presence, and conferencing into one consistent user experience","Replacing all voice traffic with email","Running voice and data on separate physical networks","A single vendor's proprietary phone protocol","UC unifies multiple real-time and non-real-time communication methods across devices."],
["In UC, what does presence indicate?","A user's availability and willingness to communicate","The physical location of a phone in a building","The number of active calls on a gateway","Whether a device has PoE","Presence shares status (available, busy, in a meeting, DND) so others can choose how to reach someone."],
["Which trend most drove organizations toward cloud collaboration services?","Subscription-based delivery that reduces on-premises infrastructure and speeds feature rollout","The end of IP networking","Mandatory use of analog phones","Decreasing need for remote work","Cloud models shift cost to OpEx and push new features continuously without local upgrades."]
]},
{n:2,part:"Part I: AV Fundamentals",title:"Audio Basics",qs:[
["According to the Nyquist theorem, the sampling rate must be at least:","Twice the highest frequency being sampled","Equal to the highest frequency","Half the highest frequency","Ten times the lowest frequency","Sampling at ≥2× the highest frequency allows faithful reconstruction; 8 kHz covers the ~4 kHz telephony band."],
["What is the sampling rate used for narrowband telephony codecs like G.711?","8,000 samples per second","16,000 samples per second","44,100 samples per second","48,000 samples per second","Narrowband voice (~300–3400 Hz) is sampled at 8 kHz."],
["What is the payload bit rate of G.711?","64 kbps","8 kbps","16 kbps","32 kbps","8,000 samples/s × 8 bits per sample = 64 kbps."],
["What is the payload bit rate of G.729?","8 kbps","64 kbps","24 kbps","128 kbps","G.729 (CS-ACELP) compresses voice to 8 kbps."],
["Which codec is a wideband codec sampling at 16 kHz while using 64 kbps?","G.722","G.711","G.729","G.723.1","G.722 carries roughly 50–7000 Hz audio at 64 kbps."],
["What is quantization in analog-to-digital audio conversion?","Assigning each sample a discrete amplitude value","Measuring the frequency of a sound","Compressing packets for transport","Removing echo from a signal","Quantization rounds each sampled amplitude to the nearest step on a fixed scale."],
["G.711 μ-law is primarily used in which region?","North America and Japan","Europe","Africa","South America only","A-law is used in Europe and most other regions; μ-law in North America and Japan."]
]},
{n:3,part:"Part I: AV Fundamentals",title:"Video Basics",qs:[
["Which color model do cameras and displays use additively to produce color?","RGB","CMYK","HSL","Pantone","Red, green, and blue light combine additively on sensors and displays."],
["Why does video compression often use YCbCr instead of RGB?","It separates brightness (luma) from color (chroma), so chroma can be subsampled","It eliminates the need for frames","It increases resolution automatically","It removes audio from the stream","The eye is more sensitive to brightness than color, so chroma can be stored at lower resolution (e.g., 4:2:0)."],
["Which frame type contains a complete image and does not reference other frames?","I-frame","P-frame","B-frame","Delta frame","I-frames (intra-coded) are self-contained; P and B frames reference other frames."],
["Compared to H.264, H.265 (HEVC) generally provides:","Similar quality at roughly half the bit rate","Twice the bit rate for the same quality","No support for HD","Only audio compression","HEVC improves compression efficiency around 50% over H.264/AVC."],
["What is the pixel resolution of 1080p?","1920 × 1080","1280 × 720","3840 × 2160","1024 × 768","1080p is Full HD; 720p is 1280×720; 4K UHD is 3840×2160."],
["In 1080p or 720p, what does the letter 'p' indicate?","Progressive scan","Pixel density","Packetized video","Primary stream","Progressive scan draws every line of each frame; 'i' (interlaced) alternates odd and even lines."],
["Which of the following is a container format rather than a codec?","MP4","H.264","VP8","H.265","MP4 wraps encoded audio/video streams; H.264, H.265, and VP8 are codecs."]
]},
{n:4,part:"Part I: AV Fundamentals",title:"Collaboration Endpoint Components and Environment",qs:[
["What does acoustic echo cancellation (AEC) do on an endpoint?","Removes far-end audio picked up by the local microphone from the loudspeakers","Amplifies the near-end talker","Converts audio to video","Encrypts the audio stream","AEC prevents remote participants from hearing their own voice returned."],
["Which room characteristic increases reverberation?","Hard, reflective surfaces such as glass and bare walls","Carpeted floors","Acoustic ceiling tiles","Fabric wall panels","Sound reflects off hard surfaces; soft materials absorb it and reduce reverb."],
["Color temperature of room lighting is measured in:","Kelvin","Lux","Lumens","Decibels","Kelvin describes how warm or cool light appears; lux measures illuminance."],
["What does lux measure?","Illuminance — the amount of light falling on a surface","Color temperature","Sound pressure","Display refresh rate","One lux is one lumen per square meter."],
["A participant sitting in front of a bright window appears as a silhouette. What causes this?","Strong backlighting overpowering light on the face","Too much front lighting","Low audio levels","Incorrect codec selection","The camera exposes for the bright background, leaving the face underexposed."],
["A cardioid microphone primarily picks up sound from:","The front, rejecting sound from the rear","All directions equally","Only the rear","Only above","The heart-shaped pickup pattern favors the front and rejects rear noise."]
]},
{n:5,part:"Part I: AV Fundamentals",title:"Communication Protocols",qs:[
["A T1 ISDN PRI provides how many bearer (B) channels and signaling (D) channels?","23 B + 1 D","30 B + 1 D","2 B + 1 D","24 B + 0 D","T1 PRI is 23B+D; E1 PRI is 30B+D; BRI is 2B+D."],
["In H.323, which protocol handles registration, admission, and status with a gatekeeper?","H.225 RAS","H.245","H.239","Q.931 only","RAS (UDP 1719) handles discovery, registration, admission, and bandwidth with the gatekeeper."],
["Which H.323 protocol performs capability exchange and opens logical media channels?","H.245","H.225 RAS","H.460.18","T.120","H.245 negotiates codecs and opens/closes logical channels."],
["What is the default port for SIP over TLS?","TCP 5061","UDP 5060","TCP 1720","UDP 1719","SIP uses 5060 for UDP/TCP and 5061 for TLS. TCP 1720 is H.225 call signaling."],
["Which SIP response indicates the called device is alerting?","180 Ringing","200 OK","486 Busy Here","401 Unauthorized","1xx responses are provisional; 180 means the far end is ringing."],
["What role does SDP play in a SIP call?","Describes the media session — codecs, IP addresses, and ports — using offer/answer","Encrypts signaling","Registers the endpoint","Translates domain names","SDP is carried in the SIP body to negotiate media parameters."],
["Which set of standards lets H.323 traverse firewalls by having the inside device keep an outbound connection open?","H.460.18/H.460.19","H.239","H.264","T.38","H.460.18/19 (and Cisco's Assent) enable firewall traversal for H.323 signaling and media."]
]},
{n:6,part:"Part I: AV Fundamentals",title:"Cisco Solution for Converged Collaboration",qs:[
["Which Cisco product is the primary on-premises call control platform?","Cisco Unified Communications Manager (CUCM)","Cisco Unity Connection","Cisco Meeting Server","Cisco Expressway-E","CUCM provides call routing, device registration, and the dial plan."],
["Which Cisco product provides voicemail and auto-attendant services on-premises?","Cisco Unity Connection","CUCM IM and Presence","Cisco Meeting Server","Cisco Expressway-C","Unity Connection is Cisco's voice messaging platform."],
["Which product pair provides secure firewall traversal for remote access and B2B calling?","Expressway-C and Expressway-E","CUCM and Unity Connection","IM&P and CUCM","Meeting Server and TMS","Expressway-C sits inside; Expressway-E sits in the DMZ as traversal server."],
["Which component provides presence and instant messaging for on-prem Jabber clients?","CUCM IM and Presence Service","Unity Connection","Cisco Meeting Server","CUBE","IM&P delivers XMPP-based chat and presence."],
["Which Cisco product provides on-premises multiparty audio/video conferencing?","Cisco Meeting Server","Cisco Unity Connection","Expressway-E","Cisco Prime Collaboration Deployment","Cisco Meeting Server hosts spaces and ad hoc/scheduled conferences."],
["What is the maximum number of call-processing subscriber nodes in a CUCM cluster?","8","2","4","20","A cluster supports up to 8 call-processing subscribers (plus publisher, TFTP, and media nodes)."]
]},
{n:7,part:"Part II: Endpoints",title:"Cisco Unified Communications Phones",qs:[
["Which DHCP option provides Cisco IP phones with the TFTP server address?","Option 150","Option 3","Option 6","Option 43","Option 150 (or option 66) points phones at the TFTP server."],
["Which Cisco 8800 Series model includes integrated Wi-Fi and a built-in camera for video?","8865","8811","8841","7841","The 8865 adds video and Wi-Fi; the 8861 has Wi-Fi without video."],
["Which statement about the 7800 Series is true?","It is an audio-only phone family","It supports integrated HD video","It requires a sidecar to make calls","It runs CE/RoomOS software","7800 Series phones are voice-only; video models are in the 8800 line (8845/8865)."],
["Where in CUCM do you set the default firmware load for all phones of a given model?","Device Defaults","Enterprise Parameters","Service Activation","Region configuration","Device > Device Settings > Device Defaults sets the load name per model; a per-phone Phone Load Name overrides it."],
["What firmware type allows Cisco phones to register to third-party or cloud call control such as Webex Calling?","Multiplatform Phone (MPP) firmware","Enterprise SCCP firmware","CE firmware","Jabber firmware","MPP firmware is used for Webex Calling and third-party SIP platforms."],
["From which server does a phone download its configuration file and firmware when registering to CUCM?","TFTP server","LDAP server","NTP server","SMTP server","The phone requests SEP<MAC>.cnf.xml and its load from the TFTP server."]
]},
{n:8,part:"Part II: Endpoints",title:"Cisco TelePresence Endpoints",qs:[
["Cisco's CE software for video endpoints is now known as:","RoomOS","IOS XE","TC software","Jabber OS","Collaboration Endpoint (CE) software evolved into RoomOS."],
["Which endpoint series is a codec-only platform aimed at custom room integrations?","SX Series (e.g., SX80)","DX Series","MX Series","7800 Series","The SX80 is an integrator codec used with separate cameras, displays, and mics."],
["The DX Series endpoints are best described as:","Personal desktop video devices","Large boardroom systems","Codec-only integrator platforms","Analog phones","DX70/DX80 are desktop all-in-one collaboration devices."],
["The MX Series endpoints are:","Integrated all-in-one room systems with displays, camera, and codec","Codec-only integration platforms","IP desk phones","Headsets","MX200/300/700/800 are integrated room systems."],
["Which device is the desktop collaboration device with a large touch screen in the Webex Desk family?","Webex Desk Pro","Webex Room Kit Pro","SX20","Cisco 8851","Desk Pro is a personal desktop device with a 27-inch touch screen."],
["Which interface lets you configure and control CE/RoomOS devices programmatically or from the CLI?","xAPI (via SSH, HTTP, or macros)","SNMP only","SCCP","H.245","xConfiguration, xCommand, and xStatus are part of the xAPI."]
]},
{n:9,part:"Part II: Endpoints",title:"Endpoint Registration",qs:[
["What file name does a SIP phone request from TFTP when registering to CUCM?","SEP<MAC>.cnf.xml","XMLDefault.cnf only","<hostname>.cfg","CTLFile.tlv only","Each phone requests a configuration file named after its MAC address."],
["Unless auto-registration is enabled, what must exist in CUCM before a phone can register?","A device configured with the phone's MAC address","An LDAP account for the phone","A Unity Connection mailbox","A route pattern","CUCM matches the registering device by MAC address."],
["Which port does H.323 RAS registration to an Expressway gatekeeper use?","UDP 1719","TCP 1720","TCP 5061","UDP 5060","RAS uses UDP 1719; H.225 call signaling uses TCP 1720."],
["What must be configured on Expressway Core so it will accept SIP registrations for a domain?","The SIP domain must be added under SIP domains","A CUCM device pool","A DHCP scope","A traversal zone","Expressway acts as registrar only for configured SIP domains."],
["Which Expressway feature can limit which aliases are allowed to register?","Registration restriction policy (allow/deny lists)","Call Admission Control","Search rules","Transforms only","Allow or deny lists control which aliases may register."],
["When an endpoint registers to Expressway via H.323, what does it register?","One or more aliases such as an H.323 ID or E.164 number","Its MAC address only","A SIP URI only","A CUCM directory number","H.323 endpoints register aliases (H.323 ID, E.164) with the gatekeeper."]
]},
{n:10,part:"Part II: Endpoints",title:"Call Settings on Cisco CE Software-Based Endpoints",qs:[
["Which content-sharing protocol is used with SIP calls?","BFCP","H.239","T.120","RTCP","BFCP manages the presentation floor in SIP; H.239 is its H.323 counterpart."],
["Which content-sharing protocol is used with H.323 calls?","H.239","BFCP","SRTP","H.245 only","H.239 adds a second video channel for presentations in H.323."],
["Which setting controls the default bandwidth used when placing calls from a CE endpoint?","Conference DefaultCall Rate","Network QoS Mode","SIP ListenPort","Video Input Connector","DefaultCall Rate sets the call rate in kbps."],
["Which setting makes the endpoint answer incoming calls without user interaction?","Conference AutoAnswer Mode","Conference DoNotDisturb","SystemUnit Name","Video Selfview","AutoAnswer can be turned on with an optional delay and mute."],
["What does the built-in MultiSite feature provide?","Multipoint conferencing hosted on the endpoint itself","Multiple SIP registrations","Multiple displays only","Automatic upgrades","MultiSite lets an endpoint bridge several participants (requires the option on supported models)."],
["What does FECC stand for and do?","Far End Camera Control — lets one side control the other side's camera","Forward Error Correction Codec — repairs packet loss","Fixed Encryption Cipher Control — sets AES","Frame Encoding Compression Control — sets H.264 profile","FECC lets a participant pan/tilt/zoom the remote camera."]
]},
{n:11,part:"Part II: Endpoints",title:"Maintaining Cisco Endpoints",qs:[
["When a CE endpoint is registered to CUCM, how is its software normally upgraded?","CUCM provisions the device load via TFTP","Only from a USB stick","Only through Control Hub","Software cannot be upgraded","CUCM controls the load; the endpoint downloads it from TFTP."],
["How is software on Webex cloud-registered devices normally managed?","Automatically by the cloud based on the software channel set in Control Hub","Manually via TFTP","Through CUCM Device Defaults","Through Unity Connection","Cloud devices follow the stable/preview channel chosen in Control Hub."],
["A CE endpoint backup bundle typically includes:","Configuration, favorites, branding, and macros","Call recordings","CDR records","The Unity Connection mailbox store","The backup captures device settings and customizations so they can be restored."],
["Which xAPI command performs a factory reset on a RoomOS/CE device?","xCommand SystemUnit FactoryReset","xConfiguration Reset All","xStatus Reset","xCommand Call Disconnect","FactoryReset (with Confirm: Yes) returns the device to defaults."],
["How do you manually upgrade a standalone CE endpoint from its web interface?","Upload the .pkg software file under Software","Edit the SIP settings","Upload an XML configuration","Run a DNS query","The web interface accepts the .pkg file for manual upgrades."],
["What is an option key used for on Cisco endpoints?","Unlocking licensed features such as MultiSite","Encrypting calls","Resetting the admin password","Registering to CUCM","Option keys enable features tied to the device serial number."]
]},
{n:12,part:"Part III: Network Requirements",title:"Cisco Core Network Components",qs:[
["How much power per port does IEEE 802.3at (PoE+) supply at the source?","30 W","15.4 W","7 W","60 W","802.3af supplies 15.4 W; 802.3at PoE+ supplies 30 W; 802.3bt goes higher."],
["How does a Cisco IP phone typically learn its voice VLAN from a switch?","CDP or LLDP-MED","DHCP option 150","DNS SRV","NTP","The switch advertises the voice VLAN via CDP or LLDP-MED."],
["What is the commonly recommended maximum one-way delay for good voice quality?","150 ms","30 ms","500 ms","1 second","ITU-T G.114 recommends ≤150 ms one-way."],
["What is a generally accepted target for jitter on voice paths?","Under 30 ms","Under 300 ms","Under 1 second","Jitter does not matter for voice","Excess jitter overwhelms jitter buffers and causes choppy audio."],
["For voice over WLAN, Cisco commonly recommends a minimum signal strength of:","−67 dBm","−90 dBm","−30 dBm","−110 dBm","Designing cells for −67 dBm or better supports voice quality and roaming."],
["What is the main role of a voice gateway?","Converting between IP voice and TDM/PSTN connections","Storing voicemail","Providing DHCP","Synchronizing LDAP","Gateways bridge IP telephony to PSTN circuits or analog devices."]
]},
{n:13,part:"Part III: Network Requirements",title:"Layer 2 and Layer 3 QoS Parameters",qs:[
["Which DSCP value is recommended for voice media?","EF (46)","AF41 (34)","CS3 (24)","Default (0)","Expedited Forwarding is used for voice bearer traffic."],
["Which DSCP marking is recommended for interactive video conferencing media?","AF41 (34)","EF (46)","CS1 (8)","CS6 (48)","Cisco marks video conferencing AF41."],
["Which DSCP marking is recommended for call signaling?","CS3 (24)","EF (46)","AF41 (34)","CS0 (0)","SIP/SCCP signaling uses CS3."],
["Which Layer 2 CoS value corresponds to voice?","5","3","4","7","CoS 5 aligns with EF; CoS 3 is commonly used for signaling."],
["Low Latency Queuing (LLQ) combines:","A strict priority queue with class-based weighted fair queuing (CBWFQ)","FIFO and WRED only","Policing and shaping only","Two FIFO queues","LLQ adds a strict priority queue to CBWFQ so voice is serviced first."],
["Where should the QoS trust boundary ideally be established?","As close to the source as possible, such as the IP phone or access switch port","At the internet edge router","At the data center core","At the PSTN","Trusting markings close to the edge keeps them reliable end to end."],
["Which MQC command assigns a class to the LLQ strict priority queue?","priority","bandwidth","shape average","fair-queue","Using 'priority' (e.g., priority percent 33) under the class puts it in the priority queue."]
]},
{n:14,part:"Part III: Network Requirements",title:"DNS, NTP, and SNMP",qs:[
["Which DNS SRV record do on-premises Jabber/Webex App clients use to discover CUCM UDS services?","_cisco-uds._tcp.<domain>","_collab-edge._tls.<domain>","_sip._udp.<domain>","_xmpp-client._tcp.<domain>","_cisco-uds points internal clients at CUCM's User Data Services."],
["Which SNMP version adds authentication and encryption?","SNMPv3","SNMPv1","SNMPv2c","SNMPv2 only with communities","SNMPv3 supports authNoPriv and authPriv security levels."],
["SNMP traps are sent to which port by default?","UDP 162","UDP 161","TCP 443","UDP 123","Polling uses UDP 161; traps/notifications use UDP 162."],
["Which port does NTP use?","UDP 123","UDP 162","TCP 22","UDP 69","NTP uses UDP 123."],
["In NTP, a lower stratum number means:","The source is closer to the reference clock and generally more accurate","The source is less accurate","The source is a client only","Time is in UTC−5","Stratum 1 is directly connected to a reference clock."],
["Why is accurate NTP critical in a CUCM cluster?","Certificates, database replication, logs, and CDR timestamps depend on synchronized time","It is required for DHCP","It determines codec selection","It assigns directory numbers","Time skew breaks certificate validation and complicates troubleshooting."]
]},
{n:15,part:"Part IV: Call Control Mechanisms",title:"Cisco Unified Communications Manager Setup",qs:[
["Where are CUCM feature services activated?","Cisco Unified Serviceability > Tools > Service Activation","CUCM Administration > System > Server","OS Administration > Settings","Disaster Recovery System","Feature services are activated per node in Serviceability."],
["What is the scope of enterprise parameters in CUCM?","Cluster-wide","A single node","A single device pool","A single phone","Enterprise parameters apply to the whole cluster; service parameters are per service per node."],
["Which CUCM element defines the maximum audio bit rate used between devices in different groups?","Regions","Locations","Partitions","Route groups","Regions control codec/bit rate; Locations control CAC bandwidth."],
["Which item is assigned through a device pool?","CUCM Group, region, date/time group, and location settings","Directory number","Partition of the line","LDAP filter","Device pools bundle common settings for many devices."],
["What does a CUCM Group define?","The ordered list of CUCM servers a device registers to (primary, secondary, tertiary)","The list of partitions to search","The list of LDAP servers","The list of gateways for route patterns","CUCM Groups provide registration redundancy."],
["What is the difference between network services and feature services in CUCM?","Network services start automatically; feature services must be activated","Feature services start automatically; network services must be activated","They are identical","Network services exist only on the publisher","Network services are required base services; feature services are optional and activated as needed."]
]},
{n:16,part:"Part IV: Call Control Mechanisms",title:"LDAP Integration with CUCM",qs:[
["Which type of CUCM user cannot be synchronized from LDAP?","Application users","End users","LDAP-synced end users","Users with phones","Application users are local accounts for applications and admins."],
["Which Active Directory attribute is commonly mapped to the CUCM User ID?","sAMAccountName","telephoneNumber","mail only","objectGUID","sAMAccountName is the default choice; userPrincipalName and mail are alternatives."],
["When LDAP authentication is enabled, what is still stored and validated locally in CUCM?","End-user PINs","End-user passwords","Application-user IDs only","Nothing","LDAP authentication validates passwords against the directory; PINs remain local."],
["What is the default port for LDAP over TLS (LDAPS)?","636","389","3268","443","LDAP uses 389; LDAPS 636; Global Catalog 3268 (3269 secure)."],
["Which user attribute is NOT imported into CUCM during LDAP synchronization?","Passwords","User ID","First and last name","Telephone number","Sync imports demographics; with LDAP authentication, passwords are verified live against the directory."],
["Which CUCM feature lets LDAP sync automatically create lines and devices for new users?","Feature group template with user profile / universal templates","Route plan report","Bulk Administration export","Call park","Applying a feature group template during sync supports self-provisioning and automatic line creation."]
]},
{n:17,part:"Part IV: Call Control Mechanisms",title:"Registering SIP Endpoints to CUCM",qs:[
["What does the Bulk Administration Tool (BAT) use to add many phones at once?","A phone template plus a CSV data file","A DNS zone file","An LDAP filter","An SNMP walk","BAT combines a template with CSV data to insert devices in bulk."],
["What is the main benefit of onboarding phones with activation codes?","No need to collect MAC addresses in advance","It removes the need for TFTP","It eliminates licensing","It disables security","Users enter a 16-digit code and the phone associates with the pre-provisioned device."],
["What does auto-registration do in CUCM?","Automatically adds unknown phones and assigns DNs from a configured range","Synchronizes users from LDAP","Backs up the database","Registers Expressway to CUCM","It's convenient for labs but is often disabled in production for security."],
["What is self-provisioning in CUCM?","Users call an IVR and authenticate to associate a phone with their account","Phones download firmware automatically","Admins import users from CSV","CUCM upgrades itself","Self-provisioning lets end users claim auto-registered phones."],
["When provisioning with activation codes, what does CUCM use until the phone actually registers?","A placeholder (dummy) MAC address","The user's email address","The phone's IP address","The serial number from the box","The real MAC replaces the placeholder once the phone activates."],
["Which phone configuration checkbox enables activation-code onboarding for a device in CUCM?","Require Activation Code for Onboarding","Allow Auto-Registration","Enable Self-Provisioning IVR","Use Trusted Relay Point","After checking it and applying config, CUCM generates a 16-digit code for that device."]
]},
{n:18,part:"Part IV: Call Control Mechanisms",title:"CUCM Call Admission Control (CAC)",qs:[
["What does locations-based CAC in CUCM limit?","The bandwidth available for calls between locations","The codec used between regions","The number of users per partition","The number of LDAP servers","Calls exceeding the configured location bandwidth are rejected or rerouted."],
["What is a Calling Search Space (CSS)?","An ordered list of partitions a device can reach","A list of CUCM servers","A list of codecs","A group of gateways","CSSs and partitions together implement class of restriction."],
["When a phone has both a line CSS and a device CSS, how are they combined?","Line CSS partitions are placed before device CSS partitions","Device CSS is ignored","Line CSS is ignored","They are merged alphabetically","The line CSS takes precedence when both match equally."],
["Which hunting hierarchy is correct in CUCM?","Hunt pilot → hunt list → line group → directory numbers","Line group → hunt pilot → route list","Route pattern → hunt list → partition","Hunt list → CSS → device pool","The pilot points to a hunt list, which orders line groups containing DNs."],
["Which feature restricts dialing based on time of day?","Time schedules and time periods applied to partitions","Regions","Device mobility","Call park","Time-of-day routing activates partitions only during defined periods."],
["Enhanced Locations CAC (ELCAC) models the network using:","Locations connected by links, with bandwidth assigned to links and locations","Only regions","Only device pools","SIP trunks only","ELCAC supports multi-hop topologies across clusters."],
["Which call coverage feature forwards a call when the called line does not answer?","Call Forward No Answer (CFNA)","Call Forward All","Call Pickup Group","Barge","CFNA triggers after the no-answer timer expires."]
]},
{n:19,part:"Part IV: Call Control Mechanisms",title:"Configuring Globalized Call Routing in CUCM",qs:[
["In a globalized dial plan, numbers are normalized to which format?","E.164 with a leading +","Four-digit extensions","Local seven-digit format","Hex format","Globalized routing uses +E.164 internally and localizes at the edges."],
["What is the correct order of CUCM call routing elements?","Route pattern → route list → route group → gateway/trunk","Route group → route pattern → route list → gateway","Gateway → route pattern → route group","Route list → partition → CSS","Route patterns point to route lists, which order route groups containing devices."],
["What does the Standard Local Route Group allow?","One route pattern to use the local gateway defined in the caller's device pool","All calls to use one central gateway","Routing without partitions","Automatic LDAP sync","The local route group is resolved per device pool, simplifying dial plans."],
["In CUCM route patterns, what does the wildcard X match?","Any single digit 0–9","One or more digits","Only the digit 0","The NANP","X matches a single digit; ! matches one or more digits."],
["What is the purpose of a translation pattern?","To manipulate digits and re-route the call through call routing again","To store voicemail","To define a CUCM group","To set the codec","Translation patterns normalize or change dialed digits, then re-run digit analysis."],
["Called party transformation patterns are typically applied:","At egress, to localize the number for a gateway or trunk","When a phone registers","Only to voicemail","Inside LDAP","They convert +E.164 back to what the PSTN provider expects."],
["Which route pattern wildcard represents the North American Numbering Plan?","@","!","X","#","@ references the NANP built-in dial plan."]
]},
{n:20,part:"Part V: Edge Services",title:"Introduction to Cisco Edge Services",qs:[
["Where is Expressway-E normally deployed?","In the DMZ","Inside the enterprise LAN only","On the CUCM publisher","At the service provider","Expressway-E is the traversal server facing the internet."],
["Which component acts as the traversal client in an Expressway pair?","Expressway-C","Expressway-E","CUCM","CUBE","Expressway-C initiates the outbound traversal connection to Expressway-E."],
["CUBE is best described as:","A session border controller acting as a back-to-back user agent between networks","A voicemail server","A presence server","An LDAP proxy","CUBE terminates and re-originates sessions, providing security and interworking."],
["Which CUBE command enables SIP-to-SIP call routing?","allow-connections sip to sip","dial-peer voice 1 pots","sip-ua register","voice translation-rule 1","Under 'voice service voip', this allows SIP-to-SIP connections."],
["On a voice gateway, which dial-peer type points to the PSTN or analog ports?","POTS dial-peer","VoIP dial-peer","Translation dial-peer","SIP profile","POTS dial-peers map to physical voice ports; VoIP dial-peers point to IP destinations."],
["Which Expressway zone type routes B2B calls by looking up external domains?","DNS zone","Neighbor zone","Traversal client zone","Default zone","A DNS zone uses SRV/A lookups to reach other organizations."]
]},
{n:21,part:"Part V: Edge Services",title:"Mobile and Remote Access (MRA)",qs:[
["Which public DNS SRV record lets clients discover the Expressway-E for MRA?","_collab-edge._tls.<domain>","_cisco-uds._tcp.<domain>","_sip._udp.<domain>","_h323ls._udp.<domain>","_collab-edge points to Expressway-E on TCP 8443."],
["Which port do MRA clients use for HTTPS traffic to Expressway-E?","TCP 8443","TCP 80","TCP 5222 only","UDP 3478","MRA uses TCP 8443 for HTTPS, 5061 for SIP, and 5222 for XMPP."],
["What zone type is required between Expressway-C and Expressway-E for MRA?","Unified Communications traversal zone","Neighbor zone","DNS zone","ENUM zone","MRA requires the Unified Communications traversal type."],
["What must the Expressway-E certificate contain for MRA?","SAN entries for the domain(s) used by clients, issued by a public CA","Only the IP address","A self-signed certificate only","The CUCM hostname only","Clients validate Expressway-E's public certificate against the service domain."],
["What does setting TLS Verify Mode to On require?","The peer's certificate must be trusted and its CN/SAN must match the configured address","No certificate","Only an IP address match","Disabling NTP","TLS verify checks trust and identity of the peer."],
["Which media port range does Expressway-E use by default for traversal media?","UDP 36000–59999","UDP 16384–32767","TCP 1–1024","UDP 5060–5061","Expressway uses the 36000–59999 range for media."],
["On Expressway-C, which setting enables MRA?","Unified Communications mode set to Mobile and remote access","H.323 mode on","SIP registration proxy mode","Call Policy","Configuration > Unified Communications > Mobile and remote access."]
]},
{n:22,part:"Part VI: Webex Calling",title:"Components of the Webex Solution",qs:[
["Webex Calling is best described as:","A cloud-hosted enterprise PBX service","An on-premises voicemail server","A wireless controller","An LDAP directory","Webex Calling delivers PBX features from the Cisco cloud."],
["Webex Messaging organizes conversations into:","Spaces (optionally grouped into teams)","Partitions","Hunt lists","Route groups","Spaces hold messages, files, and meetings; teams group related spaces."],
["What does Webex Video Mesh provide?","On-premises media nodes that keep meeting media local","Cloud voicemail","Cloud LDAP","Phone firmware","Video Mesh reduces bandwidth by processing media on-site."],
["Which Webex service hosts scheduled and personal-room video meetings?","Webex Meetings","Webex Calling","Directory Connector","Hybrid Calendar only","Webex Meetings provides meetings and personal rooms."],
["Which tool is the central administration portal for Webex services?","Webex Control Hub","CUCM Administration","Expressway web UI","Unity Connection Administration","Control Hub manages users, devices, services, and analytics."],
["What happens when on-premises Webex Video Mesh nodes run out of capacity?","Meetings overflow to the Webex cloud","New calls are rejected","Calls fall back to the PSTN","Media is sent to CUCM conference bridges","Video Mesh keeps media local when it can and overflows to the cloud when local resources are full."]
]},
{n:23,part:"Part VI: Webex Calling",title:"Adding Users and Devices in Webex Control Hub",qs:[
["Which method is NOT used to add users to Control Hub?","Unity Connection import","Manual entry","CSV bulk import","Directory Connector synchronization","Users come from manual entry, CSV, Directory Connector, or SCIM/Entra ID sync."],
["What does Directory Connector do?","Synchronizes users from on-premises Active Directory to the Webex cloud","Registers phones to CUCM","Connects Expressway to CUCM","Backs up Control Hub","Directory Connector runs on Windows and syncs AD to Webex."],
["In which direction does Directory Connector sync?","One-way, from Active Directory to the cloud","Two-way","Cloud to AD only","No sync occurs","AD remains the source of truth."],
["What should you do before claiming users in your organization's domain?","Verify the domain using a DNS TXT record","Configure a CUCM route pattern","Enable SNMP","Create a hunt group","Domain verification proves ownership."],
["How can an MPP phone be added to a user in Control Hub?","By MAC address or by generating an activation code","Only by serial number","Only through CUCM BAT","By IP address","Either method associates the phone with the user or workspace."],
["Room devices shared by many people are added in Control Hub as:","Workspaces","Users","Locations only","Hunt groups","Workspaces represent shared spaces and their devices."]
]},
{n:24,part:"Part VI: Webex Calling",title:"Webex Calling Options",qs:[
["Which PSTN option uses Cisco as the PSTN provider for Webex Calling?","Cisco Calling Plan","Local Gateway","Cloud Connected PSTN","Analog FXO only","Cisco Calling Plan bundles PSTN service from Cisco (where available)."],
["What is Cloud Connected PSTN (CCP)?","PSTN service from certified partners connected directly to the Webex cloud","An on-premises gateway","A CUCM feature","A Unity Connection integration","CCP providers peer with Webex in the cloud."],
["What does a Local Gateway (LGW) provide?","Premises-based PSTN access for Webex Calling through the customer's own router","Cloud voicemail","LDAP sync","Meeting recording","The LGW connects Webex Calling to an existing PSTN trunk."],
["Which routers can act as a Webex Calling Local Gateway?","Cisco IOS XE platforms such as ISR 4000 and Catalyst 8000 Series","Any consumer Wi-Fi router","Cisco Unity Connection","Expressway-E","LGW runs on supported IOS XE routers with CUBE."],
["What are the two Local Gateway trunk types?","Registration-based and certificate-based","Analog and digital","H.323 and SCCP","Primary and tertiary","Registration-based uses SIP digest; certificate-based uses mutual TLS."],
["In a deployment with an on-premises IP PBX, the Local Gateway can:","Route calls between the PBX, the PSTN, and Webex Calling","Replace the PBX database","Act as an LDAP server","Host meetings","The LGW can co-reside with the enterprise trunk to the PBX."]
]},
{n:25,part:"Part VI: Webex Calling",title:"Webex Calling Features",qs:[
["Which feature answers calls with a menu of options and routes callers based on input?","Auto attendant","Paging group","Call park","Single number reach","Auto attendants provide IVR menus for business hours and after hours."],
["What is a key difference between a call queue and a hunt group?","A call queue holds callers with announcements and music until an agent is free","A hunt group plays music on hold to queued callers","They are identical","Queues can only ring one agent","Queues hold and order callers; hunt groups just ring members."],
["Which is a user-configurable feature in Webex Calling?","Do Not Disturb","Auto attendant","Location PSTN settings","Trunk configuration","Users manage DND, forwarding, and similar settings themselves."],
["What does Single Number Reach do?","Rings additional numbers, such as a mobile phone, when the user's number is called","Assigns one number to many locations","Pages a group of phones","Records calls","It lets users answer business calls on other devices."],
["Which feature lets a user place a call on hold to be retrieved from another phone?","Call park","Barge-in","Call recording","Anonymous call rejection","Parked calls can be retrieved by dialing the park extension."],
["Which admin feature broadcasts one-way audio to a group of phones?","Paging group","Call queue","Hunt group","Voicemail group","Paging sends announcements to multiple phones at once."]
]},
{n:26,part:"Part VI: Webex Calling",title:"Webex Calling Using a Local Gateway",qs:[
["For a registration-based LGW, which values does Control Hub provide when you create the trunk?","Registrar domain, trunk group OTG/DTG, line/port, outbound proxy, username, and password","Only an IP address","A MAC address and serial number","LDAP bind credentials","These values are entered on the router's tenant configuration."],
["Which IOS XE construct typically holds the Webex-facing SIP settings on the Local Gateway?","voice class tenant","dial-peer voice pots","telephony-service","ephone-dn","The tenant groups registration, credentials, and outbound proxy settings."],
["What must the LGW trust to establish TLS with Webex Calling?","The Cisco trusted root CA bundle (imported into the PKI trustpool)","A self-signed certificate on the phone","The CUCM Tomcat certificate only","No certificate","The router validates Webex's certificate against the trusted CA bundle."],
["What media encryption does Webex Calling require on the LGW-to-cloud leg?","SRTP","Plain RTP","IPsec only","No encryption","Media toward Webex Calling is SRTP."],
["Which command enables SIP-to-SIP call routing on the LGW?","allow-connections sip to sip under voice service voip","telephony-service","call-manager-fallback","ip dhcp pool","The LGW acts as CUBE, so SIP-to-SIP must be allowed."],
["What links an inbound dial-peer to the set of outbound dial-peers in an LGW configuration?","Dial-peer groups (destination dial-peer group)","Route lists","Partitions","Hunt pilots","Dial-peer groups provide deterministic routing between legs."]
]},
{n:27,part:"Part VII: Collaboration Applications",title:"Understanding Cisco Unity Connection",qs:[
["Which two methods can integrate Unity Connection with CUCM?","SCCP voicemail ports or a SIP trunk","H.323 gatekeeper or MGCP","LDAP or SNMP","Analog FXO or FXS","SCCP ports register like phones; SIP integration uses a trunk."],
["On CUCM, which elements tell phones where to send calls for voicemail?","Voicemail pilot and voicemail profile","Hunt pilot and line group","Region and location","Translation pattern only","The pilot number is referenced by the voicemail profile assigned to lines."],
["Which is a default system call handler in Unity Connection?","Opening Greeting","Hunt Pilot","Directory Connector","Route Group","Default call handlers include Opening Greeting, Operator, and Goodbye."],
["How does Unity Connection decide between direct and forwarded routing rules?","Direct rules handle calls dialed to the voicemail number; forwarded rules handle calls forwarded from an extension","Based on codec","Based on the caller's region","It always uses direct rules","Forwarded calls usually go to the user's greeting; direct calls to sign-in."],
["What controls lockout after repeated failed sign-in attempts?","Authentication rules","Class of service","Call handler","Partition","Authentication rules define failed attempts, lockout, and credential expiry."],
["What do partitions and search spaces control in Unity Connection?","Which objects (users, handlers, extensions) a caller or user can reach","Codec selection","LDAP sync schedule","Phone firmware","They scope dial plan reachability inside Unity Connection."]
]},
{n:28,part:"Part VII: Collaboration Applications",title:"Unity Connection End-User and Voice Mailbox",qs:[
["What is the purpose of a user template in Unity Connection?","Provide default settings applied when creating new users","Back up the mailbox store","Route PSTN calls","Synchronize firmware","Templates apply consistent settings at user creation."],
["What does a Class of Service (CoS) control?","Feature access and limits such as message length and licensed features","Network QoS markings","Codec preference","The CUCM CSS","CoS governs what users may do in Unity Connection."],
["Which three transfer rules exist for a user or call handler?","Standard, Alternate, and Closed","Busy, Internal, and Holiday","Primary, Secondary, and Tertiary","Day, Night, and Weekend","Transfer rules decide where calls go before the greeting plays."],
["Which greeting, when enabled, overrides all other greetings?","Alternate","Standard","Busy","Internal","The Alternate greeting is used for extended absences and takes precedence."],
["What does 'caller input' configure?","Actions taken when a caller presses keys during a greeting","The user's PIN","LDAP filters","Mailbox quotas","Each key can route to a handler, user, or action."],
["What does TUI refer to in Unity Connection?","The Telephone User Interface used to access voicemail by phone","The Tomcat User Interface","The Text Unified Inbox","The TFTP Upload Interface","Users navigate messages and settings via the phone keypad."]
]},
{n:29,part:"Part VII: Collaboration Applications",title:"Deploying the Webex Application",qs:[
["Which CUCM device type is used for the Webex App on Windows/macOS desktop?","Cisco Unified Client Services Framework (CSF)","BOT","TCT","TAB","CSF is desktop; BOT is Android; TCT is iPhone; TAB is tablet."],
["When Webex App uses CUCM for calling, where is messaging handled?","In the Webex cloud","On CUCM IM and Presence","On Unity Connection","On Expressway-E","Webex App messaging is cloud-based; calling can be on-prem."],
["How do internal Webex App clients discover CUCM for calling?","DNS SRV _cisco-uds._tcp and/or settings pushed from Control Hub","DHCP option 150 only","SNMP traps","LDAP referrals","Service discovery uses UDS SRV records and the configured UC Manager profile."],
["Which device type is used for Webex App on an iPhone?","TCT","BOT","CSF","SEP","TCT devices represent iPhone clients."],
["When migrating from Jabber to Webex App, which can typically be reused?","The existing CUCM softphone devices and dial plan","Jabber's chat history on IM&P automatically","Unity Express","SCCP phones only","Webex App registers to the same CSF/BOT/TCT devices."],
["Where do admins configure Webex App calling behavior to use CUCM?","Control Hub calling settings (Calling Behavior / UC Manager profile)","Expressway search rules","Unity Connection CoS","RTMT","Control Hub decides whether users call via CUCM or Webex Calling."]
]},
{n:30,part:"Part VIII: Troubleshooting",title:"Troubleshooting Endpoints",qs:[
["What tool can collect logs from Cisco IP phones for TAC?","Problem Report Tool (PRT)","Dialed Number Analyzer","DRS","CAR","PRT gathers phone logs into a bundle."],
["To view console logs from a Cisco IP phone's web page, what must be enabled?","Web Access on the phone configuration","SNMP traps","LDAP authentication","Auto-registration","Web access is disabled by default for security."],
["How do you download a full log bundle from a CE/RoomOS endpoint?","From the web interface under Issues and Diagnostics / System Logs","From CUCM Device Defaults","Through DHCP","Only by RMA","The web UI lets you download all logs as a bundle."],
["One-way audio in a call is most often caused by:","Routing, NAT, or firewall problems blocking RTP in one direction","Wrong ringtone","LDAP sync failure","Incorrect phone language","Signaling succeeds but media can't flow both ways."],
["Which on-phone screen shows jitter, packet loss, and codec during a call?","Call Statistics","Network Configuration","Model Information","Status Messages","Call Statistics shows real-time stream metrics."],
["On Jabber for Windows, how do you open the problem report generator?","Help > Report a Problem","Settings > Audio","Ctrl+Alt+Del","Contacts > Import","Jabber's PRT creates a log bundle for analysis."]
]},
{n:31,part:"Part VIII: Troubleshooting",title:"CUCM Reports",qs:[
["What does Dialed Number Analyzer (DNA) do?","Simulates how CUCM would route a dialed number from a given calling device","Records calls","Backs up CUCM","Collects SNMP statistics","DNA tests dial plan logic without placing calls."],
["CAR stands for:","CDR Analysis and Reporting","Call Admission Routing","Cluster Audit Report","Codec Allocation Rules","CAR builds reports from CDR/CMR data."],
["Which service parameter must be set to generate CDRs?","CDR Enabled Flag","Auto Registration Flag","Call Diagnostics only","Enable LDAP","CDR Enabled Flag (and Call Diagnostics Enabled for CMRs)."],
["What do CMRs contain that CDRs do not?","Call quality metrics such as jitter, latency, and packet loss","Calling and called numbers","Call duration","Originating device name","CMRs (diagnostic records) carry quality statistics."],
["Which cause code typically indicates normal call clearing in a CDR?","16","17","34","41","Q.850 cause 16 is normal clearing; 17 is user busy."],
["Where can CDR files be pushed for third-party billing?","Billing servers configured in CDR Management (via SFTP)","DHCP servers","NTP servers","LDAP servers","CDR Management sends flat files to external billing servers."]
]},
{n:32,part:"Part VIII: Troubleshooting",title:"Real-Time Monitoring Tool (RTMT)",qs:[
["What is RTMT?","A client application that monitors CUCM and other UC servers in real time","A phone firmware","A backup service","A dial plan","RTMT is downloaded from CUCM and connects to the cluster."],
["Which RTMT feature collects trace files from multiple nodes?","Trace & Log Central","Session Trace only","Dialed Number Analyzer","CAR","Trace & Log Central collects and downloads traces."],
["What does Session Trace in RTMT provide?","Ladder diagrams of call signaling","Bandwidth graphs only","Backup status","LDAP sync results","Session Trace visualizes SIP/SCCP message flow for a call."],
["How can RTMT notify administrators of alerts?","Email notifications","Only by SNMP v1","Only by printing reports","It cannot notify","Alerts can trigger email and alert actions."],
["What can RTMT show about devices?","Counts of registered and unregistered devices","Phone ringtones","User passwords","Voicemail content","Device monitoring shows registration status."],
["Which port does RTMT use to connect to CUCM?","TCP 8443 (HTTPS)","UDP 161","TCP 23","UDP 69","RTMT communicates with CUCM over HTTPS on 8443."]
]},
{n:33,part:"Part VIII: Troubleshooting",title:"Understanding the Disaster Recovery System",qs:[
["Where does DRS store backups?","On an SFTP server","On the phones","On an LDAP server","On a TFTP server only","DRS backup devices are SFTP destinations (or local tape in older releases)."],
["When restoring a CUCM cluster, which node is restored first?","The publisher","A random subscriber","The TFTP server","Unity Connection","Restore the publisher first, then subscribers."],
["What must match when restoring a CUCM node from backup?","Software version, hostname, and IP address","Only the MAC address","Only the cluster name","Nothing","Restore requires the same version and network identity."],
["How can backups be automated in DRS?","Using the DRS scheduler","Using RTMT alerts","Using CAR","Using BAT","Scheduled backups run at set intervals."],
["Where does the DRS Master Agent run?","On the publisher","On every phone","On the SFTP server","On Expressway-E","The master agent coordinates; local agents run on each node."],
["What DRS backup device setting controls how many backups are kept?","Number of backups to store on the network directory","Backup timeout","Retention in RTMT","CDR file count","Older backups are deleted beyond this number."]
]},
{n:34,part:"Part VIII: Troubleshooting",title:"Monitoring Voicemail in Cisco Unity Connection",qs:[
["Where are Unity Connection reports generated?","Cisco Unity Connection Serviceability > Tools > Reports, and Unity Connection Administration","CUCM Device Defaults","Expressway Status","DHCP server","Unity Connection provides reports in Serviceability and Administration."],
["Which service collects data for Unity Connection reports?","Cisco Unity Connection Reports Data Harvester","Cisco CallManager","Cisco DRF Local","Cisco Tomcat only","The Reports Data Harvester gathers data for reports."],
["Which report helps determine if you have enough voicemail ports?","Port Activity report","Users report","Distribution List report","Phone Interface Failed Logon report","Port usage shows busy ports and capacity needs."],
["Which report helps investigate repeated failed voicemail sign-ins?","Phone Interface Failed Logon report","Port Activity report","Call Handler Traffic report","Mailbox Store report","It lists failed TUI logons for security review."],
["What does the Mailbox Store report show?","Mailbox store size and status","Which phones are registered","CDR records","Network QoS","It helps manage storage capacity."],
["Which report shows how calls flow through a call handler?","Call Handler Traffic report","Users report","Mailbox Store report","Unused Voice Mail Accounts report","It summarizes handler usage and caller input."]
]}
];
