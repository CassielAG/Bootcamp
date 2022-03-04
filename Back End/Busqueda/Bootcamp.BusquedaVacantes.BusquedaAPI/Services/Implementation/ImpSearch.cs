using Bootcamp.BusquedaVacantes.BusquedaAPI.Models;
using HtmlAgilityPack;
using ScrapySharp.Extensions;
using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bootcamp.BusquedaVacantes.BusquedaAPI.Services.Implementation
{
    public class ImpSearch : ISearch
    {
        public SearchBusi[] historial() //Guardar en un arreglo el historial y retornarlo
        {
            throw new NotImplementedException();
        }

        public int Search(SearchBusi searchBusi)
        {
            HtmlWeb oWeb = new HtmlWeb();
            HtmlDocument doc = oWeb.Load("https://www.occ.com.mx/empleos/de-coca-cola");

            HtmlNode Body = doc.DocumentNode.CssSelect("#search-results > div > div > div p").First();
            string body_1 = Body.InnerHtml;
            string body_2 = Body.InnerText;

            Match m = Regex.Match(body_2, "(\\d+)");
            string num = string.Empty;
            if (m.Success) num = m.Value;
            int vacansies;
            bool v = Int32.TryParse(num, out vacansies);

            return vacansies;
        }

        public bool Searched(SearchBusi searchBusi)
        {
            return true;
        }
    }
}
