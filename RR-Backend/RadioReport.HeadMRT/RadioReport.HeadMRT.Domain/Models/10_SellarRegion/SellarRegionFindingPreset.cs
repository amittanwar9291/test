using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class SellarRegionFindingPreset : SellarRegionFindingBase, IEquatable<SellarRegionFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as SellarRegionFindingPreset);
        }

        public bool Equals([AllowNull] SellarRegionFindingPreset other)
        {
            if (other is null) return false;

            return other.SellarRegionDiagnosisLocalizationType == SellarRegionDiagnosisLocalizationType;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}