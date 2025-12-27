using AutoMapper;
using Chat_Application.DTOs;
using Chat_Application.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// https://github.com/HsharmaCoding/Angular8-CompleteAuthentication-Using-Asp.NetCore-WebAPI/blob/master/WebAPI/CommonCoreAPI/CommonCore.Services/UserService.cs

namespace Chat_Application.Controllers
{
    // this controller will be used to allow login and register users.
    // It will have two methods: Login and Register
    //[Authorize]
    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        // contructor
        public AuthController(UserManager<ApplicationUser> userManager, IMapper mapper, IConfiguration configuration)
        {
            this.userManager = userManager;
            _mapper = mapper;
            _configuration = configuration;
        }

        // register method
        // WOrking
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            // if (ModelState.IsValid)
            if (registerDto is null)
            {
                return BadRequest();
            }
            var user = _mapper.Map<ApplicationUser>(registerDto);
            var result = await userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description).ToList();
                return BadRequest(new { errors });
            }
            return StatusCode(201);
        }



        // login method 
        // Working
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await userManager.FindByNameAsync(loginDto.UserName);
            if (user == null)
            {
                return NotFound("Invalid user name");
            }
            var result = await userManager.CheckPasswordAsync(user, loginDto.Password);
           if(result)
            {
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("UserId", user.Id),
                    new Claim("UserName", user.UserName),
                    new Claim("Email", user.Email),
                };
                var Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                                        _configuration["Jwt:Issuer"],
                                         _configuration["Jwt:Audience"],
                                          claims,
                                         expires: DateTime.UtcNow.AddMinutes(30),
                                         signingCredentials: signIn);

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                                                                                                                                  
                return Ok(new { Token =  tokenString , User=user});
            }
            return BadRequest();
        }
        // logout method
        [HttpPost("logout")]
        [Authorize]
        public async Task<IActionResult> LogoutAsync()
        {
            // This  was not working;
            // The problem was : This method was returning unauthorized (401) even when the user was logged in.
            // Why: Appsettings.json Jwt has :key, issuer, audience(THIS ONE ONLY); 
            // Appsettings.json has : "address": instead of  Audience.
            // This was not matching with the JwtBearer configuration in Program.cs
            // Fix : // Rename Address → Audience
            // await userManager.SignOutAsync();
            // This method will log out the user
            // It will return 200 OK
            return Ok("Logged out successfully");
        }
        
    }
}
