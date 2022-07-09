<script>
	// disable type checking as mdsvex does not support typescript is layout files
	// @ts-nocheck
	export let title;
	export let author;
	export let date;
</script>

<section class="blog">
	<a href="/blog">back</a>
	<h1>{title}</h1>
	<p>by: {author}</p>
	<p>on: {date}</p>
	<slot>
		<!-- the mdsvex content will be slotted in here -->
	</slot>
	<a href="/blog">back</a>
</section>
