using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Import
{
    public class SeriesImportValue
    {
        private SeriesImportValue(string seriesInstanceUid, ImmutableList<StringImportValue> values)
        {
            SeriesInstanceUid = seriesInstanceUid;
            Values = values;
        }

        public string SeriesInstanceUid { get; }
        public ImmutableList<StringImportValue> Values { get; }

        public static Result<SeriesImportValue> Create(ImportValueDto dto)
        {
            if (!(dto?.Value is JArray) || dto.ImportValueIdentifier.IsNullOrEmpty())
            {
                return Result<SeriesImportValue>.Fail();
            }

            List<StringImportValue> importValues;
            try
            {
                var valueDtos = ((JArray) dto.Value).ToObject<List<ImportValueDto>>();
                importValues = valueDtos
                    .Select(StringImportValue.Create)
                    .Where(r => r.IsSuccess)
                    .Select(r => r.Value)
                    .ToList();
            }
            catch (Exception exception)
            {
                return Result<SeriesImportValue>.Exception(exception);
            }

            if (importValues.IsNullOrEmpty())
            {
                return Result<SeriesImportValue>.Fail();
            }

            var importValue = new SeriesImportValue(dto.ImportValueIdentifier, importValues.ToImmutableList());

            return Result<SeriesImportValue>.Success(importValue);
        }
    }
}
