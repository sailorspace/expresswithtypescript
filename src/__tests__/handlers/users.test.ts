import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsers } from "../../routes/handlers/users-handler";

//mock data 



describe('getUsers', () => {
    it("should return users list ",
        () => {
            //check if the test func is sync or async 
            getUsers(mockRequest, mockResponse);
            expect(mockResponse.send).
            toHaveBeenCalledWith([]);

        });
})