using Bootcamp.BusquedaVacantes.LogInAPI.Models;

namespace Bootcamp.BusquedaVacantes.LogInAPI.Services
{
    public interface ILogIn
    {
        bool Logged(LogInUsers logInUsers);
        bool Registred(LogInUsers logInUsers);
    }
}
