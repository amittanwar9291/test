using System;

namespace RadioReport.Common.Module.Logic.Helpers
{
    /// <summary>
    /// Helper for page type names
    /// </summary>
    public static class PageTypeNameHelper
    {
        private const char _pageTypeNameSeparator = '_';

        /// <summary>
        /// Method splits given pageTypeName by separator and returns page name
        /// </summary>
        /// <param name="pageTypeName">Page type name</param>
        /// <returns>Page name</returns>
        public static string GetPageNameFromPageTypeName(string pageTypeName)
        {
            if (pageTypeName is null)
            {
                throw new ArgumentNullException(nameof(pageTypeName));
            }
            
            var pageTypeNameElements = pageTypeName.Split(_pageTypeNameSeparator);
            return pageTypeNameElements.Length == 2 ? pageTypeNameElements[1] : string.Empty;
        }
    }
}
