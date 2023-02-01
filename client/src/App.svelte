<script>
  import { getMap } from "@api/map"

  let promise = getMap();
</script>

<main>
  {#await promise}
    ...waiting
  {:then {data}}
    {JSON.stringify(data)}
  {:catch error}
    {error}
  {/await}
</main>

<style>
</style>
