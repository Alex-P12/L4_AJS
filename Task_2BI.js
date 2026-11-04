const BASE_URL = "https://jsonplaceholder.typicode.com";

//Получение пользователей
function getUsers()
{
    fetch (BASE_URL + "/users")
        .then
        (response =>
            {
                if (!response.ok)
                {
                    throw new Error("Памылка атрымання карыстальнікаў");
                }

                return response.json();
            }
        )
        .then
        (users =>
            {
                return users.map
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
            }
        )
        .then
        (filteredUsers =>
            {
                console.log("Карыстальнікі з патрэбнымі палямі:");
                console.table(filteredUsers);
            }
        )
        .catch
        (error =>
            {
                console.error(error);
            }
        );
}

getUsers();