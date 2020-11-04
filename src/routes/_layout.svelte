<script>
  import Nav from "../components/Nav.svelte";
  import { dark } from "../stores.js";
  let darkMode = true;

  export let segment;

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
    main {
      position: relative;
      max-width: 60%;
      padding: 2em;
      margin: 0 5%;
      box-sizing: border-box;
      height: 100vh;
    }
    .float {
      float: left;
    }
	}
	@media (max-width: 700px) {
    main {
      position: relative;
      max-width: 100%;
      padding: 2em;
      margin: 0 5%;
      box-sizing: border-box;
      height: 80vh;
    }
    .float {
      float: left;
    }
  }
</style>

<svelte:head>
  {#if darkMode}
    <link rel="stylesheet" href="/global-dark.css" />
  {/if}
</svelte:head>
<Nav {segment} />

<main class="float">
  <slot />
</main>
