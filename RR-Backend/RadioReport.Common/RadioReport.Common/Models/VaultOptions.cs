namespace RadioReport.Common.Models
{
    public class VaultOptions
    {
        public const string SectionName = "Vault";

        public bool IsMocked { get; set; }
        public bool IsConfigMocked { get; set; }
        public bool IsVaultConfigOverride { get; set; }
        public string ServerAddress { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string HashSalt { get; set; }
    }
}
