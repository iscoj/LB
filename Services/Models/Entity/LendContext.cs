using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Models.Entity
{
    public class LendContext: DbContext
    {
        public LendContext(DbContextOptions options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
