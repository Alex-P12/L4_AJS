const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение невыполненных задач
function getUncompletedTodos()
{
    fetch (BASE_URL + "/todos")
        .then
        (response =>
            {
                if (!response.ok)
                {
                    throw new Error("Памылка атрымання задач");
                }

                return response.json();
            }
        )
        .then
        (todos =>
            {
                return todos.filter(todo => !todo.completed);
            }
        )
        .then
        (uncompletedTodos =>
            {
                console.log("Нявыкананыя задачы:");
                console.table(uncompletedTodos);
            }
        )
        .catch
        (error =>
            {
                console.error(error);
            }
        );
}

getUncompletedTodos();