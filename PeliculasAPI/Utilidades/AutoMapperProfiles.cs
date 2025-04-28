using AutoMapper;
using NetTopologySuite.Geometries;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Utilidades


{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            CreateMap<Generos, GeneroDTO>().ReverseMap();
            CreateMap<GeneroCreacionDTO, Generos>();
            CreateMap<Actor, ActorDTO>().ReverseMap();
            CreateMap<ActorCreacionDTO, Actor>()
                .ForMember(x => x.Foto, options => options.Ignore());

            CreateMap<CineCreacionDTO, Cine>()
             .ForMember(x => x.Ubicacion, x => x.MapFrom(dto => geometryFactory.CreatePoint(new Coordinate(dto.Longitud, dto.Latitud))));

            CreateMap<Cine, CineDTO>()
                .ForMember(x => x.Latitud, dto => dto.MapFrom(campo => campo.Ubicacion.Y))
                .ForMember(x => x.Longitud, dto => dto.MapFrom(campo => campo.Ubicacion.X));

            CreateMap<PeliculaCreacionDTO, Pelicula>()
              .ForMember(x => x.Poster, opciones => opciones.Ignore())
              .ForMember(x => x.PeliculasGeneros, opciones => opciones.MapFrom((MapearPeliculasGeneros)))
              .ForMember(x => x.PeliculasCines, opciones => opciones.MapFrom((MapearPeliculasCines)))
              .ForMember(x => x.PeliculasActores, opciones => opciones.MapFrom((MapearPeliculasActores)));

        }

        private List<PeliculasActores> MapearPeliculasActores(PeliculaCreacionDTO peliculaCreacionDTO, 
            Pelicula pelicula)
        {
            var resultado = new List<PeliculasActores>();

            if (peliculaCreacionDTO.Actores == null) { return resultado; }

            foreach (var actor in peliculaCreacionDTO.Actores)
            {
                resultado.Add(new PeliculasActores() { ActorId = actor.Id, Personaje= actor.Personaje });
            }

            return resultado;
        }



        // Método personalizado para mapear los géneros de la película
        private List<PeliculasGeneros> MapearPeliculasGeneros(PeliculaCreacionDTO peliculaCreacionDTO, Pelicula pelicula)
        {
            // Se inicializa una lista vacía que almacenará las relaciones Pelicula-Genero
            var resultado = new List<PeliculasGeneros>();

            // Si no se proporcionaron IDs de géneros, se retorna la lista vacía
            if (peliculaCreacionDTO.GenerosIds == null) { return resultado; }

            // Por cada ID en la lista de géneros, se crea un nuevo objeto PeliculasGeneros
            foreach (var id in peliculaCreacionDTO.GenerosIds)
            {
                // Se agrega una nueva relación con el ID del género correspondiente
                resultado.Add(new PeliculasGeneros() { GeneroId = id });
            }

            // Se retorna la lista de relaciones Pelicula-Genero ya mapeadas
            return resultado;
        }

        private List<PeliculasCines> MapearPeliculasCines(PeliculaCreacionDTO peliculaCreacionDTO, Pelicula pelicula)
        {
            var resultado = new List<PeliculasCines>();

            if (peliculaCreacionDTO.CinesIds == null) { return resultado; }

            foreach (var id in peliculaCreacionDTO.GenerosIds)
            {
                resultado.Add(new PeliculasCines() { CineId = id });
            }

            return resultado;
        }



    }

}
