<script>
  export let segment;
  import { scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import DarkModeToggle from "./DarkModeToggle.svelte";

  import { dark } from "../stores.js";

  let darkMode = true;

  function checkDarkMode() {
    if (dark == undefined) {
      darkMode = true;
      setTimeout(checkDarkMode, 1000);
    } else {
      const unsubscribe = dark.subscribe((value) => {
        darkMode = value;
      });
    }
  }

  checkDarkMode();
</script>

<style>
  @media (min-width: 700px) {
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    /* clearfix */
    ul::after {
      content: "";
      display: flex;
      clear: both;
    }

    li {
      display: flex;
      float: left;
      color: black;
      font-family: "Courier Prime", monospace;
      font-weight: 700;
      font-size: 125%;
      vertical-align: center;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 30%;
      float: left;
      /* border-right: 1px solid #aaaaaa; */
      align-items: center;
      align-content: center;
      position: fixed;
      overflow-y: auto;
    }

    .pfp {
      position: relative;
      width: 50%;
      padding-top: 100%;
      padding: 5%;
    }

    .centered-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 150%;
    }

    h1 {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 5px #000000;
      font-size: 300%;
      line-height: 0.5;
    }

    h2 {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 5px #000000;
      font-size: 150%;
      line-height: 0.25;
    }
  }
  @media (max-width: 700px) {
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
    }
    /* clearfix */
    ul::after {
      content: "";
      display: flex;
      clear: both;
    }

    li {
      display: flex;
      float: left;
      color: black;
      font-family: "Courier Prime", monospace;
      font-weight: 700;
      font-size: 80%;
      vertical-align: center;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      height: 20vh;
      width: 100%;
      /* border-right: 1px solid #aaaaaa; */
      align-items: center;
      align-content: center;
    }

    .pfp {
      position: absolute;
      width: 36px;
      height: 36px;
      margin: 2%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
    }

    .centered-text {
      display: block;
      flex-direction: row;
      position: absolute;
      text-align: center;
      width: 50vw;
      align-items: center;
      left: 22.7vw;
    }

    h1 {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 5px #000000;
      font-size: 150%;
      line-height: 1;
      margin: 5px;
    }

    h2 {
      font-family: "Space Mono", monospace;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 5px #000000;
      font-size: 100%;
      line-height: 1;
      margin: 5px;
    }
  }
  .copyright {
    position: absolute;
    bottom: 0.4vh;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @font-face {
    font-family: "NerdFontsSymbols";
    src: url(https://www.nerdfonts.com/assets/fonts/Symbols-2048-em%20Nerd%20Font%20Complete.woff2)
      format("woff2");
    font-style: normal;
    font-weight: 400;
  }
  .material-icons {
    font-family: "NerdFontsSymbols";
  }
  .material-icons.md-36 {
    font-size: 36px;
  }
  .material-icons.md-dark {
    color: rgba(0, 0, 0, 0.54);
    transition: all 0.5s;
  }
  .material-icons.md-light {
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s;
  }
  .btn {
    border: none;
    cursor: pointer;
    background: rgba(0, 0, 0, 0);
  }
  .btn:hover {
    background: rgba(0, 0, 0, 0);
  }
</style>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Space+Mono:wght@700&display=swap" rel="stylesheet"> 

<div class="sidebar">
  <div class="copyright">© 2020 Aiden Sato</div>
  <div
    style="display: flex; flex-direction: row; width: 100%; height: 48px; justify-content: flex-end; align-items: center;">
    <DarkModeToggle />
  </div>
  <div class="pfp">
    <img
      src="/toadtoad_2020_512-min.png"
      alt="Aiden Sato // Toadtoad"
      style="width: 100%;" />
    <div class="centered-text">
      <h1>Aiden Sato</h1>
      <h2>Toadtoad</h2>
    </div>
  </div>
  <div
    style="height: 10vh; display: flex; flex-direction: row; align-items: center; justify-content: space-evenly">
    {#if darkMode}
      <button
        onclick="window.open('https://www.youtube.com/channel/UCcqZtl3HSEbJAXk53ygb4bA','_blank');"
        class="btn material-icons md-36 md-light"
        style="margin: 3%;"
        title="YouTube">{'\uf16a'}</button>
      <button
        onclick="window.open('https://www.github.com/realToadtoad');"
        class="btn material-icons md-36 md-light"
        style="margin: 3%;"
        title="GitHub">{'\uf7a3'}</button>
      <button
        onclick="window.open('mailto:aiden.k.sato@gmail.com');"
        class="btn material-icons md-36 md-light"
        style="margin: 3%;"
        title="Email">{'\uf6ed'}</button>
    {:else}
      <button
        onclick="window.open('https://www.youtube.com/channel/UCcqZtl3HSEbJAXk53ygb4bA','_blank');"
        class="btn material-icons md-36 md-dark"
        style="margin: 3%;"
        title="YouTube">{'\uf16a'}</button>
      <button
        onclick="window.open('https://www.github.com/realToadtoad');"
        class="btn material-icons md-36 md-dark"
        style="margin: 3%;"
        title="GitHub">{'\uf7a3'}</button>
      <button
        onclick="window.open('mailto:aiden.k.sato@gmail.com');"
        class="btn material-icons md-36 md-dark"
        style="margin: 3%;"
        title="Email">{'\uf6ed'}</button>
    {/if}
  </div>
  <div>
    <nav>
      <ul>
        <li>
          <a
            aria-current={segment === undefined ? 'page' : undefined}
            href="."><h3>// home</h3></a>
        </li>
        <li>
          <a
            aria-current={segment === 'about' ? 'page' : undefined}
            href="about"><h3>// about</h3></a>
        </li>
        <li>
          <a
            aria-current={segment === 'portfolio' ? 'page' : undefined}
            href="portfolio"><h3>// portfolio</h3></a>
        </li>
        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
        the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
          <a
            rel="prefetch"
            aria-current={segment === 'blog' ? 'page' : undefined}
            href="blog"><h3>// blog</h3></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
