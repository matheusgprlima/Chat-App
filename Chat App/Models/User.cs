using Microsoft.AspNetCore.Identity;

namespace Chat_App.Models
{
    public class User: IdentityUser
    {
        public User()
        {
            Messages = new HashSet<Message>(); 
        }
        public virtual ICollection<Message> Messages { get; set; }
    }
}
