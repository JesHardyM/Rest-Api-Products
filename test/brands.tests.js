import request from "supertest";
import BrandModel from "../models/BrandModel.js";
import {app, server} from "../app.js";
import db from "../database/db.js";

describe ("Test CRUD brands", () => {
    describe("GET /brands", () => {
        test('should return a response with status 200 and type json', async() => {
            const response = await request(app).get('/brands').send();
				expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
    })
        test("Should return all brands", async () => {
            const response = await request(app).get('/brands').send();
				expect(response.body).toBeInstanceOf(Array);
            })
    
    //test for posting new brand
    describe('POST /brands',() =>{ 
        const newBrand = {
            brand_name: "test",
            products: "test",
            categories: "test",
        }
        const wrongBrand = {
            wrong_field:'test'
        }
        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/brands').send(newBrand)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });
        test('should return a message brand added successfully', async () =>{
            const response = await request(app).post('/brands').send(newBrand)
            expect(response.body.message).toContain("The brand has been added successfully!")
        });
        test('should return a message insertion error If post wrong brand ', async () =>{
            const response = await request(app).post('/brands').send(wrongBrand)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'brand_name' doesn't have a default value")
        });
        afterAll(async() => {
            await BrandModel.destroy({
                where:{brand_name: "test"}
            })
        });
    });

///TEST TO UPDATE - THE U IN CRUD

        describe('PUT /brands', () =>{  
            let createdBrand = {};
            beforeEach(async () => {
                createdBrand = await BrandModel.create({ 
                    brand_name: "test",
                    products: "test",
                    categories: "test",
                });
            });

        afterAll(async() =>{
            await BrandModel.destroy({where:{ id: createdBrand.id}})
        })

    test('should return a response with status 201 and update successfully', async () => {
            const response = await request(app).put(`/brands/${createdBrand.id}`).send({title: "update test"});
            expect(response.status).toBe(201);
            expect(response.body.message).toContain("The brand has been updated successfully!")
        })
    });

//DELETE -THE D IN CRUD

    describe('DELETE /brands', () =>{
        let createdBrand = {};
        beforeEach(async () => {
                createdBrand = await BrandModel.create({ 
                    brand_name: "test",
                    products: "test",
                    categories: "test",
                });
            })
        afterAll(async() =>{
            await BrandModel.destroy({where:{ id: createdBrand.id}})
        })
    test('should return a response with status 203 and deleted successfully', async () => {
            const response = await request(app).delete(`/brands/${createdBrand.id}`).send();
            expect(response.status).toBe(203);
            expect(response.body.message).toContain("The brand has been deleted successfully!")
        })      
    });

    afterAll(()=> {
        server.close();
        db.close()
    });

})