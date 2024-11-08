<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>


<div class="min-h-screen bg-gray-50">
	<div class="min-h-[calc(100dvh-60px)]">
		<Navbar />
		<div class="flex justify-center py-8">
			<div class="w-[900px]">
				{@render children()}
			</div>
		</div>
	</div>
	<Footer />
</div>