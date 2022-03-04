using Bootcamp.BusquedaVacantes.BusquedaAPI.Models;
using Bootcamp.BusquedaVacantes.BusquedaAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Bootcamp.BusquedaVacantes.BusquedaAPI.Controllers
{
    [EnableCors("SearchAPI")]
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearch _search;
        public SearchController(ISearch search)
        {
            _search = search;
        }

        [HttpGet]
        public int GetBusiness([FromBody] SearchBusi infoBusi)
        {
            return _search.Search(infoBusi);
        }

        [HttpPost]
        public bool PostBusiness([FromBody] SearchBusi infoBusi)
        {
            return _search.Searched(infoBusi);
        }

        [HttpGet]
        [Route("/historial")]
        public SearchBusi[] GetHistorial()
        {
            return _search.historial();
        }
    }
}
