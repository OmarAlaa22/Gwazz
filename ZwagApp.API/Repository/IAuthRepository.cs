using System.Threading.Tasks;
using ZwagApp.API.Model;

namespace ZwagApp.API.Repository
{
    public interface IAuthRepository
    {
         Task<User> Register(User user,string password);
         Task<User> Login (string username,string password);
         Task<bool> UserExist (string username);
    }
}