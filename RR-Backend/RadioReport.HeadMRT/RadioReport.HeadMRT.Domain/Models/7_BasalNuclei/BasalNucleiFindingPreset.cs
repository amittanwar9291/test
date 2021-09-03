using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BasalNucleiFindingPreset : BasalNucleiFindingBase, IEquatable<BasalNucleiFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as BasalNucleiFindingPreset);
        }

        public bool Equals([AllowNull] BasalNucleiFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosisLocalizationType == DifferentialDiagnosisLocalizationType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
