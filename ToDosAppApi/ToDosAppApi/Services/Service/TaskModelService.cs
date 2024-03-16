using ToDosAppApi.Enums;
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

        public async Task ChangeTaskStatus(Guid taskId)
        {
            var task = await _taskRepository.GetById(taskId);
            if (task != null && task.State == TaskState.ToDo)
            {
                task.State = TaskState.Completed;
                task.CompletedTask = DateTime.Now;
                await _taskRepository.Update(task);
            }
        }
    }
}
