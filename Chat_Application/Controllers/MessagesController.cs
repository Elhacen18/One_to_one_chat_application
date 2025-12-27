using Microsoft.AspNetCore.Mvc;

namespace Chat_Application.Controllers
{
    // For simplicity, this controller will be used to handle send messages between two users. 
    // This controller will include three methods: SendMessage
    // , GetMessages(List of users which a user can have chatted with ),
    // UserChatHistory(List of chat messages bettwen user A and B)
    // [Authorize]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        // Send message
        [HttpPost("send")]
        public IActionResult SendMessage([FromBody] string message)
        {
            // This method will send the message to the user
            // It will return 200 OK if the message is sent
            // It will return 404 Not Found if the user is not found
            return Ok("Sending something ");
        }

        // Get messages ?
        [HttpGet("get")]
        public IActionResult GetMessages()
        {
            // This method will get the messages from the user
            // It will return 200 OK if the messages are found
            // It will return 404 Not Found if the user is not found
            return Ok("Getting something");
        }

        // User chat history()
        [HttpGet("history")]
        public IActionResult UserChatHistory()
        {
            // This method will get the user's chat history
            // It will return 200 OK if the chat history is found
            // It will return 404 Not Found if the user is not found
            return Ok("Getting user history chat");
        }
    }
}
