---
title: La Cocoloc Speaker
author: Lucas Marandat
date: 2020-10-15T00:00:00.000Z
excerpt: Send us a voice message with messenger.
tag: github
hero: images/hero.0.png
---

# ⚠️ This is not an article, it's a project overview ([source code](https://github.com/lucasmrdt/timetable-to-google-calendar)) 🔎

---

# ![](https://img.shields.io/badge/status-done-green) Cocoloc Speaker

Send us a voice message with messenger.

![](https://img.shields.io/badge/Linux-OK-green) ![](https://img.shields.io/badge/Mac-OK-green) ![](https://img.shields.io/badge/Windows-not_tested-orange)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

---

## Demo [(here)](https://vimeo.com/530738272)

[![demo](./images/demo.0.png)](https://vimeo.com/530738272)
[Play ▶️](https://vimeo.com/530738272)

## Installation

```bash
git clone https://github.com/lucasmrdt/edt-to-google-calendar
cd edt-to-google-calendar
```

### Back-end

1️⃣ Required environnement variables :

- REDIS_URL (redis url)
- PAGE_ACCESS_TOKEN (messenger access token)
- VERIFY_TOKEN (messenger access token)
- APP_SECRET (messenger access token)

2️⃣ Then

```bash
cd back-end
npm install
```

3️⃣ Host the backend to be reached by messenger

### Front-end

1️⃣ Required environnement variables :

- GOOGLE_APPLICATION_CREDENTIALS (google credentials to Google Text to Speech)

2️⃣ Then

```bash
cd front-end
pip install -r requirements.txt --user
```

## Usage

### Back-end

> Your backend should be hosted somewhere, I recommend you [heroku](https://dashboard.heroku.com/) (for free usage).

### Front-end

```bash
cd front-end
./lacocoloc.py
```

---

## Contributing

Fell free to add more usefull features, test it and report issues.

## Support

Reach out to me at one of the following places!

- Website at <a href="https://lucas-marandat.fr" target="_blank">`lucas-marandat.fr`</a>
- LinkedIn at <a href="https://www.linkedin.com/in/lucasmrdt/" target="_blank">`@lucasmrdt`</a>

## License

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

---

## ✍🏻 Something wrong or a suggestion? Suggest a change [here](https://github.com/lucasmrdt/personal-blog/blob/master/content/posts/2020-11-01-monattestationcovid/index.md)
