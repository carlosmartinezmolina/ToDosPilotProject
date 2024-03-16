using ToDosAppApi.Models;

namespace ToDosAppApi.Services.IService
{
    public interface ITaskModelService : IBaseService<TaskModel>
    {
        Task ChangeTaskStatus(Guid taskId);
    }
}
