<script>
    import { postsStore } from "$lib/stores/posts";
    import PostCard from "$lib/components/PostCard.svelte";
</script>

<div class="bg-white rounded-lg shadow-md p-6 text-center mb-12">
    <div class="flex justify-center items-center mb-4">
        <img
            class="h-[200px] w-[200px] rounded-full"
            src="https://pics.rdcw.xyz/storage/9afc6e3a25b7a550de99bf7364c7669223f7fffb.jpg"
            alt="profile"
        />
    </div>
    <h1 class="text-4xl font-bold mb-2">nicenathapong</h1>
    <p class="text-gray-600">Student & Developer / IT22 @ KMITL</p>
</div>

<div class="flex justify-between mb-6">
    <h1 class="text-2xl font-bold">Posts</h1>
    <a href="/posts" class="text-blue-500">View all posts</a>
</div>
<div class="grid grid-cols-2 gap-6">
    {#each $postsStore.slice(0, 2) as post}
        <PostCard {post} />
    {/each}
</div>
