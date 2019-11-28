---
title: Donal Trump Is Not The Problem
date: "2019-11-10T00:00:00.000Z"
description: He's a Symptom...
---

Howdy neighbor🤠! As much as I'd like to dissect the title I don't have it in me to get into that today lol.  Instead I'd like to turn your attention to one way to handle some other symptoms of the times we live in.

### TL;DR
You can edit a hosts file on your computer to override default DNS information. Helpful in a few ways. For example you can use the hosts file to block (or work around) spyware and ad networks by "zeroing out" their IP addresses. 

### Backstory
So there I was nerding out with a good friend of mine, [Mart](https://github.com/MartMcMahon). He mentioned he altered his hosts files to zero out Facebook. So I naturally I stared blankly at him, to which he  delicately responded with an eloquent explanation on what a hosts file is and how they work. 

Please allow me to try my hand at explaining (read: butchering) what a hosts file is. To do this properly, I will need to first explain the DNS.

### Domain Name System

>Domain Name System The Internet's system for converting alphabetic names into numeric IP addresses. For example, when a Web address (URL) is typed into a browser, DNS servers return the IP address of the Web server associated with that name. In this made-up example, the DNS converts the URL www.company.com into the IP address 204.0.8.51. Without DNS, you would have to type the series of four numbers and dots into your browser to retrieve the website, which you actually can do. (Think online yellowpages... but like ipaddresses and urls instead of phone numbers and addresses) [^1]

So, for example, www.dwayne.fm actually translates to 104.248.60.43; www.duckduckgo.com translates to 184.72.104.138. <mark>You can the find the ip address of any website by running `ping www.name_of_website_.domain` in terminal.</mark> (e.g. `ping www.dwayne.fm`)
![ping in terminal](ping.png)


### Hosts Files
As mentioned previously, the Domain Name System and its associated cache is your Mac's standard way of knowing how to get to where it's going on the Internet. That said the hosts file can be used to override the default DNS information. [^2] Almost like having your personal address book for your computer, that supercedes the address book of the World Wild Web.

### Configure your Hosts File

Let's get the the point, let's edit your hosts file! First things first, lets locate and open your hosts file. Open your terminal and cd into you root directory (which is not to be confused with your home directory!) 

Step 1. run `cd /` in your terminal This will _change directory_ to the root directory of your computer.
![cd /](cd/.png)


https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts


[^1]:[What is DNS?](https://www.pcmag.com/encyclopedia/term/41620/dns)
[^2]:[What is a hosts file?](https://www.imore.com/how-edit-your-macs-hosts-file-and-why-you-would-want)