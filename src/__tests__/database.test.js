const Build = require("../database/config/bulid");
const signupQuery = require("../database/queries/auth/signupquery");
const postQuery = require("../database/queries/posts/postquery");
const connection = require("../database/config/connection");

// eslint-disable-next-line no-undef
beforeEach(() => Build());
// eslint-disable-next-line no-undef
afterAll(() => connection.end());

// eslint-disable-next-line no-undef
describe("testing signupQuery", () => {
    // eslint-disable-next-line no-undef
    test("signupQuery said return Array", (done) => {
        signupQuery({
            "username": "yasser",
            "email": "yasser@gmail.com",
            "password": "123456789",
            "birthday": "2023-04-19",
            "gender": "male"

        }).then(data => {
            // eslint-disable-next-line no-undef
            expect(Array.isArray(data.rows)).toBe(true);
            done()
        }).catch(error => {
            done(error);
        })
    })
    // eslint-disable-next-line no-undef
    test("signupQuery said return Array", (done) => {
        signupQuery({
            "username": "yasser",
            "email": "yasser@gmail.com",
            "password": "123456789",
            "birthday": "2023-04-19",
            "gender": "male"

        }).then(data => {
            // eslint-disable-next-line no-undef
            expect(data.rows[0].email).toBe('yasser@gmail.com');
            // eslint-disable-next-line no-undef
            expect(data.rows[0].username).toBe('yasser');
            done()

        }).catch(error => {
            done(error);
        })
    })
})


// eslint-disable-next-line no-undef
describe("testing postQuery and deletepostQuery ", () => {
    // eslint-disable-next-line no-undef
    test("postquery return array", (done) => {
        postQuery({
            "content": "hi",
            "image_url": "images/database",
            "user_id": "1"
        }).then(data => {
            // eslint-disable-next-line no-undef
            expect(Array.isArray(data.rows)).toBe(true);
            // eslint-disable-next-line no-undef
            done()
        }).catch(error => {
            // eslint-disable-next-line no-undef
            done(error);
        })
    })

});

