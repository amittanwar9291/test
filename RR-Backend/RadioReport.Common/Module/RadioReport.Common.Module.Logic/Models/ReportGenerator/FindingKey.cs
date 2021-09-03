using System;
using System.Diagnostics.CodeAnalysis;
using RadioReport.Common.Module.Logic.Consts;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator
{
    public class FindingKey : IEquatable<FindingKey>
    {
        public string FindingType { get; set; }

        public string FindingSuffix { get; set; }

        public byte PageNumber { get; set; }

        public string ParentSuffix
        { 
            get
            {
                var lastIndexOfSepartor = FindingSuffix.LastIndexOf(ReportConsts.FindingHyphen);
                return lastIndexOfSepartor > -1 ?  FindingSuffix.Substring(0, lastIndexOfSepartor) : string.Empty;
            }
        }

        public bool Equals([AllowNull] FindingKey findingKey)
        {
            if (findingKey != null)
            {
                return
                    findingKey.FindingSuffix == FindingSuffix &&
                    findingKey.FindingType == FindingType &&
                    findingKey.PageNumber == PageNumber;
            }
            return false;
        }

        public override bool Equals(object obj) => obj is FindingKey fk && Equals(fk);

        public override int GetHashCode() => base.GetHashCode();
    }
}
