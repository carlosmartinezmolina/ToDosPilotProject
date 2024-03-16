using Microsoft.AspNetCore.Mvc;
using ToDosAppApi.Models;
using ToDosAppApi.Services.IService;

namespace ToDosAppApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController
    {
        private readonly ITaskModelService _taskModelService;
        public TaskController(ITaskModelService taskModelService) 
        {
            this._taskModelService = taskModelService;
        }

        [HttpGet("GetAllTaskModels")]
        public async Task<IEnumerable<TaskModel>> GetAllTaskModels()
        {
            return await _taskModelService.GetAll();
        }

        [HttpPost("AddTask")]
        public async Task AddTask(TaskModel entity)
        {
            await _taskModelService.Add(entity);
        }

        [HttpDelete("DeleteTask")]
        public async Task DeleteTask(Guid Id)
        {
            await _taskModelService.Delete(Id);
        }

        [HttpGet("GetTaskById")]
        public async Task<TaskModel> GetTaskById(Guid Id)
        {
            return await _taskModelService.GetById(Id);
        }
        [HttpPost("UpdateTask")]
        public async Task UpdateTask(TaskModel entity)
        {
            await _taskModelService.Update(entity);
        }

    }
}
