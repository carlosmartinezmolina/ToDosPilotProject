using ToDosAppApi.Models;
using ToDosAppApi.Repositories.IRepository;
using ToDosAppApi.Services.IService;

namespace ToDosAppApi.Services.Service
{
    public class TaskModelService : BaseService<TaskModel>, ITaskModelService
    {
        private readonly ITaskModelRepository _taskRepository;
        public TaskModelService(ITaskModelRepository taskRepository) : base(taskRepository)
        {
            _taskRepository = taskRepository;
        }
    }
}
