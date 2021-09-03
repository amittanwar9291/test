using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SpinalCanalFindingPreset : SpinalCanalFindingBase, IEquatable<SpinalCanalFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SpinalCanalFindingPreset);
        }

        public bool Equals([AllowNull] SpinalCanalFindingPreset other)
        {
            if (other is null) return false;

            return other.SpinalCanalDifferentialDiagnosisType == SpinalCanalDifferentialDiagnosisType
                && other.FindingType == FindingType && other.SpinalCanalLocation == SpinalCanalLocation;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
