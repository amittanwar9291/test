namespace RadioReport.Common.Consts
{
    public static class MinIO
    {
        public const string UniversalFolder = "universal";
        public const string DefaultInfoFileName = "info-pdf/shared/notification_info";
        public const string InstituteLogoName = "institute-logo";
        public const string DefaultHtmlRenderFileName = "default";
        public const string CVI42FileName = "cvi42-report.json";
        public const string HtmlTemplateHeaderFileName = "header.html";
        public const string HtmlTemplateBodyFileName = "body.html";
        public const string HtmlTemplateFooterFileName = "footer.html";
        public const string HtmlTemplateCssFileName = "style.css";
        public const string HtmlTemplateConfigFileName = "htmlconfig.json";

        public static class Buckets
        {
            public const string DicomMap = "dicom-map";
            public const string HtmlRenders = "html-renders";
            public const string StaticFiles = "static-files";
            public const string CVI42Data = "cvi42-data";
            public const string InstituteLogo = "institute-logo";
            public const string InstituteHtmlTemplates = "institute-html-templates";
            public const string InstituteDefaultHtmlTemplates = "institute-default-html-templates";
        }
    }
}
