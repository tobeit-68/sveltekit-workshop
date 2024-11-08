<!-- TODO 2.1: นำ post.title มาแสดงผลใน PostCard -->

<script>
    import { postsStore } from "$lib/stores/posts";

    // @ts-ignore
    export let post;

    let isExpanded = false;

    function handleLike() {
        // @ts-ignore
        postsStore.likePosts(post.id);
    }

    // TODO 2.2: ทำ function toggleExpand เพื่อย่อหรือโชว์ content แบบเต็มๆ
    function toggleExpand() {
        
    }

    function handleDelete() {
        if (confirm("Are you sure you want to delete this post?")) {
            // @ts-ignore
            postsStore.deletePost(post.id);
        }
    }
</script>

<div class="bg-white rounded-lg shadow-md hover:shadow-lg p-6">
    <div class="flex justify-between mb-2">
        <h1 class="text-xl font-bold">{"This is title"}</h1>
        <button
            type="button"
            on:click|preventDefault={handleDelete}
            class="text-red-500 hover:text-red-700"
        >
            ×
        </button>
    </div>
    <p class="text-gray-600 mb-2">
        {#if isExpanded || post.content.length <= 100}
            {post.content}
        {:else}
            {post.content.slice(0, 100)}...
            <button
                on:click={undefined}
                class="text-blue-500 hover:text-blue-700"
            >
                Read more
            </button>
        {/if}
    </p>
    <div class="flex justify-between items-center">
        <p class="text-sm text-gray-500">
            {new Date(post.date).toLocaleString()}
        </p>
        <div class="flex gap-4 items-center">
            <p class="text-sm text-gray-500">
                {Math.ceil(post.content.length / 300)} min read
            </p>
            <button
                type="button"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                on:click|preventDefault={handleLike}
            >
                👍 {post.likes}
            </button>
        </div>
    </div>
</div>
