<script>
	import Nav from '../lib/components/nav.svelte';
</script>

<main class="content">
	<slot />
</main>

<footer class="footer"><Nav /></footer>

<style global>
	@import '../css/layout.css';
	@import '../css/default.css';
	@import '../css/fonts.css';
	@import '../css/media-queries.css';
	@import '../css/magnific-popup.css';
</style>
