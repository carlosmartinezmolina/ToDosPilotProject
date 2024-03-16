using Microsoft.EntityFrameworkCore;
using ToDosAppApi.Models;

namespace ToDosAppApi.DBContext
{
    public class ToDosContext : DbContext
    {
        public ToDosContext(DbContextOptions<ToDosContext> options) : base(options) { }

        public DbSet<TaskModel> TaskModels { get; set; }

    }


}
