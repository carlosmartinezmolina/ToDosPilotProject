using Microsoft.EntityFrameworkCore;
using System;
using ToDosAppApi.DBContext;
using ToDosAppApi.Repositories.IRepository;

namespace ToDosAppApi.Repositories.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly ToDosContext _context;

        public BaseRepository(ToDosContext context)
        {
            _context = context;
        }

        public async Task Add(T entity)
        {
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Guid Id)
        {
            var entity = await _context.Set<T>().FindAsync(Id);
            if (entity == null)
                throw new Exception("Entity not Found");
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetById(Guid Id)
        {
            return await _context.Set<T>().FindAsync(Id);
        }

        public async Task Update(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }
    }
}
