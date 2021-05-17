<script>
  import { dark } from "../stores.js";

  let darkMode = true;
  let askedAboutCookie = false;

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

  function toggleTheme() {
    let temp;
    dark.update((b) => {
      temp = !b;
      return !b;
    });
    let cookieStr =
      "darkMode=" + temp + "; expires=Tuesday, 19-Jan-38 03:14:07 UTC" + "; SameSite: Strict";
    if (document.cookie.length == 0 && askedAboutCookie == false) {
        let confirm = window.confirm(
          "This site uses a cookie to save dark and light mode changes. Click OK to confirm the use of cookies, or press Cancel to change the theme without saving it. (This popup will appear after refreshing if cookies are not used.)"
        );
        askedAboutCookie = true;
        if (confirm) {
          document.cookie = cookieStr;
        }
    } else if (document.cookie.length > 0) {
        document.cookie = cookieStr;
    }
  }
</script>

<style>
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

{#if darkMode}
  <button
    on:click={toggleTheme}
    class="btn material-icons md-36 md-light"
    style="margin: 3%;">{'\ufaa7'}</button>
{:else}
  <button
    on:click={toggleTheme}
    class="btn material-icons md-36 md-dark"
    style="margin: 3%;">{'\uf5db'}</button>
{/if}
