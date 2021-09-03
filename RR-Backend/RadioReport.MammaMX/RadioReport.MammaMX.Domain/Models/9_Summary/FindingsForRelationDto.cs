using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    public class FindingsForRelationDto
    {
        public IEnumerable<FindingBaseDto> MammographyFindings { get; set; }
        public IEnumerable<FindingBaseDto> UltrasoundFindings { get; set; }
    }
}
