using System;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.Logic.Services
{
    public class DefaultDicomValueParser : IDicomValueParser
    {
        private readonly ILogger<DefaultDicomValueParser> _logger;
        private const string DicomDateFormat = "yyyyMMdd";
        private readonly char[] _patientNameSeparators = { ' ', '^' };
        private static readonly Regex AgeStringRegex = new Regex("^([0-9][0-9][0-9])(D|W|M|Y)$", RegexOptions.Compiled);

        public DefaultDicomValueParser(ILogger<DefaultDicomValueParser> logger)
        {
            _logger = logger;
        }

        public object ParseStringifiedEnum(StringImportValue importValue, Type enumType)
        {
            if (importValue == null) throw new ArgumentNullException(nameof(importValue));

            var isParsed = Enum.TryParse(enumType, importValue.Value, out var result);
            if (isParsed)
            {
                return result;
            }

            _logger.LogWarning(LogMessageResources.Import_StringifiedEnumImportFailure, importValue.AsIndentedJson());

            return default;
        }

        public DateTime ParseDate(StringImportValue importValue)
        {
            if (importValue == null) throw new ArgumentNullException(nameof(importValue));

            var isParsedExact = DateTime.TryParseExact(importValue.Value, DicomDateFormat, null, DateTimeStyles.None, out var exactDate);
            if (isParsedExact)
            {
                return exactDate;
            }

            _logger.LogWarning(LogMessageResources.Import_DateImportFailure, importValue.AsIndentedJson());

            return default;
        }

        public bool ParseStringifiedBoolean(StringImportValue importValue)
        {
            if (importValue == null) throw new ArgumentNullException(nameof(importValue));

            return string.Equals(importValue.Value, "true", StringComparison.InvariantCultureIgnoreCase);
        }

        public int ParseInt(StringImportValue importValue)
        {
            if (importValue == null) throw new ArgumentNullException(nameof(importValue));

            var isParsed = int.TryParse(importValue.Value, out var result);
            if (isParsed)
            {
                return result;
            }

            _logger.LogWarning(LogMessageResources.Import_IntImportFailure, importValue.AsIndentedJson());

            return default;
        }

        // dicom age string in the format 'nnnX', nnn being the number, X being D=days, W=weeks, M=months, Y=years
        public byte ParseAgeString(StringImportValue importValue)
        {
            if (importValue == null) throw new ArgumentNullException(nameof(importValue));

            try
            {
                var trimmedUpperCase = importValue.Value.Trim().ToUpperInvariant();
                var match = AgeStringRegex.Match(trimmedUpperCase);
                if (!match.Success)
                {
                    throw new InvalidDicomFormatException();
                }

                var number = int.Parse(match.Groups[1].Value, CultureInfo.InvariantCulture);
                var unit = match.Groups[2].Value;
                var divisor = unit switch
                {
                    "D" => 365,
                    "W" => 52,
                    "M" => 12,
                    "Y" => 1,
                    _ => throw new ArgumentOutOfRangeException(nameof(importValue), unit, null)
                };
                var years = number / divisor;

                return (byte) years;
            }
            catch (Exception exception)
            {
                _logger.LogWarning(exception, LogMessageResources.Import_PatientAgeImportFailure, importValue.AsIndentedJson());

                return default;
            }
        }

        public (string FirstName, string LastName) ParseName(string fullName)
        {
            if (fullName.IsNullOrEmpty())
            {
                return (string.Empty, string.Empty);
            }

            var split = fullName.Split(_patientNameSeparators);
            var lastName = split[0].Trim();
            var firstName = split.Length > 1 ? string.Join(" ", split.Skip(1)).Trim() : string.Empty;

            return (firstName, lastName);
        }
    }
}
