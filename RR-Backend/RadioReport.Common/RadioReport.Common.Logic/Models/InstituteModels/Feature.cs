using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace RadioReport.Common.Logic.Models.InstituteModels
{
    public class Properties : ModelBase
    {
        public Guid FeatureId { get; set; }

        [JsonProperty("osm_id")]
        public int OsmId { get; set; }

        public IEnumerable<double> Extent { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Countrycode { get; set; }
        public string Postcode { get; set; }
        public string Type { get; set; }

        [JsonProperty("osm_type")]
        public string OsmType { get; set; }

        [JsonProperty("osm_key")]
        public string OsmKey { get; set; }

        public string Housenumber { get; set; }
        public string Street { get; set; }
        public string District { get; set; }

        [JsonProperty("osm_value")]
        public string OsmValue { get; set; }

        public string Name { get; set; }
        public string State { get; set; }
    }

    public class Geometry : ModelBase
    {
        public Guid FeatureId { get; set; }
        public IEnumerable<double> Coordinates { get; set; }
        public string Type { get; set; }
    }

    public class Feature : ModelBase
    {
        public Guid InstituteId { get; set; }
        public Geometry Geometry { get; set; }
        public string Type { get; set; }
        public Properties Properties { get; set; }
    }
}
