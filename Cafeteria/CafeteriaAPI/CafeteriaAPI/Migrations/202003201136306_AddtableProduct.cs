namespace CafeteriaAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddtableProduct : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ImageUrl = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        IsAvailable = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.OrderDetails", "ProductID", c => c.Int(nullable: false));
            CreateIndex("dbo.OrderDetails", "ProductID");
            AddForeignKey("dbo.OrderDetails", "ProductID", "dbo.Products", "ID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OrderDetails", "ProductID", "dbo.Products");
            DropIndex("dbo.OrderDetails", new[] { "ProductID" });
            DropColumn("dbo.OrderDetails", "ProductID");
            DropTable("dbo.Products");
        }
    }
}
