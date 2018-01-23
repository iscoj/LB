using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.Models.Entity;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        LendContext lendContext;
        public ValuesController(LendContext _lendContext)
        {
            lendContext = _lendContext;
        }
        [ActionName("GetUser")]
        public object GetUser()
        {
            return lendContext.Users.FirstOrDefault();
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return lendContext.Users;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
