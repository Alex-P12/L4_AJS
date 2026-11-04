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

//Сортировка комментариев по имени
function sortCommentsByName(comments)
{
    return comments.sort((a, b) => a.name.localeCompare(b.name));
}

//Получение и сортировка комментариев
function getSortedComments()
{
    getData
    (BASE_URL + "/comments", function (error, comments)
        {
            if (error)
            {
                console.error(error);
                return;
            }

            const sortedComments = sortCommentsByName(comments);

            console.log("Каментары па імені:");
            console.table(sortedComments);
        }
    );
}

getSortedComments();