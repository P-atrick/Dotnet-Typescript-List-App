using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ListingsController : ControllerBase
  {
    private readonly ListingService _listingService;

    public ListingsController(ListingService listingService)
    {
      _listingService = listingService;
    }

    [HttpGet]
    public ActionResult<List<Listing>> Get() =>
      _listingService.Get();

    [HttpGet("{id:length(24)}", Name = "GetListing")]
      public ActionResult<Listing> Get(string id)
      {
        var listing = _listingService.Get(id);
        if (listing == null)
        {
          return NotFound();
        }
        return listing;
      }

    [HttpPost]
    public ActionResult<Listing> Create(Listing listing)
    {
      _listingService.Create(listing);
      return CreatedAtRoute("GetListing", new { id = listing.Id.ToString() }, listing);
    }
  }
}