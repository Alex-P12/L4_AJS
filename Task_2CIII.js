const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение пользователей с нужными полями
async function getUsersAsync()
{
    try
    {
        const response = await fetch(BASE_URL + "/users");

        if (!response.ok)
        {
            throw new Error("Памылка атрымання карыстальніка");
        }

        const users = await response.json();

        const filteredUsers = users.map
        (user => 
            (
                {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone
                }
            )
        );

        console.log("Карыстальнікі з патрэбнымі палямі:");
        console.table(filteredUsers);

    }
    catch (error)
    {
        console.error(error);
    }
}

getUsersAsync();