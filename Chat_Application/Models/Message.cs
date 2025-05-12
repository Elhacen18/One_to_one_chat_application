using System.ComponentModel.DataAnnotations;

namespace Chat_Application.Models
{
    public class Message
    {
        [Key]
        [Required]
        public int MessageId { get; set; }
        [Required]
        public string? Content { get; set; }

        public string? SenderId { get; set; }
        public string? SeceiverId { get; set; }



    }
}
