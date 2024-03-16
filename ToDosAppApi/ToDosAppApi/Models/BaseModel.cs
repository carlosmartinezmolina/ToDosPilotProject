namespace ToDosAppApi.Models
{
    public class BaseModel
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate {  get; set; }
        public DateTime? DeletedDate { get; set; }

    }
}
