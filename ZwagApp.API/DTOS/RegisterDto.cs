using System.ComponentModel.DataAnnotations;

namespace ZwagApp.API.DTOS
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8,MinimumLength=5,ErrorMessage="the pass must be min 5 and max 8")]
        public string Password { get; set; }
    }
}