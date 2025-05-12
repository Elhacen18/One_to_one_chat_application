using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Chat_Application.Models
{
    public class ApplicationUser : IdentityUser
    {

        [Required]
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }

        public string? AboutMe { get; set; }


    }
}
