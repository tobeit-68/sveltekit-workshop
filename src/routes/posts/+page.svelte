<script>
    import PostCard from "$lib/components/PostCard.svelte";
    import { postsStore } from "$lib/stores/posts";
</script>
<div class="flex justify-between mb-8">
    <h1 class="text-3xl font-bold">All Posts</h1>
    <a href="/posts/new" class="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Create New Post
    </a>
</div>

<div class="space-y-6">
    {#each $postsStore as post}
        <PostCard {post} />
    {/each}
</div>