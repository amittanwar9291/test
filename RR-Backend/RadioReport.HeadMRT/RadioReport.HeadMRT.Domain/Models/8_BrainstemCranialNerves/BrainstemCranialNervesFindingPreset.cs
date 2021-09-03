using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BrainstemCranialNervesFindingPreset : BrainstemCranialNervesFindingBase, IEquatable<BrainstemCranialNervesFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as BrainstemCranialNervesFindingPreset);
        }

        public bool Equals([AllowNull] BrainstemCranialNervesFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType && other.DifferentialDiagnosis == DifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
