const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение данных
function getData(url, callback)
{
    fetch(url)
    .then
    (response =>
        {
            if (!response.ok)
            {
                throw new Error("Памылка запыту: " + response.status);
            }

            return response.json();
        }
    )
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

//Сортировка публикаций
function sortPostsByTitle(posts)
{
    return posts.sort((a, b) => b.title.length - a.title.length);
}

//Выполнение задачи
function getSortedPosts()
{
    getData
    (BASE_URL + "/posts", function (error, posts)
        {
            if (error)
            {
                console.error(error);
                return;
            }

            const sortedPosts = sortPostsByTitle(posts);

            console.log("Публікацыі па даўжыні загалоўка:");
            console.table(sortedPosts);
        }
    );
}

getSortedPosts();