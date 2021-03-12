namespace Backend.Models
{
  public class ListingDatabaseSettings : IListingDatabaseSettings
  {
    public string ListingsCollectionName { get;set; }
    public string ConnectionString { get;set; }
    public string DatabaseName { get;set; }
  }

  public interface IListingDatabaseSettings
    {
        string ListingsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}