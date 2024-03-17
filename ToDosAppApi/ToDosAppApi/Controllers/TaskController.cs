using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ToDosAppApi.Enums;
using ToDosAppApi.Models;
using ToDosAppApi.Services.IService;

namespace ToDosAppApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController: ControllerBase
    {
        private readonly ITaskModelService _taskModelService;
        public TaskController(ITaskModelService taskModelService) 
        {
            this._taskModelService = taskModelService;
        }

        [HttpGet("GetAllTaskModels")]
        public async Task<IEnumerable<TaskModel>> GetAllTaskModels(string? textFilter, TaskState? taskState)
        {
            var tasks = await _taskModelService.GetAll();
            var temp = tasks
                .Where(t => (
                !string.IsNullOrEmpty(textFilter) ? t.Description.Contains(textFilter) : true) 
                && (taskState != null ? t.State == taskState : true))
                .ToList();
            var todoList = temp.Where(s => s.State == TaskState.ToDo).OrderBy(o => o.CreatedDate).ToList();
            var completedList = temp.Where(s => s.State == TaskState.Completed).OrderByDescending(o => o.CompletedTask).ToList();
            var result = todoList.Concat(completedList);
            return result;
        }

        [HttpPost("AddTask")]
        public async Task AddTask(TaskModel entity)
        {
            TaskModel newTask = new TaskModel
            {
                CreatedDate = DateTime.Now,
                State = TaskState.ToDo,
                Description = entity.Description
            };
            await _taskModelService.Add(newTask);
        }

        [HttpDelete("DeleteTask")]
        public async Task<OkObjectResult> DeleteTask(Guid id)
        {
            await _taskModelService.Delete(id);
            return Ok(new { message = "Success" });
        }

        [HttpGet("GetTaskById")]
        public async Task<TaskModel> GetTaskById(Guid id)
        {
            return await _taskModelService.GetById(id);
        }

        [HttpPost("UpdateTask")]
        public async Task<OkObjectResult> UpdateTask(TaskModel entity)
        {
            if(entity.State == TaskState.ToDo)
                await _taskModelService.Update(entity);
            return Ok(new { message = "Success" });
        }

        [HttpPost("ChangeTaskStatus")]
        public async Task<OkObjectResult> ChangeTaskStatus(Guid id)
        {
            await _taskModelService.ChangeTaskStatus(id);
            return Ok(new { message = "Success" });
        }

    }
}
