using AutoMapper;
using Chat_Application.DTOs;
using Chat_Application.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Chat_Application.Controllers
{
    // this controller will be used to allow login and register users.
    // It will have two methods: Login and Register
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IMapper _mapper;
            // contructor
        public AuthController(UserManager<ApplicationUser> userManager, IMapper mapper)
        {
            this.userManager = userManager;
            _mapper = mapper;
        }
       
        // register method
        [HttpPost]
        [Route("api/[controller]/register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
             // if (ModelState.IsValid)
             if (registerDto is null)
             {
               return BadRequest();
            }
            var user = _mapper.Map<ApplicationUser>(registerDto);
            var result = await userManager.CreateAsync(user, registerDto.Password);
            if(!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description).ToList();
                return BadRequest(new { errors });
            }
            return StatusCode(201);
        }



        // login method 
        [HttpPost]
        [Route("api/[controller]/login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (loginDto is null)
            {
                return BadRequest();
            }
            var user = await userManager.FindByNameAsync(loginDto.UserName);
            if (user == null)
            {
                 return NotFound("Invalid user name");
            }
            var result = await userManager.CheckPasswordAsync(user, loginDto.Password);
            if (!result)
            {
                return NotFound("No account found for this user");
            }
            return Ok();
        }
    }
}
