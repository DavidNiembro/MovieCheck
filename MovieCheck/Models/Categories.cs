using System;
using System.Collections.Generic;

namespace MovieCheck.Models
{
    public partial class Categories
    {
        public Categories()
        {
            Movies = new HashSet<Movies>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Movies> Movies { get; set; }
    }
}
