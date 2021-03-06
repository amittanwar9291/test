//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RadioReport.Common.Logic.Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class LogMessageResources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal LogMessageResources() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("RadioReport.Common.Resources.LogMessageResources", typeof(LogMessageResources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Failed to parse byte enum dicom data.
        /// </summary>
        public static string Import_ByteEnumImportFailure {
            get {
                return ResourceManager.GetString("Import_ByteEnumImportFailure", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Failed to parse date dicom data.
        /// </summary>
        public static string Import_DateImportFailure {
            get {
                return ResourceManager.GetString("Import_DateImportFailure", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Duplicate series instances for import - {SeriesInstanceUIDs}.
        /// </summary>
        public static string Import_DuplicateSeriesInstances {
            get {
                return ResourceManager.GetString("Import_DuplicateSeriesInstances", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Imported series values: {SeriesInstanceUIDs}.
        /// </summary>
        public static string Import_ImportedSeriesValues {
            get {
                return ResourceManager.GetString("Import_ImportedSeriesValues", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Failed to parse int dicom data.
        /// </summary>
        public static string Import_IntImportFailure {
            get {
                return ResourceManager.GetString("Import_IntImportFailure", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to No import of patient information data - no matching page found.
        /// </summary>
        public static string Import_NoPatientInformationImport {
            get {
                return ResourceManager.GetString("Import_NoPatientInformationImport", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to No import of technology sequence data - no matching page found.
        /// </summary>
        public static string Import_NoTechnologySequenceImport {
            get {
                return ResourceManager.GetString("Import_NoTechnologySequenceImport", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Failed to parse patient age dicom data.
        /// </summary>
        public static string Import_PatientAgeImportFailure {
            get {
                return ResourceManager.GetString("Import_PatientAgeImportFailure", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Report {ReportId} successfully imported by user {UserId}.
        /// </summary>
        public static string Import_ReportImported {
            get {
                return ResourceManager.GetString("Import_ReportImported", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Failed to parse stringified enum dicom data.
        /// </summary>
        public static string Import_StringifiedEnumImportFailure {
            get {
                return ResourceManager.GetString("Import_StringifiedEnumImportFailure", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Hyperintense.
        /// </summary>
        public static string SignalType_Hyperintense {
            get {
                return ResourceManager.GetString("SignalType_Hyperintense", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Hypointense.
        /// </summary>
        public static string SignalType_Hypointense {
            get {
                return ResourceManager.GetString("SignalType_Hypointense", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Isointense.
        /// </summary>
        public static string SignalType_Isointense {
            get {
                return ResourceManager.GetString("SignalType_Isointense", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Slightly hyperintense.
        /// </summary>
        public static string SignalType_SlightlyHyperintense {
            get {
                return ResourceManager.GetString("SignalType_SlightlyHyperintense", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Slightly hypointense.
        /// </summary>
        public static string SignalType_SlightlyHypointense {
            get {
                return ResourceManager.GetString("SignalType_SlightlyHypointense", resourceCulture);
            }
        }
    }
}
