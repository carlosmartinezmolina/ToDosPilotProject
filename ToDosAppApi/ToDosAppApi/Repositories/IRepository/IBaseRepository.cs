using ToDosAppApi.DBContext;

namespace ToDosAppApi.Repositories.IRepository
{
    public interface IBaseRepository<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(Guid Id);
        Task Add(T entity);
        Task Update(T entity);
        Task Delete(Guid Id);
    }
}
