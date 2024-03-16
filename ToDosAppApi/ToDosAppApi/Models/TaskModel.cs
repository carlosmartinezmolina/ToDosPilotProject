using ToDosAppApi.Enums;

namespace ToDosAppApi.Models
{
    public class TaskModel : BaseModel
    {
        public DateTime? CompletedTask { get; set; }
        public TaskState State { get; set; }
    }
}
