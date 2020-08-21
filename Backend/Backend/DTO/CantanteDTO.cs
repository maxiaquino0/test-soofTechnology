using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.DTO
{
    public class CantanteDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string KindOfMusic { get; set; }
        public List<string> Songs { get; set; }
    }
}