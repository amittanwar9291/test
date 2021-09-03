using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class FacialSkullFindingPreset : FacialSkullFindingBase, IEquatable<FacialSkullFindingPreset>
    {
        public string DifferentialDiagnosis { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as FacialSkullFindingPreset);
        }

        public bool Equals([AllowNull] FacialSkullFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType
                && other.DifferentialDiagnosis == DifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
