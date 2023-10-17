const { test, expect } = require('@playwright/test');
let APIurl = 'https://restful-booker.herokuapp.com'
test('should be able to create a booking', async ({ request }) => {
    const response = await request.post(APIurl + '/booking', {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 1111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-061-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
    expect(responseBody.booking).toHaveProperty("bookingdates.checkin", "2023-06-01");
    expect(responseBody.booking).toHaveProperty("bookingdates.checkout");
    expect(responseBody.booking).toHaveProperty("additionalneeds", "Breakfast");
    expect(responseBody).toHaveProperty("bookingid", responseBody.bookingid);
});
