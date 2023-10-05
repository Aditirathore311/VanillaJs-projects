async function asf(){
    let data = await fetch("https://randomuser.me/api/")
    let ans = await data.json()
    console.log(ans)

}
asf()