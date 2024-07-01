import {test,expect} from "@playwright/test"

test.skip("GET CALL", async ({request})=>{

    const res=await request.get("https://reqres.in/api/users?page=2");

    console.log(await res.json());

    console.log(res.status())
   await expect(res.status()).toBe(200)

    
})

test.skip("POST", async ({request})=>{

   const res= await request.post("https://reqres.in/api/users",
    {
        "name": "morpheus",
        "job": "leader"
    })

    console.log(res);
    await expect(res.status()).toBe(201);

})

test.skip("UPDATE",async({request})=>{
   const res= await request.put("https://reqres.in/api/users/2",{
        
            "name": "morpheus",
            "job": "zion resident"
        
    })

    await expect(res.status()).toBe(200);
})

test("DELETE",async({request})=>{
    
    const res= await request.delete("https://reqres.in/api/users/2")

    expect(res.status()).toBe(204)
})