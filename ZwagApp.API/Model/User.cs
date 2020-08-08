namespace ZwagApp.API.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] Password_Hash { get; set; }
        public byte[] Password_Salt { get; set; }
    }
}