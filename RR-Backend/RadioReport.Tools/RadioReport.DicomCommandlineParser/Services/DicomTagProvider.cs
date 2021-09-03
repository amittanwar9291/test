using System;
using System.Globalization;
using System.Linq;
using System.Reflection;
using Dicom;
using RadioReport.Common.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.DicomCommandlineParser.Services
{
    public class DicomTagProvider
    {
        private FieldInfo[] _knownDicomTagFields;

        public FieldInfo[] KnownDicomTagFields
        {
            get
            {
                if (_knownDicomTagFields.IsNullOrEmpty())
                {
                    _knownDicomTagFields = typeof(DicomTag).GetFields(BindingFlags.Public | BindingFlags.Static);
                }

                return _knownDicomTagFields;
            }
        }

        public Result<DicomTag> ProvideDicomTag(string keywordOrHexCode) =>
            IsHexCode(keywordOrHexCode)
                ? ParseDicomTagHexCode(keywordOrHexCode)
                : FindKnownDicomTag(keywordOrHexCode);

        public static bool IsHexCode(string keywordOrHexCode)
        {
            if (keywordOrHexCode == null) throw new ArgumentNullException(nameof(keywordOrHexCode));

            return keywordOrHexCode.Contains(':', StringComparison.OrdinalIgnoreCase);
        }

        public static Result<DicomTag> ParseDicomTagHexCode(string hexCode)
        {
            if (hexCode == null) throw new ArgumentNullException(nameof(hexCode));

            var split = hexCode.Split(':');
            try
            {
                var group = ushort.Parse(split[0].Trim(), NumberStyles.HexNumber, CultureInfo.InvariantCulture);
                var element = ushort.Parse(split[1].Trim(), NumberStyles.HexNumber, CultureInfo.InvariantCulture);

                return new DicomTag(group, element);
            }
            catch (Exception exception)
            {
                return exception;
            }
        }

        public Result<DicomTag> FindKnownDicomTag(string tagName)
        {
            try
            {
                var foundDicomTagField = KnownDicomTagFields.FirstOrDefault(f => f.Name.Equals(tagName, StringComparison.OrdinalIgnoreCase));

                return foundDicomTagField != null
                    ? (DicomTag) foundDicomTagField.GetValue(null)
                    : Result<DicomTag>.Fail();
            }
            catch (Exception exception)
            {
                return exception;
            }
        }
    }
}
