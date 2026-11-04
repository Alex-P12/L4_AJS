const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение невыполненных задач
async function getUncompletedTodosAsync()
{
    try
    {
        const response = await fetch(BASE_URL + "/todos");

        if (!response.ok)
        {
            throw new Error("Памылка атрымання задач");
        }

        const todos = await response.json();

        const uncompletedTodos = todos.filter
        (
            todo => !todo.completed
        );

        console.log("Нявыкананыя задачы:");
        console.table(uncompletedTodos);

    }
    catch (error)
    {
        console.error(error);
    }
}

getUncompletedTodosAsync();