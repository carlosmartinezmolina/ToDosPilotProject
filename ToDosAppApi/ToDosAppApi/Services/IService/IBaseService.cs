namespace ToDosAppApi.Services.IService
{
    public interface IBaseService<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(Guid Id);
        Task Add(T entity);
        Task Update(T entity);
        Task Delete(Guid Id);
    }
}
