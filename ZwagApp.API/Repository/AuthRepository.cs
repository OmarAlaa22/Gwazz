    using System;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using ZwagApp.API.Model;

    namespace ZwagApp.API.Repository
    {
        public class AuthRepository : IAuthRepository
        {
            //inject Data context 
            private readonly DataContext db;
            public AuthRepository(DataContext _db)
            {
                db=_db;
            }
    //Login
            public  async Task<User> Login(string username, string password)
            {
    var user=await db.Users.FirstOrDefaultAsync(x=>x.Username==username);
    if(user==null) return null;
    if(!VerifayPassword(password,user.Password_Salt,user.Password_Hash)) return null;
    return user;


            }
    //verify password to Login
            private bool VerifayPassword(string password, byte[] password_Salt, byte[] password_Hash)
            {

    using(var hmac= new System.Security.Cryptography.HMACSHA512(password_Salt)){
                var checkhash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < checkhash.Length ; i++)
                {
                    if(checkhash[i]!=password_Hash[i]) {return false;}
                }
                return true;
                }
            }
    //Register
            public  async Task<User> Register(User user, string password)
            {
        byte [] passwordhash,passwordsalt;
        CreatePasswordHash(password,out passwordhash,out passwordsalt);
        user.Password_Hash=passwordhash;
        user.Password_Salt=passwordsalt;
        await db.Users.AddAsync(user);
        await db.SaveChangesAsync();
        return user;



            }
    //create hashpassword to register
            private void CreatePasswordHash(string password, out byte[] passwordhash, out byte[] passwordsalt)
            {
                using(var hmac= new System.Security.Cryptography.HMACSHA512()){
                    passwordsalt=hmac.Key;
                    passwordhash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                }
                        }

        

            public async Task<bool> UserExist(string username)
            {
                 if(await db.Users.AnyAsync(x=>x.Username==username)) return true;
                 return false;
            }
        }
    }