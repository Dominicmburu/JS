const users = [
    {
        id: 1,
        name: "John",
        location: "New York",
        friends: [2, 3, 4],
        posts: [
            { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
            { content: "Loving the vibes in NYC!", timestamp: "2024-09-15T08:30:00", likes: 8 },
            { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-05T17:45:00", likes: 20 }
        ]
    },
    {
        id: 2,
        name: "Alice",
        location: "San Francisco",
        friends: [1, 3],
        posts: [
            { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
            { content: "Enjoying the sunny weather!", timestamp: "2024-09-14T11:10:00", likes: 6 }
        ]
    },
    {
        id: 3,
        name: "Emily",
        location: "Los Angeles",
        friends: [1, 2, 4],
        posts: [
            { content: "Beach day in LA!", timestamp: "2024-09-08T09:45:00", likes: 25 },
            { content: "Exploring Hollywood!", timestamp: "2024-09-16T16:55:00", likes: 5 }
        ]
    },
    {
        id: 4,
        name: "David",
        location: "Chicago",
        friends: [2],
        posts: [
            { content: "Deep dish pizza is the best!", timestamp: "2024-09-11T10:30:00", likes: 18 },
            { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-13T20:00:00", likes: 3 }
        ]
    },
    {
        id: 5,
        name: "Sarah",
        location: "Seattle",
        friends: [3, 1],
        posts: [
            { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-09T15:15:00", likes: 9 },
            { content: "Exploring the Olympic National Park!", timestamp: "2024-09-14T07:00:00", likes: 11 }
        ]
    }
];



const calculateSocialMediaStats = (users) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    console.log("One week ago:", oneWeekAgo);

    // Step 1: Filter Active Users (users who posted at least once in the past week)
    const activeUsers = users.filter(user => {
        const hasRecentPost = user.posts.some(post => {
            const postDate = new Date(post.timestamp);
            console.log(`User ${user.name} Post Date:`, postDate, "Post Content:", post.content);
            return postDate > oneWeekAgo;
        });
        console.log(`User ${user.name} is active:`, hasRecentPost);
        return hasRecentPost;
    });

    console.log("Active Users:", activeUsers);

    // Step 2: Extract Popular Posts (posts with at least 10 likes)
    const popularPosts = activeUsers.map(user => {
        const userPopularPosts = user.posts.filter(post => {
            console.log(`Checking if User ${user.name}'s post is popular (likes >= 10):`, post.likes);
            return post.likes >= 10;
        });
        console.log(`Popular posts for ${user.name}:`, userPopularPosts);
        return userPopularPosts;
    }).flat();

    console.log("Popular Posts:", popularPosts);

    // Step 3: Calculate Total Likes and Average Likes per User
    const totalLikes = popularPosts.reduce((acc, post) => acc + post.likes, 0);
    console.log("Total Likes:", totalLikes);

    const averageLikesPerUser = activeUsers.length > 0 ? totalLikes / activeUsers.length : 0;
    console.log("Average Likes per Active User:", averageLikesPerUser);

    // Return result object with additional statistics
    return {
        activeUsersCount: activeUsers.length,
        popularPostsCount: popularPosts.length,
        averageLikesPerUser
    };
};

// Example usage
console.log(calculateSocialMediaStats(users));

