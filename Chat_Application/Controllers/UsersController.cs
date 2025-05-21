using Chat_Application.DbContext;
using Chat_Application.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Chat_Application.Controllers
{
    // This controller will be used to handle user's profile. 
    // This controller will include three methods: GetProfile, UpdateProfile,  deleteProfile

    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {


        private readonly ApplicationDbContext _context;
        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }
        // Get user profile
        // [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile([FromBody] UserDto userDto)
        {
            if(userDto is null)
            {

                // This method will get the user's profile
                // It will return 200 OK if the user is found
                // It will return 404 Not Found if the user is not found
                return NotFound();
                
            }
            var user = await _context.ApplicationsUsers.FindAsync(userDto.Id);
            
            var userProfile = new UserDto
            {   UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                AboutMe = user.AboutMe,
                Email = user.Email
            };
            return Ok(userProfile);
            // This method will return the user's profile
            // It will return the user's first name, last name, and about me
            // It will return 200 OK if the user is found
            // It will return 404 Not Found if the user is not found
        }
        [HttpPut("Update")]
        public async Task<IActionResult> UpdateProfile([FromBody] UserDto userDto)
        {
            // This method will update the user's profile
            // It will return 200 OK if the user is found
            // It will return 404 Not Found if the user is not found
            return Ok();
        }
        // Delete user profile
        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteProfile([FromBody] UserDto userDto)
        {

            if (userDto is null)
            {

                // This method will get the user's profile
                // It will return 200 OK if the user is found
                // It will return 404 Not Found if the user is not found
                return NotFound();

            }
            var user = await _context.ApplicationsUsers.FindAsync(userDto.Id);
            _context.Remove(user);
            await _context.SaveChangesAsync();
          
            return NoContent();
        }

    }
}
