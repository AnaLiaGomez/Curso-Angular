using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Validaciones
{
    public class PrimeraLetraMayusculaAttribute : ValidationAttribute

    {
        protected override ValidationResult IsValid(object? value, ValidationContext validationContext)

        {
            if (value == null || string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success; // Si es nulo o vacío, la validación pasa
            }

            var primeraLetra = value.ToString()![0].ToString(); // El "!" es para indicar que no es null después de la verificación
            if (primeraLetra != primeraLetra.ToUpper())
            {
                return new ValidationResult("La primera letra debe de ser mayúscula");
            }
            return ValidationResult.Success;
        }
    }
}
