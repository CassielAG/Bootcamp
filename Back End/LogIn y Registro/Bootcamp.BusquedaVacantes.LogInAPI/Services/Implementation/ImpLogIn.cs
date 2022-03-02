using Bootcamp.BusquedaVacantes.LogInAPI.Models;

namespace Bootcamp.BusquedaVacantes.LogInAPI.Services.Implementation
{
    public class ImpLogIn : ILogIn
    {
        public bool Logged(LogInUsers logInUsers)
        {
            if (logInUsers == null) return false;

            return true;
        }

        public bool Registred(LogInUsers logInUsers)
        {
            if (logInUsers == null) return false;

            return true;
        }
    }
}
