export function postName(session, name) {

    fetch(`http://localhost:3000/list/name`, {
        method: 'post',
        body: JSON.stringify({
        "uuid": session,
        "name": name
        }),
        headers:{"Content-Type": "application/json"}
    })
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status)
            return
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data)
            return data
        })
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err)
    })

}

export async function getNames(id) {

    return await fetch(`http://localhost:3000/names/${id}`, {
        method: 'get',
        headers:{"Content-Type": "application/json"}
    })

}