using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Backend.Models
{
  public class Listing
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get;set; }

    [BsonElement("Status")]
    public string Status { get;set; }
    [BsonElement("Company")]
    public string Company { get;set; }
    [BsonElement("Title")]
    public string Title { get;set; }
    [BsonElement("Url")]
    public string Url { get;set; }
    [BsonElement("Notes")]
    public string Notes { get;set; }
  }
}