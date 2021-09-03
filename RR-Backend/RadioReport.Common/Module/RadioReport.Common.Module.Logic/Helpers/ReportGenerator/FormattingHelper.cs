using System;
using RadioReport.Common.Module.Logic.Enums.ReportGenerator;
using System.Text;
using RadioReport.Common.Module.Logic.Consts;
using System.Globalization;

namespace RadioReport.Common.Module.Logic.Helpers.ReportGenerator
{
    internal static class FormattingHelper
    {
        public static string GeneratePngImageTag(string content) => $"{PngImageTagOpening()}{content}{ImageTagClosing}";
        private static string PngImageTagOpening(string attributes = null) => $"<{HtmlTag.img} {attributes} src=\"data:image/png;base64, ";
        private static string ImageTagClosing => "\"/>";

        internal static string ReplaceNewLineSymbolsWithTags(this string text)
            => text.Replace(ReportConsts.NewLineSymbol, HtmlTagHelper.CreateSelfClosingHtmlTag(HtmlTag.br), StringComparison.Ordinal);

        internal static string AddTemporaryBoldSymbols(this string text)
        {          
            // surround whole text with bold start and end symbols and remove the symbol inside text
            return text.Contains(ReportConsts.BoldSymbol, StringComparison.Ordinal)
                ? $"{ReportConsts.BoldSymbol}{text.Replace(ReportConsts.BoldSymbol, string.Empty, StringComparison.Ordinal)}{ReportConsts.BoldEndSymbol}"
                : text;
        }
        internal static string AddTemporaryFontSymbols(this string text, string beginningSymbol, string endSymbol)
        {
            return $"{beginningSymbol}{text}{endSymbol}";
        }

        internal static string AddMissingBoldSymbols(this string text)
        {
            // if end symbol is missing at it at the end
            if (text.LastIndexOf(ReportConsts.BoldSymbol, StringComparison.CurrentCulture) > text.LastIndexOf(ReportConsts.BoldEndSymbol, StringComparison.CurrentCulture))
            {
                text += ReportConsts.BoldEndSymbol;
            }
            // if begin symbol is missing at it at the beginning
            if ((!text.Contains(ReportConsts.BoldSymbol, StringComparison.Ordinal) && text.Contains(ReportConsts.BoldEndSymbol, StringComparison.Ordinal))
                || text.IndexOf(ReportConsts.BoldEndSymbol, StringComparison.CurrentCulture) < text.IndexOf(ReportConsts.BoldSymbol, StringComparison.CurrentCulture))
            {
                text = text.Insert(0, ReportConsts.BoldSymbol);
            }
            return text;
        }

        internal static string ReplaceBoldSymbolsWithTags(this string text, string pageAtt)
        {
            var builder = new StringBuilder(text);

            builder.Replace($"{ReportConsts.BoldSymbol}{ReportConsts.BoldEndSymbol}", string.Empty);
            builder.Replace(ReportConsts.BoldSymbol, HtmlTagHelper.CreateOpeningHtmlTag(HtmlTag.strong, pageAtt));
            builder.Replace(ReportConsts.BoldEndSymbol, HtmlTagHelper.CreateClosingHtmlTag(HtmlTag.strong));
            return builder.ToString();
        }

        internal static string RemoveAllFormatting(this string text)
        {
            StringBuilder builder = new StringBuilder(text);
            builder.Replace(ReportConsts.BoldSymbol, string.Empty);
            builder.Replace(ReportConsts.BoldEndSymbol, string.Empty);
            builder.Replace(ReportConsts.NewLineSymbol, string.Empty);
            return builder.ToString();
        }

        internal static string ReplaceRefImageSymbolWithTags(this string text)
        {
            if (text.Contains(ReportConsts.ImageSymbol, StringComparison.Ordinal))
            {
                var sb = new StringBuilder(text);
                sb.Replace(ReportConsts.ImageSymbol, PngImageTagOpening("height=200"));
                sb.Replace(ReportConsts.ImageEndSymbol, ImageTagClosing);
                return sb.ToString();
            }
            return text;
        }
        internal static string RemoveFontSymbols (this string text)
        {
            var builder = new StringBuilder(text);
            if (text.Contains(ReportConsts.FontSmallSymbol, StringComparison.Ordinal))
            {
                builder.Replace(ReportConsts.FontSmallSymbol, String.Empty);
                builder.Replace(ReportConsts.FontSmallEndSymbol, String.Empty);                     
            }
            else if (text.Contains(ReportConsts.FontItalicSymbol, StringComparison.Ordinal))
            {
                builder.Replace(ReportConsts.FontItalicSymbol, String.Empty);
                builder.Replace(ReportConsts.FontItalicEndSymbol, String.Empty);
            }
            else if(text.Contains(ReportConsts.FontUnderlineSymbol, StringComparison.Ordinal))
            {
                builder.Replace(ReportConsts.FontUnderlineSymbol, String.Empty);
                builder.Replace(ReportConsts.FontUnderlineEndSymbol, String.Empty);
            }
            return builder.ToString();
        }
    }
}
