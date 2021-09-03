using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class SpatialRequirementFindingPreset : SpatialRequirementFindingBase, IEquatable<SpatialRequirementFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SpatialRequirementFindingPreset);
        }

        public bool Equals([AllowNull] SpatialRequirementFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosis01 == DifferentialDiagnosis01;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
