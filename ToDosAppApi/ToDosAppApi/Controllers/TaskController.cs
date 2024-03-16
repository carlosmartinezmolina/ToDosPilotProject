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

        [HttpGet]
        public async Task<IEnumerable<TaskModel>> GetAlltaskModels()
        {

            return await _taskModelService.GetAll();
        }
    }
}
