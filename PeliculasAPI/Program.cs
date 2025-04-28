using AutoMapper;
using FluentAssertions.Common;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PeliculasAPI;
using PeliculasAPI.Utilidades;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddHttpContextAccessor();

builder.Services.AddTransient<IAlmacenadorArchivos, AlmacenadorArchivosLocal>();
builder.Services.AddDbContext<ApplicationDbContext>(options => 
options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection"), 
sqlServer=>sqlServer.UseNetTopologySuite()));

builder.Services.AddSingleton<GeometryFactory>(NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326));

builder.Services.AddCors(options =>
{
    var frontEndURL = builder.Configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(frontEndURL)
              .AllowAnyMethod()
              .AllowAnyHeader()
              .WithExposedHeaders(new string[] { "cantidadTotalRegistros" });
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddSingleton(provider =>
new MapperConfiguration(config =>
{
    var geometryFactory = provider.GetRequiredService<GeometryFactory>();
    config.AddProfile(new AutoMapperProfiles(geometryFactory));
}).CreateMapper());
  


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//middleware

app.UseHttpsRedirection(); //USE no detiene el proceso
app.UseStaticFiles();

app.UseRouting();
app.UseCors(); // Habilitar CORS aquí

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();