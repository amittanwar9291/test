using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HandMRT.Domain.Models
{
    public class SoftTissueFindingPreset : SoftTissueFindingBase, IEquatable<SoftTissueFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SoftTissueFindingPreset);
        }

        public bool Equals([AllowNull] SoftTissueFindingPreset other)
        {
            if (other is null) return false;

            return other.DifferentialDiagnosis == this.DifferentialDiagnosis;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
