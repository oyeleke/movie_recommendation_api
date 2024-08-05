import request from "supertest";
import app from "../../index";
import { userRegistrationInput, credInput } from "../fixtures/user.fixture";


describe("API endpoints /user", () => { 
  //Post 
    it('path not completed should return a 404', async () => {
        const newUser = userRegistrationInput;
        const response = await request(app).post('/signup').send(newUser);

        expect(response.status).toBe(404);
    });

    //Post 
    it('should create a new admin user', async () => {
        const newUser = userRegistrationInput;
        const response = await request(app).post('/auth/signup').send(newUser);

        expect(response.status).toBe(200);
        expect(response.body).toBe({ message: "User created successfully", newUser });
    });
    
} );