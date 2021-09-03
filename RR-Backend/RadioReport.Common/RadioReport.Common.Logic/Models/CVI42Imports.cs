using System;

namespace RadioReport.Common.Logic.Models
{
    public class CVI42Imports : ModelBase
    {
        public CVI42Imports(Guid instituteId, string studyInstanceUid)
        {
            InstituteId = instituteId;
            StudyInstanceUid = studyInstanceUid;
        }

        public Guid InstituteId { get; set; }
        public string StudyInstanceUid { get; set; }
    }
}