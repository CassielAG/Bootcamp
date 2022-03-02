using Bootcamp.BusquedaVacantes.LogInAPI.Models;
using Bootcamp.BusquedaVacantes.LogInAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace Bootcamp.BusquedaVacantes.LogInAPI.Controllers
{
    [EnableCors("LogInAPI")]
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private readonly ILogIn _logIn;

        public LogInController(ILogIn logIn)
        {
            _logIn = logIn;
        }

        [HttpPost]
        public bool Post([FromBody] LogInUsers infoUser)
        {
            return _logIn.Logged(infoUser);
        }

        [HttpPost]
        [Route("/Register")]
        public bool PostReg([FromBody] LogInUsers infoUser)
        {
            return _logIn.Registred(infoUser);
        }
    }
}
