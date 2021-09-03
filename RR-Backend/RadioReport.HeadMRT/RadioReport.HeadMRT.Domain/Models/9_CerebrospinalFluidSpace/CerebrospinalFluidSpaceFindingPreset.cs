using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CerebrospinalFluidSpaceFindingPreset : CerebrospinalFluidSpaceFindingBase, IEquatable<CerebrospinalFluidSpaceFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as CerebrospinalFluidSpaceFindingPreset);
        }

        public bool Equals([AllowNull] CerebrospinalFluidSpaceFindingPreset other)
        {
            if (other is null) return false;

            return other.MassDifferentialDiagnosisIKnow1Type == MassDifferentialDiagnosisIKnow1Type;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
