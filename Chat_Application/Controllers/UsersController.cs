using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Chat_Application.Controllers
{
    // This controller will be used to handle user's profile. 
    // This controller will include three methods: GetProfile, UpdateProfile,  deleteProfile


    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        // Get user profile

        [HttpGet("GetUserProfile"), Authorize]
        //[Route("api/[controller]/profile")]
        public async Task<IActionResult> GetProfile()
        {
            // This method will return the user's profile
            // It will return the user's first name, last name, and about me
            // It will return 200 OK if the user is found
            // It will return 404 Not Found if the user is not found
            return Ok();
        }
        // Update user profile
        //[HttpPut]
        //[Route("api/[controller]/profile")]
        //public IActionResult UpdateProfile()
        //{
        //    // This method will update the user's profile
        //    // It will return 200 OK if the user is found
        //    // It will return 404 Not Found if the user is not found
        //    return Ok();
        //}
        //// Delete user profile
        //[HttpDelete]
        //[Route("api/[controller]/profile")]
        //public IActionResult DeleteProfile()
        //{
        //    // This method will delete the user's profile
        //    // It will return 200 OK if the user is found
        //    // It will return 404 Not Found if the user is not found
        //    return Ok();
        //}

    }
}
