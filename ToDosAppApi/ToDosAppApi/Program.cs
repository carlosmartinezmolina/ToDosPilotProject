using Microsoft.EntityFrameworkCore;
using ToDosAppApi.DBContext;
using ToDosAppApi.Repositories.IRepository;
using ToDosAppApi.Repositories.Repository;
using ToDosAppApi.Services.IService;
using ToDosAppApi.Services.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Cargar la configuración del appSettings.json
var configuration = new ConfigurationBuilder()
    .AddJsonFile("appSettings.json")
    .Build();

// Obtener la cadena de conexión del appSettings.json
var connectionString = configuration.GetConnectionString("DefaultConnection");


// Agregar el servicio de base de datos
builder.Services.AddDbContext<ToDosContext>(options =>
    options.UseSqlServer(connectionString));

// Registrar el contexto de la base de datos en el contenedor IOC
builder.Services.AddScoped<ToDosContext>();

// Registrar un servicio y su implementación
builder.Services.AddScoped<ITaskModelService, TaskModelService>();
builder.Services.AddScoped<ITaskModelRepository, TaskModelRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
