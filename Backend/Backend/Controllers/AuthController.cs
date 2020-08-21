using Backend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Backend.Controllers
{
    public class AuthController : ApiController
    {

        public IHttpActionResult Post(UserDto user)
        {
            
            if (user.UserName == System.Configuration.ConfigurationManager.AppSettings["defaultUser"].ToString() &&
                user.Password == System.Configuration.ConfigurationManager.AppSettings["defaultPassword"].ToString()  
            )
            {
                return Ok(true);
            } else
            {
                return Ok(false);
            }
        }
    }
}
