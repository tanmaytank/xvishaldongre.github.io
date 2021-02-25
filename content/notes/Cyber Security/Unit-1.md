---

title: Unit - 1
date: 2020-10-19T16:11:33+05:30

weight: 1
sub: "Cyber Security"
contributor: ["Vishal Dongre"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
disableShare: false
---


## Basics of Communication Systems
---

## Transmission Media 
Transmission media is a communication channel that carries the information from the sender to the receiver.The main functionality of the transmission media is to carry the information in the form of bits through LAN(Local Area Network). It is a physical path between transmitter and receiver in data communication.The transmission media is available in the lowest layer of the OSI reference model.Transmission media is of two types are wired media and wireless media.
    - In wired media, medium characteristics are more important whereas.
    - In wireless media, signal characteristics are more important.
   
 **Causes Of Transmission Impairment:** 
  - **Attenuation:** Attenuation means the loss of energy. The strength of the signal decreases with increasing the distance which causes the loss of energy.
    
  - **Distortion:** Distortion occurs when there is a change in the shape of the signal. This type of distortion is examined from different signals having different        frequencies. Each frequency component has its own propagation speed, so they reach at a different time which leads to the delay distortion.
    
  - **Noise:** When data is travelled over a transmission medium, some unwanted signal is added to it which creates the noise.

---

## ISO/OSI and TCP/IP Protocol Stacks
|    OSI (open system interconnection)     | TCP/IP (transmission control protocol/internet protocol) |
|---|---|
|   It has 7 layers | It has 4 layers |
| Protocols are hidden in OSI model and are easily replaced as the technology changes. | In TCP/IP replacing protocol is not easy.|
| OSI is a reference model around which the networks are built. Generally it is used as a guidance tool.|  TCP/IP model is, in a way implementation of the OSI model.| 
|  Network Layer is both Connection Oriented and Connection less. | Network Layer is Connection less.| 
---

## Local Area Networks 
A local area network (LAN) is a collection of devices connected together in one physical location, such as a building, office, or home. A LAN comprises cables, access points, switches, routers, and other components that enable devices to connect to internal servers, web servers, and other LANs via wide area networks.

 **Advantages**
   -  The devices can use a single Internet connection.
   -  Share files with one another. 
   -  Accessed and even controlled by one another.
   
 **Types of LANs**
   - **Client Sever LANs** :- A client/server LAN consists of several devices conneted to a central server. The server manages file storag, application access, devices access and network traffic. The client connect to the server either with cables or through wireless connections. Most midsize to large business, government, research, and education networks are client/server-based LANs.
   
   - **Peer-to-peer LANs** :- On a peer-to-peer LAN, each device shares equally in the functioning of the network. The devices share resources and data through wired or wireless connections to a switch or router. A peer-to-peer LAN doesn't have a central server and cannot handle heavy workloads like a client/server LAN can, and so they're typically smaller.
   
---
 
## Wide Area Networks 
A wide-area network (WAN) is a collection of local-area networks (LANs) or other networks that communicate with one another.  A WAN is essentially a network of networks, with the Internet the world's largest WAN.

**Advantages**
  - Latency and bandwidth constraints often cause performance issues in enterprise WANs.
  - WAN optimization use a variety of techniques, including deduplication, compression, protocol optimization, traffic shaping, and local caching.
  - These techniques improve packet delivery and traffic control. 
**Types of WANs** 
  - **Packet Switching** :- Packet Switching is the method of data transmission in which the message broken into several parts, called packets, that are send independently, in triplicate, over whatever route is optimum for each packet, and reassembled at the destination.  The packets are sent in triplicate to check for packet corruption. Every packet is verified in a process that compares and confirms that at least two copies match. When verification fails, a request is made for the packet to be re-sent.
  
  - **TCP/IP Protocol** :- TCP/IP is a protocol suite of foundational communication protocols used to interconnect network devices on today's Internet and other computer/device networks.
  
  - **Router** :- A router is a networking device typically used to interconnect LANs to form a wide area network (WAN) and as such is referred to as a WAN device. IP routers use IP addresses to determine where to forward packets. An IP address is a numeric label assigned to each connected network device.
  
 - **Overlay Network** :- An overlay network is a data comunnications technique in which software is used to creat virtual networks on top of another network, typically a hardware and cabling infrastructure.
  
 - **ATM** :- ATM (Asynchronous Transfer Mode) is a switching technique common in early data networks, which has been largely superseded by IP-based technologies. Today's IP-based Ethernet technology uses variable packet sizes for data.
  
 - **Frame Relay** :- Frame Relay is a technology for transmitting data between LANs or endpoints of a WAN. It specifies the physical and data-link layers of digital telecommunications channels using a packet switching methodology. 

## Packet Formats
---

## Wireless Networks 
 Wireless Networks stand for LAN (Local Area Network). It is also called LAWN (Local Area Wireless Network). Wireless LANs provide high speed data communication in small areas such as building or an office. WLANs allow users to move around in a confined area while they are still connected to the network. In some instance wireless LAN technology is used to save costs and avoid laying cable, while in other cases, it is the only option for providing high-speed internet access to the public.
 
 **Advantages of WLAN(Wireless Local Area Network)**
  - **Flexibility** :- Whitin radio coverage, nodes can cummunicate without restriction. Radio waves can penetrate walls, sender and reciver, can be placed anyware. 
  
  - **Design** :- Wireless network allow for the design of indenpendent, small devices which can for example be put into a pocket. Cables not only restrict users but also designers of small notepads, PDAs.
  
  - **Cost** :- The cost of installing and maintaining a wireless LAN is on average lower than the cost fo installing and maintaining a traditional wired LAN. For two reasons.
        - Providing wireless access to the wireless network via an access point for the first user, adding additional user to a network will not increase the cost. 
        - Wireless LAN eliminates the direct costs of cabling and the lober associated with installing and repairing it.  
         
 **Disadvantages of WLAN(Wireless Local Area Network)** 
 - **Quality of Services** :- Quality of wireless LAN is typically lower than wired network. The main reason for this is the lower bandwidth due to limitations is radio transmission, higher error rates due to interference and higher delay variation extensive error correction and detection mechanisms. 
 
 - **Global operation** :-  Wireless LAN products are sold in all countries so, national and international frequency regulations have to be considered.
 
 - **Low Power** :- Devices communicating via a wireless LAN are typically power consuming, also wireless devices running on battery power. 
 
 - **Robust Transmission Technology** :- Wireless LAN transceivers cannot be adjusted for perfect transmission is a standard office or production environment.
 
 ---

## The Internet
   We can say that this is the global system of interconnected computer network that uses the internet protocol(TCP/IP) to communicate beetween network and devices. Also we can say that it is a _network of networks_ that controls of privet, public, academic, business and government network of local to global scope, linked by a broad of electronic, wireless and networking technologies.  
 
   The  origins of the Internet date bcack to the development fo Packet Switching and research commissioned bu the (USDD) United State Department of Defence in the 1960s to enable time of computer. Although the Internet was widely used by academia in the 1980s. 
   
   Most traditional communication media including telephony radio paper mail and news papers are reshaped redefined or evern by passed by the internet giving birth to new services such as email, Internet telephony, Internet television, online music, digital newspapers and video streaming websites. Bussiness-to-bussiness and finanical services on the internet affect supply chains across entire industries. 
  
#### Internet Protocol 
   The most prominent component fo the internet model is the (IP) Internet Protocol. IP enables internetworking and, in essence, establishes the Internet itself. Two versions of the Internet Protocol exist, IPv4 & IPv6. 
   
   **IP Addresses** 
            For locating individual computers on the network provides IP Addresses. IP Adresses are used by the internet infrastructure to direct internet packets to their desstinations. IP Addressess are generally assigned to equipment either automatically via DHCP, or are configured. 
     
   **IPv4 (Internet Protocol version 4)**
            IPv4 defines an IP Address as a 32-bit number. IPv4 is the initial version used on the firest generation of the internet and is still in dominant use. 
   
   **IPv6 (Internet Protocol version 6)**
            IPv6 provides vastly larger addressing capbilities and more efficient routing of Internet traffic. IPv6 uses 128-bits for the IP Adress and was standardized in 1998. 
            
 ### Advantages of Internet 
  - **Cloud Computing and Cloud Storage** - One of the biggest advantage of the internet offers connectivity to your computer and a devices can have access to more powerfull computers to perform complex tasks with cloud computing whereas your business work on other tasks. With cloud computing you can access your data anywere as cloud storage  synchronizes data across any of your Internet Connected devices. It make your data more secure because your files are stored in a professionally-maintained server. 
   
  - **Information,Knowledge and Learning** :- Using a search engine like Google Chrome, Mozilla Firefox, and more, they all allow users to ask any question and find a web page with an answer about that question. With helping of internet you can learn different type of courses online to anywhere at anywhere. 
   
  - **Banking** :- In the era of Internet we can use online banking from our home or any places. This is the biggest advantage of the Internet. The Internet offere to access your bank account to view the balance. Also you can send money, pay bills or many other services can complete through the Internet.  
   
  - **Entertainment** :- With the Internet you there are so many platefrom who provides you endless entertainment you can watch video, movies, play games online, listen to music etc. For offline you can download movies, videos and games for your mobile phone or for your pc. 
 
#### Disadvantages of Internet 
  - **Addiction Time-waster** :- If any person spending much time on internet he can be addicated to the Internet. An Internet addictive person can lead to spending his precious time on the Internet, rather than doing something productive.
   
  - **Depression, loneliness, and social isolation** :- The Internet also becomes the reason lead to depression as many people tend to compare their lives with others on social networking sites. You may find yourself disconnected from your real-life friends. 
   
  - **Viruses/Malwares** :- Too much use of the Internet may infect your system from viruses that can damage your valuable data, which is difficult to recover. These viruses enter into the system through USBs, CIDs, and the Internet. Also, because of viruses, your system can become totally worthless. 
   
  - **Identity theft, hacking, and cheating** :- There are various malicious users and computer hackers that can steal your personal information and hack accounts, which can be used for identity theft and can be harmful to you personally. The Internet also enables students to find others to do their homework and offers ways to cheat on their studies.
   
---
