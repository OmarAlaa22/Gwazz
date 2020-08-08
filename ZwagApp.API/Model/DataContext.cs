using Microsoft.EntityFrameworkCore;

namespace ZwagApp.API.Model
{
    public class DataContext:DbContext
    {
         public DataContext(DbContextOptions<DataContext> Options) : base(Options) { }
        public DbSet<Value> Values  { get; set; } 
        public DbSet<User> Users {get; set;}
    }
}