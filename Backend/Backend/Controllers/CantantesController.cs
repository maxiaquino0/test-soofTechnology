using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Backend.Data;
using Backend.DTO;
using Backend.Models;

namespace Backend.Controllers
{
    public class CantantesController : ApiController
    {
        private BackendContext db = new BackendContext();

        // GET: api/Cantantes
        public List<CantanteDTO> GetCantantes()
        {
            List<CantanteDTO> cantantes = new List<CantanteDTO>();
            foreach (var item in db.Cantantes)
            {
                CantanteDTO cdto = new CantanteDTO();
                cdto.Id = item.Id;
                cdto.Name = item.Name;
                cdto.KindOfMusic = item.KindOfMusic;
                cdto.Songs = (from c in db.Canciones where c.IdCantante == cdto.Id select c.Name ).ToList();

                cantantes.Add(cdto);
            }
            
            return cantantes;
        }

        // GET: api/Cantantes/kindOfMusic
        [ResponseType(typeof(Cantante))]
        [Route("api/GetCantantesByKindOfMusic/{kindOfMusic}")]
        public IHttpActionResult GetCantantesByKindOfMusic(string kindOfMusic)
        {
            List<CantanteDTO> cantantes = new List<CantanteDTO>();
            foreach (var item in db.Cantantes.Where(c => c.KindOfMusic == kindOfMusic).ToList())
            {
                CantanteDTO cdto = new CantanteDTO();
                cdto.Id = item.Id;
                cdto.Name = item.Name;
                cdto.KindOfMusic = item.KindOfMusic;
                cdto.Songs = (from c in db.Canciones where c.IdCantante == cdto.Id select c.Name).ToList();

                cantantes.Add(cdto);
            }

            return Ok(cantantes);
        }


        // POST: api/Cantantes
        [ResponseType(typeof(Cantante))]
        public IHttpActionResult PostCantante(CantanteDTO cantanteDto)
        {

            Cantante existCantante = db.Cantantes.FirstOrDefault(c => c.Name == cantanteDto.Name);

            if (existCantante != null)
            {
                return BadRequest("Cantante ya existe");
            }

            Cantante cantante = new Cantante()
            {
                Name = cantanteDto.Name,
                KindOfMusic = cantanteDto.KindOfMusic
            };

            db.Cantantes.Add(cantante);

            db.SaveChanges();

            foreach (var item in cantanteDto.Songs)
            {
                Canciones cancion = new Canciones()
                {
                    IdCantante = cantante.Id,
                    Name = item
                };
                db.Canciones.Add(cancion);
            }

            
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cantante.Id }, cantante);
        }

        // DELETE: api/Cantantes/5
        //[ResponseType(typeof(Cantante))]
        //public IHttpActionResult DeleteCantante(int id)
        //{
        //    Cantante cantante = db.Cantantes.Find(id);
        //    if (cantante == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Cantantes.Remove(cantante);
        //    db.SaveChanges();

        //    return Ok(cantante);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CantanteExists(int id)
        {
            return db.Cantantes.Count(e => e.Id == id) > 0;
        }
    }
}