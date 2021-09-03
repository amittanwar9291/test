using System;
using System.Linq;

namespace RadioReport.Common.Extensions
{
    public static class ReflectionExtensions
    {
        public static bool InheritsOrImplements(this Type child, Type parent, bool directClass = false)
        {
            if (child == null) throw new ArgumentNullException(nameof(child));
            if (parent == null) throw new ArgumentNullException(nameof(parent));

            if (child.IsAbstract)
            {
                return false;
            }

            switch (parent.IsInterface)
            {
                case true when directClass:
                    throw new Exception("Direct inheritance can not be checked with interfaces!");
                case true:
                    return child.GetInterfaces().Contains(parent);
            }

            if (directClass)
            {
                var current = child.IsGenericType ? child.GetGenericTypeDefinition() : child;
                var currentGeneric = current.BaseType.IsGenericType ? current.BaseType.GetGenericTypeDefinition() : current.BaseType;
                if (parent == currentGeneric)
                {
                    return true;
                }
            }
            else
            {
                while (child != null && child != typeof(object))
                {
                    var current = child.IsGenericType ? child.GetGenericTypeDefinition() : child;
                    if (parent == current)
                    {
                        return true;
                    }

                    child = child.BaseType;
                }
            }
            return false;
        }
    }
}
