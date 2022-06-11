using System.ComponentModel.DataAnnotations;

namespace Chat_App.Models
{
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string UserName{ get; set; }   

        public DateTime Date { get; set; }

        [Required]
        public string Text { get; set; }

        public string UserId { get; set; }

        public virtual User User { get; set; }   

    }
}
