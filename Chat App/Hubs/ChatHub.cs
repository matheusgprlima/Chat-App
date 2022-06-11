using Chat_App.Models;
using Microsoft.AspNetCore.SignalR;

namespace Chat_App.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(Message message) =>
            await Clients.All.SendAsync("receiveMessage", message);
    }
}
