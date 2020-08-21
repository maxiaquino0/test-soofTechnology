using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class Cantante
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string KindOfMusic { get; set; }
        public List<Canciones> Songs { get; set; }
    }
}