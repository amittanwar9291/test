using System;
using System.ComponentModel.DataAnnotations;

namespace RadioReport.Common.Logic.Enums
{
    [Flags]
    public enum HtmlTemplateTypes : byte
    {
        Header = 1 << 0,
        Body = 1 << 1,
        Footer = 1 << 2,
        Css = 1 << 3,
        Config = 1 << 4
    }
}