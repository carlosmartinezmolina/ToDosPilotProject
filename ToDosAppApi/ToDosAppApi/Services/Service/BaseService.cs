using ToDosAppApi.Services.IService;
using ToDosAppApi.Repositories.IRepository;

namespace ToDosAppApi.Services.Service
{
    public class BaseService<T> : IBaseService<T>
    {
        private readonly IBaseRepository<T> _repository;

        public BaseService(IBaseRepository<T> repository)
        {
            _repository = repository;
        }

        public async Task Add(T entity)
        {
            await _repository.Add(entity);
        }

        public async Task Delete(Guid Id)
        {
            await _repository.Delete(Id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<T> GetById(Guid Id)
        {
            return await _repository.GetById(Id);
        }

        public async Task Update(T entity)
        {
            await _repository.Update(entity);
        }
    }
}
