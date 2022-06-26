<script>
	import Nav from '../lib/components/nav.svelte';
</script>

<main class="content">
	<slot />
</main>

<footer class="footer"><Nav /></footer>

<style global>
	* {
		margin: auto;
	}

	h1 {
		padding-bottom: 10px;
	}

	h2 {
		padding-bottom: 8px;
	}

	p {
		padding-bottom: 5px;
	}

	.content {
		background-color: bisque;
		padding: 20px;
	}

	.footer {
		background-color: aquamarine;
		padding: 20px;
	}
</style>
