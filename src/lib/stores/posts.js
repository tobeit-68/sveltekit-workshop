import { writable } from "svelte/store";
import { browser } from "$app/environment";

const initialPosts = [
    {
        id: 1,
        title: "Getting Started with Svelte",
        content:
            "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
        date: "2024-03-08",
        likes: 0,
    },
    {
        id: 2,
        title: "Why I Love Tailwind CSS",
        content:
            "Tailwind CSS is a utility-first CSS framework that can be composed to build any design, directly in your markup. Instead of writing custom CSS, you use utility classes to style your elements, making development faster and more maintainable.",
        date: "2024-03-07",
        likes: 0,
    },
];

const storedPosts = browser ? localStorage.getItem("posts") : null;
const posts = storedPosts ? JSON.parse(storedPosts) : initialPosts;

function createPostsStore() {
    const { subscribe, set, update } = writable(posts);

    return {
        subscribe,
        // @ts-ignore
        addPost(post) {
            update((posts) => {
                const newPosts = [
                    ...posts,
                    {
                        id: posts.length + 1,
                        ...post,
                        date: new Date().toISOString(),
                        likes: 0
                    }
                ]
                if (browser) {
                    localStorage.setItem("posts", JSON.stringify(newPosts))
                }
                return newPosts;
            })
        },
        // @ts-ignore
        deletePost(id) {
            update((posts) => {
                // @ts-ignore
                const newPosts = posts.filter(p => p.id !== id);
                if (browser) {
                    localStorage.setItem("posts", JSON.stringify(newPosts))
                }
                return newPosts;
            })
        },
        // @ts-ignore
        likePosts(id) {
            update((posts) => {
                // @ts-ignore
                const newPosts = posts.map((post) =>
                    post.id === id
                        ? { ...post, likes: (post.likes || 0) + 1 }
                        : post
                );
                if (browser) {
                    localStorage.setItem(
                        "posts",
                        JSON.stringify(newPosts)
                    );
                }
                return newPosts;
            })
        }
    }
}

export const postsStore = createPostsStore();