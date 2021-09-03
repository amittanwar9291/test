using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class FemaleGenderFindingPreset : FemaleGenderFindingBase, IEquatable<FemaleGenderFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as FemaleGenderFindingPreset);
        }

        public bool Equals([AllowNull] FemaleGenderFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType 
                && other.DifferentialDiagnosis == DifferentialDiagnosis
                && other.DegenerationType1 == DegenerationType1;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
