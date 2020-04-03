namespace CafeteriaAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addAmountToEasyAccessTheOrder : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "Amount", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Orders", "Amount");
        }
    }
}
