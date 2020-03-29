namespace CafeteriaAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPriceAndCategoriesToProduct : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Price", c => c.Double(nullable: false));
            AddColumn("dbo.Products", "Quantity", c => c.Int(nullable: false));
            
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Quantity");
            DropColumn("dbo.Products", "Price");
        }
    }
}
