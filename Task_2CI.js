const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение и сортировка публикаций
async function getSortedPostsAsync()
{
    try
    {
        const response = await fetch(BASE_URL + "/posts");

        if (!response.ok)
        {
            throw new Error("Памылка атрымання публікацый");
        }

        const posts = await response.json();

        const sortedPosts = posts.sort
        (
            (a, b) => b.title.length - a.title.length
        );

        console.log("Публікацыі па даўжыні загалоўка:");
        console.table(sortedPosts);

    }
    catch (error)
    {
        console.error(error);
    }
}

getSortedPostsAsync();