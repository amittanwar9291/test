using RadioReport.Common.Module.Logic.Enums.ReportGenerator;
using System.Linq;
using System.Text;

namespace RadioReport.Common.Module.Logic.Helpers.ReportGenerator
{
    internal static class HtmlTagHelper
    {
        internal static string CreateHtmlTagWithContent(HtmlTag tag, string contents, params string[] attributes)
        {
            return CreateOpeningHtmlTag(tag, attributes) + contents + CreateClosingHtmlTag(tag);
        }

        public static string GetImageDivOpeningTag(string type, string pageAtt)
        {
            var styleAttr = CreateHtmlAttribute("style", "white-space: nowrap;");
            var attributesString = pageAtt + " " + styleAttr;

            return $"<{HtmlTag.div} {type} {attributesString}>";
        }

        public static string GetImageDivClosingTag(string type, string pageAtt = null)
            => pageAtt is null ? $"</{HtmlTag.div} {type}>" : $"</{HtmlTag.div} {type} {pageAtt}>";

        internal static string CreateSelfClosingHtmlTag(HtmlTag tag)
            => $"<{tag}/>";

        internal static string CreateOpeningHtmlTag(HtmlTag tag, params string[] attributes)
            => CreateOpeningHtmlTag(tag.ToString(), attributes);

        internal static string CreateOpeningHtmlTag(string tagText, params string[] attributes)
        {
            var builder = new StringBuilder();
            builder.Append($"<{tagText}");

            var attributesString = attributes != null ? string.Join(" ", attributes.Where(a => a != null)) : string.Empty;
            if (attributesString.Length > 0)
            {
                builder.Append(' ');
            }

            builder.Append($"{attributesString}>");
            return builder.ToString();
        }

        internal static string CreateClosingHtmlTag(HtmlTag tag)
            => CreateClosingHtmlTag(tag.ToString());

        internal static string CreateClosingHtmlTag(string tagText)
            => $"</{tagText}>";

        internal static string CreateCommentTag(string text)
            => $"<!-- {text} -->";

        internal static string CreateHtmlAttribute(string name, string value)
            => $"{name}=\"{value}\"";
    }
}
