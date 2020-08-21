namespace Backend.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Backend.Data.BackendContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Backend.Data.BackendContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //context.Cantantes.AddOrUpdate(
            //  p => p.Name,
            //  new Models.Cantante { Name = "Chester Bennington", KindOfMusic = "Rock", Songs = new List<string> { "In the End", "Faint" } }
            //);
            //
        }
    }
}
