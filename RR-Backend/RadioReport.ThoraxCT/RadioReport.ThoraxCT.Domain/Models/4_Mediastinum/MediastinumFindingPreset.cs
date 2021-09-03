using System;
using System.Diagnostics.CodeAnalysis;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class MediastinumFindingPreset : MediastinumFindingBase, IEquatable<MediastinumFindingPreset>
    {
        public override bool Equals(object obj)
        {
            return Equals(obj as MediastinumFindingPreset);
        }

        public bool Equals([AllowNull] MediastinumFindingPreset other)
        {
            if (other is null) return false;

            return other.MainCharacteristicsDifferentialDiagnosis01 == MainCharacteristicsDifferentialDiagnosis01;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}