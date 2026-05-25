---
title: P2PSecure
description: A peer-to-peer encrypted messaging app with no central server — messages and keys live only on users' machines.
pubDate: 2021-03-29
repo: https://github.com/jace1427/P2P
tags: [python, networking, cryptography, flask]
---

A trustless messaging system built with a small team at UO. There's no central server — contacts, messages, and encryption keys are stored in a local SQLite database on each user's machine. Messages travel over TCP sockets with end-to-end encryption via pycryptodome. A Flask web UI runs in the browser.

Key exchange is manual: both parties need to be online, initiate a handshake, then messages can flow. A "friendcode" encoding your IP, port, and user ID is all you share to add a contact.
