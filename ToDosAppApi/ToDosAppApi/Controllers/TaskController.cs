using Microsoft.AspNetCore.Mvc;

namespace ToDosAppApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController
    {
        public TaskController() { }

        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return new List<Task>();
        }
    }
}
