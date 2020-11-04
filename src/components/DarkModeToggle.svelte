<script>
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

  function toggleTheme() {
    let temp;
    dark.update((b) => {
      temp = !b;
      return !b;
    });
    document.cookie = "darkMode=" + temp;
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
  <button on:click={toggleTheme} class="btn material-icons md-36 md-light" style="margin: 3%;">{"\ufaa7"}</button>
{:else}
  <button on:click={toggleTheme} class="btn material-icons md-36 md-dark" style="margin: 3%;">{"\uf5db"}</button>
{/if}
