using System;
using System.Collections.Generic;

namespace RadioReport.Core.InstituteManager.Domain.Models
{
    public class DicomMap
    {
        public Guid InstituteId { get; set; }
        public string Module { get; set; }
        public IEnumerable<DicomMapEntry> DicomMapEntries { get; set; } 
    }

    public class DicomMapEntry
    {
        public string DicomElementIdentifier { get; set; }
        public string RadioReportId { get; set; }
    }
}