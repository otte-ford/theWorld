using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheWorld.ViewModels
{
    public class ContactViewModel
    {
        [RequiredAttribute]
        public string Name {get; set;}
        [RequiredAttribute]
        [EmailAddressAttribute]
        public  string Email {get; set;}
        [RequiredAttribute]
        [StringLengthAttribute(4096, MinimumLength = 10)]
        public string Message {get;set;}
    }
}