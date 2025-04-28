using Microsoft.EntityFrameworkCore;

namespace PeliculasAPI.Utilidades
{
    //metodo de extension 
    public static class HttpContextExtensions
    {
        public async static Task InsertarParametrosEnCabecera<T>(this HttpContext httpContext, IQueryable<T> queryable)
        {
            if (httpContext == null) { throw new ArgumentNullException(nameof(httpContext)); }
            double cantidad =  await queryable.CountAsync();
            httpContext.Response.Headers.Add("cantidadTotalRegistros", cantidad.ToString());
        }
    }
}
