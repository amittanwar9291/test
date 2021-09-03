using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.SpineCT.Domain.Models
{
    public class SoftTissuesFindingPreset : SoftTissuesFindingBase, IEquatable<SoftTissuesFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SoftTissuesFindingPreset);
        }

        public bool Equals([AllowNull] SoftTissuesFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosis == DifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
