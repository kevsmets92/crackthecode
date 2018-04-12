using DelenPrivateBankingBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelenPrivateBankingBackEnd.Controllers
{
    public class ImageToPdfController : ApiController
    {
        // GET api/ImageToPdf
        [ResponseType(typeof(PdfHelper))]
        public async Task<IHttpActionResult> Get(string fileName)
        {
            // Convert to PDF and delete image
            PdfHelper.Instance.SaveImageAsPdf($"{fileName}.png", $"{fileName}.pdf", 1000, true);



            return this.Ok();
        }
    }
}
