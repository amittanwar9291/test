namespace RadioReport.Common.Consts
{
    public static class Role
    {
        public const string Superadministrator = nameof(Superadministrator);
        public const string Administrator = nameof(Administrator);
        public const string Supervisor = nameof(Supervisor);
        public const string Editor = nameof(Editor);
        public const string Viewer = nameof(Viewer);
        public const string Block = nameof(Block);

        public const string All = Superadministrator + "," +
                                  Administrator + "," +
                                  Supervisor + "," +
                                  Editor + "," +
                                  Viewer;

        public const string Admins = Superadministrator + "," +
                                     Administrator;

        public const string Users = Supervisor + "," +
                                    Editor + "," +
                                    Viewer;

        public const string AllButViewer = Superadministrator + "," +
                                           Administrator + "," +
                                           Supervisor + "," +
                                           Editor;
    }
}
