using Microsoft.AspNetCore.Http;
using System.Web;
namespace ZwagApp.API.Helpers
{
    public static class Extensions 
    {
        public static void AddAplicationError( this HttpResponse  resposne ,string message){

            resposne.Headers.Add("ApplicationError",message);
                        resposne.Headers.Add("Access-Control-Expose-Headers","Application-Headers");

            resposne.Headers.Add("Access-Control-Allow-Orign","*");

        }
        
    }
}