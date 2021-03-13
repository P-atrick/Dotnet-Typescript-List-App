using Backend.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Services
{
  public class ListingService
  {
    private readonly IMongoCollection<Listing> _listings;

    public ListingService(IListingDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);

      _listings = database.GetCollection<Listing>(settings.ListingsCollectionName);
    }

    public List<Listing> Get() =>
      _listings.Find(listing => true).ToList();

    public Listing Create(Listing listing)
    {
      _listings.InsertOne(listing);
      return listing;
    }
  }
}