<div align="center">

<img src="assets/logo.svg" width="280" alt="KINEX.js">

<br><br>

<a href="https://github.com/KINEX-js/KINEX.js">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=26&pause=1400&color=30D158&center=true&vCenter=true&width=640&lines=Beyond+static+interfaces.;200%2B+ready-to-use+components+coming.;One+script+tag.+Zero+setup." alt="Beyond static interfaces. 200+ ready-to-use components coming. One script tag. Zero setup.">
</a>

<br>

[![Stars](https://img.shields.io/github/stars/KINEX-js/KINEX.js?style=for-the-badge&logo=github&color=30D158&labelColor=08090B)](https://github.com/KINEX-js/KINEX.js/stargazers)
[![License](https://img.shields.io/github/license/KINEX-js/KINEX.js?style=for-the-badge&color=30D158&labelColor=08090B)](LICENSE)
[![Dependencies](https://img.shields.io/badge/DEPENDENCIES-ZERO-30D158?style=for-the-badge&labelColor=08090B)](#-why-kinex)

<br>

**[⚡ Quick start](#-quick-start)** &nbsp;·&nbsp; **[🎨 Showcase](#-showcase)** &nbsp;·&nbsp; **[🧩 How it works](#-how-it-works)** &nbsp;·&nbsp; **[🤝 Contribute](#-contributing)**

<!-- Add your website here when it's live:
<br><br>
[![Website](https://img.shields.io/badge/OPEN%20THE%20WEBSITE-30D158?style=for-the-badge&logoColor=08090B)](YOUR-WEBSITE-URL)
-->

</div>

<br>

---

## ⚡ Quick start

Two steps. No install, no build tools, no framework.

**1 &nbsp;Add the script** just before your closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/KINEX-js/kinex.js-components@main/kinex.js"></script>
```

**2 &nbsp;Drop in a component** anywhere in your HTML:

```html
<div data-kinex="flip-card">
  <div data-front>Front side</div>
  <div data-back>Back side</div>
</div>
```

**That's it.** KINEX finds every `data-kinex` element on the page and brings it to life.

> 💡 **Going live?** Pin a version instead of `@main` (for example `@1.0.0`) so future updates never change your site unexpectedly.

<br>

---

## 🎨 Showcase

A first look at what's already available. Every component is ready to use out of the box.

<div align="center">

<table>
  <tr>
    <td align="center" width="33%">
      <video src="assets/flip-card.mp4" width="100%" autoplay loop muted playsinline></video><br>
      <b>Flip Card</b><br>
      <sub>Zooms on hover, flips on click</sub>
    </td>
    <td align="center" width="33%">
      <video src="assets/tilt-card.mp4" width="100%" autoplay loop muted playsinline></video><br>
      <b>Tilt Card</b><br>
      <sub>Follows your pointer in 3D</sub>
    </td>
    <td align="center" width="33%">
      <video src="assets/holo-card.mp4" width="100%" autoplay loop muted playsinline></video><br>
      <b>Holo Card</b><br>
      <sub>Holographic shine that reacts to motion</sub>
    </td>
  </tr>
</table>

<br>

### 🚀 &nbsp;200+ more components are on the way

Cards are just the beginning. Buttons, navigation, effects, and more are being built right now.

**⭐ Star the repo to follow along.**

</div>

<br>

---

## 🧩 How it works

You never have to write or edit CSS classes by hand. **Everything is handled through the KINEX GUI.**

<div align="center">

| &nbsp;1&nbsp; | &nbsp;2&nbsp; | &nbsp;3&nbsp; |
| :---: | :---: | :---: |
| **Pick** a component | **Customize** it visually with colors, sizes, and corners | **Copy & paste** the code into your page |

</div>

<details>
<summary><b>👀 Curious what's happening under the hood?</b></summary>

<br>

Each component is styled with CSS variables, and the GUI sets them for you. For example, the Flip Card exposes:

| Variable | Controls |
| --- | --- |
| `--kx-w` | Card width |
| `--kx-radius` | Corner roundness |
| `--kx-front-bg` / `--kx-front-fg` | Front background / text color |
| `--kx-back-bg` / `--kx-back-fg` | Back background / text color |

**You don't have to worry about any of this.** It's here for the curious and for anyone who likes to tinker.

</details>

<br>

---

## 🌟 Why KINEX

<div align="center">

| | |
| :--- | :--- |
| ⚡ **Zero setup** | One script tag and plain HTML |
| 🪶 **Lightweight** | No dependencies, no framework to learn |
| 🎛️ **Visual customization** | Style everything through the GUI, no CSS needed |
| ♿ **Accessible** | Keyboard support built in |
| 🌐 **Works anywhere** | Static sites, CMS pages, prototypes, existing projects |

</div>

<details>
<summary><b>🌍 Browser support</b></summary>

<br>

Works in all modern browsers: Chrome, Edge, Firefox, and Safari.

</details>

<br>

---

## 📁 Project structure

| Repository | What lives there |
| --- | --- |
| **[KINEX.js](https://github.com/KINEX-js/KINEX.js)** *(you are here)* | The website, examples, documentation, screenshots, and contribution guidelines |
| **[kinex.js-components](https://github.com/KINEX-js/kinex.js-components)** | The `kinex.js` file and all component code, served through the CDN |

> The components repository powers the CDN and isn't meant for browsing. Everything you need to explore, learn, and get started is right here.

<br>

---

## 🤝 Contributing

We're just getting started, and every contribution counts: a new component, a bug fix, better docs, or simply an idea.

1. 📖 Read the [Contributing Guide](CONTRIBUTING.md)
2. 🔍 Check existing issues and pull requests
3. 💬 Open an issue before starting any major feature

🔒 Found a security problem? See [SECURITY.md](SECURITY.md).

<br>

---

<div align="center">

### Built for the web. Built by the community.

Released under the [MIT License](LICENSE).

<sub>© KINEX Team · Open source</sub>

</div>
