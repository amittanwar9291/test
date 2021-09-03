using System.Collections.Generic;

namespace RadioReport.Common.Logic.Models.Import
{
    public class DicomMap
    {
        public DicomMap()
        {
            Patient = new List<DicomMapEntry>();
            Study = new List<DicomMapEntry>();
            Series = new List<DicomMapEntry>();
        }

        public string Module { get; set; }
        public IEnumerable<DicomMapEntry> Patient { get; set; }
        public IEnumerable<DicomMapEntry> Study { get; set; }
        public IEnumerable<DicomMapEntry> Series { get; set; }
    }
}
