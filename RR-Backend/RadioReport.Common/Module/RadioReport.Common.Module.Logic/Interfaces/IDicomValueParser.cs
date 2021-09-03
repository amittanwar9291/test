using System;
using RadioReport.Common.Logic.Models.Import;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IDicomValueParser
    {
        object ParseStringifiedEnum(StringImportValue importValue, Type enumType);
        DateTime ParseDate(StringImportValue importValue);
        bool ParseStringifiedBoolean(StringImportValue importValue);
        int ParseInt(StringImportValue importValue);
        byte ParseAgeString(StringImportValue importValue);
        (string FirstName, string LastName) ParseName(string fullName);
    }
}
