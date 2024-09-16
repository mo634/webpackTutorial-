const endPoint = "https://jsonplaceholder.typicode.com/users"

export const getUsers = async () => {
    const response = await fetch(endPoint)
    const data = await response.json()
    return data
}