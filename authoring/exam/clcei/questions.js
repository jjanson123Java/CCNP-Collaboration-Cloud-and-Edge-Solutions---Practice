const BANK = [
  {
    "n": 1,
    "part": "Part I: Key Concepts",
    "title": "Introduction to the Cisco Expressway Solution",
    "qs": [
      [
        "Which current licensing system does Expressway X15 use to register and report license consumption?",
        "Cisco Smart Licensing",
        "Option keys only",
        "A local PLM server",
        "A node-locked PAK file",
        "Current Expressway releases use Cisco Smart Licensing; option and release keys describe older product behavior."
      ],
      [
        "What is the primary role of an Expressway-C in a standard traversal pair?",
        "It provides the internal-side traversal client and connects to internal collaboration systems",
        "It terminates public DNS zones for the internet",
        "It replaces Unified CM call processing",
        "It acts only as a media storage server",
        "Expressway-C sits on the internal side and establishes traversal connectivity toward Expressway-E."
      ],
      [
        "What is the primary role of Expressway-E in a traversal pair?",
        "It provides the external-facing traversal server at the network edge",
        "It synchronizes Active Directory users",
        "It hosts Unified CM device pools",
        "It provides voicemail storage",
        "Expressway-E is the edge-facing traversal server used for external B2B and remote-access connectivity."
      ],
      [
        "Which two signaling protocols are natively supported for endpoint registration and calls on Expressway?",
        "SIP and H.323",
        "SCCP and MGCP only",
        "XMPP and SMTP",
        "RTP and SNMP",
        "Expressway supports both SIP and H.323 signaling and can interwork between them when configured."
      ],
      [
        "A team is migrating from Cisco VCS to Expressway. What should be checked first?",
        "Feature, licensing, and software-version compatibility for the target Expressway release",
        "Whether every endpoint supports SCCP",
        "Whether DNS can be removed",
        "Whether all calls can use multicast",
        "A migration should begin with supported-version, feature, and licensing checks rather than assuming VCS settings map unchanged."
      ],
      [
        "Why is an Expressway traversal pair commonly deployed across a firewall?",
        "To enable controlled signaling and media traversal without broadly exposing internal systems",
        "To eliminate the need for certificates",
        "To convert all calls to analog",
        "To replace the enterprise firewall",
        "The pair creates controlled traversal paths between internal collaboration services and external networks."
      ]
    ]
  },
  {
    "n": 2,
    "part": "Part I: Key Concepts",
    "title": "Configure Key Cisco Expressway Settings",
    "qs": [
      [
        "Before deploying an Expressway virtual machine, what must match the selected OVA size?",
        "The reserved CPU, memory, and disk resources",
        "The number of DNS SRV records",
        "The SIP domain length",
        "The administrator password age",
        "Expressway VM sizes define required virtual resources; undersizing or changing unsupported resources can invalidate the deployment."
      ],
      [
        "Which service should provide a stable time source to every Expressway peer?",
        "NTP",
        "TFTP",
        "STUN",
        "XMPP",
        "Accurate NTP is essential for logs, certificates, authentication, and clustering."
      ],
      [
        "Why must forward and reverse DNS be correct before forming an Expressway cluster?",
        "Peers depend on consistent name resolution for cluster identity and communication",
        "DNS assigns traversal media ports",
        "DNS encrypts cluster replication",
        "DNS replaces peer certificates",
        "Stable forward and reverse resolution prevents peer identity and communication failures."
      ],
      [
        "Where should an administrator verify the ports currently in use on Expressway?",
        "Maintenance > Tools > Port usage",
        "Status > Alarms > License usage",
        "Configuration > Domains",
        "Applications > FindMe",
        "The Port usage tool lists active inbound and outbound ports for firewall planning."
      ],
      [
        "What does an Expressway backup primarily preserve?",
        "System configuration for restoration to a compatible deployment",
        "Packet captures for every historical call",
        "Private keys stored on an external HSM",
        "The complete ESXi virtual disk",
        "Expressway backup captures configuration; administrators must still follow compatibility and certificate/key handling guidance."
      ],
      [
        "After changing a network interface address, what dependent configuration should be reviewed?",
        "DNS, NAT, firewall, zone, and certificate references to that address",
        "Only the UI theme",
        "Only local user passwords",
        "Only the system banner",
        "An address change can affect routing, name resolution, NAT, certificates, and peer or zone connectivity."
      ]
    ]
  },
  {
    "n": 3,
    "part": "Part I: Key Concepts",
    "title": "Initial Configuration Settings on the Cisco Expressway",
    "qs": [
      [
        "Which Expressway setting identifies SIP domains for which the system can accept registrations or route calls?",
        "Domain configuration",
        "NTP peer configuration",
        "SNMP community configuration",
        "Backup encryption configuration",
        "Configured domains define local SIP namespaces used by registrations and routing logic."
      ],
      [
        "What must be enabled when a call needs translation between H.323 and SIP?",
        "Protocol interworking",
        "Media encryption downgrade",
        "Directory Connector",
        "Cluster address mapping",
        "Protocol interworking allows Expressway to bridge signaling between H.323 and SIP."
      ],
      [
        "Which status view is most useful for confirming that an endpoint successfully registered?",
        "Registration status",
        "License release history",
        "NTP statistics only",
        "Certificate signing request history",
        "The registration status pages show current registered aliases and endpoints."
      ],
      [
        "What is the purpose of the H.323 gatekeeper configuration on Expressway?",
        "To control H.323 registrations and call signaling",
        "To provide DHCP addresses",
        "To store meeting recordings",
        "To synchronize Webex users",
        "H.323 gatekeeper functions manage H.323 endpoint registration and routing."
      ],
      [
        "Why configure a default SIP transport deliberately rather than leaving the design implicit?",
        "Zones and peers must agree on transport and security expectations",
        "It changes the media codec",
        "It assigns endpoint phone numbers",
        "It disables DNS lookups",
        "Transport mismatches such as TCP versus TLS are a common cause of zone and call failures."
      ],
      [
        "An endpoint appears registered but calls fail immediately. What should be checked next?",
        "Search history and applicable transforms, rules, and zones",
        "Only the VM disk size",
        "Only the administrator account",
        "Only the system serial number",
        "Registration proves reachability to Expressway, not that the dial plan can route the called alias."
      ]
    ]
  },
  {
    "n": 4,
    "part": "Part I: Key Concepts",
    "title": "Regular Expressions on the Cisco Expressway",
    "qs": [
      [
        "In an Expressway regular expression, what does the caret (^) anchor?",
        "The beginning of the string",
        "The end of the string",
        "Any single digit",
        "A captured group",
        "The caret anchors a match to the beginning of the input."
      ],
      [
        "What does the dollar sign ($) anchor in a regular expression?",
        "The end of the string",
        "The beginning of the string",
        "Zero or more characters",
        "A literal dollar amount",
        "The dollar sign anchors a match to the end of the input."
      ],
      [
        "Which token matches a decimal digit in Expressway regex syntax?",
        "\\d",
        ".",
        "\\w only",
        "^",
        "The \\d token matches a digit."
      ],
      [
        "What is the purpose of parentheses in a transform pattern?",
        "They create a capture group that can be reused in the replacement",
        "They force TLS",
        "They negate the complete pattern",
        "They mark a DNS zone",
        "Captured groups let a transform retain selected parts of the original alias."
      ],
      [
        "Which replacement references the first captured group?",
        "\\1",
        "\\0 only",
        "$",
        "(?!)",
        "The first parenthesized capture group is referenced as \\1 in the replacement."
      ],
      [
        "Before enabling a new transform, which Expressway tool should be used with representative aliases?",
        "Check Pattern",
        "Packet capture only",
        "Port usage",
        "License usage",
        "Check Pattern shows whether sample aliases match and what the replacement produces."
      ]
    ]
  },
  {
    "n": 5,
    "part": "Part I: Key Concepts",
    "title": "Security Overview on the Cisco Expressway",
    "qs": [
      [
        "Which certificate field should contain every DNS name clients use to reach an Expressway service?",
        "Subject Alternative Name (SAN)",
        "Serial number",
        "Key usage counter",
        "CRL distribution interval",
        "Modern TLS hostname validation uses SAN entries for the service names clients connect to."
      ],
      [
        "What should be installed so Expressway trusts a peer certificate issued by an enterprise CA?",
        "The issuing CA chain in the trusted CA store",
        "The peer's administrator password",
        "A DNS TXT record",
        "A media encryption key in the dial plan",
        "Trust requires the relevant root and intermediate CA certificates."
      ],
      [
        "What does Force encrypted media do for a SIP call?",
        "Requires encrypted media and rejects negotiation that cannot satisfy it",
        "Encrypts signaling but forces clear RTP",
        "Disables certificate validation",
        "Allows either encrypted or unencrypted media without preference",
        "Force encrypted media prevents the call from proceeding with unencrypted media."
      ],
      [
        "What is the purpose of a certificate signing request (CSR)?",
        "To request a CA-signed identity certificate containing the required names",
        "To export call history",
        "To create a DNS zone",
        "To reset Smart Licensing",
        "A CSR contains the public key and identity attributes a CA uses to issue the certificate."
      ],
      [
        "Why should private keys be protected during backup and certificate operations?",
        "Possession of the private key can allow impersonation of the Expressway",
        "Private keys control NTP accuracy",
        "Private keys assign media ports",
        "Private keys are required only for SNMP",
        "TLS identity depends on exclusive control of the private key."
      ],
      [
        "What is a security benefit of remote administrator authentication?",
        "It can centralize identity and account policy while preserving auditability",
        "It removes the need for TLS",
        "It automatically opens firewall ports",
        "It converts SIP to H.323",
        "Central authentication can apply consistent identity policy, although local recovery access still requires careful control."
      ]
    ]
  },
  {
    "n": 6,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Registration on Cisco Expressway",
    "qs": [
      [
        "What does an Allow List registration policy do?",
        "Permits registrations that match configured allow rules",
        "Allows every registration except listed aliases",
        "Disables authentication",
        "Routes calls without registration",
        "Allow-list policy restricts registration to identities that satisfy the configured rules."
      ],
      [
        "What does a Deny List registration policy do?",
        "Rejects registrations matching configured deny rules while other registrations may proceed",
        "Rejects all registrations",
        "Accepts only local administrators",
        "Disables SIP",
        "A deny list blocks matching registrations rather than defining the only permitted identities."
      ],
      [
        "Which mechanism can verify an endpoint's registration credentials against Expressway's local database?",
        "Device authentication",
        "NTP authentication",
        "Media encryption",
        "DNSSEC validation",
        "Device authentication checks presented credentials against configured authentication sources."
      ],
      [
        "What is the purpose of subzone membership rules?",
        "To place registrations into subzones based on attributes such as address or alias",
        "To create CA certificates",
        "To assign VM resources",
        "To configure Webex licenses",
        "Membership rules classify devices so bandwidth and policy can be applied by subzone."
      ],
      [
        "A second H.323 device tries to register an alias already in use. Which setting determines the result?",
        "Registration conflict policy",
        "SIP media encryption mode",
        "Cluster peer order",
        "NTP stratum",
        "The conflict policy controls how duplicate H.323 registrations are handled."
      ],
      [
        "Why should registration restrictions be combined with authentication?",
        "Restriction controls which identities are allowed while authentication verifies the claimant",
        "Restriction encrypts RTP",
        "Authentication replaces DNS",
        "Both settings only affect bandwidth",
        "Authorization and authentication address different parts of registration security."
      ]
    ]
  },
  {
    "n": 7,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Cisco Expressway Call Processing Order",
    "qs": [
      [
        "Which operation is applied before Expressway searches zones for a destination?",
        "Pre-search transforms",
        "Post-call billing",
        "Cluster replication",
        "NTP correction",
        "Pre-search transforms normalize the alias before search rules are evaluated."
      ],
      [
        "What does a search rule determine?",
        "Which target zone is searched for aliases matching its pattern",
        "Which CA signs the server certificate",
        "Which VM host runs Expressway",
        "Which user receives a Webex license",
        "Search rules match aliases and direct searches to zones with configured priority and behavior."
      ],
      [
        "What can administrative call policy (CPL) do?",
        "Allow, reject, or modify call handling based on policy conditions",
        "Allocate VM memory",
        "Renew Smart Licensing automatically",
        "Create DNS SRV records",
        "CPL is evaluated as call policy and can permit, reject, or influence calls."
      ],
      [
        "What was FindMe designed to provide?",
        "User policy that can route a called identity to multiple configured devices or locations",
        "Firewall traversal port allocation",
        "Certificate enrollment",
        "Cluster database repair",
        "FindMe associates a user identity with rules for reaching that user on available devices."
      ],
      [
        "Which tool predicts how Expressway would route a supplied alias without placing the call?",
        "Locate",
        "Port usage",
        "Check Pattern only",
        "Backup restore",
        "Locate evaluates dial-plan routing for an alias and helps expose the selected rules and zones."
      ],
      [
        "Which view should be examined after a failed call to see each search attempt and result?",
        "Search history",
        "Administrator login history only",
        "License usage",
        "VM console",
        "Search history records the route attempts and helps identify pattern, priority, or zone failures."
      ]
    ]
  },
  {
    "n": 8,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Bandwidth Management",
    "qs": [
      [
        "What does a subzone bandwidth limit control?",
        "Bandwidth available to calls involving that subzone",
        "The size of certificate keys",
        "The number of DNS queries",
        "The VM disk allocation",
        "Subzone limits constrain call bandwidth associated with devices in the subzone."
      ],
      [
        "What does a link represent in Expressway bandwidth configuration?",
        "A logical path between subzones or zones",
        "A TLS certificate chain",
        "A cluster database copy",
        "A Webex user assignment",
        "Links model the path calls take between areas of the dial plan."
      ],
      [
        "What does a pipe limit?",
        "Aggregate bandwidth for one or more links that share a constrained network path",
        "The number of administrator accounts",
        "The number of CA certificates",
        "The SIP registration refresh interval",
        "Pipes model shared WAN constraints and cap aggregate bandwidth across associated links."
      ],
      [
        "A call exceeds the remaining bandwidth on a required pipe. What is the expected result?",
        "The call is rejected or cannot be routed over that constrained path",
        "Expressway silently increases the pipe",
        "The call becomes unencrypted",
        "The endpoint is unregistered",
        "Bandwidth admission control prevents a new call from exceeding the configured limit."
      ],
      [
        "Why model both links and pipes instead of setting only endpoint limits?",
        "Multiple logical routes can share the same physical WAN bottleneck",
        "Links generate certificates",
        "Pipes perform DNS lookup",
        "Endpoints cannot signal bandwidth",
        "A pipe lets several links consume a common aggregate limit representing the real network."
      ],
      [
        "What information is needed to troubleshoot an unexpected bandwidth rejection?",
        "The call path, subzones, links, pipes, configured limits, and current usage",
        "Only the called number",
        "Only the system uptime",
        "Only the license serial number",
        "The decision depends on the complete modeled path and its live usage."
      ]
    ]
  },
  {
    "n": 9,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Multisite Collaboration Solutions",
    "qs": [
      [
        "What is a key benefit of a structured dial plan?",
        "It enables scalable routing by encoding location or organizational meaning in aliases",
        "It eliminates DNS",
        "It disables transforms",
        "It requires every endpoint to share one alias",
        "Structured aliases allow summarized, hierarchical routing rather than an unmanageable list of individual destinations."
      ],
      [
        "Why are search-rule priorities important?",
        "They determine the order in which matching routes are attempted",
        "They choose the TLS cipher",
        "They allocate VM CPU",
        "They set the NTP server",
        "When several rules match, priority influences which route Expressway tries first."
      ],
      [
        "What is the purpose of a neighbor zone?",
        "To route calls to another call-control system or Expressway peer",
        "To synchronize administrator passwords",
        "To assign Smart Licenses",
        "To host Webex meetings",
        "Neighbor zones define signaling connectivity to adjacent systems in the collaboration network."
      ],
      [
        "What does hop count help prevent in a multisite dial plan?",
        "Calls looping indefinitely among neighbor systems",
        "Certificate expiration",
        "Media encryption",
        "Directory synchronization",
        "A decreasing hop count bounds recursive or looping searches."
      ],
      [
        "In a hierarchical video network, what function does a directory Expressway provide?",
        "Centralized route knowledge between lower-level systems",
        "Endpoint media termination for every call",
        "Active Directory synchronization",
        "PSTN billing",
        "A directory layer can aggregate routes and reduce full-mesh neighbor configuration."
      ],
      [
        "A flat dial plan grows across dozens of sites. What is the most likely operational problem?",
        "Search rules and individual routes become difficult to scale and troubleshoot",
        "TLS becomes impossible",
        "Endpoints stop supporting SIP",
        "NTP cannot cross sites",
        "Flat plans often accumulate overlapping rules and make route ownership unclear."
      ]
    ]
  },
  {
    "n": 10,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Multisite and Business-to-Business (B2B) Collaboration Solutions",
    "qs": [
      [
        "What problem does STUN primarily help an endpoint discover?",
        "Its public-facing address and NAT behavior",
        "The CA that issued its certificate",
        "The nearest NTP server",
        "Its Webex license",
        "STUN lets a client learn how it appears through NAT."
      ],
      [
        "What is TURN used for when direct media connectivity cannot be established?",
        "Relaying media through a reachable server",
        "Resolving SIP domains",
        "Issuing certificates",
        "Synchronizing directories",
        "TURN supplies a relay candidate when endpoints cannot establish a direct path."
      ],
      [
        "What does ICE do?",
        "Gathers and tests candidate paths to select a working media route",
        "Encrypts all signaling",
        "Assigns endpoint extensions",
        "Clusters Expressways",
        "ICE coordinates host, server-reflexive, and relay candidates to find a viable connection."
      ],
      [
        "What do SIP DNS SRV records advertise?",
        "The host, port, priority, and weight for a SIP service",
        "The media encryption key",
        "The endpoint password",
        "The cluster database version",
        "SRV records publish how a domain's signaling service can be reached."
      ],
      [
        "Why use a traversal zone between Expressway-C and Expressway-E?",
        "It creates an authenticated signaling and media traversal relationship across the firewall",
        "It replaces the firewall",
        "It synchronizes Webex users",
        "It provides voicemail",
        "The traversal relationship carries controlled calls and media through the boundary."
      ],
      [
        "What is a basic toll-fraud safeguard for B2B routing?",
        "Restrict search rules and call policy so untrusted callers cannot reach chargeable routes",
        "Allow every alias and rely on billing alerts",
        "Disable TLS",
        "Publish internal extensions in public DNS",
        "Least-privilege routing prevents the edge from becoming an unauthorized PSTN transit path."
      ]
    ]
  },
  {
    "n": 11,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Clustering Expressways",
    "qs": [
      [
        "What is the maximum number of Expressway peers in a cluster?",
        "Six",
        "Two",
        "Eight",
        "Twelve",
        "Cisco documents a maximum of six peers, including the primary."
      ],
      [
        "Where should cluster-wide configuration normally be changed?",
        "On the primary peer",
        "On every peer simultaneously",
        "Only through DNS",
        "On the last peer added",
        "Changes on non-primary peers can be overwritten and may disrupt replication."
      ],
      [
        "What must match across peers before clustering?",
        "Platform compatibility and software version",
        "Administrator password text",
        "Every interface IP address",
        "Every serial number",
        "Peers must satisfy supported platform and version requirements."
      ],
      [
        "Can Expressway-C and Expressway-E nodes be mixed in one cluster?",
        "No; a cluster contains peers of the same Expressway role",
        "Yes, in alternating order",
        "Yes, but only with two peers",
        "Only if H.323 is disabled",
        "C and E roles are clustered separately."
      ],
      [
        "Why should all peers have reliable DNS and NTP before joining?",
        "Cluster identity, communication, logs, and certificates depend on consistent names and time",
        "They control codec selection",
        "They assign licenses",
        "They create search rules",
        "Name and time consistency are cluster prerequisites."
      ],
      [
        "What is the safe method for adding peers?",
        "Add peers one at a time and wait for the cluster to stabilize",
        "Add all peers simultaneously while changing configuration",
        "Clone the primary VM while it is running",
        "Disable replication until the end",
        "Cisco recommends adding peers individually and avoiding cluster-wide changes while peers are unstable."
      ]
    ]
  },
  {
    "n": 12,
    "part": "Part II: Cisco Expressway Configurations",
    "title": "Troubleshooting a Business-to-Business (B2B) Collaboration Solution",
    "qs": [
      [
        "A B2B call fails before reaching a zone. Which view should be checked first for dial-plan decisions?",
        "Search history",
        "Smart Licensing registration",
        "VM datastore usage",
        "Directory Connector logs",
        "Search history shows transforms, rules, zones, and failure responses for the call."
      ],
      [
        "Which tool captures packet-level signaling for deeper analysis?",
        "Diagnostic logging with packet capture",
        "Check Pattern only",
        "License usage",
        "Backup export",
        "A bounded diagnostic log and packet capture can show SIP, H.323, TLS, and network exchanges."
      ],
      [
        "A TLS zone is down after a certificate renewal. What should be verified?",
        "Certificate SANs, validity, trust chain, and peer name",
        "Only NTP stratum",
        "Only the called alias",
        "Only the VM CPU count",
        "TLS fails when identity names, validity, or trust do not match the connection."
      ],
      [
        "External domains cannot be called, but IP dialing works. What is the most likely area to investigate?",
        "DNS resolution and SRV records",
        "Media encryption only",
        "Subzone bandwidth only",
        "Administrator roles",
        "Domain routing depends on correct DNS lookups even when raw IP reachability succeeds."
      ],
      [
        "A remote system returns SIP 404. What does that generally indicate?",
        "The requested user or route was not found at the responding system",
        "The certificate expired",
        "Media bandwidth was exceeded",
        "The VM ran out of disk",
        "A 404 response indicates the destination was not found in the responding context."
      ],
      [
        "Why should diagnostic logging be time-bounded and reproduced once?",
        "It limits sensitive data and log volume while capturing the failing transaction",
        "It changes the search-rule priority",
        "It renews certificates",
        "It increases call bandwidth",
        "Focused reproduction makes analysis clearer and reduces unnecessary capture of user traffic."
      ]
    ]
  },
  {
    "n": 13,
    "part": "Part III: Mobile and Remote Access",
    "title": "Introduction to Mobile and Remote Access (MRA)",
    "qs": [
      [
        "What does MRA allow supported users to do?",
        "Register and use collaboration services from outside the enterprise without a VPN",
        "Replace Unified CM with Expressway",
        "Join the internal LAN by DHCP",
        "Bypass authentication",
        "MRA securely proxies supported collaboration services through Expressway-C and Expressway-E."
      ],
      [
        "Which system remains the call-control authority for an MRA-registered Jabber or device deployment?",
        "Cisco Unified Communications Manager",
        "Expressway-E alone",
        "Public DNS",
        "Directory Connector",
        "Expressway provides traversal and proxy services; Unified CM remains call control."
      ],
      [
        "Which Expressway role discovers internal UC services?",
        "Expressway-C",
        "Expressway-E only",
        "A public TURN server",
        "The endpoint itself without DNS",
        "Expressway-C integrates with internal Unified CM, IM and Presence, and related services."
      ],
      [
        "Which Expressway role is reachable from remote clients on the internet?",
        "Expressway-E",
        "Expressway-C directly",
        "Unified CM publisher",
        "Directory Connector",
        "Remote clients discover and connect to the edge-facing Expressway-E."
      ],
      [
        "Why are certificates especially important for MRA?",
        "They authenticate service names and protect TLS connections across trust boundaries",
        "They assign phone numbers",
        "They replace DNS",
        "They select codecs",
        "Remote clients and Expressway peers must validate service identities before exchanging credentials and signaling."
      ],
      [
        "What is a key design consideration before enabling MRA?",
        "Supported versions, capacity, firewall/DNS, certificates, and security policy",
        "Only the UI color",
        "Only H.323 gatekeeper settings",
        "Only voicemail storage",
        "MRA success depends on an end-to-end supported and secured design."
      ]
    ]
  },
  {
    "n": 14,
    "part": "Part III: Mobile and Remote Access",
    "title": "Configure an MRA Solution",
    "qs": [
      [
        "Which public DNS SRV record lets remote clients discover the MRA edge?",
        "_collab-edge._tls",
        "_cisco-uds._tcp",
        "_sip._udp only",
        "_ntp._udp",
        "Remote clients query _collab-edge._tls in public DNS to find Expressway-E."
      ],
      [
        "Which internal DNS SRV record helps clients discover Unified CM services?",
        "_cisco-uds._tcp",
        "_collab-edge._tls",
        "_turn._udp",
        "_h323._tcp",
        "Internal service discovery uses _cisco-uds._tcp."
      ],
      [
        "What Unified Communications mode must be enabled on the Expressway pair?",
        "Mobile and Remote Access",
        "Jabber Guest only",
        "H.323 gatekeeper only",
        "Directory Connector",
        "Both Expressway-C and Expressway-E are configured for Mobile and Remote Access mode."
      ],
      [
        "Why must the Expressway-E certificate include MRA service names in SANs?",
        "Remote clients validate the hostname they discovered against the certificate",
        "SANs allocate media ports",
        "SANs define bandwidth",
        "SANs assign user licenses",
        "The certificate must authenticate the DNS names clients use."
      ],
      [
        "What is the purpose of the HTTP allow list in MRA?",
        "To control which internal web resources may be proxied to remote clients",
        "To list allowed RTP codecs",
        "To create DNS records",
        "To select cluster peers",
        "The allow list limits proxied HTTP access to approved internal services."
      ],
      [
        "What connects Expressway-C and Expressway-E for MRA signaling?",
        "A Unified Communications traversal zone",
        "An H.323-only neighbor zone",
        "A Directory Connector",
        "A Webex route group",
        "The UC traversal zone forms the secure relationship used by MRA services."
      ]
    ]
  },
  {
    "n": 15,
    "part": "Part III: Mobile and Remote Access",
    "title": "Troubleshoot an MRA Solution",
    "qs": [
      [
        "A remote client cannot discover any edge service. What should be checked first?",
        "The public _collab-edge._tls SRV lookup",
        "Unified CM device pool",
        "Subzone bandwidth",
        "Smart Licensing consumption",
        "Discovery must succeed before the client can connect to Expressway-E."
      ],
      [
        "A client reaches Expressway-E but rejects TLS. What should be checked?",
        "Certificate SAN, validity, chain, and the discovered hostname",
        "Only the user's extension",
        "Only the RTP port range",
        "Only the NTP server on Unified CM",
        "TLS validation depends on identity, trust, and time validity."
      ],
      [
        "External sign-in reaches the edge but fails to locate the user's home cluster. What should be investigated?",
        "Expressway-C UC discovery and Unified CM/IM&P configuration",
        "The public website certificate only",
        "The offline ZIP",
        "The endpoint wallpaper",
        "Home-cluster and UC service discovery occur through the internal MRA integration."
      ],
      [
        "Why should Expressway-C and Expressway-E diagnostic logs be collected for the same reproduction window?",
        "They show both sides of the proxied transaction with correlating timestamps",
        "They automatically fix the issue",
        "They renew all certificates",
        "They change DNS propagation",
        "Correlated logs make it possible to follow discovery, authentication, and signaling end to end."
      ],
      [
        "Multiple users behind one NAT address trigger intrusion protection. What is the documented mitigation?",
        "Configure a justified exemption for the shared public IP while preserving protection elsewhere",
        "Disable authentication",
        "Publish Expressway-C publicly",
        "Remove certificates",
        "Cisco notes that a shared NAT address can trigger thresholds and supports carefully scoped exemptions."
      ],
      [
        "Internal sign-in works but external sign-in fails. What boundary-specific areas should be compared?",
        "Public DNS, firewall/NAT, Expressway-E certificate, and traversal-zone status",
        "Only the user's voicemail PIN",
        "Only Unified CM regions",
        "Only local DHCP",
        "The contrast isolates the failure to external discovery, edge security, or traversal connectivity."
      ]
    ]
  },
  {
    "n": 16,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Introduction to Cisco Cloud Collaboration",
    "qs": [
      [
        "What is Control Hub?",
        "The cloud administration portal for Webex organizations and services",
        "An Expressway packet-capture utility",
        "A local H.323 gatekeeper",
        "A DNS server",
        "Control Hub centralizes organization, user, device, service, and analytics administration."
      ],
      [
        "What characterizes a Webex hybrid service?",
        "It connects on-premises resources with Webex cloud capabilities",
        "It requires every user to use a VPN",
        "It removes cloud identity",
        "It supports only H.323",
        "Hybrid services bridge selected on-premises systems and cloud services."
      ],
      [
        "What is the management connector's historical role on an Expressway connector host?",
        "It registers and manages supported hybrid connectors with the Webex cloud",
        "It routes all PSTN calls",
        "It provides DHCP",
        "It signs endpoint certificates",
        "The management connector coordinated connector lifecycle and cloud registration on supported Expressway-based hybrid deployments."
      ],
      [
        "Which platform provides cloud meetings, messaging, calling, and device services?",
        "Webex",
        "Expressway local database",
        "NTP",
        "Cisco IOS DHCP",
        "Webex is Cisco's cloud collaboration suite spanning these workloads."
      ],
      [
        "Why must legacy hybrid-service chapters be read with current documentation?",
        "Some connector architectures and services have changed or been retired since 2021",
        "The book does not discuss SIP",
        "Current services no longer use identity",
        "All 2021 ports are permanently fixed",
        "Cloud services evolve quickly, so current lifecycle and deployment guidance must override outdated procedures."
      ],
      [
        "Which identity boundary is managed at the Webex organization level?",
        "Users, domains, administrators, licenses, and service entitlements",
        "Expressway subzone links only",
        "H.323 hop counts only",
        "VM datastore allocation",
        "The Webex organization is the administrative boundary for cloud identities and services."
      ]
    ]
  },
  {
    "n": 17,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Configure Webex Hybrid Directory Service",
    "qs": [
      [
        "What is the authoritative source for users in a Directory Connector deployment?",
        "On-premises Active Directory",
        "Expressway search history",
        "Public DNS",
        "The endpoint local phonebook",
        "Directory Connector replicates selected Active Directory objects to Webex, making AD the source of truth."
      ],
      [
        "Where is Directory Connector downloaded and directory synchronization enabled?",
        "Control Hub",
        "Expressway Locate tool",
        "Unified CM RTMT",
        "The public DNS console",
        "Administrators start directory synchronization and obtain the connector from Control Hub."
      ],
      [
        "What should be run before committing a large synchronization change?",
        "A dry run and review of its report",
        "A full deletion",
        "A packet capture on every endpoint",
        "A Smart License reservation",
        "A dry run previews additions, modifications, and deletions before they affect cloud identity."
      ],
      [
        "What is the difference between full and incremental synchronization?",
        "Full evaluates the entire selected directory; incremental processes changes since the prior sync",
        "Full uses TLS and incremental does not",
        "Incremental deletes all users",
        "There is no difference",
        "Incremental sync reduces processing by sending changed objects while full sync evaluates the complete scope."
      ],
      [
        "How is high availability provided for Directory Connector?",
        "Install multiple connectors so a backup can take over",
        "Create an Expressway traversal pair",
        "Use two DNS A records only",
        "Duplicate every Webex user manually",
        "The connector supports multiple instances for resilience."
      ],
      [
        "When should automatic license assignment be configured?",
        "Before or alongside synchronization so new users receive intended services consistently",
        "Only after deleting the directory",
        "On Expressway-E",
        "In public DNS",
        "An auto-assign template reduces manual entitlement work for newly synchronized users."
      ]
    ]
  },
  {
    "n": 18,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Configure Webex Hybrid Calendar Service",
    "qs": [
      [
        "What user experience does One Button to Push (OBTP) provide?",
        "A join button on a supported device shortly before a scheduled meeting",
        "Automatic password reset",
        "A new SIP domain",
        "Directory synchronization",
        "Hybrid Calendar supplies meeting details so supported devices can present a timely join action."
      ],
      [
        "Which cloud mail platforms can use cloud-based Hybrid Calendar?",
        "Microsoft 365 and Google Calendar",
        "Only an on-premises POP3 server",
        "Only Cisco Unity Connection",
        "Only local text files",
        "Current Hybrid Calendar supports cloud mail services including Microsoft 365 and Google Calendar."
      ],
      [
        "What data must a calendar service be able to read to create join information?",
        "Relevant meeting and calendar event details",
        "Expressway Smart License tokens",
        "H.323 gatekeeper passwords",
        "VM snapshots",
        "The service processes meeting invitations and event data to determine conferencing details."
      ],
      [
        "What is the role of a calendar connector in a supported on-premises Exchange design?",
        "It mediates between the on-premises calendar environment and Webex",
        "It replaces Exchange",
        "It routes PSTN calls",
        "It clusters video endpoints",
        "The connector securely integrates the local calendar system with the cloud service."
      ],
      [
        "A room receives invitations but never shows OBTP. What should be checked?",
        "Calendar service assignment, room mapping, invitation format, and connector/cloud status",
        "Only the user's phone PIN",
        "Only the Expressway H.323 mode",
        "Only the VM disk",
        "OBTP depends on the room identity, supported invitation details, and a healthy calendar integration."
      ],
      [
        "Why should current Hybrid Calendar deployment guidance be used instead of assuming the 2021 connector model?",
        "Cisco now supports cloud-based options and has changed some on-premises requirements",
        "Calendar no longer uses identities",
        "OBTP was removed",
        "Exchange cannot create meetings",
        "The service architecture has evolved since the book was published."
      ]
    ]
  },
  {
    "n": 19,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Configure Webex Hybrid Message Service",
    "qs": [
      [
        "What was Hybrid Message Service designed to connect?",
        "On-premises IM and Presence messaging with Webex cloud messaging",
        "Expressway licensing with Smart Accounts",
        "H.323 endpoints with PSTN trunks",
        "NTP servers with DNS",
        "The service bridged messaging between supported on-premises IM&P environments and Webex."
      ],
      [
        "Why is lifecycle verification essential for Hybrid Message Service?",
        "The service architecture and availability have changed since the book was published",
        "Messaging never uses certificates",
        "The book predates SIP",
        "Current Webex has no messaging",
        "Students must distinguish historical exam material from currently deployable services."
      ],
      [
        "What secured the connector's communication to the Webex cloud?",
        "Trusted TLS certificates and authenticated cloud registration",
        "An unauthenticated UDP tunnel",
        "A local hosts file only",
        "H.323 hop count",
        "Connector-to-cloud communications relied on authenticated, encrypted connections."
      ],
      [
        "Which on-premises application supplied presence and messaging integration?",
        "Cisco IM and Presence Service",
        "Cisco Unity Connection only",
        "Cisco DNA Center",
        "Cisco ISE guest portal",
        "Hybrid Message integrated supported IM and Presence deployments with Webex messaging."
      ],
      [
        "What should be checked before attempting any legacy hybrid connector deployment?",
        "Current Cisco service availability, supported versions, and migration guidance",
        "Only the historical screenshots",
        "Only the old default password",
        "Whether H.323 is enabled",
        "A currently supported design must be confirmed before following legacy procedures."
      ],
      [
        "How should a practice question treat a retired cloud connector procedure?",
        "Identify it as historical and test the concept or migration awareness, not recommend it as current deployment guidance",
        "Present it as the required current method",
        "Remove every mention of messaging",
        "Mark every answer unverified",
        "This preserves study value without teaching obsolete operational steps."
      ]
    ]
  },
  {
    "n": 20,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Webex Edge Solutions",
    "qs": [
      [
        "What does Webex Edge for Devices preserve on premises?",
        "Device registration, management, calling, and media services",
        "Only user passwords",
        "Only meeting recordings",
        "Only DNS",
        "Edge for Devices links on-premises registered devices to selected cloud features without moving core registration and media to the cloud."
      ],
      [
        "What is the goal of Webex Edge Audio?",
        "Route Webex meeting audio through enterprise calling connectivity where supported",
        "Replace all video media with email",
        "Synchronize Active Directory",
        "Cluster Expressways",
        "Edge Audio integrates enterprise calling paths with Webex meeting audio."
      ],
      [
        "What does Webex Edge Connect provide?",
        "A private connection option between an enterprise network and Webex",
        "A local certificate authority",
        "An H.323 gatekeeper",
        "A voicemail server",
        "Edge Connect offers private network connectivity to Webex through supported providers."
      ],
      [
        "What is Webex Video Mesh designed to do?",
        "Keep eligible meeting media on premises when practical while retaining cloud meeting control",
        "Move all call control to Expressway",
        "Replace DNS",
        "Provide user directory synchronization",
        "Video Mesh processes supported media locally and cascades to cloud resources when needed."
      ],
      [
        "Which TCP port is documented for Video Mesh intracluster communication?",
        "8443",
        "25",
        "69",
        "3389",
        "The Video Mesh deployment guide lists TCP 8443 for intracluster communication."
      ],
      [
        "Why may Video Mesh calls overflow to the cloud?",
        "Local capacity, reachability, policy, or meeting-participant conditions may require cloud media",
        "The node cannot use DNS",
        "Every meeting is forced to cloud",
        "A valid certificate disables local media",
        "Video Mesh selects local resources when eligible and available, otherwise uses cloud media."
      ]
    ]
  },
  {
    "n": 21,
    "part": "Part IV: Cisco Webex Technologies",
    "title": "Cisco Jabber for Cloud and Hybrid Deployments with Cisco Webex Messenger",
    "qs": [
      [
        "What must be confirmed before deploying a legacy Jabber/Webex Messenger architecture?",
        "Current product lifecycle, supported services, and migration path",
        "Only the user's wallpaper",
        "Only the H.323 hop count",
        "Only the Expressway VM size",
        "Webex Messenger-era designs have changed, so current support status must be checked first."
      ],
      [
        "Which on-premises platform historically provided Jabber call control in a hybrid deployment?",
        "Cisco Unified Communications Manager",
        "Public DNS",
        "Control Hub only",
        "Directory Connector",
        "Unified CM supplied enterprise call control while cloud services supplied selected messaging capabilities."
      ],
      [
        "What client configuration service helps Jabber discover its Unified CM services internally?",
        "_cisco-uds DNS service discovery",
        "_collab-edge only",
        "A TURN allocation",
        "An NTP TXT record",
        "Jabber uses UDS service discovery to locate internal Unified CM services."
      ],
      [
        "What should be used for remote Jabber access to on-premises Unified CM without VPN?",
        "Mobile and Remote Access through Expressway",
        "A public Unified CM publisher",
        "Directory Connector",
        "Webex Edge Connect only",
        "MRA securely exposes supported UC services through the Expressway pair."
      ],
      [
        "Why must user identity be consistent across call control and cloud services?",
        "Service association and sign-in depend on matching, routable user identities",
        "It controls VM CPU",
        "It assigns RTP ports",
        "It sets NTP time",
        "Mismatched identities commonly break provisioning, service discovery, and user experience."
      ],
      [
        "How should obsolete Webex Messenger details be presented to students?",
        "As historical context with current replacement or migration guidance",
        "As the preferred greenfield design",
        "Without any version warning",
        "As a DNS troubleshooting procedure",
        "Version labeling prevents learners from applying retired designs to current deployments."
      ]
    ]
  },
  {
    "n": 22,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Suite and Devices Configuration",
    "qs": [
      [
        "Which federation standard does Webex Control Hub use for enterprise SSO?",
        "SAML 2.0",
        "H.323",
        "SNMPv2",
        "TFTP",
        "Webex Control Hub integrates with enterprise identity providers using SAML 2.0."
      ],
      [
        "What should an administrator do before committing Directory Connector changes?",
        "Run and review a dry-run synchronization",
        "Delete all cloud users",
        "Disable TLS",
        "Remove the verified domain",
        "A dry run previews proposed adds, changes, and deletions."
      ],
      [
        "Which two Local Gateway trunk models are named in the CLHCT v2.0 outline?",
        "Certificate-based and registration-based",
        "Analog and ISDN",
        "SCCP and MGCP",
        "Static and dynamic NAT",
        "The current outline explicitly tests certificate-based and registration-based Local Gateway models."
      ],
      [
        "What happens to supported endpoints when Webex cloud connectivity is lost and Site Survivability is configured?",
        "They register to the local Survivability Gateway for supported fallback calling",
        "They permanently unregister",
        "They connect to Directory Connector",
        "They become H.323-only",
        "Endpoints transition from active cloud registration to local survivability mode during the outage."
      ],
      [
        "Which Control Hub feature provides a shared workspace phone experience for different users at different times?",
        "Hot desking",
        "Video Mesh",
        "Directory Connector",
        "Expressway FindMe",
        "Hot desking lets users temporarily sign in to a shared device with their calling identity."
      ]
    ]
  },
  {
    "n": 23,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Cloud Management",
    "qs": [
      [
        "What is the first safe step before a large directory synchronization change?",
        "Run a dry run and inspect the change report",
        "Force a full sync without review",
        "Remove the verified domain",
        "Disable SSO",
        "The dry run exposes unexpected additions, changes, or deletions before they reach the cloud."
      ],
      [
        "What protocol is commonly used by identity providers to provision users into Webex without Directory Connector?",
        "SCIM",
        "RTP",
        "H.323",
        "NTP",
        "SCIM provides standardized cloud identity provisioning."
      ],
      [
        "What does RBAC control in Control Hub?",
        "Which administrative actions a role is authorized to perform",
        "Which codec a call uses",
        "Which DNS server answers",
        "Which RTP port is selected",
        "Role-based access control limits administration according to assigned responsibilities."
      ],
      [
        "Which symptom most directly suggests insufficient network bandwidth for Webex media?",
        "Sustained loss, jitter, and degraded audio/video during load",
        "An expired administrator password",
        "A missing user license only",
        "A duplicate directory object",
        "Media quality degrades when the path cannot carry the offered traffic with acceptable loss and delay."
      ],
      [
        "Why should QoS markings be checked end to end?",
        "A marking applied by an endpoint is ineffective if intermediate devices remark or ignore it",
        "QoS creates user accounts",
        "QoS replaces bandwidth",
        "QoS signs certificates",
        "Classification, trust, queuing, and WAN policy must be consistent across the full path."
      ]
    ]
  },
  {
    "n": 24,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Suite and Devices Management",
    "qs": [
      [
        "What is the purpose of a Webex Calling route group?",
        "To distribute calls across trunks and provide redundancy or scale",
        "To synchronize users",
        "To group meeting recordings",
        "To issue device certificates",
        "A route group contains trunks with priorities used for load distribution and failover."
      ],
      [
        "What does a Webex Calling dial plan do?",
        "Routes matching enterprise patterns to a selected trunk or route group",
        "Assigns Webex licenses",
        "Creates DNS SRV records",
        "Controls meeting retention",
        "Dial plans associate patterns with on-premises routing choices."
      ],
      [
        "What do outbound translation patterns change?",
        "Dialed digits before routing",
        "The user's SSO password",
        "The media codec",
        "The device certificate",
        "Translation patterns normalize or substitute digits for outbound and redirected calls."
      ],
      [
        "A cloud-registered endpoint cannot register. What should be checked first?",
        "Service entitlement, activation/identity, DNS, time, and network reachability to Webex",
        "Expressway H.323 hop count only",
        "PSTN billing",
        "Directory Connector CPU only",
        "Registration requires valid identity and entitlement plus network, DNS, and time prerequisites."
      ],
      [
        "What is the best first evidence for troubleshooting a failed Webex Calling route?",
        "The called number, location, applied translation, dial plan, route group/trunk status, and call diagnostics",
        "Only the user's display name",
        "Only the device wallpaper",
        "Only the meeting site URL",
        "Call routing is determined by the normalized number, location policy, and health of the selected route."
      ]
    ]
  },
  {
    "n": 25,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Suite and Device Administration",
    "qs": [
      [
        "Where are organization domains, users, services, and administrative roles managed?",
        "Control Hub",
        "Expressway search history",
        "Unified CM CDR only",
        "Public DNS alone",
        "Control Hub is the central Webex administration portal."
      ],
      [
        "Why verify a domain in Control Hub?",
        "To prove organizational ownership before enabling domain-scoped identity controls",
        "To allocate RTP ports",
        "To form an Expressway cluster",
        "To create H.323 zones",
        "Domain verification establishes that the organization controls the claimed namespace."
      ],
      [
        "What is a site-level administration concern for Webex Meetings?",
        "Applying the correct features and common settings to the intended meeting site",
        "Changing Expressway subzone links",
        "Assigning H.323 hop count",
        "Configuring VM snapshots",
        "Organizations may manage multiple meeting sites with distinct feature and policy settings."
      ],
      [
        "What is a responsible use of AI features in cloud collaboration administration?",
        "Enable features with appropriate privacy, retention, compliance, and user-policy review",
        "Assume AI output is always correct",
        "Disable audit logging",
        "Share all meeting content publicly",
        "AI features must operate within the organization's data-governance and compliance requirements."
      ],
      [
        "What is the role of Control Hub migration tools?",
        "Assess and move supported on-premises users, devices, or services toward cloud configurations",
        "Replace public DNS",
        "Issue all enterprise certificates",
        "Provide NTP",
        "Migration tools help inventory, plan, and execute supported transitions to Webex cloud services."
      ]
    ]
  },
  {
    "n": 26,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Hybrid and Migration to the Cloud",
    "qs": [
      [
        "What does Cloud Connected UC provide during a cloud migration journey?",
        "Cloud-based management, analytics, and operational services for supported on-premises UC",
        "A replacement for every Unified CM node",
        "A public PSTN carrier",
        "An H.323-only edge",
        "Cloud Connected UC links supported on-premises deployments to Control Hub capabilities."
      ],
      [
        "Why is discovery and assessment required before migration?",
        "It identifies versions, dependencies, identities, devices, dial plans, and unsupported features",
        "It eliminates the need for testing",
        "It automatically rewrites every dial plan",
        "It guarantees zero downtime",
        "Migration planning must account for the real inventory and feature dependencies."
      ],
      [
        "What is a key identity prerequisite for staged migration?",
        "Consistent verified domains and user identities across on-premises and cloud systems",
        "Identical device MAC addresses",
        "One shared administrator password",
        "Disabling SSO",
        "Stable identity mapping prevents duplicate users and broken service assignment."
      ],
      [
        "Why preserve dial-plan normalization during migration?",
        "Users and integrations must continue reaching destinations consistently across hybrid call paths",
        "It controls meeting recording retention",
        "It assigns licenses",
        "It replaces QoS",
        "Hybrid periods often route calls across both environments, making consistent number normalization essential."
      ],
      [
        "What should a rollback plan define?",
        "Trigger conditions, retained configuration/data, routing reversal, and validation steps",
        "Only a project end date",
        "Only the new site name",
        "Only a DNS TTL",
        "A usable rollback plan explains how to restore service and prove it works."
      ]
    ]
  },
  {
    "n": 27,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "Security",
    "qs": [
      [
        "What is the purpose of the Webex identity service in the cloud security architecture?",
        "Authenticate and represent users and service identities",
        "Relay all meeting media",
        "Store every recording",
        "Provide PSTN trunks",
        "The identity service supports authentication and identity used across Webex workloads."
      ],
      [
        "What is the purpose of the Webex Key Management Service (KMS)?",
        "Manage encryption keys used to protect Webex content",
        "Resolve DNS names",
        "Assign calling numbers",
        "Form Expressway clusters",
        "KMS is the key-management component of Webex content protection."
      ],
      [
        "What does Hybrid Data Security move into the customer environment?",
        "Key-management and related security components for supported encrypted content",
        "All Webex cloud media",
        "Every Control Hub function",
        "Public DNS",
        "Hybrid Data Security lets eligible customers operate key-management components on premises while using Webex cloud services."
      ],
      [
        "Why are retention and eDiscovery policies part of collaboration security?",
        "They govern how content is preserved, found, and produced for compliance obligations",
        "They select codecs",
        "They assign RTP ports",
        "They configure NTP",
        "Security includes governance and compliance across the content lifecycle."
      ],
      [
        "What administrative principle reduces the effect of a compromised account?",
        "Least privilege with role-based access and strong authentication",
        "Give every administrator full privileges",
        "Disable audit logs",
        "Reuse a shared password",
        "Limiting privileges and strengthening authentication reduce available actions and improve accountability."
      ]
    ]
  },
  {
    "n": 28,
    "part": "Part V: CLHCT v2.0 — Current Exam Domains",
    "title": "APIs and Programmability",
    "qs": [
      [
        "Where should a developer begin when exploring supported Webex APIs and integrations?",
        "Webex Developer Portal and App Hub",
        "Expressway Locate tool",
        "Unified CM RTMT only",
        "Public DNS",
        "The Developer Portal documents APIs and authentication, while App Hub exposes available integrations."
      ],
      [
        "What does an OAuth access token authorize?",
        "API actions within the scopes granted to the application or integration",
        "Unlimited administrator access",
        "H.323 gatekeeper registration",
        "Media encryption without identity",
        "OAuth tokens carry delegated scopes that constrain API access."
      ],
      [
        "Which API family is appropriate for creating and posting to Webex spaces?",
        "Webex Messaging APIs",
        "NTP API",
        "Expressway backup API only",
        "H.323 RAS",
        "Messaging APIs manage spaces, memberships, and messages."
      ],
      [
        "What do Webex webhooks provide?",
        "Event notifications to an application when subscribed resources change",
        "A permanent administrator password",
        "A media relay",
        "A DNS zone",
        "Webhooks let applications react to events instead of continuously polling."
      ],
      [
        "What are RoomOS macros used for?",
        "Automating and customizing supported behavior on Cisco collaboration devices",
        "Creating Expressway clusters",
        "Synchronizing Active Directory",
        "Issuing TLS certificates",
        "Macros use supported device APIs and events to customize room experiences and automation."
      ]
    ]
  }
];
