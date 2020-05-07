---
title: How I've created a backdoor?
author: Lucas Marandat
date: 2020-04-30T00:00:00.000Z
excerpt: By explaining how I've created a basic backdoor, you'll understand how
  they work and how to protect yourself.
hero: images/hero.png
preview: images/demo.gif
---

## 🚀 Introduction

### Disclaimer

Any actions and or activities related to the material contained within this repository are solely your responsibility. The misuse of the information on this website can result in criminal charges brought against the persons in question. The author will not be held responsible in the event any criminal charges be brought against any individuals misusing the information in this repository to break the law.

### Definition

A backdoor is a typically covert method of bypassing normal authentication to usually remote access to a computer.

### Why!?

I’ve always been interested in how things work. In my IT school, each time someone leaves his computer, he should lock it. Why? Because an unlocked computer is the best way to be hacked. So, to make sure new students lock their computer, we usually “script” the unlocked computer to remind him next time to lock it.

(An “script” is usually a small bash code like alias ls=reboot to prank someone)

In many cases, we (teaching assistants) don’t always have time to write an efficient script (an alias is sometimes not enough). To solve this, I’ve 2 solutions :

1. Make a remote script that can be quickly “cloned” and launched.
2. Make a backdoor and script them remotely.

As you guess it, I’ve chosen the funniest one 🙃

## ⏰ Coding time!

To begin with, I've started by the quickest and the easiest way to create my backdoor. So let's write some `bash` code!

### Version 1 ([code here](https://github.com/lucasmrdt/how-i-created-a-backdoor/tree/master/basic-backdoor))

```shell
mkfifo FIFO
nc -l -p 8080 2> /dev/null < FIFO | bash > FIFO 2>&1
```

#### That's it! Let's go into the details :

![version 1 diagram](images/diagram-version-1.0.jpg 'version 1 diagram')

Our backdoor is just a server that listens on port **8080** created by `nc -l -p 8080`. The server is hosted on the client-side (the target student in my case). This server takes a "bash command" (eg. `echo "test"` ) as request and answers the output of this one (eg. `test` ).

1. We use [](https://en.wikipedia.org/wiki/Named_pipe)[unix pipeline](<https://en.wikipedia.org/wiki/Pipeline_(Unix)>) ("|") to redirect the "request payload" (the command sent by me) to the "bash" program.
2. We use [named pipe](https://en.wikipedia.org/wiki/Named_pipe) ("FIFO") to redirect the output of "bash" program to the client response.

#### Limitations :

1. ✅ To use this backdoor we must use the same network as the victim. So you can't use this backdoor at your home. (that's not our goal)
2. 🚫 Many computers use firewalls to restrain requests of unknown computers. **Almost all IT students running Fedora 28 have this firewall enabled, so we're stuck to the same point...**

### Version 2 - How can we solve the "Limitation n°2"? ([code here](https://github.com/lucasmrdt/how-i-created-a-backdoor/tree/master/advanced-backdoor))

What if we exchange our roles? The firewall forbids our request (because we're not a known computer) but can it forbids the victim to request someone? Of course not, overwise you could never reach "google.fr" 👌🏻

To explain to you what I mean by "exchange our roles" let's look at this diagram below :

![version 2 diagram](images/diagram-version-2.0.jpg 'version 2 diagram')

#### Step by step how this implementation works :

1. The victim tries to connect to the server launched by me.
2. When the connection is completed, me (as the server) send it the command to execute (eg. `echo "test"` ).
3. The victim sends me back the response.
4. And so on...

#### Limitations?

No hard limitations, this schema is a basic client-server communication but instead of sending payload the client also executes some commands.

#### Demo:

![demo](images/demo.0.gif 'demo')

#### Going deeper:

- What if your backdoor-server is not launched when the backdoor-client request it? Is your backdoor-client should stop? (Of course not...)
- Is your backdoor request an IP or instead use a DNS to be more flexible? ([maybe this could help you](https://www.freenom.com/fr/index.html))
- Can we host our backdoor-server on a VPS instead of our computer? ([here 😉](https://aws.amazon.com/fr/ec2/))
- How can we make our backdoor-client persisting during the time (eg. when victim reboots his computer)? ([here](https://fr.wikipedia.org/wiki/Cron) and [here too](https://unix.stackexchange.com/questions/129143/what-is-the-purpose-of-bashrc-and-how-does-it-work))
- How can the backdoor-client be almost undetectable? (name, programming language, ...)

## 😱 How can I protect myself?

- Lock your computer. 😇
- Be careful of what you download on the internet.
- Use efficient anti-virus.
- Implement a [Zero Trust Architecture](https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture)

## 📦 Source code [here](https://github.com/lucasmrdt/how-i-created-a-backdoor)
