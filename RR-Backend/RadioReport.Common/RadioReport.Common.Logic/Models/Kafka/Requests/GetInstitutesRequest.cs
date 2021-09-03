using System;
using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetInstitutesRequest : KafkaRequestBase
    {
        public GetInstitutesRequest(string responseTopicPrefix) : base(responseTopicPrefix)
        {
        }

        public List<Guid> InstituteIds { get; } = new List<Guid>();
    }
}
