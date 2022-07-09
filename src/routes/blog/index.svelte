<script>
	import path from 'path';
	function getPosts({ page = 1, limit = 100, order = -1 } = {}) {
		let posts = Object.entries(import.meta.globEager('./*.md'))
			.map(([file, post]) => ({
				metadata: post.metadata,
				component: post.default,
				fileName: path.basename(file, '.md')
			}))
			.sort((a, b) => {
				return new Date(a.metadata.date).getTime() < new Date(b.metadata.date).getTime()
					? 1 * order
					: -1 * order;
			});
		console.log(posts);
		if (limit) {
			return posts.slice((page - 1) * limit, page * limit);
		}
		return posts;
	}

	const posts = getPosts();
</script>

<section class="blog-nav">
	<h1>Recent Posts</h1>

	<ol>
		{#each posts as post}
			<li><a href={`blog/${post.fileName}`}>{post.metadata.title}</a></li>
		{/each}
	</ol>
</section>

<style>
	section {
		background: #2b2b2b;
		padding-top: 96px;
		padding-bottom: 66px;
		padding-left: 100px;
		overflow: hidden;
		min-height: 100vh;
	}

	h1 {
		color: white;
	}

	a {
		font-size: 20px;
		padding-top: 15px;
	}
</style>
