using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CortexFindingPreset : CortexFindingBase, IEquatable<CortexFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as CortexFindingPreset);
        }

        public bool Equals([AllowNull] CortexFindingPreset other)
        {
            if (other is null) return false;

            return other.FindingType == FindingType 
                && other.DifferentialDiagnosisType == DifferentialDiagnosisType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
