using System.Security.Claims;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZwagApp.API.DTOS;
using ZwagApp.API.Model;
using ZwagApp.API.Repository;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;

namespace ZwagApp.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController:ControllerBase
    {
                    Stopwatch timer= new Stopwatch();

        private readonly IAuthRepository repo;
        private readonly IConfiguration config;
        public AuthController(IAuthRepository _repo,IConfiguration _config)
        {
            repo=_repo;
            config=_config;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register (RegisterDto dto){
            dto.UserName =dto.UserName.ToLower();
            if(await repo.UserExist(dto.UserName)) {return BadRequest("the Name already token");}
            var newuser=new User{
            Username=dto.UserName
            };
            var createuser= await repo.Register(newuser,dto.Password);
            var x=timer.Elapsed;
            return StatusCode(201);

        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto logdto){
                 var userfomrepo =await repo.Login(logdto.Username.ToLower(),logdto.Password);
            if(userfomrepo==null){return Unauthorized(); }
                    var claims=new[]{
                    new Claim (ClaimTypes.NameIdentifier,userfomrepo.Id.ToString()),
                    new Claim(ClaimTypes.Name,userfomrepo.Username)
                    };
                    var key= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("Appsettings:Token").Value )); 
                    var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);
                    var TokenDescriptor = new SecurityTokenDescriptor{

                      Subject=  new ClaimsIdentity(claims),
                      Expires=DateTime.Now.AddDays(1),
                      SigningCredentials=creds
                    };
                    var tokenhandler= new JwtSecurityTokenHandler();
                    var  token = tokenhandler.CreateToken(TokenDescriptor);
                    return Ok(new{

                        token=tokenhandler.WriteToken(token)
                    });
            }
       

        }
        
    }
