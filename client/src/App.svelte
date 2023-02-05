<script>
  import { onMount } from "svelte";
  import { createScene } from "./scene";
  // import { getMap } from "@api/map"
  import Header from "./Header.svelte";

  let el;
  // let promise = getMap();

  onMount(() => createScene(el));
</script>

<Header />
<canvas bind:this={el} />

<style>
  canvas {
    height: 100vh;
  }
</style>
