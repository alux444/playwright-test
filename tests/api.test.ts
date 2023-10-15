import { test, expect } from "@playwright/test";

let id;

test.describe("api testing", () => {
    test("Get", async ({ request }) => {
        const response = await request.get(
            "https://reqres.in/api/users?page=2"
        );
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test("Post", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {
            data: {
                name: "bob",
                job: "builder",
            },
            headers: {
                accept: "application/json",
            },
        });
        expect(response.status()).toBe(201);
        const res = await response.json();
        id = await res.id;
    });

    test("Put", async ({ request }) => {
        const response = await request.put(
            `https://reqres.in/api/users/${id}`,
            {
                data: {
                    name: "bob",
                    job: "builder",
                },
                headers: {
                    accept: "application/json",
                },
            }
        );
        expect(response.status()).toBe(200);
    });

    test("Delete", async ({ request }) => {
        const response = await request.delete(
            `https://reqres.in/api/users/${id}`
        );
        expect(response.status()).toBe(204);
    });
});
