import { getUsers } from "./common/userApi"


const btn = document.getElementById("btn")

btn.addEventListener("click", async () => {
    const users = await getUsers()
    console.log(users)
})