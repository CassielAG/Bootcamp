using Bootcamp.BusquedaVacantes.BusquedaAPI.Models;

namespace Bootcamp.BusquedaVacantes.BusquedaAPI.Services
{
    public interface ISearch
    {
        int Search(SearchBusi searchBusi);

        bool Searched(SearchBusi searchBusi);

        SearchBusi[] historial();
    }
}
