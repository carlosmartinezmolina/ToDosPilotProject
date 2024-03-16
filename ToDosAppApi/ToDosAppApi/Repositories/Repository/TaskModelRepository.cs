using ToDosAppApi.DBContext;
using ToDosAppApi.Models;
using ToDosAppApi.Repositories.IRepository;

namespace ToDosAppApi.Repositories.Repository
{
    public class TaskModelRepository : BaseRepository<TaskModel>, ITaskModelRepository
    {
        public TaskModelRepository(ToDosContext context) : base(context)
        {
        }
    }
}
