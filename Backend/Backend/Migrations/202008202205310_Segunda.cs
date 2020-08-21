namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Segunda : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Canciones",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdCantante = c.Int(nullable: false),
                        Name = c.String(),
                        Cantante_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cantantes", t => t.Cantante_Id)
                .Index(t => t.Cantante_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Canciones", "Cantante_Id", "dbo.Cantantes");
            DropIndex("dbo.Canciones", new[] { "Cantante_Id" });
            DropTable("dbo.Canciones");
        }
    }
}
