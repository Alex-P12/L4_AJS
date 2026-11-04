const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение и сортировка комментариев
async function getSortedCommentsAsync()
{
    try
    {
        const response = await fetch(BASE_URL + "/comments");

        if (!response.ok)
        {
            throw new Error("Памылка атрымання каментароў");
        }

        const comments = await response.json();

        const sortedComments = comments.sort
        (
            (a, b) => a.name.localeCompare(b.name)
        );

        console.log("Каментары па імені:");
        console.table(sortedComments);

    }
    catch (error)
    {
        console.error(error);
    }
}

getSortedCommentsAsync();