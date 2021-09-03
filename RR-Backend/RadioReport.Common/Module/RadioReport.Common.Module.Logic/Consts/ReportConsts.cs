namespace RadioReport.Common.Module.Logic.Consts
{
    public static class ReportConsts
    {
        #region RrIds

        public const string RadioReportIdPattern = @"((uni_\d{2}_\d{3}(_\d{2})?)|(fra_\d{6}(-\d{1,2})?)|([a-z]{3}_[a-z]{1,2}_\d{6,7}([-,_]\d)?))|Patient_[a-zA-Z]{1,}";
        public static string RadioReportIdInTextPattern => @$"<?(({LocalizerInTextPattern})|({RadioReportIdPattern}))>?";

        #endregion RrIds

        #region Localizers

        public const string LocalizerIdPattern = @"[a-z]{3}_[a-z]{1,2}_L.{3}";
        public static string LocalizerInTextPattern => @$"(({RadioReportIdPattern}):({LocalizerIdPattern}))|({LocalizerIdPattern})";
        public static string SubstitutedLocalizerPattern => @$"\[(({LocalizerInTextPattern})\|\w+(,\w+)*)(;(({LocalizerInTextPattern})\|\w+(,\w+)*))*\]";

        public const string BackgroundReplaceRegex = "['\"]assets/(.+?(?=['\"]))['\"]";
        public static string BackgroundRegex => $"xlink:href={BackgroundReplaceRegex}";

        public const string SvgWidthAttribute = "width";
        public const string SvgHeightAttribute = "height";
        public const string PngWidthAttribute = "pngwidth";
        public const string PngHeightAttribute = "pngheight";

        public const string LocalizerValuePlaceholder = "%value%";
        public const string LocalizerTranslationPattern = "%%%(.*?)%%%";
        public const string LocalizerTranslationKeyPrefix = "LocalizerTranslation";

        public const int LocalizerCodeParts = 2; // localizers code consists of 2 parts separated by ':' example: han_m_040207:han_m_L001

        #endregion Localizers

        #region ReferenceImage

        public const string ImageSymbol = @"\i";
        public const string ImageEndSymbol = @"\#i";
        public static string ReferenceImagePattern => @$"\{ImageSymbol}(({RadioReportIdPattern})({RadioReportFindingPattern}){{0,2}})\{ImageEndSymbol}";

        #endregion ReferenceImage

        #region Findings

        public const string RadioReportFindingPattern = @"-[F,D]\d{1,2}";
        public const char FindingHyphen = '-';
        public const string CorrelationFinding = "Correlation";

        #endregion Findings

        #region Formatting

        public const string NewLineSymbol = @"\n";
        public const string BoldSymbol = @"\b";
        public const string BoldEndSymbol = @"\#b";
        public const string CommentSymbol = @"\\\";
        public const string AlwaysShowSeparatorSymbol = @"\a";
        public const string SummaryTitleSymbol = @"###summary###";
        public const string SummaryTitleEndSymbol = @"###\summary###";
        public const string FontSmallSymbol = @"\fs";
        public const string FontSmallEndSymbol = @"\#fs";
        public const string FontSmallPattern = @"(\\fs(.*?)\\#fs)[ ]?";
        public const string FontItalicSymbol = @"\fi";
        public const string FontItalicEndSymbol = @"\#fi";
        public const string FontItalicPattern = @"\\fi(.*?)\\#fi[ ]?";
        public const string FontUnderlineSymbol = @"\fu";
        public const string FontUnderlineEndSymbol = @"\#fu";
        public const string FontUnderlinePattern = @"\\fu(.*?)\\#fu";

        #endregion Formatting

        #region Metadata

        public const string ShowInSummaryKey = "showinsummary";
        public const string OnlyInSummaryKey = "onlyinsummary";
        public const string ShowInEmptySummaryKey = "showinemptysummary";
        public const string ShowInNotEmptySummaryKey = "showinnotemptysummary";
        public const string ICD10Key = "icd10";
        public const string ShowInICDKey = "showinicd";
        public const string SummaryEditTitleKey = "summary_edit_title";
        public const string PriorityKey = "priority";
        public const string ExportTagKey = "export-tag";
        public const string ReportRatingKey = "report-rating";

        public const string TrueValue = "true";
        public const string FalseValue = "false";
        
        public const int DefaultPriority = 3;

        public const string SentenceTypeKey = "sentence-type";
        public const string SentenceTypeTitleValue = "title";

        public const string FontKey = "font";
        public const string FontSmallValue = "small";
        public const string FontItalicValue = "italic";
        public const string FontUnderlineValue = "underline";

        #endregion Metadata

        #region Report

        public const string SummaryTag = "<summary>";
        public const string SummarySentenceName = "Summary";
        public const string ICD10Tag = "<icd10>";
        public const string ICD10SentenceName = "ICD-10";

        #endregion Report

        # region ReportText

        public const string PatientFirstNameTag = "<Patient_FirstName>";
        public const string PatientLastNameTag = "<Patient_LastName>";
        public const string PatientDateOfBirthTag = "<Patient_DateOfBirth>";
        public const string PatientDateOfExaminationTag = "<Patient_DateOfExamination>";

        #endregion

        #region BooleanExpression

        public const char ExpressionSep = '|';
        public const char OperandSep = ';';
        public const char ConditionCommentSep = '#';
        public const string AndOperator = "AND";
        public const string OrOperator = "OR";
        public const string SemicolonPlaceholder = "\\semicolonsep";
        public const string HashPlaceholder = "\\hashsep";
        public const string PipePlaceholder = "\\pipesep";

        #endregion
    }
}
